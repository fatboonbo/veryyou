define(["libs/modules/slick-module","fgallery", "ekko"], function() {    
// Convert text to JSON
/*    version = JSON.parse(version);

    requirejs.config({
        urlArgs: "v=" + version.v
    });

        var sizeChart = "css/size-chart.min.css?v="+ version.v;
        var preloadLink = document.createElement("link");
        preloadLink.href = sizeChart;
        preloadLink.rel = "preload";
        preloadLink.as = "style";
        preloadLink.id = "sizeChart";
        l("sizeChart loaded");
        document.head.appendChild(preloadLink);
        $('#sizeChart').attr('onload', 'this.onload=null;this.rel="stylesheet"');l("size-chart css applied");

       if (isFirefox>0 || isSafari>0 || isIE>0 || isEdge>0)
       {
            require(["libs/modules/cache-css"], function() {
                require(["css!../css/size-chart.min.css"]);l("size-chart required");
            });

       }

  $(".block-filter1 select").selectBoxIt({
    autoWidth: false,
    showEffect: "fadeIn",
    showEffectSpeed: 200,
    copyClasses: "container"
  });
  $(document).ready(function() {
  require(["lazy2"], function() {
        (function(w) {

        // Enable strict mode
        "use strict";

        w.picturefill = function() {
            //var ps = w.document.getElementsByTagName( "span" );
            var _strURL = location.href;
            var ps;
            _strURL = _strURL.toLowerCase();
            if (_strURL.indexOf("PDContent.html") > -1 || _strURL.indexOf("PDContent.html") > -1) {
              ps = $(".carousel-product-image span");
              console.log("carousel-product-image span exists!");
            } else {
              ps = w.document.getElementsByTagName("span");
            }

            // Loop the pictures
            for (var i = 0, il = ps.length; i < il; i++) {
              if (ps[i].getAttribute("data-picture") !== null) {

                var sources = ps[i].getElementsByTagName("span"),
                matches = [];

                    // See if which sources match
                    for (var j = 0, jl = sources.length; j < jl; j++) {
                      var media = sources[j].getAttribute("data-media");
                        // if there's no media specified, OR w.matchMedia is supported 
                        if (!media || (w.matchMedia && w.matchMedia(media).matches)) {
                          matches.push(sources[j]);
                        }
                    }

                    // Find any existing img element in the picture element
                    var picImg = ps[i].getElementsByTagName("img")[0];

                    if (matches.length) {
                      var matchedEl = matches.pop();
                      if (!picImg || picImg.parentNode.nodeName === "NOSCRIPT") {
                        picImg = w.document.createElement("img");
                        picImg.alt = ps[i].getAttribute("data-alt");
                        picImg.title = ps[i].getAttribute("data-title");
                      }

                        // should we lazyload?
                        if (jQuery.fn.lazyload) {
                            // check if src has changed
                            if (picImg.getAttribute('data-original') != matchedEl.getAttribute("data-src")) {
                                // set data-original attr for lazyload.js
                                picImg.setAttribute('data-original', matchedEl.getAttribute("data-src"));
                                // set width and height for lazyload.js placeholder
                                picImg.setAttribute('usemap', matchedEl.getAttribute("data-usemap"));
                                //picImg.setAttribute('width', matchedEl.getAttribute( "data-width" ));
                                //picImg.setAttribute('height', matchedEl.getAttribute( "data-height" ));
                                // append the new image
                                matchedEl.appendChild(picImg);
                                // tell lazyload.js about our new/modified image

                                if ($('.carousel-product-image').hasClass('slick-initialized')) {
                                  picImg.setAttribute('data-lazy', matchedEl.getAttribute("data-src"));
                                    //picImg.src =  matchedEl.getAttribute( "data-src" );
                                    l("set to lazy");
                                    matchedEl.appendChild(picImg);

                                    $('.carousel-product-image').slick('refresh');
                                    //console.log("refreshed");
                                    //image zoom on tap
                                    
                                    $(".carousel-product-image div.slick-slide span>span>img").each(function() {
                                      var a = $('<a/>').attr({
                                        'href': $(this).data('original'),
                                        'data-featherlight': 'image'
                                      });
                                      $(this).addClass('zoom').wrap(a);
                                      $('a[data-featherlight]').addClass('gallery2');
                                    });
                                    $(".gallery2").featherlight({
                                      variant: "zoom-image",
                                      closeOnClick: 'anywhere',
                                      openSpeed: 0,
                                      closeSpeed: 50,
                                        //closeIcon:null,
                                        //closeIcon:'<div id class="close-tap"><span class="icon-chevron-down"></span></div>',
                                        closeIcon: '<div class="x"></div>',
                                        beforeOpen: function(event) {
                                          $("body").addClass("modal-open");
                                            //$(".zoom-image").append('<div class="close-tap"><span class="icon-chevron-down"></span></div>');
                                            //$("body").append("<div>hello world</div>");
                                            $("button.featherlight-close-icon").appendTo(".zoom-image");
                                            $(".featherlight-content").append("<div id='anchor'></div>")
                                        },
                                        afterContent: function(event) {
                                            $('#anchor').ScrollTo(); //                
                                        },
                                        afterClose: function(event) {
                                          $("body").removeClass("modal-open");
                                        }
                                    });
                                } else {
                                  $(picImg).lazyload({
                                    threshold: 1700,
                                    placeholder: "css/images/blank.gif",
                                    effect: "fadeIn",
                                    effectspeed: 100
                                  });
                                }

                            }
                        } else {
                            // default picturefill functionality
                            picImg.src = matchedEl.getAttribute("data-src");
                            matchedEl.appendChild(picImg);
                        }
                    } else if (picImg) {
                      picImg.parentNode.removeChild(picImg);
                    }
                }
            }
        };

        // Run on resize and domready (w.load as a fallback)
        if (w.addEventListener) {
          w.addEventListener("resize", w.picturefill, false);
          w.addEventListener("DOMContentLoaded", function() {
            w.picturefill();
                // Run once only
                w.removeEventListener("load", w.picturefill, false);
            }, false);
          w.addEventListener("load", w.picturefill, false);
        } else if (w.attachEvent) {
          w.attachEvent("onload", w.picturefill, false);
        }

    }(this));

    
  
    });

});
*/

  $('.accordion-category').on('click', function(){
    if($(this).parent().hasClass('expand')){
      $(this).parent().find('.accordion-content').addClass('expand');//.slideUp(500);
      $(this).parent().removeClass('expand').find('.expand').removeClass('expand');
    }else{
      $(this).parent().addClass('expand');
      //$(this).siblings('.accordion-content').slideDown(500);
      $(this).parent().siblings('.expand').find('.accordion-content').removeClass('expand');//.slideUp(500);
      $(this).parent().siblings('.expand').removeClass('expand').find('.expand').removeClass('expand');
    }
  })

   $(document).ready(function(){
    //$('.category-menu>section ul li>.accordion-content li a.alink:has(.selected)').prevAll().addClass('expanded'); 
    //$('.accordion-content a.alink.selected').parent('.accordion-content').addClass('expand'); 
    $('.category-menu>section>ul>li:has(.accordion-content li .alink.selected)').addClass('expand'); 
  });
  $("img.lazyload").lazyload({ threshold : 400,placeholder : "css/images/blank.gif",effect : "fadeIn",effectspeed: 100 });
  /*
  $('.column-main-product, .column-menu, .column-product-description')
  .theiaStickySidebar({
    additionalMarginTop: 95,
    minWidth: 768
  });*/
  $(document).ready(function() {

        NewsPosition(); // check from the start
        var changed = true; // keep track of whether the element is added

        function NewsPosition() {
          if (changed && $(window).width() >= 1024) {
            $('.block-p01').after($('.block-txt'));
            changed = true;
          } else if (!changed && $(window).width() < 1023) {
            $('.block-p03').after($('.block-txt'));
                //console.log('mobile menu initiate');
                changed = false;
              }
            }

            $(window).resize(NewsPosition);


          });
  $(".size-select").on("touchstart click",function(s) {
    s.preventDefault();
    $('.btn-checkout').removeClass("disabled");
    $('.edit-select').removeClass("disabled");
    if ($(".size-select").hasClass('selected')) {
      $(".size-select").removeClass('selected');
      $(this).addClass('selected');
    } else {
      $(this).addClass('selected');
    }
    changeSize(this.getAttribute("mycolor"),this.getAttribute("mysize"), this);
  });

  $('.edit-less').on('click', function () {
    var count = parseInt($("#qty").attr("value"));
    if ($("#qty").attr("maxvalue") != "0" && $.isNumeric(count) ) {
      count--;
      if (count < 1) {
        count = 1;
      }
      $('.edit-count').find('span').text(count);
      $('#qty').attr('value', count)
      $("#hidqty").val(count);
    }
  });
  $('.edit-add').on('click', function () {
    var count = parseInt($("#qty").attr("value"));
    if ($("#qty").attr("maxvalue") != "0" && $.isNumeric(count) ) {
      if (count < parseInt($("#qty").attr("maxvalue"))) {
        count++;
        $('.edit-count').find('span').text(count);
        $('#qty').attr('value', count)
        $("#hidqty").val(count);
      }
    }
  });

$.fn.dataImg = function(options) {

  var settings = $.extend({
    sml: 400,
    med: 800,
    lrg: 1000,
    resize: false
  }, options );

  var elements = $(this);

  function getSrc(element) {
    var screen = $(window).width();
    if (screen > settings.med) { 
      return element.data('lrg');
    }
    else if (screen <= settings.med && screen > settings.sml) {
      return element.data('med');
    }
    return element.data('sml');
  }

  function breakpoints() {
    elements.each(function () {
      var e = $(this);
      var src = getSrc(e);
      if(src != undefined){
        if (e.is('img')) {
          e.attr('src', src);
        } else {
          e.css('background-image', 'url(' + src + ')');
        }
      }        
    });
  }breakpoints();

  if(settings.resize == true){
    $(window).resize(function(){
      breakpoints();
    });
  }

};
$(function(){
  $('.data-img').dataImg({
    sml: 769,
    lrg: 1000,
    resize: true,
    bgImg: true
  });
});

// delegate calls to data-toggle="lightbox"
$(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
  event.preventDefault();
  return $(this).ekkoLightbox({
    onShown: function() {
      if (window.console) {
        return console.log('lightbox');
      }
    },
    onNavigate: function(direction, itemIndex) {
      if (window.console) {
        return console.log('Navigating '+direction+'. Current item: '+itemIndex);
      }
    }
  });
});
                //Programatically call
                $('#open-image').click(function (e) {
                  e.preventDefault();
                  $('.open-image').ekkoLightbox();
                });
                $('#open-youtube').click(function (e) {
                  e.preventDefault();
                  $(this).ekkoLightbox();
                  //$('iframe.embed-responsive-item').attr('id', 'youtubeyoutube');
                });

                

        // navigateTo
        $(document).delegate('*[data-gallery="navigateTo"]', 'click', function(event) {
          event.preventDefault();

          var lb;
          return $(this).ekkoLightbox({
            onShown: function() {

              lb = this;

              $(lb.modal_content).on('click', '.modal-footer a', function(e) {

                e.preventDefault();
                lb.navigateTo(2);

              });

            }
          });
        });
  /*
  $(function() {
    $('select').selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });
  });*/

    //  $('.column-menu').stickySidebar({
    //    topSpacing: 95,
    //    bottomSpacing: 60
    //  });

    //  var sidebar = new StickySidebar('.column-menu', {
    //    topSpacing: 20,
    //    bottomSpacing: 20,
    //  });
     
l("product-main fully loaded");
}); /* end of universal function */