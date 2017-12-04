(function() {
    //"use strict";
    var e = {

        /*  
            "viewBy"   - for VTO CTA below feature image next to zoom icon: 
            "leftSide" - for VTO cta on left side: 
            "belowImg" - for VTO cat directly under the main image
        */
        ctaTest: "belowImg",

        /*  
            "alessandra"    - Make alessandra default 
            "zak"           - Make Zak default 
        */
        modelVideoId: "alessandra",

        /* 
            true   - Show on model on page 
            false  - hide on model on page
        */
        showOnModel: true,
        
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
        upcGender: "female",
        currentVideo: "",
        currentUserId: "",
        userGender: "",
        userSize: "",
        noVTOModel: true,
        clickedModel: false,
        upcSupported: false,
        glassesUpc: $('.product-upc').find('.upc').text()
    };
    var i = {
        settings: e,
        vtoElements: function() {
            var obj = this;

            if (obj.settings.ctaTest === 'viewBy'){
            
                $('<a class="icon pdp-vto sgh-vto-overlay-open button__vto button__vto--below vto-hide" data-cta="viewBy" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><defs><path id="a" d="M1.1 9.1c0-.1 0-.1 0 0 .4.8.7 1.7.9 1.9V9.8h.4v.1l.2.8c.1.3.2.6.4.8.2.2.6.3.9.3h1.3c.2 0 .5-.1.7-.2.3-.1.5-.3.6-.6.1-.1.1-.3.1-.4.1-.4.2-.7.2-.9h1c0 .2.1.5.2.9 0 .1.1.3.1.4.1.3.3.5.6.6.2.1.5.2.7.2h1.3c.3 0 .6-.1.9-.3.2-.2.4-.5.5-.7l.2-.8v-.1h.3l.1.8c.3-.5.5-1.1.7-1.7.1 0 .1.1.2.1.3.1.4.3.4.5v.2c0 .6-.1 1.1-.4 1.6-.1.2-.2.4-.4.6-.1.1-.2.2-.4.3l-.2.1-.1.2c-.3 1.4-.9 2.6-1.9 3.7-.9.9-2 1.4-3.3 1.4s-2.3-.4-3.2-1.3c-.9-1.1-1.6-2.3-1.9-3.7l-.1-.2-.1-.1c-.2-.1-.3-.2-.4-.3-.2-.3-.4-.7-.5-1-.1-.4-.2-.8-.2-1.2v-.2c0-.3 0-.5.2-.6zm2.7-4.2s.9-1.6 2.3-.5 3 3.1 6.4 3.1l.2 1.7h-.3s0-.5-.9-.6H8.8c-.4 0-.7.2-.8.5H6.8c-.1-.3-.4-.5-.7-.5H3.3c-.9.1-.9.6-.9.6h-.3c.1-1.8.5-4.3 1.7-4.3zM.9 12.7c.2.2.3.3.6.4.3 1.4 1 2.8 2 3.9s2.4 1.7 3.9 1.7 2.9-.6 3.9-1.7 1.7-2.4 2-3.9c.2-.1.4-.3.6-.4.3-.4.6-.8.7-1.3.2-.5.2-1 .2-1.5v-.3c0-.4-.2-.8-.4-1.1-.2-.2-.3-.3-.6-.4 0-.2.1-.4.1-.6.4-2.1-.1-5.9-4.4-7.2C7.2-.5 4.7.2 3.1 2c0 0-3 .9-2.2 6.2-.2 0-.3.1-.4.3-.3.3-.5.7-.5 1v.3c0 .7.2 1.3.4 2 .2.3.3.6.5.9z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-126-581h375v1740h-375z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" d="M-5-5h24.8v28.7H-5z"/></g></svg> <span></span</a>').appendTo('#pdp-display .viewBy')
            
            } else if (obj.settings.ctaTest === 'belowImg'){
            
                $(
                    $('<a/>')
                        .addClass(' sgh-vto-overlay-open button__vto button__vto--grey-button vto-hide')
                        .attr('data-cta', 'belowImg')
                        .prepend('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><defs><path id="a" d="M1.1 9.1c0-.1 0-.1 0 0 .4.8.7 1.7.9 1.9V9.8h.4v.1l.2.8c.1.3.2.6.4.8.2.2.6.3.9.3h1.3c.2 0 .5-.1.7-.2.3-.1.5-.3.6-.6.1-.1.1-.3.1-.4.1-.4.2-.7.2-.9h1c0 .2.1.5.2.9 0 .1.1.3.1.4.1.3.3.5.6.6.2.1.5.2.7.2h1.3c.3 0 .6-.1.9-.3.2-.2.4-.5.5-.7l.2-.8v-.1h.3l.1.8c.3-.5.5-1.1.7-1.7.1 0 .1.1.2.1.3.1.4.3.4.5v.2c0 .6-.1 1.1-.4 1.6-.1.2-.2.4-.4.6-.1.1-.2.2-.4.3l-.2.1-.1.2c-.3 1.4-.9 2.6-1.9 3.7-.9.9-2 1.4-3.3 1.4s-2.3-.4-3.2-1.3c-.9-1.1-1.6-2.3-1.9-3.7l-.1-.2-.1-.1c-.2-.1-.3-.2-.4-.3-.2-.3-.4-.7-.5-1-.1-.4-.2-.8-.2-1.2v-.2c0-.3 0-.5.2-.6zm2.7-4.2s.9-1.6 2.3-.5 3 3.1 6.4 3.1l.2 1.7h-.3s0-.5-.9-.6H8.8c-.4 0-.7.2-.8.5H6.8c-.1-.3-.4-.5-.7-.5H3.3c-.9.1-.9.6-.9.6h-.3c.1-1.8.5-4.3 1.7-4.3zM.9 12.7c.2.2.3.3.6.4.3 1.4 1 2.8 2 3.9s2.4 1.7 3.9 1.7 2.9-.6 3.9-1.7 1.7-2.4 2-3.9c.2-.1.4-.3.6-.4.3-.4.6-.8.7-1.3.2-.5.2-1 .2-1.5v-.3c0-.4-.2-.8-.4-1.1-.2-.2-.3-.3-.6-.4 0-.2.1-.4.1-.6.4-2.1-.1-5.9-4.4-7.2C7.2-.5 4.7.2 3.1 2c0 0-3 .9-2.2 6.2-.2 0-.3.1-.4.3-.3.3-.5.7-.5 1v.3c0 .7.2 1.3.4 2 .2.3.3.6.5.9z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-126-581h375v1740h-375z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" d="M-5-5h24.8v28.7H-5z"/></g></svg>')
                        .append('<span class="button__vto__text--grey-button"></span>')
                    ).prependTo('.viewBy')      
                    $('#pdp').addClass('vto__belowImg')      
            
            } else {
             
                $(
                    $('<a/>')
                        .addClass('black-button sgh-vto-overlay-open button__vto button__vto--left-side vto-hide')
                        .attr('data-cta', 'leftSide')
                        .prepend('<i class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><defs><path id="a" d="M1.1 9.1c0-.1 0-.1 0 0 .4.8.7 1.7.9 1.9V9.8h.4v.1l.2.8c.1.3.2.6.4.8.2.2.6.3.9.3h1.3c.2 0 .5-.1.7-.2.3-.1.5-.3.6-.6.1-.1.1-.3.1-.4.1-.4.2-.7.2-.9h1c0 .2.1.5.2.9 0 .1.1.3.1.4.1.3.3.5.6.6.2.1.5.2.7.2h1.3c.3 0 .6-.1.9-.3.2-.2.4-.5.5-.7l.2-.8v-.1h.3l.1.8c.3-.5.5-1.1.7-1.7.1 0 .1.1.2.1.3.1.4.3.4.5v.2c0 .6-.1 1.1-.4 1.6-.1.2-.2.4-.4.6-.1.1-.2.2-.4.3l-.2.1-.1.2c-.3 1.4-.9 2.6-1.9 3.7-.9.9-2 1.4-3.3 1.4s-2.3-.4-3.2-1.3c-.9-1.1-1.6-2.3-1.9-3.7l-.1-.2-.1-.1c-.2-.1-.3-.2-.4-.3-.2-.3-.4-.7-.5-1-.1-.4-.2-.8-.2-1.2v-.2c0-.3 0-.5.2-.6zm2.7-4.2s.9-1.6 2.3-.5 3 3.1 6.4 3.1l.2 1.7h-.3s0-.5-.9-.6H8.8c-.4 0-.7.2-.8.5H6.8c-.1-.3-.4-.5-.7-.5H3.3c-.9.1-.9.6-.9.6h-.3c.1-1.8.5-4.3 1.7-4.3zM.9 12.7c.2.2.3.3.6.4.3 1.4 1 2.8 2 3.9s2.4 1.7 3.9 1.7 2.9-.6 3.9-1.7 1.7-2.4 2-3.9c.2-.1.4-.3.6-.4.3-.4.6-.8.7-1.3.2-.5.2-1 .2-1.5v-.3c0-.4-.2-.8-.4-1.1-.2-.2-.3-.3-.6-.4 0-.2.1-.4.1-.6.4-2.1-.1-5.9-4.4-7.2C7.2-.5 4.7.2 3.1 2c0 0-3 .9-2.2 6.2-.2 0-.3.1-.4.3-.3.3-.5.7-.5 1v.3c0 .7.2 1.3.4 2 .2.3.3.6.5.9z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-126-581h375v1740h-375z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" d="M-5-5h24.8v28.7H-5z"/></g></svg></i>')
                        .append('<span class="button__vto__text"></span>')
                    ).appendTo('.cart-button')
            }
            // Add Model Elements
            $(
                $('<div/>')
                    .attr('id', 'vto-on-model')
                    .addClass('vto-on-model__container vto-hide')
                    .append('<p class="vto-on-model__disclaimer vto-hide" >Model Head Size: Average</p')
                    .append('<div id="vto_modal_app_root" >vto_model_root</div>')
                    .append(
                        $('<div/>')
                            .addClass('vto-on-model__toggle vto-on-model__toggle--disable vto-hide')
                            .append('<a class="vto-on-model__button-female outlineButton outlineButton--active " data-model-name="women" >Female</a>')
                            .append('<a class="vto-on-model__button-male outlineButton" data-model-name="men" >Male</a>')
                    )
                    .append('<p class="vto-on-model__copy" >Want to see these on yourself? <br> <a class="sgh-vto-overlay-open" data-cta="on-model">Try Them On</a>!</p')
            ).appendTo('#compare_results')

            // Description Info Container
            $(
                $('<div/>')
                    .addClass('description-info')
                    .append(
                        $('<div/>')
                            .addClass('content')
                            .append('<h2 class="description-info__header">Product Details</h2>')
                            .append(
                                $('<ul/>')
                                    .addClass('description-info__details')
                                    .append('<li class="description-info__att description-info__att--style">Style: <span> </span></li>')
                                    .append('<li class="description-info__att description-info__att--frame-material">Frame material: <span> </span></li>')
                                    .append('<li class="description-info__att description-info__att--lens-material">Lens material: <span> </span></li>')
                                    .append('<li class="description-info__att description-info__att--fit">Fit: <span> </span></li>')
                                    .append('<li class="description-info__att description-info__att--eyse-size">Eye Size: <span> </span></li>')
                                    .append('<li class="description-info__att description-info__att--temple-size">Bridge/Temple Size: <span> </span></li>')
                            )
                            .append(
                                $('<ul/>')
                                    .addClass('description-info__details')
                                    .append('<li class="description-info__att description-info__att--shape">Looks best on these face shapes: <span> </span></li>')
                            )
                    )
                    .append(
                        $('<div/>')
                            .addClass('description-info__img lazy-container')
                            .append(
                                $('<img/>')
                                    .addClass('description-info__att--img lazy')
                                    .attr('src', '')
                            )
                    )
            ).appendTo('#compare')


             // Non Supported VTO
            $(
                $('<div/>')
                    .attr('id', 'non-vto-supported')
                    .addClass('vto-not-supported vto-hide')
                    .append('<h4 class="vto-not-supported_header" >Virtual Try not available for this product <br> But Coming Soon!</h4')
            ).appendTo('#compare_results')

             // Overlay
            $(
                $('<div/>')
                    .attr('id', 'sgh-vto-overlay_model')
                    .addClass('vto-hide')
                    .append('<span id="user-id">c4a6953b-986c-4549-a927-a7c5d4ea1054</span>')
                    .append(
                        $('<div/>')
                        .attr('id', 'sgh-vto-vtomodel-container')
                        
                    )
                    .append('<div class="vto-hide" id="render-success"><span id="video-id">video-id</span> <span id="render-success-time">&quot;video-id</span> <span id="render-success-time"><!--render--></span> <span id="video-id">loading/span></div>')

                ).appendTo('#compare_results')

            // Option Button
            $(
                 $('<div/>')
                    .attr('id', 'sgh-vto-overlay-video-buttons')
                    .addClass('vto-hide')
                    .append('<a id="vto-open-edit" >Options</a> ')
                        
                           
                ).prependTo('#vto-on-model')

                 $(
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
                                .append('<a class="vto-retake-button button black-button bordered" >RETAKE MY VIDEO</a>')
                                .append('<a class="vto-delete-button button black-button bordered">REMOVE MY VIRTUAL MODEL</a>')
                            )
                            .append(
                                $('<div/>')
                                .addClass('vto-edit-page vto-edit-retake')
                                .append('<p>RETAKING YOUR VIDEO WILL REMOVE YOUR CURRENT ONE </p>')
                                .append('<a class="button black-button vto-option-cancel" >CANCEL</a>')
                                .append('<a class="vto-retake-confirm button black-button bordered">RETAKE</a>')
                            )
                            .append(
                                $('<div/>')
                                .addClass('vto-edit-page vto-edit-delete')
                                .append('<p>ARE YOU SURE YOU WANT TO REMOVE YOUR VIRTUAL MODEL? </p>')
                                .append('<a class="vto-option-cancel button button black-button" >CANCEL</a>')
                                .append('<a class="vto-delete-confirm button black-button bordered">REMOVE</a>')
                            )
                        )
                        .append('<div class="sgh-vto-video-edit-background vto-option-cancel"></div>')
                    ).appendTo('#compare_results')

                $(
                    $('<div/>')
                        .attr('id', 'sgh_vto_overlay')
                        .addClass('vto-hide')
                        .append(
                            $('<div/>')
                            .attr('id', 'sgh-vto-overlay_video')
                            .append('<span id="user-id">c4a6953b-986c-4549-a927-a7c5d4ea1054</span>')
                            .append('<i class="modal-close sgh-vto-overlay-close">&#10006; Close</i>')
                            .append('<h3 class="vto-create-header">CREATE YOUR VIRTUAL MODEL</h3>')
                            .append(
                                $('<div/>')
                                .attr('id', 'sgh-vto-video-container')
                                .append('<div id="vto_app_root" class="vto-hide">loading</div>')
                            )
                        )
                        .append('<div class="vto-overlay-background"></div>')
                ).appendTo('#compare_results')

            $('.sgh-vto-overlay-close').on( "click", function() {
                obj.vtoClose()
                obj.closeVTOModelWindow()
            });

            $('.sgh-vto-model-close').on( "click", function() {
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
                    obj.buildOnModel()
                }
                
                obj.analyticsTrack('changed model: '+modelName);
                //console.log('modelName: '+modelName)
            });
           
            console.log('vtoElements()');
        },
        clearModelCanvas: function() {
            $('#vto-on-model__root').height($(window).width())
            //$('#vto-on-model__root').html('')
        },
        runSghUpcApi: function(pID) {
            var obj = this
            var api = '/webapp/wcs/stores/servlet/GetCatalogEntryDetailsByID?catalogId=10101&langId=-1&storeId=10152&productId='

            //Display ajax loading
            $('.overlay-modal_initial--pdp-swatch').fadeIn(300)
            



            function getFaceShapeArray(e) {
                var eArray = []
               e.forEach(function(g) {
                    eArray.push(' '+g.value)
               })
                var faceshape = eArray.toString();
                return faceshape
            }

            function getEyeSize(str) {
                var i = str.indexOf("/");
                if(i > 0){
                    return  str.slice(0, i);
                }else{
                    return "";
                }     
            }

            function getBridgeSize(str) {
                var i = str.indexOf("/");
                if(i > 0){
                    return  str.slice(i);
                }else{
                    return "";
                }     
            }
            
            window.jQuery.ajax(api+pID, {
                type: 'get',
                cache: true,
                async: true,
                success: function(data) {
                    var b = data.trim().replace("/*", "");
                    b = b.replace("*/", "");
                    var json = JSON.parse(b);
                    var upc = json.catalogEntry.catalogEntryIdentifier.externalIdentifier.partNumber
                    var catId = json.catalogEntry.catalogEntryIdentifier.uniqueID
                    var title = json.catalogEntry.description[0].name
                    var price = json.catalogEntry.offerPrice
                    var inStock = json.catalogEntry.inStock
                    var genderAll = ''
                    var gender = []
                    var attribute = json.catalogEntryAttributes.attributes
                    var brand = ''
                    var frameStyle = ''
                    var frameSize = ''
                    var eyeSize = ''
                    var bridgeSize = ''
                    var size = ''
                    var lensColor = ''
                    var faceShape = ''
                    var faceShapeArray = ''
                    var rating = ''
                    var frameSize = ''
                    var polarized = ''
                    var frameMaterial = ''
                    var lensMaterial = ''
                    var frameColor = ''
                    var description = json.catalogEntry.description[0].longDescription
                    var attribute = json.catalogEntryAttributes.attributes

                   // console.log('pID: '+catId)
                    //console.log('title: '+title)
                   // console.log('inStock: '+inStock)

                    //Update Product info with Json Data
                    $('.info-container .style:eq( 0 )').text(title)
                    $('.info-container .style:eq( 1 )').text("UPC#"+upc)
                    $('.info-container #upc').text(upc)
                    $('.productListPrice .price').text(price)
                    $('.info-container .catalog-polarized').remove()
                    if (description !== ''){
                        $('.itemDetailsList .description').text(description)
                    }

                    //Go through all attributes names to find each attributes
                    for (i = 0; i < attribute.length; i++) { 
                        var name = attribute[i].name
                        if ( name === 'Styles' && json.catalogEntryAttributes.attributes[i].value){
                            frameStyle = json.catalogEntryAttributes.attributes[i].value.value
                          //  console.log('frameStyle: '+ frameStyle);
                        }
                        if ( name === 'Rating' && json.catalogEntryAttributes.attributes[i].value){
                            rating = json.catalogEntryAttributes.attributes[i].value.value
                           // console.log('rating: '+ rating);
                        }
                        if ( name === 'Brands' && json.catalogEntryAttributes.attributes[i].value){
                            brand = json.catalogEntryAttributes.attributes[i].value.value
                          //  console.log('Brands: '+ brand);
                        }
                        if ( name === 'Secondary Frame Size' && json.catalogEntryAttributes.attributes[i].value){
                            frameSize = json.catalogEntryAttributes.attributes[i].value.value
                            eyeSize = getEyeSize(frameSize)
                            bridgeSize = getBridgeSize(frameSize)
                          //  console.log('frameSize: '+ frameSize + ' eyeSize:'+eyeSize+ ' bridge: '+bridgeSize);
                        }
                        if ( name === 'Size' && json.catalogEntryAttributes.attributes[i].value){
                            size = json.catalogEntryAttributes.attributes[i].value.value
                            // console.log('size: '+ size);
                        }
                        if ( name === 'Lens Color' && json.catalogEntryAttributes.attributes[i].value){
                            lensColor = json.catalogEntryAttributes.attributes[i].value.value
                           // console.log('lensColor: '+ lensColor);
                        }
                        if ( name === 'Frame Color' && json.catalogEntryAttributes.attributes[i].value){
                            frameColor = json.catalogEntryAttributes.attributes[i].value.value
                           // console.log('frameColor: '+ frameColor);
                        }
                        if ( name === 'Frame Material' && json.catalogEntryAttributes.attributes[i].value){
                            frameMaterial = json.catalogEntryAttributes.attributes[i].value.value
                           // console.log('frameMaterial: '+ frameMaterial);
                        }
                        if ( name === 'Lens Material' && json.catalogEntryAttributes.attributes[i].value){
                            lensMaterial = json.catalogEntryAttributes.attributes[i].value.value
                           // console.log('lensMaterial: '+ lensMaterial);
                        }
                        if ( name === 'Polarized Lens' && json.catalogEntryAttributes.attributes[i].value){
                            polarized = json.catalogEntryAttributes.attributes[i].value.value
                            if (polarized === 'Polarized Lens' ){
                               $('.info-container').append('<p class="catalog-polarized">Polarized</p>')
                            }else{
                                polarized = ''
                            }
                        }
                        if ( name === 'Face Shape' && json.catalogEntryAttributes.attributes[i].value){
                            faceShape = json.catalogEntryAttributes.attributes[i].values
                          //  console.log('faceShapeArray '+faceShape.length)
                            faceShape = getFaceShapeArray(faceShape)
                         //   console.log('faceShape: '+faceShape)
                        }
                        //console.log('attr: '+ name);
                    }

                    //Update Feature & Fit - Style Info
                    $('.description-info__att--style span').text(frameStyle)
                    $('.description-info__att--frame-material span').text(frameMaterial)
                    $('.description-info__att--lens-material span').text(lensMaterial)
                    $('.description-info__att--shape span').text(faceShape)
                    $('.description-info__att--fit span').text(size)


                    if(inStock === false && $('.out-of-stock').length < 1){
                        $('#add_to_cart').removeClass('red').addClass('gray').removeAttr('onclick', 'javascript:submitAddToCart();addToBagUTag(mainProduct);')
                        $('<div class="availableStatus out-of-stock">Out of Stock</div>').insertBefore('#PriceAddtoBagContainer')
                    }else if (inStock === true){
                        $('.getnotified').remove()
                        $('.availableStatus.out-of-stock').remove()
                        $('#add_to_cart').removeClass('gray').addClass('red').attr('onclick', 'javascript:submitAddToCart();addToBagUTag(mainProduct);')

                    }                    
                    
                    //Update Feature & Fit - Sizing Info    
                    $('.description-info__att--eyse-size span').text(eyeSize)
                    $('.description-info__att--temple-size span').text(bridgeSize)
                    $('.description-info__att--img').attr('src', '//s7d3.scene7.com/is/image/LuxotticaRetail/'+obj.settings.glassesUpc+'_shad_qt??$m_pdpSet$&layer=0&color=F3F2F2&wid=1100')                     

                   console.log('upc: '+obj.settings.glassesUpc)       
                },
                complete: function(){
                    //$('.ajax-loader-wrap, #ajax-container').show()
                    $("#expandedSwatches").addClass("hide");
                    $('.overlay-modal_initial--pdp-swatch').delay(300).fadeOut(300)
                   // console.log('complete')
                },
                error: function() {
                    $('.overlay-modal_initial--pdp-swatch').delay(300).fadeOut(300)
                    $('.overlay-modal_initial--pdp-swatch').addClass('overlay-modal_hide')
                    console.log( "error");
                    var track = {
                        'link_name': 'sgh: switch-swatch: load error: ' + pID,
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
        createCompare: function() {
            ///ProductCompareView?catalogId=10101&langId=-1&storeId=10152
            //updateCompareCookie('728542');
            var obj = this
            var $item = $('#compare .item .content > a')
            var upcs = []
            var currentVideoId = obj.settings.currentVideo;



            for (var idx= 0; idx < $item.length; ++idx){
                var hreft = $item[idx].href
                var lastslashindex = hreft.lastIndexOf('/');
                var upc= hreft.substring(lastslashindex  + 1).replace(".png","");
                var parent = $item[idx].closest( ".item" )
                var vtoSupported = false;

                var $remove = $( ".item" ).find('.remove')
                $remove.removeAttr('onclick')
                $remove.removeAttr('href')

                $(parent).attr('data-upc', upc)
                $(parent).find('.content a').removeAttr("href");


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

                $(parent).find('.add_to_cart').before('<a class="button black-button vto-on-model__shop-now vto-hide" href="/us/'+upc+'" >Shop Now</a>')
                upcs.push(upc);
                console.log(upc);

            }
            console.log('upc: '+upcs[0]);
            obj.settings.glassesUpc = upcs[0]
            $('.item[data-upc="'+obj.settings.glassesUpc+'"]').addClass('selected')


            function onSupportedUPC(isSupported) {

                if (isSupported === true){
                    console.log('isupported')
                    $('#vto-on-model').show();
                    $('#non-vto-supported').hide();
                    if (obj.settings.currentVideo && obj.settings.currentVideo != 'undefined' && obj.settings.currentVideo != 'deleted') {
                        obj.vtoApplication()
                        console.log('video id: '+currentVideoId)
                    }else{
                        obj.buildOnModel()
                        console.log('No video id')
                    }
                    //obj.analyticsTrack('supported upc:')
                }else{
                    $('#vto-on-model').hide();
                    $('#non-vto-supported').show();
                     console.log('No supported')
                }

            }

            function onError() {
                console.log('support error')
                
             }
             $('.item  a.remove').on( "click", function() {
                var $itemParent = $(this).closest( ".item" )
                var catID = $itemParent.attr( "id" ).replace('compare_prod_div_', '')
               if($itemParent.hasClass( "selected" )){
                    $('.item.selected').removeClass('selected')
                    console.log('number: '+$('.item  a.remove').index(this))
                    if($('.item  a.remove').index(this) === 0){
                        var $firstItem = $('#compare .item:eq(1)')
                    }else {
                        var $firstItem = $('#compare .item:eq(0)')
                    }
                    
                    $firstItem.addClass('selected')
                    var itemUPC = $firstItem.data( "upc" )
                    itemUPC = itemUPC.toString()
                    obj.settings.glassesUpc = itemUPC   
                    console.log('itemUPC: '+itemUPC)
                   
                    VtoApp.isUpcSupported(
                        itemUPC,
                        onSupportedUPC,
                        onError
                    )
                }
                 removeCompareItem(catID, this);
                console.log('remove: '+catID)
                
             });

            $('#compare .item .content').on( "click", function() {
                var $itemParent = $(this).closest( ".item" )
                $('.item.selected').removeClass('selected')
                $itemParent.addClass('selected')
                var itemUPC = $itemParent.data( "upc" )
                itemUPC = itemUPC.toString()
                obj.settings.glassesUpc = itemUPC   
                console.log('itemUPC: '+itemUPC)
                VtoApp.isUpcSupported(
                    itemUPC,
                    onSupportedUPC,
                    onError
                )
                obj.runSghUpcApi(obj.settings.glassesUpc)
               console.log('upc: '+obj.settings.glassesUpc) 
            });


        },
        getPDPGender: function() {
            var obj = this
            var api = '/webapp/wcs/stores/servlet/GetCatalogEntryDetailsByID?catalogId=10101&langId=-1&storeId=10152&productId='
            var glassesUpc = obj.settings.glassesUpc
            $('.ajax-loader-wrap, #ajax-container').hide();
            window.jQuery.ajax(api+glassesUpc, {
                type: 'get',
                async: true,
                crossDomain: true,
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
                   
                    console.log("gender: "+gender);
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
        hideOnModel: function(divide) {
            $('#vto-on-model').hide()
            $('#vto_modal_app_root').hide().insertAfter('#sgh-vto-overlay-video-buttons')
            $('.brandImg.lazy-container img.lazy').removeClass('vto-hide').show();
          //  console.log('hide on model')
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
                demo: {
                    onPageLoad: function() {obj.analyticsTrack('step 1: instructions')},
                    onFaceSwipe: function() {},
                    onCreateModel: function() {},
                    createModelClass: 'vto-create-model'
                },
                capture: {
                    onPageLoad: function() {obj.analyticsTrack('step 2: capture')},
                    onValidHeadtrack: function() {obj.analyticsTrack('step 2: capture: valid head track')},
                    onWebcamAllowed: function() {}
                },
                browsererror: {
                    onPageLoad: function() {obj.analyticsTrack('error: browser ')}
                },
                deviceerror: {
                    onPageLoad: function() {obj.analyticsTrack('error: device')}
                },
                permissionerror: {
                    onPageLoad: function() {obj.analyticsTrack('error: permission')}
                },
                processingerror: {
                    onPageLoad: function() {obj.analyticsTrack('error: processing')},
                    onRetry: function() {},
                    //processingErrorRetryClass: ''
                },
                uploaderror: {
                    onPageLoad: function() {obj.analyticsTrack('error: upload')},
                    onRetry: function() {},
                    //uploadErrorRetryClass: ''
                },
                upload: {
                    onPageLoad: function() {obj.analyticsTrack('step 3: select size and gender:')}
                },
                processing: {
                    onPageLoad: function() {obj.analyticsTrack('step 4: uploaded video: processing')}
                },
                preview: {
                    onPageLoad: function() {obj.analyticsTrack('step 4: preview')},
                    onFaceSwipe: function() {obj.analyticsTrack('step 4: preview: face swipe')},
                    //previewRetakeClass: '',
                    onRetake: function() {obj.analyticsTrack('step 4: preview: retake')},
                   // previewSaveClass: '',
                    onSave: function() {obj.analyticsTrack('step 4: preview: save')},
                   // previewContinueClass: '',
                    onContinue: function() {obj.analyticsTrack('step 4: preview: on continue')}
                },
                render: {
                    onPageLoad: function() {},
                    onFaceSwipe: function() {
                        if($('#sgh_vto_overlay.active').length){
                            obj.analyticsTrack('vto pdp: swipe face: on user')
                        }else{
                            obj.analyticsTrack('vto pdp: swipe face: on model')
                        }
                    },
                    onRenderGlasses: function() {}
                },
                comingsoon: {
                    onPageLoad: function() {obj.analyticsTrack('coming soon')}
                },
                rendererror: {
                    onPageLoad: function() {obj.analyticsTrack('error: render')}
                }
            }
            
            //console.log('upcGender:' +obj.settings.upcGender)
            $('.brandImg.lazy-container img.lazy').addClass('vto-hide').hide();

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
               // console.log('cookie1: '+modelVideoId)
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



            if ($.cookie('vtoId') && obj.settings.currentVideo !== 'deleted' && obj.settings.currentVideo !== ''){
                var vtoCookie = JSON.parse($.cookie('vtoId'))
                obj.settings.currentUserId = vtoCookie.userId
                obj.settings.currentVideo = vtoCookie.videoId
                if (obj.settings.currentVideo){
                    obj.settings.noVTOModel = false
                }
            }

            function renderModelSucceeded() {
                $('#vto-on-model').fadeIn( 300 );
                $('.vto-on-model__disclaimer').show();
                $('.vto-on-model__toggle').show();
                $('.vto-on-model__copy').show();
                setTimeout(function() {
                   $('.vto-on-model__toggle').removeClass('vto-on-model__toggle--disable')
               }, 800);
                
               //console.log('renderModelSucceeded')
            }

            function renderModelFlow() {
                
                setTimeout(function() {
                    $('#vto-on-model #vto_modal_app_root').show()
                }, 300);
                VtoApp.renderGlasses('vto_modal_app_root',
                  modelVideoId,
                  glassesUpc,
                  {width: 520, height: 640},
                  renderModelSucceeded(),
                  obj.genericErrorHandler,
                  {showRotateBar: true}
                );
                //console.log('renderModelFlow')
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
           console.log('buildOnModel');
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
           //console.log('gender: '+gender+ " fit "+fit)
            if(videoId && videoId != 'undefined' && videoId != 'deleted' && noVTOModel !== true){
                user = 'returning'
                //console.log('returning')
            } 

            if (gender !== '' && gender !== undefined){
                    gender = gender+': '
            }else{
                gender = ''
            }

            if (fit !== '' && fit !== undefined){
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
        runUserZoomSurvey: function() {
        	//<![CDATA[
                var obj = this
                var uzID = 'BDAB5B67369EE71180CF0050569444FB'
                if(obj.settings.showOnModel === true){
                    uzID = '396749E93581E71180CF0050569444FB'
                }
			     _uzactions = [];
				_uzactions.push(['_setID', uzID]);
				_uzactions.push(['_setSID', '771F242E3381E71180CF0050569444FB']);
				_uzactions.push(['_start']);
			(function() {
				var uz = document.createElement('script'); uz.type = 'text/javascript'; uz.async = true; uz.charset = 'utf-8';
				uz.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn5.userzoom.com/trueintent/js/uz_til_us.js?cuid=47E7EF406CCDE41180C90050569444FB';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(uz, s);
			})();
			//]]>
			//console.log('run userzoom survey')
        },
        vtoClose: function() {
            var obj = this
            $('#vto_modal_app_root').hide().insertBefore('#vto-on-model .vto-on-model__toggle')

            if(obj.settings.showOnModel === true){
                sghVTO.buildOnModel()
            }
            $('#page-wrapper').removeClass('vto-disable-scrolling').bind("touchmove")
            $( "#sgh_vto_overlay" ).removeClass('active').hide()
            $('body').removeClass('vto-disable-scrolling')
           	obj.runUserZoomSurvey()
            obj.analyticsTrack('closed vto');            
           // console.log('onCloseVto');
        },
        closeVTOModelWindow: function () {
            var obj = this
            $('#vto_modal_app_root').hide().insertBefore('#vto-on-model .vto-on-model__toggle')
            
            if(obj.settings.showOnModel === true){
                sghVTO.buildOnModel()
            }

            $('#pdp-container').removeClass('show-vto');
            $('body').removeClass('show-vto')
            $( '#sgh-vto-overlay_model' ).addClass('vto-hide').removeClass('active');
            obj.analyticsTrack('closed vto model');
           // console.log("closeVTOModelWindow")
        },
        genericErrorHandler:  function(error) {
            var errorText = error.toString()
            if (errorText.indexOf('resource is not available') >= 0){
               // console.log('yes!')
                sghVTO.resourceNotAvailable()
            }
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
         // console.log('track: sgh: vto: generic error: '+error);
        },
        resourceNotAvailable: function(){
            sghVTO.analyticsTrack('vto-id-reset' )           
            var videoRetake = true;  
            var glassesUpc = sghVTO.settings.glassesUpc;
            var currentUserId = sghVTO.settings.currentUserId;
            
            var cookieValue = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "retake": "'+videoRetake+'", "upc": "'+glassesUpc+'"}' );
            $.cookie("vtoCapture", JSON.stringify(cookieValue), {path: '/', domain: 'sunglasshut.com'});

            sghVTO.deleteSucceeded();
        },
        getVtoSize: function(divide) {
            var size = $(window).width() / divide, // size is the window width by default
                height = $(window).height() / divide;
            // landscape
            if (size > height) {
                size = height;
            }
            return {
                width: size,
                height: size
            };
        },
        captureCookie: function(videoRetake){
            var obj = this
            var glassesUpc = obj.settings.glassesUpc;
            var currentUserId = obj.settings.currentUserId;
            var cookieValue = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "retake": "'+videoRetake+'", "upc": "'+glassesUpc+'"}' );
            $.cookie("vtoCapture", JSON.stringify(cookieValue), {path: '/', domain: 'sunglasshut.com'});
           // console.log('captureCookie')
        },
        deleteSucceeded: function() {
            var obj = this
            var currentUserId = obj.settings.currentUserId;
            if ($.cookie('vtoId')){
                //$.cookie("vtoId", 'deleted', {expires: 1, path: '/', domain: 'sunglasshut.com'});
                
                var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "deleted"}' );
                $.cookie("vtoId", JSON.stringify(id), {expires: 60, path: '/', domain: 'sunglasshut.com'});
                //console.log('cookie: '+$.cookie("vtoId")) 
            }
            obj.settings.currentVideo = ""
            obj.analyticsTrack('option modal: delete modal: confirmed')
            var vtoUrl = 'http://' + window.location.host + window.location.pathname + window.location.search
             location.href = vtoUrl;
            obj.closeVTOModelWindow();
            $('#sgh-vto-video-container').addClass('active')             
            $( "#sgh-vto-vtomodel-container" ).removeClass('active')
            $('a.sgh-vto-overlay-open').find('span').text('TRY THEM ON')
           // $( '#sgh-vto-overlay_video' ).hide( );
            $('#sgh-vto-overlay_container').show();
            $('#vto-open-edit').hide();           
            $('#sgh-vto-video-edit-container')
                    .hide()
                    .addClass('vto-video-edit-modal-initial')
                    .removeClass('vto-video-edit-modal-delete')
                    .removeClass('vto-video-edit-modal-retake')
            $('#vto_modal_app_root').html('')
           // $('#vto_app_root').html('')
            obj.settings.currentVideo = ""
           
            obj.settings.noVTOModel = true;
            //console.log('deleteSucceeded() '+currentVideoId)
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
                if($('.fullscreenable .info-container').length < 1){
                    $('.fullscreenable div.renderer:not(.preview-page)').after('<div class="info-container vto-hide"></div>')
                }
                var brand = $('#update_cart_total .info-container').find('.brand').text()
                var price = $('#update_cart_total .info-container').find('.price').text()
                var style = $('#update_cart_total .info-container').find('.style').first().text()
                var fit   = $('.styleInfo ').find('li:eq(5)').html()
                var swatch = $('.swatchesTitle').find('h3').html()
                var polar = $('#update_cart_total .info-container > .catalog-polarized').length
                var polarIcon = (polar) ? '<p class="catalog-polarized">Polarized</p>':'';
               // console.log('polor: '+polarIcon);

                $('#sgh_vto_overlay .info-container').html(
                    '<p class="brand">'+brand+'</p>'+
                    polarIcon +
                    '<p class="price">'+price+'</p>'+
                    '<p class="style">'+style+'</p>'+
                    '<p class="swatch">'+swatch+'</p>'+
                    '<p class="fit">'+fit+'</p>'
                )
            }

            //check to see if user needs clicked retake or inital VM creation
            function checkForCaptureCookie(){
               
                if ($.cookie('vtoCapture')){ 
                    var vtoCaptureCookie = JSON.parse($.cookie('vtoCapture'));
                    obj.settings.currentUserId = vtoCaptureCookie.userId
                    
                    if (vtoCaptureCookie.retake === 'true' ){
                        videoRetake = true
                    }
                    return vtoCaptureCookie.userId;
                }else{
                    return undefined;
                }

            }

            function renderSucceeded() {
               // obj.settings.userGender = gender.gender;
                //obj.settings.userSize = gender.fit;
                var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "'+currentVideoId+'", "cat": "'+ obj.settings.userGender+'", "style": "'+obj.settings.userSize+'" }' );
                $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
                obj.settings.currentVideo = currentVideoId
                obj.settings.currentUserId = currentUserId
                var cookie = $.cookie("vtoId")
                $( "#vto-on-model" ).addClass('active').removeClass('vto-hide').show()
                $('#sgh-vto-overlay-video-buttons.vto-hide').removeClass('vto-hide')
                $('#sgh-vto-video-container').removeClass('active')             
                $('#vto-open-edit').delay( 300 ).fadeIn( 300 );
                setTimeout(function() {
                        $('#vto_modal_app_root').show()
                    }, 300);
                
                if(rendererSuccess != true){
                    getProductInfo()
                   
                    $('#vto-open-edit').on( "click", function() {
                       $('#sgh-vto-video-edit-container').fadeIn( 300 );
                       obj.analyticsTrack('option modal:')//
                    });

                    $('.p3dzoom-icon-link, .viewBy .fit, .viewBy .pdp-zoom').on( "click", function() {
                        if($('#pdp-container.show-vto').length > 0) {
                         obj.closeVTOModelWindow();
                        }
                    });

                    /*$('.redesignPdp-fit-active').on( "click", function() {
                        $(".pdpZoom.lazy-container").css("opacity", 0)
                    });*/

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
                        var vtoUrl;
                        obj.analyticsTrack('option modal: retake modal: confirmed' )
                        videoRetake = true;  
                        obj.captureCookie(videoRetake)
                        vtoUrl = 'https://' + window.location.host + window.location.pathname + window.location.search
                        location.href = vtoUrl;                            
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
                        obj.deleteSucceeded()
                       
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
                    
                    $('a.sgh-vto-overlay-open').find('span').text('VIRTUAL MODEL')
                    rendererSuccess = true
                   // console.log('analyticsTrack - vto pdp '+rendererSuccess)
                }
                $('#sgh_vto_overlay .info-container').delay( 200 ).fadeIn( 300 );
                $('#sgh-vto-overlay_container').hide();
                obj.analyticsTrack('vto pdp:' )
                videoRetake = false;
                noVTOModel = false;
               //console.log('cookie: '+cookie) 
              // console.log('render-success')
            }

            var analyticsConfig = {
                demo: {
                    onPageLoad: function() {obj.analyticsTrack('step 1: instructions')},
                    onFaceSwipe: function() {},
                    onCreateModel: function() {},
                    createModelClass: 'vto-create-model'
                },
                capture: {
                    onPageLoad: function() {obj.analyticsTrack('step 2: capture')},
                    onValidHeadtrack: function() {obj.analyticsTrack('step 2: capture: valid head track')},
                    onWebcamAllowed: function() {}
                },
                browsererror: {
                    onPageLoad: function() {obj.analyticsTrack('error: browser ')}
                },
                deviceerror: {
                    onPageLoad: function() {obj.analyticsTrack('error: device')}
                },
                permissionerror: {
                    onPageLoad: function() {obj.analyticsTrack('error: permission')}
                },
                processingerror: {
                    onPageLoad: function() {obj.analyticsTrack('error: processing')},
                    onRetry: function() {},
                    //processingErrorRetryClass: ''
                },
                uploaderror: {
                    onPageLoad: function() {obj.analyticsTrack('error: upload')},
                    onRetry: function() {},
                    //uploadErrorRetryClass: ''
                },
                upload: {
                    onPageLoad: function() {obj.analyticsTrack('step 3: select size and gender:')}
                },
                processing: {
                    onPageLoad: function() {obj.analyticsTrack('step 4: uploaded video: processing')}
                },
                preview: {
                    onPageLoad: function() {obj.analyticsTrack('step 4: preview')},
                    onFaceSwipe: function() {obj.analyticsTrack('step 4: preview: face swipe')},
                    //previewRetakeClass: '',
                    onRetake: function() {obj.analyticsTrack('step 4: preview: retake')},
                   // previewSaveClass: '',
                    onSave: function() {obj.analyticsTrack('step 4: preview: save')},
                   // previewContinueClass: '',
                    onContinue: function() {obj.analyticsTrack('step 4: preview: on continue')}
                },
                render: {
                    onPageLoad: function() {},
                    onFaceSwipe: function() {obj.analyticsTrack('vto pdp: face swipe')},
                    onRenderGlasses: function() {}
                },
                comingsoon: {
                    onPageLoad: function() {obj.analyticsTrack('coming soon')}
                },
                rendererror: {
                    onPageLoad: function() {obj.analyticsTrack('error: render')}
                }
            }

            
            function renderGlassesFlow(upc) {
               // console.log('renderedGlasses" '+renderedGlasses+ " upc: "+upc+" currentVideoId: "+currentVideoId)
               // console.log('self.supportedFeatures.rendering'+this.supportedFeatures.rendering)
               // if (renderedGlasses !== upc && currentVideoId || videoRetake === true ) {
                    $( "#vto-on-model" ).addClass('active').removeClass('vto-hide').show()
                    $('#pdp-container').addClass('show-vto')  
                    $('body').addClass('show-vto')   
                    $( "#sgh-vto-vtomodel-container" ).addClass('active').removeClass('vto-hide')
                    $("#video-id").text(currentVideoId);
                    $('.vto-on-model__disclaimer').hide();
                    $('.vto-on-model__toggle').hide();
                    $('.vto-on-model__copy').hide();
                    setTimeout(function() {
                        $('#vto_modal_app_root').show()
                    }, 300);
                    VtoApp.renderGlasses('vto_modal_app_root',
                          currentVideoId,
                          glassesUpc,
                          {width: 520, height: 640},
                          renderSucceeded,
                          obj.genericErrorHandler,
                          {showRotateBar: true}
                        );
                    renderedGlasses = upc;
                    videoRetake = false; 
                    console.log('renderGlassesFlow')
                /*}else{
                    $( "#sgh-vto-vtomodel-container" ).addClass('active').removeClass('vto-hide')
                    $('#pdp-container').addClass('show-vto')
                    $('body').addClass('show-vto')
                    $('#vto-open-edit').fadeIn( 200 );
                    obj.analyticsTrack('vto pdp: reopened' )
                }*/
                $('#sgh-vto-video-container').removeClass('active')      
            }


            function createCookie(videoId, gender) {
                currentVideoId = videoId;
                obj.settings.userGender = gender.gender;
                obj.settings.userSize = gender.fit;
                //console.log('videoId: '+videoId)
                $('#pdp-container').addClass('show-vto')  
                $('body').addClass('show-vto')
                $('#sgh_vto_overlay').removeClass('active').addClass('vto-hide').hide();
                $( "#sgh-vto-overlay_model" ).addClass('active').removeClass('vto-hide')
                setTimeout(function() {
                    $('#sgh-vto-vtomodel-container #vto_modal_app_root').show()
                }, 300);
               //console.log('createCookie: ' + currentVideoId)
                VtoApp.renderGlasses('vto_modal_app_root',
                      currentVideoId,
                      glassesUpc,
                      {width: 520, height: 640},
                      renderSucceeded,
                      obj.genericErrorHandler,
                      {showRotateBar: true}
                    );
               // console.log('createCookie')
            }

            function onPrivacyPolicy() {
               // console.log('onPrivacyPolicy')
            }

            function startCaptureFlow() {
                //obj.hideOnModel()
                $('#sgh_vto_overlay').addClass('active').removeClass('vto-hide').show();
                $('body').addClass('show-vto')
                //console.log("glassesUpc:"+glassesUpc+" vtoRoot: "+vtoRoot+" currentUserId: "+currentUserId + " currentVideoId: " + currentVideoId)
                $(".vto-try-them-on").hide();
                
                VtoApp.startCapture(
                    'vto_app_root',
                    currentUserId,
                    glassesUpc,
                    {width: 480, height: 480},
                    {
                        onCloseVto: obj.vtoClose,
                        showWelcomePage: true,
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
               // console.log('startCaptureFlow1');
            }

            function getUrlParameter(sParam) {
                var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : sParameterName[1];
                    }
                }

                return undefined;
            };

            function createVTOIdCookie(){
                var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'"  }' );
                $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
                //console.log('create id cookie')
            }

            function vtoActive() {
                $(".pdpZoom.lazy-container").css("opacity", "")
                $("#product").removeClass("showingRotator")
                $(".p3dzoom-icon-link").removeClass("redesignPdp-rotate-active active").addClass("redesignPdp-rotate-inactive")
                $("#pdpImage img").remove()
                $(".iviewer_toggle").children().remove()
                $("#zoomViewer").hide().removeClass("open")
                $(".close", "#right-nav").show();
                $(".fit", ".viewBy").removeClass("redesignPdp-fit-active active").addClass("redesignPdp-fit-inactive"), 
                $("#fit-overlay").hide();
                $("#p3dzoom-image").unreel(), $(".p3dzoom-rotate-btn").unbind();
            }

            function loadVtoApp(data) {
                //console.log('loadVtoApp '+currentUserId);
                var $overlayOpen = $('a.sgh-vto-overlay-open')
                var modelVideoId = obj.settings.modelVideoId
                VtoApp.init(
                    currentUserId,
                    glassesUpc,
                    'sunglasshut', 
                    obj.settings.countryCode, 
                    'master',
                     analyticsConfig,
                    function (userId, supportedFeatures) {
                       
                      // console.log('webcamCapture: ' + supportedFeatures.webcamCapture)
                       // console.log('currentUserId: '+ currentUserId)
                        if(!currentUserId) {
                            currentUserId = userId;
                            createVTOIdCookie()
                        }else {
                          currentUserId = userId;  
                        }
                        
                        //$("#user-id").text("#user-id "+userId);
                        
                        console.log('webcamCapture: '+ supportedFeatures.webcamCapture)
                        console.log('rendering: '+ supportedFeatures.rendering)
                        console.log('upcSupported: '+ obj.settings.upcSupported)

                        if (supportedFeatures.webcamCapture === true && supportedFeatures.rendering === true && obj.settings.upcSupported === true){
                           
                            //Check if Capture is enabled and user doesn't want to retake

                             console.log('loadVtoApp2 : ')
                           
                            if (currentVideoId && currentVideoId != 'undefined') {
                                $overlayOpen.find('span').text('VIRTUAL MODEL')
                                $overlayOpen.removeClass('vto-hide').addClass('vto-show')

                                if (checkForCaptureCookie() == undefined || videoRetake === false) {
                                    renderGlassesFlow(glassesUpc);
                                    
                                }
                            }else{
                                $overlayOpen.find('span').text('TRY THEM ON')
                                $overlayOpen.removeClass('vto-hide').addClass('vto-show')

                                if (checkForCaptureCookie() === undefined && videoRetake === false && obj.settings.showOnModel === true){
                                    if ( gender === ''){
                                        obj.getPDPGender()
                                    }else {
                                        obj.buildOnModel()
                                    }
                                }
                            }
                            console.log('upcSupported:2  '+ obj.settings.upcSupported)

                            // Chech to see if vtoCapture has a vtoID & doesn't have video ID or user wants to retake
                            if (!currentVideoId && checkForCaptureCookie() !== undefined || videoRetake === true) {
                               
                                startCaptureFlow(obj.settings.currentUserId);
                                 obj.hideOnModel()
                                
                                // PDP Try Them On button
                                $overlayOpen.on( "click", function() {
                                    //If no video id open onboarding overlay
                                    var ctaAttr = $(this).attr('data-cta')
                                    var parent = $(this).parent();
                                    

                                    if (currentVideoId === '' || currentVideoId === 'deleted' || currentVideoId === 'undefined'){
                                        videoRetake = true;
                                        obj.analyticsTrack('clicked try on: '+ctaAttr )
                                        var vtoUrl = 'https://' + window.location.host + window.location.pathname + window.location.search
                                        obj.captureCookie(videoRetake)
                                        location.href = vtoUrl;
                                        onsole.log('click to open if')
                                    }else{

                                        vtoActive()
                                    
                                        obj.hideOnModel()
                                        //Check to see where the demo model lives.
                                        if (parent.is('.vto-on-model__copy')) {
                                            $("html, body").animate({ scrollTop: 0 }, 500);
                                        }

                                        

                                        if (currentVideoId && $('.show-vto').length < 1) {
                                            $( "#sgh-vto-overlay_model" ).addClass('active').removeClass('vto-hide')
                                            renderGlassesFlow(glassesUpc);
                                            obj.settings.currentVideo = currentVideoId
                                            noVTOModel = true;
                                            console.log('Yes Video - Open Overlay')
                                           // noVTOModel = true;
                                        } else if ($('.show-vto').length > 0){
                                            obj.closeVTOModelWindow();
                                        }else{
                                            $('#sgh_vto_overlay').addClass('active').removeClass('vto-hide').show();
                                            console.log('No Video - Open Overlay')
                                        }
                                      console.log('click to open')

                                        if ($('body.show-vto').length > 0){
                                            var ctaAttr = $(this).attr('data-cta')
                                            obj.analyticsTrack('clicked try on: '+ctaAttr )
                                        }

                                    }
                                    
                                })

                                // Remove vtoCapture Cookie is exists
                                if($.cookie("vtoCapture")){
                                    $.cookie("vtoCapture", null, {path: '/', domain: 'sunglasshut.com'});
                                }
                                console.log("vtoId: "+ checkForCaptureCookie())
                            } else {
                                console.log("vtoId else: "+ checkForCaptureCookie())
                                $overlayOpen.on( "click", function() {
                                    var ctaAttr = $(this).attr('data-cta')
                                    var vtoUrl
                                    vtoActive()

                                    if (!currentVideoId || currentVideoId === 'deleted' || currentVideoId === 'undefined') {
                                        // Check to protocal doesn't equal HTTPs already
                                        //if(location.protocol !== 'https:'){
                                            videoRetake = true;
                                            obj.analyticsTrack('clicked try on: '+ctaAttr )
                                            vtoUrl = 'https://' + window.location.host + window.location.pathname + window.location.search
                                            obj.captureCookie(videoRetake)
                                            location.href = vtoUrl;
                                        /*}else{
                                            obj.hideOnModel()
                                            startCaptureFlow(currentUserId);
                                              
                                        }*/
                                        console.log("HTTPS URLS: "+currentUserId)  
                                    }else if ($('.show-vto').length > 0){
                                        obj.closeVTOModelWindow();
                                    } else{
                                        
                                        $( "#sgh-vto-overlay_model" ).addClass('active').removeClass('vto-hide')
                                        var parent = $(this).parent();
                                        obj.hideOnModel()
                                        
                                        if (parent.is('.vto-on-model__copy')) {
                                            $("html, body").animate({ scrollTop: 0 }, 500);
                                        }

                                        renderGlassesFlow(glassesUpc);
                                        obj.settings.currentVideo = currentVideoId
                                        noVTOModel = true;
                                       console.log("ELSE currentVideo: "+currentVideoId) 
                                    }
                                     if ($('body.show-vto').length > 0){
                                    obj.analyticsTrack('clicked try on: '+ctaAttr )
                                    }
                                });
                                
                            }
                        } else if (supportedFeatures.webcamCapture === false && supportedFeatures.rendering === true && obj.settings.upcSupported === true) {
                            $('.sgh-vto-overlay-open').hide()
                            $('.vto-on-model__copy').hide()

                            //Check if Capture is enabled and user doesn't want to retake
                            /*if(obj.settings.showOnModel === true){
                                obj.getPDPGender()
                            }*/

                            if ( obj.settings.showOnModel === true && gender === ''){
                                obj.getPDPGender()
                            }else if (obj.settings.showOnModel === true){
                                obj.buildOnModel()
                            }
                            obj.analyticsTrack('no webcam support' )
                           // console.log('Rendering only')
                        } else if (supportedFeatures.webcamCapture === false && supportedFeatures.rendering === false && obj.settings.upcSupported === true){
                            obj.analyticsTrack('no webcam-render support' )
                        }else{
                            $('#non-vto-supported').show();
                            console.log('non vto supported')
                        }
                        
                    }, 
                    obj.genericErrorHandler,
                    {modelName: modelVideoId}
                );

            }
            loadVtoApp(data)
  
        	
          //console.log('vtoApplication');
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
                        if ($.cookie('vtoId') && $.cookie('vtoId') != 'deleted'){
                            var vtoCookie = JSON.parse($.cookie('vtoId'))
                                obj.settings.currentUserId = vtoCookie.userId
                                if(vtoCookie.videoId && vtoCookie.videoId != 'deleted'  && $.cookie('vtoId') != 'deleted' ) {
                                    obj.settings.currentVideo = vtoCookie.videoId
                                    obj.settings.userGender = vtoCookie.cat;
                                    obj.settings.userSize = vtoCookie.style;
                                }
                                if (obj.settings.currentVideo){
                                    obj.settings.noVTOModel = false
                                }
                        }
                       //console.log('obj.settings.currentUserId:'+obj.settings.currentUserId)
                        if (isSupported === true){
                            obj.settings.upcSupported =  true;
                           
                            obj.analyticsTrack('supported upc:')
                        }else{
                             $('#vto-on-model').hide();
                            $('#non-vto-supported').show();
                             obj.analyticsTrack('not supported upc:')
                        }
                        obj.vtoElements() //Builds elements for VTO and on model
                        obj.runSghUpcApi(obj.settings.glassesUpc)
                        obj.vtoApplication(data) //launches vto init()
                      // console.log('UPC:'+ obj.settings.glassesUpc)
                    }
                    obj.createCompare()
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
