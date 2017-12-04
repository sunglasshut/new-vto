(function() {
    "use strict";
    var e = {
    	/* Your Global Var
    	   To call - this.settings.yourVariableHere
    	*/

        /*  "viewBy"   - for VTO CTA below feature image next to zoom icon: 
            "leftSide" - for VTO cta on left side: 
            "belowImg" - for VTO cat directly under the main image
        */
        ctaTest: "viewBy", 

        currentVideo: "",
        currentUserId: "",
        userGender: "",
        userSize: "",
        noVTOModel: true,
        glassesUpc: $('.product-upc').find('.upc').text()
    };
    var i = {
        settings: e,
        analyticsTrack: function(linkName) {
            var obj = this
            var videoId = obj.settings.currentVideo
            var noVTOModel = obj.settings.noVTOModel;
            var gender = obj.settings.userGender;
            var fit = obj.settings.userSize;
            var user = 'new'
           //console.log('gender: '+gender+ " fit "+fit)
            if(videoId && noVTOModel !== true){
                user = 'returning'
                //console.log('returning')
            } 
            
            var products = [{
                'upc': obj.settings.glassesUpc
            }];
            var track = {
                'link_name': 'sgh: no-vto-control: '+linkName,
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
          // console.log('track: sgh: vto: '+user+': ' + gender + fit + linkName);
        },
        genericErrorHandler:  function(error) {
            
            $('#vto_app_root').hide();
            $('#sgh-vto-overlay_video').hide();
            $("#vto_start_button").addClass('hide')
            var track = {
                'link_name': 'sgh: vto: generic error: '+error,
                'site_events': {
                    'see_their_shades': true
                },
                "authenticated_status": utag_data.authenticated_status || "",
                'language': utag_data.language || "",
                'cntry': utag_data.country || ""
            };
            _trackAnalytics(track);
          console.log('track: sgh: vto: generic error'+error);
        },
        vtoAPI: function() {
            var obj = this
            var isSupported
            var url = 'https://d1phjbsp802ne8.cloudfront.net/vto-desktop-application.js?v=01'
            $('.ajax-loader-wrap, #ajax-container').hide();
            window.jQuery.ajax(url, {
                type: 'get',
                dataType: 'script',
                cache: true,
                async: true,
                crossDomain: true,
                success: function(data) {
                    //console.log('UPC: '+obj.settings.glassesUpc)
                    function onSupportedUPC(isSupported) {
                        if (isSupported === true){
                            obj.analyticsTrack('supported upc:')
                        }else{
                            obj.analyticsTrack('not supported upc:')
                        }
                       //console.log('onSupportedUPC:'+isSupported)
                    }
                    VtoApp.isUpcSupported(
                        obj.settings.glassesUpc,
                        onSupportedUPC,
                        obj.genericErrorHandler
                    )
                   
                   // console.log('LOADED' );
                },
                complete: function(){
                    $('.ajax-loader-wrap, #ajax-container').show();
                },
                error: function() {
                    obj.analyticsTrack('error: loading script: ')
                  console.log( "error");
                }
            })
           // console.log( "vtoAPI 2.0");
        },
        init: function() {
            return this.vtoAPI(), this;
        }
    };
    window.sghVTO = i;

}()), $(function() {
    sghVTO.init();
   // console.log('sghVTO.init()')
});
