(function() {
    "use strict";
    var e = {
    	/* Your Global Var
    	   To call - this.settings.yourVariableHere
    	*/
        currentVideo: "",
        currentUserId: "",
        userGender: "",
        userSize: "",
        noVTOModel: true,
        glassesUpc: $('#upc').text()
    };
    var i = {
        settings: e,
        analyticsTrack: function(linkName) {
            var obj = this
            var videoId = obj.settings.currentVideo
            var noVTOModel = obj.settings.noVTOModel;
            var user = 'new'
           // console.log('noVTOModel: '+noVTOModel)
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
           //console.log('track: sgh: vto: '+user+': '+linkName);
        },
        genericErrorHandler:  function(error) {
            var obj = this
            $('#vto_app_root').hide();
            $('#sgh-vto-overlay_video').hide();
            $("#vto_start_button").addClass('hide')
            obj.analyticsTrack('error: generic: '+error)
        },

        vtoAPI: function() {
            var obj = this
            var isSupported
            var url = 'https://d1phjbsp802ne8.cloudfront.net/vto-mobile-application.js?v=01'
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
