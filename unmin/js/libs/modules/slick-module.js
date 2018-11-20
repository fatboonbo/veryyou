 define(["slick"], function() {
  "use strict";
     $(document).ready(function() {
         $(document).router({
             index_main: function() {
                 // index
                 /**/
                 $(document).ready(function() {

                   $('.carousel-index-banner-bind').slick({
                     infinite: true,
                     speed: 600,
                     autoplay: true,
                     autoplaySpeed: 2200,
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     //lazyLoad: 'anticipated',
                     arrows: true,
                     cssEase: 'ease-in-out',
                     fade: false,
                     pauseOnHover: false,
                     dots: false,
                     mobileFirst: false,
                     verticalSwiping: false,
                     responsive: [
                     {
                      breakpoint: 1024,
                      settings: {
                        mobileFirst: true
                      }
                    },{
                      breakpoint: 769,
                      settings: {
                        dots: true
                      }
                    }
                    ]
                   });

                   $(document).on('keydown', function(e) {
                    if(e.keyCode == 37) {
                      $('.carousel-index-banner-bind').slick('slickPrev');
                    }
                    if(e.keyCode == 39) {
                      $('.carousel-index-banner-bind').slick('slickNext');
                    }
                  }),l('index slick banner');

                 });
                 

                 $(document).ready(function() {
                   var $carouselpc = $('.carousel-index-banner');

                   function showSliderScreen($widthScreen) {
                     //console.log($widthScreen);
                     //console.log("slider launch at " + (t1 - t0) + " milliseconds.")


                     if ($widthScreen >= "1007") {
                       if (!$carouselpc.hasClass('slick-initialized')) {
                           //console.log("slick initialized");
                           
                           $carouselpc.slick({
                             infinite: true,
                             speed: 600,
                             autoplay: true,
                             autoplaySpeed: 2200,
                             slidesToShow: 1,
                             slidesToScroll: 1,
                             arrows: true,
                             cssEase: 'ease-in-out',
                             fade: false,
                             pauseOnHover: false,
                             dots: false,
                             verticalSwiping: false,
                             });
                             //$(document).find('.slick-list').attr('tabindex', 0).focus();
                             //console.log("carousel product image");
                             $(document).on('keydown', function(e) {
                              if(e.keyCode == 37) {
                                $carouselpc.slick('slickPrev');                                
                              }
                              if(e.keyCode == 39) {
                                $carouselpc.slick('slickNext');
                              }
                            });
                             
                         }

                     } else {
                       if ($carouselpc.hasClass('slick-initialized')) {
                           $carouselpc.slick("unslick");
                       }
                   }
               }

               var widthScreen = $(window).innerWidth();
               $(window).ready(showSliderScreen(widthScreen)).resize(
                   function() {
                       var widthScreen = $(window).innerWidth();
                       showSliderScreen(widthScreen);
                   }
                   ),l('pc slick initialized');

           });
                 $(document).ready(function() {
               var $carouselmm = $('.carousel-index-banner-m');
           function showSliderScreen($widthScreen) {
               //console.log($widthScreen);
               l($widthScreen);

               if ($widthScreen <= "1006") {
                   if (!$carouselmm.hasClass('slick-initialized')) {
                       $carouselmm.slick({
                           mobileFirst:true,
                           slidesToShow: 1,
                           slidesToScroll: 1,
                           infinite: true,
                           arrows: true,
                           dots:true,
                           speed: 300,
                           autoplay: true,
                           autoplaySpeed: 3000,
                           fade:false,
                           //lazyLoad: 'anticipated',
                           lazyLoad: 'progressive',
                           cssEase: 'cubic-bezier(.8,.1,1,1)',
                           //cssEase: 'cubic-bezier(.19,1,.22,1)',
                           pauseOnHover:false,
                           verticalSwiping:false
                       });
                   }

               } else {
                   if ($carouselmm.hasClass('slick-initialized')) {
                       $carouselmm.slick("unslick");
                   }
                }   
           }


           var widthScreen = $(window).innerWidth();
           $(window).ready(showSliderScreen(widthScreen)).resize(
               function () {
                   var widthScreen = $(window).innerWidth();
                   showSliderScreen(widthScreen);
               }
           );
           });
                 $(document).ready(function() {
                   var $carouselig = $('.carousel-instagram');

                   function showSliderScreen($widthScreen) {
                     //console.log($widthScreen);
                     //console.log("slider launch at " + (t1 - t0) + " milliseconds.")


                     if ($widthScreen >= "1007") {
                       if (!$carouselig.hasClass('slick-initialized')) {
                         l('instagram slick initialized');
                         $carouselig.slick({
                           dots: false,
                           infinite: false,
                           autoplay: false,
                           arrows: true,
                           autoplaySpeed: 8000,
                           slidesToShow: 5,
                     slidesToScroll: 1,
                     lazyLoad: 'ondemand',
                     cssEase: 'ease-in-out',
                     adaptiveHeight: true,
                     verticalSwiping: false,
                     swipeToSlide: true,
                     rows: 2,
                     slidesPerRow: 1,
                     touchThreshold: 50,
                     responsive: [{}, {
                       breakpoint: 1025,
                       settings: {
                         slidesToShow: 5,
                         slidesToScroll: 1,
                         arrows: true,
                       }
                     }, {
                       breakpoint: 480,
                       settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                         autoplay: false,
                       }
                     }]
                   });
                       }

                     } else {
                       if ($carouselig.hasClass('slick-initialized')) {
                         $carouselig.slick("unslick");
                       }
                     }   
                   }


                   var widthScreen = $(window).innerWidth();
                   $(window).ready(showSliderScreen(widthScreen)).resize(
                     function () {
                       var widthScreen = $(window).innerWidth();
                       showSliderScreen(widthScreen);
                     }
                     );
                 });
             },/*
             product_list_main: function() {
                 // product list/PDList2.asp
                 var $carouseleb = $('.carousel-editors-pick-big');
                 $carouseleb.slick({
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     infinite: true,
                     arrows: false,
                     dots: true,
                     speed: 300,
                     autoplay: true,
                     autoplaySpeed: 2000,
                     fade: true,
                     //lazyLoad: 'ondemand',
                     cssEase: 'cubic-bezier(.8,.01,1,1)',
                     pauseOnHover: false,
                 });

                 $('.carousel-editors-pick-small').slick({
                     dots: false,
                     infinite: true,
                     speed: 500,
                     autoplay: false,
                     slidesToShow: 4,
                     slidesToScroll: 4,
                     //lazyLoad: 'ondemand',
                     arrows: true,
                     cssEase: 'ease-in-out',
                     responsive: [{}, {
                         breakpoint: 769,
                         settings: {
                             slidesToShow: 3,
                             slidesToScroll: 3,
                         }
                     }, {
                         breakpoint: 520,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 1,
                         }
                     }]
                 });
             },*/
             product_main: function() {
                 // PDContent.asp

                 $(document).ready(function() {
                   var $carouselm = $('.carousel-product-image');

                   function showSliderScreen($widthScreen) {
                     //console.log($widthScreen);
                     //console.log("slider launch at " + (t1 - t0) + " milliseconds.")


                     if ($widthScreen <= "992") {
                       if (!$carouselm.hasClass('slick-initialized')) {
                           l("p1 slick initialized");
                           $carouselm.slick({
                               mobileFirst: true,
                               slidesToShow: 1,
                               slidesToScroll: 1,
                               infinite: true,
                               arrows: true,
                               dots: false,
                               speed: 300,
                               verticalSwiping: false,
                               autoplay: false,
                               fade: false,
                               lazyLoad: 'ondemand',
                                 //lazyLoad: 'anticipated',
                                 //lazyLoad: 'aggressive',
                                 //cssEase: 'cubic-bezier(.8,.01,1,1)',
                                 //nextArrow: '<i class="icon-arrow-right2"></i>',
                                 //prevArrow: '<i class="icon-arrow-left2"></i>',  
                                 cssEase: 'linear',
                                 centerMode: false,
                                 pauseOnHover: false,
                                 adaptiveHeight: false
                             });
                             //console.log("carousel product image");
                         }

                     } else {
                       if ($carouselm.hasClass('slick-initialized')) {
                           $carouselm.slick("unslick");
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

           });
                 $(".colorclick").click(function () {
                     var $carouselm = $('.carousel-product-image');
                     var widthScreen = $(window).width();
                     if (widthScreen <= "992") {
                         if (!$carouselm.hasClass('slick-initialized')) {
                             //console.log("slick initialized");
                             $carouselm.slick({
                                 mobileFirst: true,
                                 slidesToShow: 1,
                                 slidesToScroll: 1,
                                 infinite: true,
                                 arrows: true,
                                 dots: false,
                                 speed: 300,
                                 verticalSwiping: false,
                                 autoplay: false,
                                 fade: false,
                                 lazyLoad: 'ondemand',
                                 //lazyLoad: 'anticipated',
                                 //cssEase: 'cubic-bezier(.8,.01,1,1)',
                                 //nextArrow: '<i class="icon-arrow-right2"></i>',
                                 //prevArrow: '<i class="icon-arrow-left2"></i>',  
                                 cssEase: 'linear',
                                 centerMode: false,
                                 pauseOnHover: false,
                                 adaptiveHeight: false
                             });
                             //console.log("carousel product image");
                         }

                     } else {
                         if ($carouselm.hasClass('slick-initialized')) {
                             $carouselm.slick("unslick");
                         }
                     }
                 });
                 $('.carousel-instagram-small').slick({
                     dots: true,
                     infinite: true,
                     speed: 500,
                     arrows: false,
                     autoplay: false,
                     //slidesToShow: 3,
                     slidesToScroll: 3,
                     lazyLoad: 'ondemand',
                     cssEase: 'ease-in-out',
                     responsive: [{}, {
                         breakpoint: 1024,
                         settings: {
                             slidesToShow: 3,
                             slidesToScroll: 3,
                         }
                     }, {
                         breakpoint: 769,
                         settings: {
                             slidesToShow: 6,
                             slidesToScroll: 6,
                         }
                     }, {
                         breakpoint: 481,
                         settings: {
                             slidesToShow: 3,
                             slidesToScroll: 3,
                         }
                     }]
                 });

                 $(document).ready(function() {
                   var $carouselr = $('.carousel-recommend');

                   function showSliderScreen($widthScreen) {
                     //console.log($widthScreen);
                     //console.log("slider launch at " + (t1 - t0) + " milliseconds.")


                     if ($widthScreen >= "767") {
                       if (!$carouselr.hasClass('slick-initialized')) {
                           //console.log("slick initialized");
                           $carouselr.slick({
                               mobileFirst: false,
                               slidesToShow: 1,
                               slidesToScroll: 1,
                               infinite: true,
                               arrows: true,
                               dots: false,
                               speed: 300,
                               verticalSwiping: false,
                               autoplay: false,
                               //slidesToShow: 3,
                               //slidesToScroll: true,
                               fade: false,
                               lazyLoad: 'ondemand',
                                 //lazyLoad: 'anticipated',
                                 //cssEase: 'cubic-bezier(.8,.01,1,1)',
                                 //nextArrow: '<i class="icon-arrow-right2"></i>',
                                 //prevArrow: '<i class="icon-arrow-left2"></i>',  
                                 cssEase: 'linear',
                                 centerMode: false,
                                 pauseOnHover: false,
                                 adaptiveHeight: false,
                                 responsive: [, {
                                     breakpoint: 1024,
                                     settings: {
                                         dots: false,
                                         slidesToShow: 4,
                                         slidesToScroll: 1,
                                         mobileFirst: true
                                     }
                                 }, {
                                     breakpoint: 767,
                                     settings: {
                                         dots: false,
                                         slidesToShow: 4,
                                         slidesToScroll: 1,
                                     }
                                 }]
                             });
                             //console.log("carousel product image");
                         }

                     } else {
                       if ($carouselr.hasClass('slick-initialized')) {
                           $carouselr.slick("unslick");
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

           });

             }
         });
     });
 });