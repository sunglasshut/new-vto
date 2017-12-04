(function() {
    "use strict";
    var e = {
    	/* Your Global Var
    	   To call - this.settings.yourVariableHere
    	*/

         /*  
            "alessandra"    - Make alessandra default 
            "zak"           - Make Zak default 
        */
        modelVideoId: "alessandra",
        /* 
            true   - Show on model on page 
            false  - hide on model on page
        */
        showOnModel: false,
        /*     
                'en-AU'     - English, Australia
                'en-CA'     - English, Canada
                'en-GB'     - English, United Kingdom
                'en-US'     - English, United States
                'fr'        - French
                'de'        - German
                'es-ES'     - Spanish

                More locale codes: https://support.crowdin.com/api/language-codes/
        */
        countryCode: 'en-US',

        //DO NOT update below values
        currentVideo: "",
        currentUserId: "",
        upcGender: "female",
        vtoData: {},
        userGender: "",
        userSize: "",
        noVTOModel: true,
        clickedModel: false,
        upcSupported: false,
        glassesUpc: $('#upc').text()
    };
    var i = {
        settings: e,
        vtoElements: function() {
            var obj = this;
            $('<a class="button black sgh-vto-overlay-open vto-hide" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><defs><path id="a" d="M1.1 9.1c0-.1 0-.1 0 0 .4.8.7 1.7.9 1.9V9.8h.4v.1l.2.8c.1.3.2.6.4.8.2.2.6.3.9.3h1.3c.2 0 .5-.1.7-.2.3-.1.5-.3.6-.6.1-.1.1-.3.1-.4.1-.4.2-.7.2-.9h1c0 .2.1.5.2.9 0 .1.1.3.1.4.1.3.3.5.6.6.2.1.5.2.7.2h1.3c.3 0 .6-.1.9-.3.2-.2.4-.5.5-.7l.2-.8v-.1h.3l.1.8c.3-.5.5-1.1.7-1.7.1 0 .1.1.2.1.3.1.4.3.4.5v.2c0 .6-.1 1.1-.4 1.6-.1.2-.2.4-.4.6-.1.1-.2.2-.4.3l-.2.1-.1.2c-.3 1.4-.9 2.6-1.9 3.7-.9.9-2 1.4-3.3 1.4s-2.3-.4-3.2-1.3c-.9-1.1-1.6-2.3-1.9-3.7l-.1-.2-.1-.1c-.2-.1-.3-.2-.4-.3-.2-.3-.4-.7-.5-1-.1-.4-.2-.8-.2-1.2v-.2c0-.3 0-.5.2-.6zm2.7-4.2s.9-1.6 2.3-.5 3 3.1 6.4 3.1l.2 1.7h-.3s0-.5-.9-.6H8.8c-.4 0-.7.2-.8.5H6.8c-.1-.3-.4-.5-.7-.5H3.3c-.9.1-.9.6-.9.6h-.3c.1-1.8.5-4.3 1.7-4.3zM.9 12.7c.2.2.3.3.6.4.3 1.4 1 2.8 2 3.9s2.4 1.7 3.9 1.7 2.9-.6 3.9-1.7 1.7-2.4 2-3.9c.2-.1.4-.3.6-.4.3-.4.6-.8.7-1.3.2-.5.2-1 .2-1.5v-.3c0-.4-.2-.8-.4-1.1-.2-.2-.3-.3-.6-.4 0-.2.1-.4.1-.6.4-2.1-.1-5.9-4.4-7.2C7.2-.5 4.7.2 3.1 2c0 0-3 .9-2.2 6.2-.2 0-.3.1-.4.3-.3.3-.5.7-.5 1v.3c0 .7.2 1.3.4 2 .2.3.3.6.5.9z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-126-581h375v1740h-375z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="#FFF" d="M-5-5h24.8v28.7H-5z"/></g></svg> <span></span</a>').appendTo('#update_cart_total .container')
            $(
                $('<div/>')
                    .attr('id', 'vto-on-model')
                    .addClass('vto-on-model__container vto-hide')
                    .append('<div id="vto_modal_app_root" >vto_model_root</div>')
                    .append('<p class="vto-on-model__disclaimer" >Model Head Size: Average</p')
                    .append(
                        $('<div/>')
                            .addClass('vto-on-model__toggle vto-on-model__toggle--disable')
                            .append('<a class="vto-on-model__button-female outlineButton outlineButton--active" data-model-name="women" >Female</a>')
                            .append('<a class="vto-on-model__button-male outlineButton" data-model-name="men" >Male</a>')
                    )
                    .append('<p class="vto-on-model__copy" >Want to see these on yourself? <br> <a class="sgh-vto-overlay-open" >Try Them On</a>!</p')
            ).insertAfter('#update_cart_total > .container');
            $(
                $('<div/>')
                    .attr('id', 'sgh_vto_overlay')
                    //.addClass('vto-hide')
                   
                    .append(
                        $('<div/>')
                        .attr('id', 'sgh-vto-overlay_video')
                        .append('<span id="user-id">c4a6953b-986c-4549-a927-a7c5d4ea1054</span>')
                        .append(
                            $('<div/>')
                            .attr('id', 'sgh-vto-video-container')
                            .append('<div id="vto_app_root" class="vto-hide">vto_app_root</div>')
                        )
                        .append(
                            $('<div/>')
                            .attr('id', 'sgh-vto-vtomodel-container')
                            //.append('<div id="vto_modal_app_root" ></div>')
                            .prepend(
                                $('<div/>')
                                .attr('id', 'sgh-vto-overlay-video-buttons')
                                .append('<a class="button sgh-vto-overlay-close  white button_back-arrow"><svg class="back-bar-arrow" width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Ray-Ban-Mobile-VTO"><g id="6.0-Reveal---Without-Sunglasses" transform="translate(-70.000000, -553.000000)"><g id="Icons/Ray-Ban-Arrow-(Black)" transform="translate(70.000000, 553.000000)"><path d="M5.18269231,14 L-3.51718654e-13,14 L-3.51718654e-13,13.9230769 L4.71153846,7 L-3.5199621e-13,0.0769230769 L-3.51718654e-13,0 L5.18269231,0 L2.82692308,0 L2.82692308,0.0769230769 L7.53846154,7 L2.82692308,13.9230769 L2.82692308,14 L5.18269231,14 Z" id="Combined-Shape" transform="translate(3.769231, 7.000000) rotate(-180.000000) translate(-3.769231, -7.000000) "></path></g></g></g></svg> Back to Product Page</a>')
                                .append('<a id="vto-open-edit" class="vto-hide" >Options</a> ')
                            )
                        )
                        .append(
                            $('<div/>')
                            .attr('id', 'sgh-vto-video-edit-container')
                            .addClass('vto-hide vto-video-edit-modal-initial')
                            .append(
                                $('<div/>')
                                .attr('id', 'sgh-vto-video-edit')
                                .addClass('sgh-vto-video-edit-modal')
                                .append('<i class="modal-close vto-option-cancel">&#10006;</i>')
                                .append(
                                    $('<div/>')
                                    .addClass('vto-edit-page vto-edit-initial')
                                    .append('<p>VIRTUAL MODEL OPTIONS</p>')
                                    .append('<a class="vto-retake-button outlineButton" >RETAKE MY VIDEO</a>')
                                    .append('<a class="vto-delete-button outlineButton">REMOVE MY VIRTUAL MODEL</a>')
                                )
                                .append(
                                    $('<div/>')
                                    .addClass('vto-edit-page vto-edit-retake')
                                    .append('<p>RETAKING YOUR VIDEO WILL REMOVE YOUR CURRENT ONE </p>')
                                    .append('<a class="vto-option-cancel button black" >CANCEL</a>')
                                    .append('<a class="vto-retake-confirm outlineButton">RETAKE</a>')
                                )
                                .append(
                                    $('<div/>')
                                    .addClass('vto-edit-page vto-edit-delete')
                                    .append('<p>ARE YOU SURE YOU WANT TO REMOVE YOUR VIRTUAL MODEL? </p>')
                                    .append('<a class="vto-option-cancel button black" >CANCEL</a>')
                                    .append('<a class="vto-delete-confirm outlineButton">REMOVE</a>')
                                )
                            )
                            .append('<div class="sgh-vto-video-edit-background vto-option-cancel"></div>')
                        )
                        //.append('<div id="sgh-vto-video-delete" class="vto-hide sgh-vto-video-edit-modal"><i class="modal-close vto-delete-cancel">&#10006;</i><p>Are you sure you want to delete your virtual model</p> <a class="vto-delete-cancel button black ">KEEP MY VIRTUAL MODEL</a> <a class="vto-delete-confirm outlineButton">REMOVE MY VIRTUAL MODEL</a></div>')
                        .append('<div class="vto-hide" id="render-success"><span id="video-id">video-id</span> <span id="render-success-time">&quot;video-id</span> <span id="render-success-time"><!--render--></span> <span id="video-id">video-id</span></div>')
                    )
                    /*.append(
                         $('<div/>')
                            .attr('id', 'sgh-vto-overlay_container')
                            .append('<a class="button black vto-start-button" id="vto_start_button">VTO GET STARTED</a>')
                    )*/
                ).appendTo('#pageContainer')

            $('.sgh-vto-overlay-close').on( "click", function() {
                obj.closeVTOModelWindow()
                obj.analyticsTrack('closed vto');
            });

            $('.vto-on-model__toggle a').on( "click", function() {
                var modelName = $(this).data('model-name')
                $('.vto-on-model__toggle').addClass('vto-on-model__toggle--disable')
                $('.vto-on-model__toggle a').removeClass('outlineButton--active')
                $(this).addClass('outlineButton--active')
                $.cookie("vtoModelId", modelName, {expires: 14, path: '/', domain: 'sunglasshut.com'});
                obj.settings.upcGender = modelName
                obj.settings.clickedModel = true
                obj.clearModelCanvas()
                if(obj.settings.showOnModel === true){
                    sghVTO.buildOnModel()
                }
                obj.analyticsTrack('changed model: '+modelName);
                //console.log('modelName: '+modelName)
            });
           
           // console.log('vtoElements()');
        },
        clearModelCanvas: function() {
            $('#vto-on-model__root').height($(window).width())
            //$('#vto-on-model__root').html('')
        },
        getPDPGender: function() {
            var obj = this
            var api = '/webapp/wcs/stores/servlet/GetCatalogEntryDetailsByID?catalogId=10101&langId=-1&storeId=10152&productId='
            var glassesUpc = obj.settings.glassesUpc
            window.jQuery.ajax(api+glassesUpc, {
                success: function(data) {
                    var b = data.trim().replace("/*", "");
                    b = b.replace("*/", "");
                    var json = JSON.parse(b);
                    var genderAll = ''
                    var gender = []
                    var attribute = json.catalogEntryAttributes.attributes

                    for (var i = 0; i < attribute.length; i++) { 
                        var name = attribute[i].name
                        if ( name === 'Gender' ){
                            genderAll = json.catalogEntryAttributes.attributes[i].values
                            for (var j = 0; j < genderAll.length; j++) {
                              gender[j] =  genderAll[j].value
                            }
                        }
                    }
                    gender = gender.toString()
                    gender = gender.toLowerCase()
                    obj.settings.upcGender = gender
                   
                   // console.log("getPDPGender: "+gender);
                     obj.buildOnModel(data)
                          
                },
                complete: function(){
                    $('.ajax-loader-wrap, #ajax-container').show();
                },
                error: function() {
                    obj.buildOnModel(data)
                    console.log( "error");
                }
            })
                
        },
        buildOnModel: function(data) {
            var obj = this
            var glassesUpc = obj.settings.glassesUpc
            var currentUserId = obj.settings.currentUserId;
            var noVTOModel = obj.settings.noVTOModel;
            var renderedGlasses = "";
            var pageType = utag.data.page_type
            var modelVideoId = obj.settings.modelVideoId
            var analyticsConfig = {
                instructions: {
                    onPageLoad: function () {
                       obj.analyticsTrack('step 1: instructions')
                       //console.log('analyticsConfig - instructions')
                        //showAnalyticsAlert('instructions', 'onPageLoad');
                    },
                    //takeVideoElementClass: 'vto-take-video'
                },
                uploadingVideo: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 2: uploaded video')
                        //console.log('analyticsConfig - uploadingVideo')
                       // showAnalyticsAlert('uploadingVideo', 'onPageLoad');
                    }
                },
                genderSelect: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 3: select gender')
                        //console.log('analyticsConfig - genderSelect')
                       // showAnalyticsAlert('genderSelect', 'onPageLoad');
                    },
                    //genderMensElementClass: 'vto-mens',
                    //genderWomensElementClass: 'vto-womens',
                   // genderNextElementContentBox: 'vto-gender-next'
                },
                sizeSelect: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 3: select size')
                        //console.log('analyticsConfig - sizeSelect')
                       // showAnalyticsAlert('sizeSelect', 'onPageLoad');
                    },
                   // sizeSmallElementClass: 'vto-small',
                   // sizeAverageElementClass: 'vto-average',
                   // sizeLargeElementClass: 'vto-large',
                   // sizeNextElementContentBox: 'vto-size-next'
                },
                analyzingVideo: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 3: analyzing video')
                       // console.log('analyticsConfig - analyzingVideo')
                       // showAnalyticsAlert('analyzingVideo', 'onPageLoad');
                    }
                },
                reviewWithoutGlasses: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 4: review without glasses')
                        //console.log('analyticsConfig - reviewWithoutGlasses')
                       // showAnalyticsAlert('reviewWithoutGlasses', 'onPageLoad');
                    },
                   // retakeElementClass: 'without-glasses-retake',
                   // continueElementClass: 'without-glasses-continue',
                    onFaceSwipe: function () {
                       // showAnalyticsAlert('reviewWithoutGlasses', 'onFaceSwipe');
                    }
                },
                render: {
                    onPageLoad: function () {
                       //obj.analyticsTrack('step 5: review with glasses')
                    },
                    onFaceSwipe: function () {
                        obj.analyticsTrack('vto pdp: swipe face: on user')
                        
                    }
                },            
                mappingGlasses: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 4: mapping glasses')
                        //console.log('analyticsConfig - mappingGlasses')
                      //  showAnalyticsAlert('mappingGlasses', 'onPageLoad');
                    }
                },
                render: {
                    onPageLoad: function () {
                        if($('#sgh_vto_overlay.active').length){
                            obj.analyticsTrack('step 5: review with glasses')
                        }
                    },
                    onFaceSwipe: function () {
                        if($('#sgh_vto_overlay.active').length){
                            obj.analyticsTrack('vto pdp: swipe face: on user')
                        }else{
                            obj.analyticsTrack('vto pdp: swipe face: on model')
                        }
                        
                    }
                },
                reviewWithGlasses: {
                    onPageLoad: function () {
                        if($('#sgh_vto_overlay.active').length){
                            obj.analyticsTrack('step 5: review with glasses')
                        }                        
                       // console.log('analyticsConfig - reviewWithGlasses - reviewTakeToModel()')
                       
                        //showAnalyticsAlert('reviewWithGlasses', 'onPageLoad');
                    },
                    onContinueNoSave: function() {
                        obj.analyticsTrack('step 6: onContinueNoSave')
                    },
                    onFaceSwipe: function () {
                        obj.analyticsTrack('step 5: review with glasses : swipe face')
                    }
                },
                saveToAccount: {
                    onPageLoad: function() {
                        obj.analyticsTrack('step 6: save to account')
                       // console.log('step 6: save to account')
                        //takeToModel()
                    },
                    onSave: function() {console.log('step 6: save to account')},
                    onContinueNoSave: function() {console.log('step 6: save to account')},
                },
                uploadFailed: {
                    onPageLoad: function () {
                        obj.analyticsTrack('error: uploading failed')
                        //console.log('analyticsConfig - uploadFailed')
                        //showAnalyticsAlert('uploadFailed', 'onPageLoad');
                    },
                   // uploadRetryClass: 'upload-failed-retry'
                },
                videoTooLong: {
                    onPageLoad: function () {
                        obj.analyticsTrack('error: video too long')
                       // console.log('analyticsConfig - videoTooLong')
                        //showAnalyticsAlert('videoTooLong', 'onPageLoad');
                    },
                    //uploadRetryClass: 'video-too-long-retry'
                },
                processingError: {
                    onPageLoad: function () {
                        obj.analyticsTrack('error: video processing')
                       // console.log('analyticsConfig - processingError')
                       // showAnalyticsAlert('processingError', 'onPageLoad');
                    },
                   // uploadRetryClass: 'processing-error-retry'
                }
            }
          //  console.log('upcGender:' +obj.settings.upcGender)

            if(obj.settings.upcGender === 'men' && !$.cookie("vtoModelId")){
                $('.vto-on-model__toggle a').removeClass('outlineButton--active')
                $('.vto-on-model__button-male').addClass('outlineButton--active')
                modelVideoId = 'zak'
            }

            if($.cookie('vtoId') && obj.settings.currentVideo != 'deleted' && obj.settings.currentVideo != '' && $.cookie('vtoId') != 'deleted' && obj.settings.clickedModel === false){
                var vtoCookie = JSON.parse($.cookie('vtoId'))
                if(vtoCookie.cat === 'women'){
                    modelVideoId = 'alessandra'
                    $('.vto-on-model__toggle a').removeClass('outlineButton--active')
                    $('.vto-on-model__button-female').addClass('outlineButton--active')
                }else if (vtoCookie.cat === 'men'){
                    modelVideoId = 'zak'
                    $('.vto-on-model__toggle a').removeClass('outlineButton--active')
                    $('.vto-on-model__button-male').addClass('outlineButton--active') 
                }
                //console.log('cookie1: '+modelVideoId)
            }else if($.cookie("vtoModelId")){
                if($.cookie('vtoModelId') === 'women'){
                    modelVideoId = 'alessandra'
                    $('.vto-on-model__toggle a').removeClass('outlineButton--active')
                    $('.vto-on-model__button-female').addClass('outlineButton--active')
                }else if ($.cookie('vtoModelId') === 'men'){
                    modelVideoId = 'zak'
                    $('.vto-on-model__toggle a').removeClass('outlineButton--active')
                    $('.vto-on-model__button-male').addClass('outlineButton--active') 
                }
               // console.log('cookie2: '+modelVideoId)
            }
            


             if ($.cookie('vtoId')  && obj.settings.currentVideo !== 'deleted' && obj.settings.currentVideo !== ''){
                var vtoCookie = JSON.parse($.cookie('vtoId'))
                obj.settings.currentUserId = vtoCookie.userId
                obj.settings.currentVideo = vtoCookie.videoId
                if (obj.settings.currentVideo){
                    obj.settings.noVTOModel = false
                }
            }

            function renderModelSucceeded() {
                $('#vto-on-model').fadeIn( 300 );
                setTimeout(function() {
                   $('.vto-on-model__toggle').removeClass('vto-on-model__toggle--disable')
               }, 800);
                
               // console.log('renderModelSucceeded')
            }

            function renderModelFlow() {
                
                 setTimeout(function() {
                        $('#vto-on-model #vto_modal_app_root').show()
                     }, 300);
                VtoApp.renderGlasses('vto_modal_app_root',
                  modelVideoId,
                  glassesUpc,
                  {width:$(window).width(), height:$(window).width()},
                  renderModelSucceeded(),
                  obj.genericErrorHandler,
                  {showRotateBar: true}
                );
               // console.log('renderModelFlow')
            }

            VtoApp.init(
                    currentUserId,
                    glassesUpc,
                    'sunglasshut', 
                    'en-US', 
                    'master',
                     analyticsConfig,
                    function (userId) {
                        renderModelFlow();
                    }, 
                    obj.genericErrorHandler,
                    {modelName: modelVideoId}
                );
            obj.settings.clickedModel = false
            //console.log('buildOnModel');
        },
        analyticsTrack: function(linkName) {
            var obj = this
            var videoId = obj.settings.currentVideo
            var noVTOModel = obj.settings.noVTOModel;
            var gender = obj.settings.userGender;
            var fit = obj.settings.userSize;
            var user = 'new'
            var onModel = ''

            if (obj.settings.showOnModel === true){
                onModel = 'onmodel: '
            }

           // console.log('noVTOModel: '+noVTOModel)
            if(videoId && videoId != 'undefined' && videoId != 'deleted' && noVTOModel !== true){
                user = 'returning'
                //console.log('returning')
            }
            if (gender !== '' && gender !== ''){
                    gender = gender+': '
                }else{
                    gender = ''
                }
            if (fit !== '' && fit !== ''){
                fit = fit+': '
            }else{
                fit = ''
            }
            var products = [{
                'upc': obj.settings.glassesUpc
            }];
            var track = {
                'link_name': 'sgh: vto: '+ onModel + user + ': ' + gender + fit + linkName,
                'site_events': {
                    'see_their_shades': true
                },
                'prd_upc': [obj.settings.glassesUpc],
                'products': products,
                "authenticated_status": utag_data.authenticated_status || "",
                'language': utag_data.language || "",
                'cntry': utag_data.country || ""
            };
            _trackAnalytics(track);
           // console.log('track: sgh: vto: '+ onModel + user + ': ' + gender + fit + linkName);
        },
        vtoClose: function() {
            var obj = this
            $('#vto_modal_app_root').hide().prependTo('#vto-on-model')
            if(sghVTO.settings.showOnModel === true){
                sghVTO.buildOnModel()
            }
            $('#pageContainer').removeClass('vto-disable-scrolling').bind("touchmove")
            $( "#sgh_vto_overlay" ).removeClass('active').hide()
            if(  $('#sgh-vto-video-edit-container').is(":visible") == true ){ 
                $('#sgh-vto-video-edit-container')
                    .hide()
                    .addClass('vto-video-edit-modal-initial')
                    .removeClass('vto-video-edit-modal-delete')
                    .removeClass('vto-video-edit-modal-retake');
            }
            $('html').removeClass('hide-body')
            $('body').removeClass('fullscreen-open')
            $('html').css('top','');
            
           // console.log('onCloseVto');
        },
        closeVTOModelWindow: function () {
            var obj = this
            $( "#sgh-vto-vtomodel-container" ).delay(100).animate({
                 right: "-100%",
            }, 300 , function() {
                $( '#sgh_vto_overlay .info-container' ).hide( );
                $(this).addClass('vto-hide')
                obj.vtoClose()
            });
            //console.log("closeVTOModelWindow")
        },
        genericErrorHandler:  function(error) {
           // var obj = this
            $('#vto_app_root').hide();
            $('#vto-on-model').hide();
            $('#sgh-vto-overlay_video').hide();
            $("#vto_start_button").addClass('hide')
            console.log('error'+error)
            //obj.analyticsTrack('error: generic: '+error)
        },
        vtoApplication: function(data) {
            var obj = this
            var glassesUpc = obj.settings.glassesUpc
            var vtoRoot = "#vto_app_root"
            var currentUserId = obj.settings.currentUserId;
            var currentVideoId = obj.settings.currentVideo;
            var videoRetake = false;
            var noVTOModel = obj.settings.noVTOModel;
            var gender = obj.settings.userGender;
            //var currentUserId = "8A9C9D28-5C67-49FD-91D8-CDDFE7AF56AA";
            //var currentVideoId = "4CC97D29-9A26-4B26-A4B1-53EF42D5BDD3";
            //var currentUserId = "77560126-d27d-4ff6-afb3-bd1cbb90d887";
            //var currentVideoId = "05049d1a-f37a-417c-95d8-374cf68b9fa9";
            var renderedGlasses = "";
            var pageType = utag.data.page_type
            var rendererSuccess = false

            
            
            function getProductInfo(){
                if($('#sgh_vto_overlay .info-container').length < 1){
                    $('#vto_modal_app_root').after('<div class="info-container vto-hide"></div>')
                }
                var brand = $('#update_cart_total .info-container').find('.brand').text()
                var price = $('#update_cart_total .info-container').find('.price').text()
                var style = $('#update_cart_total .info-container').find('.style').first().text()
                var fit   = $('.styleInfo ').find('li:eq(5)').html()
                var swatch = $('.swatchesTitle').find('h3').html()
                var polar = $('#update_cart_total .info-container > .catalog-polarized').length
                var polarIcon = (polar) ? '<p class="catalog-polarized">Polarized</p>':'';
               // console.log('polor: '+polarIcon);

                $('#sgh_vto_overlay .info-container').html('').html(
                    '<p class="brand">'+brand+'</p>'+
                    polarIcon +
                    '<p class="price">'+price+'</p>'+
                    '<p class="style">'+style+'</p>'+
                    '<p class="swatch">'+swatch+'</p>'+
                    '<p class="fit">'+fit+'</p>'
                )
            }

            function deleteSucceeded() {
                
                if ($.cookie('vtoId')){
                    //$.cookie("vtoId", 'deleted', {expires: 1, path: '/', domain: 'sunglasshut.com'});
                    var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "deleted"}' );
                    $.cookie("vtoId", JSON.stringify(id), {expires: 60, path: '/', domain: 'sunglasshut.com'});
                }
                obj.analyticsTrack('option modal: delete modal: confirmed')
                var vtoUrl = 'http://' + window.location.host + window.location.pathname
                location.href = vtoUrl;
                obj.closeVTOModelWindow();
                $('#sgh-vto-video-container').addClass('active')             
                $( "#sgh-vto-vtomodel-container" ).removeClass('active')
                $('a.sgh-vto-overlay-open').find('span').text('TRY THEM ON')
                $( '#sgh-vto-overlay_video' ).hide( );
                $( '#sgh_vto_overlay .info-container' ).hide( );
                $('#sgh-vto-overlay_container').show();
                $('#vto-open-edit').hide();
                                
                $('#sgh-vto-video-edit-container')
                        .hide()
                        .addClass('vto-video-edit-modal-initial')
                        .removeClass('vto-video-edit-modal-delete')
                        .removeClass('vto-video-edit-modal-retake')
                videoRetake = false;        
                currentVideoId = "";
                obj.settings.currentVideo = ""
               
                noVTOModel = true;
                //console.log('deleteSucceeded() '+currentVideoId)
            }

            function renderSucceeded() {

                //var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "'+currentVideoId+'" }' );
                    var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "'+currentVideoId+'", "cat": "'+ obj.settings.userGender+'", "style": "'+obj.settings.userSize+'" }' );
                    $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
                    obj.settings.currentVideo = currentVideoId
                    obj.settings.currentUserId = currentUserId
                    var cookie = $.cookie("vtoId")
                    //console.log('Creat Cookie: '+cookie)
                
                $('#sgh-vto-overlay-video-buttons.vto-hide').removeClass('vto-hide')
                $('#sgh-vto-video-container').removeClass('active')             
               
                $('#vto-open-edit').delay( 300 ).fadeIn( 300 );
                getProductInfo()
                if(rendererSuccess != true){
                    
                   
                    $('#vto-open-edit').on( "click", function() {
                       $('#sgh-vto-video-edit-container').fadeIn( 300 );
                       obj.analyticsTrack('option modal:')//
                    });

                    $('.vto-option-cancel').on( "click", function() {
                        $('#sgh-vto-video-edit-container').fadeOut( 300 );
                        $('#sgh-vto-video-edit-container')
                        .addClass('vto-video-edit-modal-initial')
                        .removeClass('vto-video-edit-modal-delete')
                        .removeClass('vto-video-edit-modal-retake')
                        obj.analyticsTrack('option modal: cancel' )
                       // console.log('option modal: cancel')
                    });

                    $('.vto-retake-button').on( "click", function() {
                        $('#sgh-vto-video-edit-container')
                        .addClass('vto-video-edit-modal-retake')
                        .removeClass('vto-video-edit-modal-delete')
                        .removeClass('vto-video-edit-modal-initial')
                        obj.analyticsTrack('option modal: retake modal:' )
                    });

                    $('.vto-retake-cancel').on( "click", function() {
                        $('#sgh-vto-video-edit-container')
                        .addClass('vto-video-edit-modal-initial')
                        .removeClass('vto-video-edit-modal-delete')
                        .removeClass('vto-video-edit-modal-retake')
                        obj.analyticsTrack('option modal: retake modal: cancel' )
                     });
                    $('.vto-retake-confirm').on( "click", function() {
                        $( "#sgh-vto-vtomodel-container" ).delay(100).animate({
                             right: "-100%",
                        }, 300 , function() {
                            $('#sgh-vto-video-container').addClass('active')             
                            $( "#sgh-vto-vtomodel-container" ).removeClass('active')
                            startCaptureFlow()
                        });
                       
                        obj.analyticsTrack('option modal: retake modal: confirmed' )
                        videoRetake = true;            
                        $('#vto-open-edit').hide();
                        if(  $('#sgh-vto-video-edit-container').is(":visible") == true ){ 
                            $('#sgh-vto-video-edit-container')
                                .hide()
                                .addClass('vto-video-edit-modal-initial')
                                .removeClass('vto-video-edit-modal-delete')
                                .removeClass('vto-video-edit-modal-retake')
                        }
                     });
                    $('.vto-delete-cancel').on( "click", function() {
                        $('#sgh-vto-video-edit-container')
                        .addClass('vto-video-edit-modal-initial')
                        .removeClass('vto-video-edit-modal-delete')
                        .removeClass('vto-video-edit-modal-retake')
                        obj.analyticsTrack('option modal: delete modal: cancel')
                     });
                    $('.vto-delete-confirm').on( "click", function() {
                        /*VtoApp.deleteUser(
                            obj.settings.currentUserId,
                            deleteSucceeded(),
                            obj.genericErrorHandler
                        )*/
                        deleteSucceeded()
                       
                     });
                    $('.vto-delete-button').on( "click", function() {
                       $('#sgh-vto-video-edit-container')
                        .removeClass('vto-video-edit-modal-initial')
                        .removeClass('vto-video-edit-modal-retake')
                        .addClass('vto-video-edit-modal-delete')
                       // VtoApp.deleteUser(videoId, deleteSucceeded, genericErrorHandler)
                       obj.analyticsTrack('option modal: delete modal:')
                       // console.log('CLick Delete'+videoId)
                    });
                    
                    //$('a.sgh-vto-overlay-open').find('span').text('VIEW YOUR VIRTUAL MODEL')
                    rendererSuccess = true
                   // console.log('analyticsTrack - vto pdp '+rendererSuccess)
                }
                $('#sgh_vto_overlay .info-container').delay( 200 ).fadeIn( 300 );
                $('sgh-vto-overlay_container').hide();
                obj.analyticsTrack('vto pdp:' )
                videoRetake = false;
                noVTOModel = false;
               // console.log('cookie: '+cookie) 
               //console.log('render-success')
            }
            
            var analyticsConfig = {
                instructions: {
                    onPageLoad: function () {
                       obj.analyticsTrack('step 1: instructions')
                       //console.log('analyticsConfig - instructions')
                        //showAnalyticsAlert('instructions', 'onPageLoad');
                    },
                    //takeVideoElementClass: 'vto-take-video'
                },
                uploadingVideo: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 2: uploaded video')
                        //console.log('analyticsConfig - uploadingVideo')
                       // showAnalyticsAlert('uploadingVideo', 'onPageLoad');
                    }
                },
                genderSelect: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 3: select gender')
                        //console.log('analyticsConfig - genderSelect')
                       // showAnalyticsAlert('genderSelect', 'onPageLoad');
                    },
                    //genderMensElementClass: 'vto-mens',
                    //genderWomensElementClass: 'vto-womens',
                   // genderNextElementContentBox: 'vto-gender-next'
                },
                sizeSelect: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 3: select size')
                        //console.log('analyticsConfig - sizeSelect')
                       // showAnalyticsAlert('sizeSelect', 'onPageLoad');
                    },
                   // sizeSmallElementClass: 'vto-small',
                   // sizeAverageElementClass: 'vto-average',
                   // sizeLargeElementClass: 'vto-large',
                   // sizeNextElementContentBox: 'vto-size-next'
                },
                analyzingVideo: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 3: analyzing video')
                       // console.log('analyticsConfig - analyzingVideo')
                       // showAnalyticsAlert('analyzingVideo', 'onPageLoad');
                    }
                },
                reviewWithoutGlasses: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 4: review without glasses')
                        //console.log('analyticsConfig - reviewWithoutGlasses')
                       // showAnalyticsAlert('reviewWithoutGlasses', 'onPageLoad');
                    },
                   // retakeElementClass: 'without-glasses-retake',
                   // continueElementClass: 'without-glasses-continue',
                    onFaceSwipe: function () {
                       // showAnalyticsAlert('reviewWithoutGlasses', 'onFaceSwipe');
                    }
                },
                render: {
                    onPageLoad: function () {
                       //obj.analyticsTrack('step 5: review with glasses')
                    },
                    onFaceSwipe: function () {
                        obj.analyticsTrack('vto pdp: swipe face: on user')
                        
                    }
                },            
                mappingGlasses: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 4: mapping glasses')
                        //console.log('analyticsConfig - mappingGlasses')
                      //  showAnalyticsAlert('mappingGlasses', 'onPageLoad');
                    }
                },
                render: {
                    onPageLoad: function () {
                        if($('#sgh_vto_overlay.active').length){
                            obj.analyticsTrack('step 5: review with glasses')
                        } 
                    },
                    onFaceSwipe: function () {
                        obj.analyticsTrack('vto pdp: swipe face')
                    }
                },
                reviewWithGlasses: {
                    onPageLoad: function () {
                        if($('#sgh_vto_overlay.active').length){
                            obj.analyticsTrack('step 5: review with glasses')
                        } 
                       // console.log('analyticsConfig - reviewWithGlasses - reviewTakeToModel()')
                       
                        //showAnalyticsAlert('reviewWithGlasses', 'onPageLoad');
                    },
                    onContinueNoSave: function() {
                        obj.analyticsTrack('step 6: onContinueNoSave')
                    },
                    onFaceSwipe: function () {
                        obj.analyticsTrack('step 5: review with glasses : swipe face')
                    }
                },
                saveToAccount: {
                    onPageLoad: function() {
                        obj.analyticsTrack('step 6: save to account')
                       // console.log('step 6: save to account')
                        //takeToModel()
                    },
                    onSave: function() {console.log('step 6: save to account')},
                    onContinueNoSave: function() {console.log('step 6: save to account')},
                },
                uploadFailed: {
                    onPageLoad: function () {
                        obj.analyticsTrack('error: uploading failed')
                        //console.log('analyticsConfig - uploadFailed')
                        //showAnalyticsAlert('uploadFailed', 'onPageLoad');
                    },
                   // uploadRetryClass: 'upload-failed-retry'
                },
                videoTooLong: {
                    onPageLoad: function () {
                        obj.analyticsTrack('error: video too long')
                       // console.log('analyticsConfig - videoTooLong')
                        //showAnalyticsAlert('videoTooLong', 'onPageLoad');
                    },
                    //uploadRetryClass: 'video-too-long-retry'
                },
                processingError: {
                    onPageLoad: function () {
                        obj.analyticsTrack('error: video processing')
                       // console.log('analyticsConfig - processingError')
                       // showAnalyticsAlert('processingError', 'onPageLoad');
                    },
                   // uploadRetryClass: 'processing-error-retry'
                }

            }

            function renderGlassesFlow(upc) {
                //console.log('renderedGlasses" '+renderedGlasses+ " upc: "+upc+" currentVideoId: "+currentVideoId)
                //if (renderedGlasses !== upc && currentVideoId || videoRetake === true ) {
                          
                    $( "#sgh-vto-vtomodel-container" ).addClass('active').removeClass('vto-hide').delay(100).animate({
                        right: "0",
                    }, 300, function() {
                        $("#video-id").text(currentVideoId);
                         setTimeout(function() {
                            $('#sgh-vto-vtomodel-container #vto_modal_app_root').show()
                         }, 600);
                        VtoApp.renderGlasses('vto_modal_app_root',
                              currentVideoId,
                              obj.settings.glassesUpc,
                              {width:$(window).width(), height:$(window).width()},
                              renderSucceeded,
                              obj.genericErrorHandler,
                              {showRotateBar: true}
                            );
                        renderedGlasses = upc;
                        videoRetake = false; 
                    })
                    
                   // console.log('renderGlassesFlow')
                
                $('#sgh-vto-video-container').removeClass('active')      
            }

            function createCookie(videoId, gender) {
                currentVideoId = videoId;
                obj.settings.userGender = gender.gender;
                obj.settings.userSize = gender.fit;
               // console.log('createCookie: '+gender.fit)

                 $( "#sgh-vto-vtomodel-container" ).addClass('active').removeClass('vto-hide').delay(50).animate({
                    right: "0",
                }, 300, function() {
                    setTimeout(function() {
                        $('#sgh-vto-vtomodel-container #vto_modal_app_root').show()
                     }, 600);
                VtoApp.renderGlasses('vto_modal_app_root',
                                  currentVideoId,
                                  obj.settings.glassesUpc,
                                  {width:$(window).width(), height:$(window).width()},
                                  renderSucceeded,
                                  obj.genericErrorHandler,
                                  {showRotateBar: true}
                                  );
                })
                  
                //console.log('createCookie')
            }

            function onPrivacyPolicy() {
               // console.log('onPrivacyPolicy')
            }

            function startCaptureFlow() {
               // $(vtoRoot).hide();
                //console.log("glassesUpc:"+glassesUpc+" vtoRoot: "+vtoRoot+" currentUserId: "+currentUserId)
                $(".vto-try-them-on").hide();
                
                VtoApp.startCapture(
                    'vto_app_root',
                    currentUserId,
                    obj.settings.glassesUpc,
                    {width:$(window).width(), height:$(window).width()},
                    {
                        onCloseVto: obj.vtoClose,
                        showWelcomePage: false,
                        showScalingQuestions: true,
                        showReviewWithGlasses: false,
                        showSaveToAccount: false
                    },
                    createCookie,
                    createCookie,
                    obj.genericErrorHandler);
                
                $(vtoRoot).removeClass('vto-hide').show();
                $('#sgh-vto-overlay_video').show();
                $('#sgh-vto-overlay_container').hide();
                //console.log('startCaptureFlow1');
            }

            function createVTOIdCookie(){
                var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'"  }' );
                $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
                //console.log('create id cookie')
            }

            function loadVtoApp(data) {
                //console.log('currentUserId '+currentUserId);
                var $overlayOpen = $('a.sgh-vto-overlay-open')
                VtoApp.init(
                    currentUserId,
                    obj.settings.glassesUpc,
                    'sunglasshut', 
                    'en-US', 
                    'master',
                     analyticsConfig,
                    function (userId) {
                    
                        if(!currentUserId) {
                            currentUserId = userId;
                            createVTOIdCookie()
                        }else {
                          currentUserId = userId;  
                        }

                        if (obj.settings.upcSupported === true){

                        
                            if (currentVideoId && currentVideoId != 'undefined' && currentVideoId != 'deleted') {
                                 $overlayOpen.find('span').text('TRY THEM ON')
                                $overlayOpen.removeClass('vto-hide').addClass('vto-show')
                            }else{
                                $overlayOpen.find('span').text('TRY THEM ON')
                                $overlayOpen.removeClass('vto-hide').addClass('vto-show')
                            }

                            //Check if Capture is enabled and user doesn't want to retake
                            if ( obj.settings.showOnModel === true && gender === ''){
                                obj.getPDPGender()
                            }else if (obj.settings.showOnModel === true){
                                obj.buildOnModel()
                            }


                            $overlayOpen.on( "click", function() {
                                $('#pageContainer').addClass('vto-disable-scrolling').unbind("touchmove")
                                obj.clearModelCanvas()
                                var parent = $(this).parent();
                                $('#vto_modal_app_root').hide().insertAfter('#sgh-vto-overlay-video-buttons')
                                if (!parent.is('.vto-on-model__copy')) {
                                    obj.analyticsTrack('clicked try on: cta')
                                } else {
                                    obj.analyticsTrack('clicked try on: model')
                                }
                                if (currentVideoId && currentVideoId != 'undefined' && currentVideoId != 'deleted') {
                                    $(".vto-try-them-on").hide();
                                    $("#vto_toggle_button").show();
                                    $('#my_vto_div').show();
                                    $('#sgh-vto-overlay_video').show();
                                    $('#sgh-vto-overlay_container').hide();
                                    obj.settings.currentVideo = currentVideoId
                                    $( "#sgh_vto_overlay" ).addClass('active').show();
                                    renderGlassesFlow(glassesUpc);
                                    noVTOModel = true;
                                    //console.log('Open OverLay - Current ID: '+currentVideoId)
                                }else{
                                    $( "#sgh_vto_overlay" ).addClass('active').show()
                                    startCaptureFlow();
                                     //console.log('Open OverLay - New ID: '+currentVideoId)
                                }
                               // $('html').css('top',$(window).scrollTop() * -1);
                                $("html").addClass("hide-body")
                            });
                        }
                    }, 
                    obj.genericErrorHandler
                );

                $(".vto-start-button").on( "click", function() {
                    startCaptureFlow()
                    if(  $('#sgh-vto-video-edit-container').is(":visible") == true ){ 
                        $('#sgh-vto-video-edit-container')
                            .hide()
                            .addClass('vto-video-edit-modal-initial')
                            .removeClass('vto-video-edit-modal-delete')
                            .removeClass('vto-video-edit-modal-retake')
                    }
                 });

            }
            loadVtoApp(data)
  
        	
          // console.log('vtoApplication');
        },
        vtoAPI: function() {
            var obj = this
            var isSupported
            var url = 'https://d1phjbsp802ne8.cloudfront.net/vto-mobile-application.js'
            window.jQuery.ajax(url, {
                type: 'get',
                dataType: 'script',
                cache: true,
                async: true,
                crossDomain: true,
                success: function(data) {
                    //console.log('data: '+data)
                    obj.settings.vtoData = data
                    function onSupportedUPC(isSupported) {
                        if ($.cookie('vtoId')  && $.cookie('vtoId') !== 'deleted'){
                            var vtoCookie = JSON.parse($.cookie('vtoId'))
                            obj.settings.currentUserId = vtoCookie.userId
                            if(vtoCookie.videoId && vtoCookie.videoId != 'deleted' ) {
                                obj.settings.currentVideo = vtoCookie.videoId
                                obj.settings.userGender = vtoCookie.cat;
                                obj.settings.userSize = vtoCookie.style;
                               // console.log('obj.settings.userGender:' + obj.settings.userGender);
                            }
                            if (obj.settings.currentVideo){
                                obj.settings.noVTOModel = false
                            }
                        }
                        if (isSupported === true){
                            obj.settings.upcSupported =  true;
                            
                            obj.vtoElements()
                            obj.analyticsTrack('supported upc:')
                        }else{
                             obj.analyticsTrack('not supported upc:')
                        }
                        obj.vtoApplication(data)
                       //console.log('onSupportedUPC:'+isSupported)
                    }
                    VtoApp.isUpcSupported(
                        obj.settings.glassesUpc,
                        onSupportedUPC,
                        obj.genericErrorHandler
                    )
                   
                    //console.log('LOADED' );
                },
                complete: function(){
                    $('.ajax-loader-wrap, #ajax-container').show();
                },
                error: function() {
                  console.log( "error");
                }
            })
             //console.log( "vtoAPI 2.0");
        },
        init: function() {
            return this.vtoAPI(), this;
        }
    };
    window.sghVTO = i;

}()), $(function() {
    sghVTO.init();
});
