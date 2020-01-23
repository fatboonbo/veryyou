        define([], function() {
        
                function init_popupAds() {
                    "use strict";                    
                    var html = [];
                    html.push('<div id="popupAD" class="popupAD_wrapper" style="display: none">' +
                        '<button id="popupAD_button" data-title="" data-subtitle="" style="--button-bgcolor:#010101;--button-textcolor:#f5f5f5">' +
                        '<span class="arrow_down"><i class="icon-chevron-up"></i></span>' +
                        '</button>' +
                        '<div class="popupAd_slide_wrapper">' +
                        '<ul class="popupAd_slide">' +
                        '</ul>' +
                        '</div>' + '</div>' +
                        '<div class="modal-backdrop fade in hide"></div>');
                    document.getElementById("footer").insertAdjacentHTML('beforeend', html);
                }

                function init_slides() {
                    "use strict";
                    var
                        atv = "active",
                        sh = "show",
                        opn = "open",
                        clk = "clicked";
                    setTimeout(function() {
                        $("#popupAD").show();
                        setTimeout(function() {
                            if (!$(".popupAD_wrapper").hasClass(atv)) {
                                $(".popupAD_wrapper").addClass(atv).delay(5000);
                                $(".modal-backdrop").addClass(sh);
                                $(".arrow_down").addClass(opn);
                            }
                        }, 2000);
                        $("#popupAD_button,.modal-backdrop").on("click touch", function() {
                            $('.popupAD_wrapper').toggleClass(atv);
                            $(".arrow_down").toggleClass(opn);
                            $(".modal-backdrop").toggleClass(sh);
                        });

                        require(["slick"], function() {
                            var $carouselAD = $('.popupAd_slide');

                            function showSliderScreen($widthScreen) {

                                if ($widthScreen >= "1023") {
                                    if (!$carouselAD.hasClass('slick-initialized')) {
                                        $carouselAD.slick({
                                            mobileFirst: true,
                                            infinite: false,
                                            arrows: true,
                                            dots: false,
                                            speed: 300,
                                            verticalSwiping: false,
                                            autoplay: false,
                                            fade: false,
                                            cssEase: 'linear',
                                            responsive: [, {
                                                breakpoint: 1023,
                                                settings: {
                                                    //slidesToShow: 1.03,
                                                    slidesToShow: 1,
                                                    slidesToScroll: 1,
                                                    mobileFirst: true
                                                }
                                            }]
                                        });
                                    }

                                } else {
                                    if ($carouselAD.hasClass('slick-initialized')) {
                                        $carouselAD.slick("unslick");
                                    }
                                }
                            }

                            var widthScreen = $(window).width();
                            $(window).ready(showSliderScreen(widthScreen)).resize(
                                function() {
                                    var widthScreen = $(window).width();
                                    showSliderScreen(widthScreen);
                                }
                            );
                        }); //requirejs

                    }, 500); //setTimeout
                }
                return {
                    init_popupAds: init_popupAds,
                    init_slides: init_slides
                };
        
        }); //end of define