(function() {
    "use strict";
    var t = {
        settings: {
            currentVideo: "",
            currentUserId: "",
            userGender: "",
            userSize: "",
            noVTOModel: !0,
            glassesUpc: "8053672495652"
        },
        analyticsTrack: function(t) {
            var e = this, a = (e.settings.currentVideo, e.settings.noVTOModel, e.settings.userGender, 
            e.settings.userSize, {
                link_name: "sgh: vto: " + t,
                site_events: {
                    see_their_shades: !0
                },
                authenticated_status: utag_data.authenticated_status || "",
                language: utag_data.language || "",
                cntry: utag_data.country || ""
            });
            _trackAnalytics(a), console.log("track: sgh: vto: " + t);
        },
        genericErrorHandler: function(t) {
            $("#vto_app_root").hide(), $("#sgh-vto-overlay_video").hide(), $("#vto_start_button").addClass("hide");
            var e = {
                link_name: "sgh: vto: generic error: " + t,
                site_events: {
                    see_their_shades: !0
                },
                authenticated_status: utag_data.authenticated_status || "",
                language: utag_data.language || "",
                cntry: utag_data.country || ""
            };
            _trackAnalytics(e);
        },
        vtoApplication: function(t) {
            var e = this, a = e.settings.glassesUpc, s = e.settings.currentUserId, o = (e.settings.currentVideo, 
            e.settings.noVTOModel, utag.data.page_type, {});
            !function(t) {
                $("a.sgh-vto-overlay-open"), VtoApp.init(s, a, "sunglasshut", "en-US", "master", o, function(t, a) {
                    $("#user-id").text("#user-id " + t), s = t, !1 !== a.webcamCapture && !1 !== a.rendering ? ($(".vtoMsgA").show(), 
                    $(function() {
                        $("#home").length > 0 && $("#home-carousel").slick("unslick").show().slick({
                            slidesToShow: 1,
                            dots: !0,
                            arrows: !1,
                            slidesToScroll: 1,
                            infinite: !0,
                            autoplay: !0,
                            lazyLoad: "ondemand"
                        });
                    }), $.cookie("VTOSupported", "true", {
                        path: "/",
                        domain: "sunglasshut.com"
                    }), e.analyticsTrack("gigi: webcam support")) : ($(".vtoMsgB").show(), $(function() {
                        $("#home").length > 0 && $("#home-carousel").slick("unslick").show().slick({
                            slidesToShow: 1,
                            dots: !0,
                            arrows: !1,
                            slidesToScroll: 1,
                            infinite: !0,
                            autoplay: !0,
                            lazyLoad: "ondemand"
                        });
                    }), $.cookie("VTOSupported", "false", {
                        path: "/",
                        domain: "sunglasshut.com"
                    }), e.analyticsTrack("gigi: no webcam support"));
                }, e.genericErrorHandler);
            }();
        },
        vtoAPI: function() {
            var t = this;
            "true" === $.cookie("VTOSupported") ? ($(".vtoMsgA").show(), t.analyticsTrack("gigi: webcam support")) : "false" === $.cookie("VTOSupported") ? ($(".vtoMsgB").show(), 
            t.analyticsTrack("gigi: no webcam support")) : ($(".ajax-loader-wrap, #ajax-container").hide(), 
            window.jQuery.ajax("https://d1phjbsp802ne8.cloudfront.net/vto-desktop-application.js?v=01", {
                type: "get",
                dataType: "script",
                cache: !0,
                async: !0,
                crossDomain: !0,
                success: function(e) {
                    function a(a) {
                        !0 === a && t.vtoApplication(e);
                    }
                    VtoApp.isUpcSupported(t.settings.glassesUpc, a, t.genericErrorHandler);
                },
                complete: function() {
                    $(".ajax-loader-wrap, #ajax-container").show();
                },
                error: function() {
                    t.analyticsTrack("error: loading script: "), console.log("error");
                }
            }));
        },
        init: function() {
            return this.vtoAPI(), this;
        }
    };
    window.sghVTO = t;
})(), $(function() {
    sghVTO.init();
});