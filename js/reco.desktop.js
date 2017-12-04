(function() {
    "use strict";
    var e = {
    	/* Your Global Var
    	   To call - this.settings.yourVariableHere
    	*/

         /*     
                'au'     - English, Australia
                'ca'     - English, Canada
                'uk'     - English, United Kingdom
                'us'     - English, United States
                'fr'        - French
                'de'        - German
                'es'     - Spanish

                More locale codes: https://support.crowdin.com/api/language-codes/
        */
        countryCode: 'us',

        //glassesUpc: $('#upc').text(), //mobile
        glassesUpc: $('.product-upc').find('.upc').text() // Desktop
    };
    var i = {
        settings: e,
        addRecoProductElements: function() {
            $(
                $('<div/>')
                .attr('id', 'carousel__reco')
                .addClass('recom__container')
                .append(
                    $('<h3/>')
                    .addClass('recom__header')
                    .text('Customers also considered')
                )
                .append(
                    $('<div/>')
                    .attr('id', 'carousel__reco--products')
                    .addClass('recom__products')
                )
            ).insertBefore('#carousel')
            console.log('addRecoProductElements')
        },
        analyticsTrack: function(linkName) {
            var obj = this
            var products = [{
                'upc': obj.settings.glassesUpc
            }];
            var track = {
                'link_name': 'sgh: switch-swatch: ' + linkName,
                'page_name': 'sgh: product_detail: swatches: ' + obj.settings.glassesUpc,
                'site_events': {
                    'view_pdp': true
                },
                'prd_upc': [obj.settings.glassesUpc],
                'products': products,
                "authenticated_status": utag_data.authenticated_status || "",
                'language': utag_data.language || "",
                'cntry': utag_data.country || ""
            };
            _trackAnalytics(track);
          //console.log('track: sgh: switch-swatch: ' + linkName);
          //console.log('track: sgh: product_detail: ' + obj.settings.glassesUpc);
        },
        runRecoApi: function() {
            var obj = this
            var glassesUpc = obj.settings.glassesUpc
            var api = '//recommendations.luxdeepblue.com/recommend?upc='
            $('.ajax-loader-wrap, #ajax-container').hide()

            window.jQuery.ajax(api+glassesUpc, {
                cache: true,
                async: true,
                success: function(data) {

                    obj.addRecoProductElements()

                    //var json = JSON.parse(data);
                    var upcs = data.upcs
                    var upc = ''
                    var brand = ''
                    var price = ''
                    var recommended_reason = ''
                    var style = ''
                    var reason = ''
                    
                    console.log(data)
                    //console.log('json')
                    //Go through all attributes names to find each attributes
                    for (i = 0; i < upcs.length; i++) { 
                        var product = data.upcs[i]
                        upc = product.upc
                        brand = product.brand
                        price = product.price
                        style = product.style
                        recommended_reason = product.recommended_reason

                        if (recommended_reason === 'Users who purchased displayed UPC were likely to purchase this UPC'){
                            reason = 'purchased'
                        }else if (recommended_reason === "Users who viewed displayed UPC were likely to navigate to this UPC"){
                            reason = 'viewed'
                        }else if (recommended_reason === 'New arrival with same brand as displayed UPC'){
                             reason = 'same-brand'
                        }else if (recommended_reason === 'New arrival with any brand'){
                            reason = 'new-arrival'
                        }

                        $(
                            $('<div/>')
                            .attr('data-upc', upc)
                            .attr('data-rea', reason)
                            .addClass('recom__item item')
                            .prepend(
                                $('<a/>')
                                .addClass('main-img lazy-container')
                                .attr('href', '/'+obj.settings.countryCode+'/'+upc+'?sid=pdp-reco-'+reason)
                                .append(
                                    $('<img/>')
                                    .addClass('lazy frontView_Image')
                                    .attr('src', 'http://s7d3.scene7.com/is/image/LuxotticaRetail/'+upc+'_shad_fr?$jpegdefault$')
                                )
                                .append(
                                    $('<p/>')
                                    .addClass('brand')
                                    .text(brand)
                                )
                                .append(
                                    $('<p/>')
                                    .addClass('style')
                                    .text(style)
                                )
                                .append(
                                    $('<p/>')
                                    .addClass('price')
                                    .text(price)
                                )
                            )
                        ).appendTo('#carousel__reco--products')

                        console.log('upcs '+upc)
                    }


                   // console.log('upc: '+obj.settings.glassesUpc)       
                },
                complete: function(){
                    $('.ajax-loader-wrap, #ajax-container').show()
                   
                },
                error: function() {
                     $('.ajax-loader-wrap, #ajax-container').show()
                    console.log( "error");
                    var track = {
                        'link_name': 'sgh: switch-swatch: load error: ' + glassesUpc,
                        'site_events': {
                            'see_their_shades': true
                        },
                        "authenticated_status": utag_data.authenticated_status || "",
                        'language': utag_data.language || "",
                        'cntry': utag_data.country || ""
                    };
                    _trackAnalytics(track);
                }
            })
                
        },
        init: function() {
            return this.runRecoApi(), this;
        }
    };
    window.pdpReco = i;

}()), $(function() {
    //load Init object
    pdpReco.init();
});
