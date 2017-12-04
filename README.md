
SGH VTO Integration
===============================


## Setup By Country 


### Country Code
For each country you'll have to change *locale* parameter under VTOApp.inti method.
```javascript
 VtoApp.init(
    currentUserId,
    glassesUpc,
    'sunglasshut', 
    'en-US', 
```
**locale** parameter is used to set the locale for the user. (en-US)
 * locale codes: https://support.crowdin.com/api/language-codes/

### Analytics
Each county will need to setup their own analytics tracking using the VTO call back.
You'll want to update the **analyticsTrack** method to include your omniture tagging. The code inside will only work on US. 

You'll also need to update the *genericErrorHandler* method include your tracking code

```javascript
analyticsTrack: function(linkName) {
            var obj = this
            var videoId = obj.settings.currentVideo
            var noVTOModel = obj.settings.noVTOModel;
            var gender = obj.settings.userGender;
            var fit = obj.settings.userSize;
            var user = 'new'
            if(videoId && noVTOModel !== true){
                user = 'returning'
                //console.log('returning')
            } 
            if (gender !== '' && gender !== 'undefined'){
                    gender = gender+': '
                }else{
                    gender = ''
                }
            if (fit !== '' && fit !== 'undefined'){
                fit = fit+': '
            }else{
                fit = ''
            }
            
			//ENTER TRACKING CODE HERE
           console.log('track: sgh: vto: '+user+': ' + gender + fit + linkName);
        },
 ```

### Desktop Restrictions
**Compatible Browser** - Currently desktop only works on the follow browsers for both mac and windows. All other browsers should be excluded.
 * Firefox
 * Chrome

**HTTPS for Webcame capture** - To capture video from the webcam the request needs to come from https. The current code is setup to look to see if the protocol is https and if not it will switch it.



#VTO Javascript Integration API 2.0
===============================

APIs used to integrate the VTO react application into WCS for both mobile and desktop.

## Assertions:
1. Every api call has two callback functions in order to control the flow of the application.
2. Every onError callback has an error parameter. Error parameter is an object with two properties: code and message.

## APIs

### How to access the VTO API 2.0?
 * Mobile Production: Download https://d1phjbsp802ne8.cloudfront.net/vto-mobile-application.js
 * Desktop Production: Download https://d1phjbsp802ne8.cloudfront.net/vto-desktop-application.js

### init
This method creates a user or validates that a user exists.

```javascript
VtoApp.init(
userId,
upc,
brandId,
locale,
branch,
analyticsConfig,
onSuccess(userId, supportedFeatures), // See notes below
onError(error)
)
```

### Notes:

**userId** parameter is optional and it is undefined when VTO user is not logged in or doesn't have a userId session variable set.

**upc** parameter is the universal product code for the glasses on a particular pdp page.

**brandId** parameter is the identifier for the client brand that is using VTO.

**locale** parameter is used to set the locale for the user. (en-US)

 * locale codes: https://support.crowdin.com/api/language-codes/

**branch** is a unique identifier specifying an alternate crowdin translation to be used throughout VTO. This can be used to specify alternate translations for purposes of A/B testing or if the brand wants to manage their own translations. If this is undefined or the translation resource cannot be found, the VTO component will use the default translation for the specified locale.

**analyticsConfig** is an object of callbacks relating to vto events for purposes of analytics

**supportedFeatures** is an object with these options: * Not Implemented yet

 * rendering : Does the client support rendering (e.g. if the browser doesn't support WebGL, the value would be false)?
 * webcamCapture : Does the client support webcam capture?

 ```javascript
supportedFeatures: {
rendering: true|false,
webcamCapture: true|false
}
```


### Errors:

* **Error: VtoError Code: 1**, message: Failed to fetch If for some reason Vto failed to initialize and load. In VTO express, the "Toggle VTO" button will not show up with this error.

* **Error: InvalidUserIdError Code: 2**, message: Not Found If an invalid UserId is passed to VTO then we return Code 2.


--------------




## Start Capture

This API call initiates the video capture flow:

```javascript
VtoApp.startCapture(
divId,
userId,
upc,
size: {
width: <pixels>,
height: <pixels>
},
options: {
captureMode: fileCapture | webcamCapture,
abTests,
onCloseVto: function(),
onPrivacyPolicy: function(),
showWelcomePage: true | false, (defaults to true, MOBILE Only)
showScalingQuestions: true | false, (defaults to false)
showReviewWithGlasses: true | false, (defaults to true)
showSaveToAccount: true | false, (defaults to true, MOBILE Only)
},
onSaveToAccount(videoId, {gender, fit}),
onContinueWithoutSaving(videoId, {gender, fit}),
onError(error)
)
```

### Notes:

**divId** parameter is the html div where the startCapture flow will be rendered

**userId** parameter is optional and it is undefined when VTO user is not logged in or doesn't have a userId session variable set.

**upc** parameter is the universal product code for the glasses on a particular pdp page.

**size**

 * **width, height**: The desired dimensions of the rendered output 

**options**
 
 * **captureMode**  *Not Implemented yet*

  * **fileCapture** should be used for captureMode if a file should be uploaded or if the device can capture video but guided capture is not supported (e.g. on an iPad)
  
  * **webcamCapture** should be used for captureMode for guided capture.

  * **abTests** object option is intended to be used for A/B tests not related to text text strings (e.g. the VTOcomponent flow, visual styling, etc.) * *Not Implemented yet*

  * **onCloseVto** : callback for when the back button is pressed during capture

  * **onPrivacyPolicy** : callback for when the privacy policy link is clicked. If this is not passed in, the privacy
policy text/link will not be shown

  * **showWelcomePage** : option for hiding welcome page on vto mobile

  * **showScalingQuestions** : option for hiding scaling questions

  * **showReviewWithGlasses** : option for hiding review with glasses/preview page

  * **onSaveToAccount** : option for hiding save to account page on vto mobile

**onSaveToAccount** The success callback invoked if the user clicks "Save to Account". This function should accept
the parameter videoId. 

**onContinueWithoutSaving** The success callback invoked if the user clicks "Continue Without Saving". This function
should accept the parameter videoId.


### Errors:

 * **Error: UnexpectedError Code: 3** This is for errors out of our control such as AWS is down. Errors such as VTO processing errors are handled within our VTO component.


 --------------



## renderGlasses

This API is invoked to tell the VTO component to render a canvas with fifteen frames with glasses on a user's face for a given video and UPC.

See. https://projects.invisionapp.com/share/M981FGQUY#/screens/176408041

```javascript
VtoApp.renderGlasses(
divId,
videoId,
upc,
size: {
width: <pixels>,
height: <pixels>
},
onSuccess(),
onError(error),
options: {
showRotateBar: true | false (defaults to false)
},
)
```

### Notes:

**divId** html div where the renderedCapture image will be shown

**videoId** parameter is the id for a particular user's uploaded video

**upc** parameter is the universal product code for the glasses on a particular pdp page.

**size**

 * width, height: The desired dimensions of the rendered output * *Not Implemented yet*

 **options**
 
 * **showRotateBar:**  Option to show the rotate bar on top of the rendering canvas

### Errors:
 * **Error: UnexpectedError Code: 3** This is for errors out of our control such as AWS is down. Errors such as VTO processing errors are handled within our VTO component.
 * **Error: SkuNotFoundError Code: 4**, Message: This resource is not available. If an invalid UPC was passed into rendered glasses we will show error above.
 * **Error: VideoNotFoundError Code: 5**, Message: This resource is not available.



--------------



## deleteUser

This API will "hard" delete all files and database records for a VTO User.

```javascript
VtoApp.deleteUser(
userId,
onSuccess(),
onError(error)
)
```

**Errors:**
 * **Error: InvalidUserIdError Code: 2**, message: Not Found. If an invalid UserId is passed to VTO then we return Code 2.
 * **Error: UnexpectedError Code: 3**. This is for errors out of our control



--------------


## getImage

This API retrieves images and assets from VTO.

```javascript
VtoApp.getImage(
videoId,
upc,
{
index: 0 to 14 or 'current',
fetchAllAssets: true | false,
storeOnCloud: true | false,
canvas: canvas,
size: {
width: <pixels>,
height: <pixels>
},
}
onSuccess(url),
onError(error)
)
```

**Index**: which of the 15 perspectives do you want rendered. pass 'current' to use the perspective currently visible to the user.

**fetchAllAssets**: used to inform the module of your intent with a given UPC. If you only need to render one index for this UPC pass false and the image will be created faster by only downloading a subset of the 3D assets. If you intend to allow the user to rotate their head wearing this UPC pass true so that the method does not complete until all of the 3D assets are downloaded and ready for rotation. * Not Implemented yet 

**storeOnCloud**: pass true if you want this output to be uploaded to the cloud for viewing at a later time via the returned url. If you pass false url in onSuccess will be null. (default is false)

**canvas**: pass in the canvas object that you would like to receive the render.


### Errors:

 * **Error: UnexpectedError Code: 3** This is for errors out of our control such as AWS is down. Errors such as VTO processing errors are handled within our VTO component.
 * **Error: SkuNotFoundError Code: 4**, Message: This resource is not available. If an invalid UPC was passed into rendered glasses we will show error above.
 * **Error: VideoNotFoundError Code: 5**, Message: This resource is not available
 * **Error: VideoNotLoadedError Code: 6**, Message: This resource is not loaded If the passed in videoId does not match the videoId last used for renderGlasses() * *This Check is Not Implemented yet*



 --------------



## isUpcSupported

Used to determine if a given UPC is supported by VTO:

```javascript
VtoApp.isUpcSupported(
UPC,
onSuccess(isSupported),
onError(error)
)
```

**- isSupported** will be either true or false.


### Errors:
 * **Error: UnexpectedError Code: 3** This is for errors out of our control such as AWS is down. Errors such as VTO processing errors are handled within our VTO component.


## VTO Mobile Analytics Config:

```javascript
var analyticsConfig = {
welcome: {
onPageLoad: function() {}
startCaptureElementClass: '',
onStartCapture: function() {}
},
instructions: {
onPageLoad: function() {}
onOpenCamera: function() {}
takeVideoElementClass: ''
},
uploadingVideo: {
onPageLoad: function() {}
},
genderSelect: {
onPageLoad: function() {}
genderMensElementClass: '',
genderWomensElementClass: '',
genderNextElementContentBox: ''
},
sizeSelect: {
onPageLoad: function() {}
sizeSmallElementClass: '',
sizeAverageElementClass: '',
sizeLargeElementClass: '',
sizeNextElementContentBox: ''
},
analyzingVideo: {
onPageLoad: function() {}
},
reviewWithoutGlasses: {
onPageLoad: function() {}
retakeElementClass: '',
continueElementClass: '',
onFaceSwipe: function() {}
onRetake: function() {}
onContinue: function() {}
},
mappingGlasses: {
onPageLoad: function() {}
},
reviewWithGlasses: {
onPageLoad: function() {}
retakeElementClass: '',
continueElementClass: '',
onFaceSwipe: function() {}
onRetake: function() {}
onContinue: function() {}
},
saveToAccount: {
onPageLoad: function() {}
saveElementClass: '',
onSave: function() {}
continueElementClass: '',
onContinueNoSave: function() {}
},
uploadFailed: {
onPageLoad: function() {}
uploadRetryClass: '',
},
videoTooLong: {
onPageLoad: function() {}
uploadRetryClass: '',
},
processingError: {
onPageLoad: function() {}
uploadRetryClass: '',
}
}

```


## VTO Desktop Analytics Config:

```javascript
var analyticsConfig = {
demo: {
onPageLoad: function() {},
onFaceSwipe: function() {},
onCreateModel: function() {},
createModelClass: ''
},
capture: {
onPageLoad: function() {},
onValidHeadtrack: function() {},
onWebcamAllowed: function() {}
},
browsererror: {
onPageLoad: function() {}
},
deviceerror: {
onPageLoad: function() {}
},
permissionerror: {
onPageLoad: function() {}
},
processingerror: {
onPageLoad: function() {},
onRetry: function() {},
processingErrorRetryClass: ''
},
uploaderror: {
onPageLoad: function() {},
onRetry: function() {},
uploadErrorRetryClass: ''
},
upload: {
onPageLoad: function() {}
},
processing: {
onPageLoad: function() {}
},
preview: {
onPageLoad: function() {},
onFaceSwipe: function() {},
previewRetakeClass: '',
onRetake: function() {},
previewSaveClass: '',
onSave: function() {},
previewContinueClass: '',
onContinue: function() {}
},
render: {
onPageLoad: function() {},
onFaceSwipe: function() {},
onRenderGlasses: function() {}
},
comingsoon: {
onPageLoad: function() {}
},
rendererror: {
onPageLoad: function() {}
}
}
```