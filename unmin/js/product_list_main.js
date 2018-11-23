define([/*,"csspreload","text!version-css.json?bust=" + (new Date()).getTime()*/], function(/*,csspreload,version*/) {
// Convert text to JSON
/*
    version = JSON.parse(version);

    requirejs.config({
        urlArgs: "v=" + version.v
    });

        //var csslink = "css/grid.min.css?v="+ version.v;
        //var csslink2 = "css/checkout.min.css?v="+ version.v;
        var csslink = ["css/grid.min.css?v="+ version.v,"css/checkout.min.css?v="+ version.v];
        var cssstyle = ["css1","css2"];
        for (var i = 0,y = 0; i < csslink.length &&  y < cssstyle.length; i++, y++) {
          var preloadLink = document.createElement("link");
          preloadLink.href = csslink[i];
          preloadLink.rel = "preload";
          preloadLink.as = "style";
          preloadLink.id = cssstyle[y];
          l(cssstyle[y] + "loaded");
          document.head.appendChild(preloadLink);
        }
          $("#css1,#css2").attr('onload', 'this.onload=null;this.rel="stylesheet"');l("grid & checkout applied");
       if (isSafari>0 || isIE>0 || isEdge>0)
       {
            require(["libs/modules/cache-css"], function() {
                require(["css!../css/grid.min.css","css!../css/checkout.min.css"]);l("grid & checkout required");
            });

       }

  $(".block-filter1 select").selectBoxIt({
    autoWidth: false,
    showEffect: "fadeIn",
    showEffectSpeed: 200,
    copyClasses: "container"
  });*/
  // scrollsaver.js
// Copyright (C) 2009-2014 M. Mahdi Hasheminezhad http://hasheminezhad.com
// Maintain scroll position of every element on postbacks and partial updates
// This source is licensed under Common Public License Version 1.0 (CPL)
// You can reach me at hasheminezhad at gmail dot com
// History:
// 2014-08-04 Third Release
// - Add loadScroll and saveScroll to the window object
// - Code cleanup
// 2011-08-24 Second Release
// - Support for localStorage
// - Consider window.location
// - Other minor tweaks
// 2009-08-21 First Public Release

(function (window, undefined) {
    var document = window.document,
        location = window.location,
        key = window.escape('scrollPosition|' + location.pathname + location.search);

    window.loadScroll = function () {
        var positions;
        //load scroll positions
        try {
            positions = (localStorage.getItem(key) || '').split('|');
            localStorage.removeItem(key);//remove localstorage once it's loaded
        } catch (ex) {
            var cookieList = document.cookie.split(';');
            for (var i = cookieList.length - 1; i >= 0 && !positions; i--) {
                var cookieParts = cookieList[i].split('=');
                if (cookieParts[0] == key) {
                    positions = window.unescape(cookieParts[1]).split('|');
                }
            }
        }
        positions = positions || [];

        //set scroll positions
        for (var j = positions.length - 1; j >= 0 ; j--) {
            var currentValue = positions[j].split(',');
            try {
                if ('' == currentValue[0]) {    //no id for window
                    window.scrollTo(currentValue[1], currentValue[2]);
                } else if (currentValue[0]) {
                    var elm = document.getElementById(currentValue[0]);
                    elm.scrollLeft = currentValue[1];
                    elm.scrollTop = currentValue[2];
                }
            } catch (ex) { }
        }
    };

    window.saveScroll = function () {
        var positions = [];
        //windows scroll position
        var wl, wt;
        if (undefined !== window.pageXOffset) {
            wl = window.pageXOffset;
            wt = window.pageYOffset;
        } else if (undefined !== document.documentElement && document.documentElement.scrollLeft) {
            wl = document.documentElement.scrollLeft;
            wt = document.documentElement.scrollTop;
        } else {
            wl = document.body.scrollLeft;
            wt = document.body.scrollTop;
        }
        if (wl || wt) positions.push(['', wl, wt].join(','));   //no id for window

        //other elements
        var elements = document.all || document.getElementsByTagName('*');
        for (var i = 0; i < elements.length; i++) {
            var e = elements[i];
            if (e.id && (e.scrollLeft || e.scrollTop)) {
                positions.push([e.id, e.scrollLeft, e.scrollTop].join(','));
            }
        }

        //save scroll positions
        try {
            localStorage.setItem(key, positions.join('|'));
        } catch (ex) {
            document.cookie = key + '=' + positions.join('|') + ';';
        }
    };
})(window);
/*
// Attach to page load and unload
(function (window) {
    var addEvent, eventPrefix;
    if (window.attachEvent) {
        addEvent = window.attachEvent;
        eventPrefix = 'on';
    } else {
        addEvent = window.addEventListener;
        eventPrefix = '';
    }
    addEvent(eventPrefix + 'load', window.loadScroll, false);
    addEvent(eventPrefix + 'unload', window.saveScroll, false);
})(window);

// Only for Partial PostBacks (UpdatePanel in ASP.NET)

setTimeout(function () {
    if ('undefined' != typeof Sys && 'undefined' != typeof Sys.WebForms) {
        var instance = Sys.WebForms.PageRequestManager.getInstance();
        instance.add_beginRequest(window.saveScroll);
        instance.add_endRequest(window.loadScroll);
    }
}, 0);
*/
window.loadScroll();
/*
window.onbeforeunload = function() {
  localStorage.removeItem(key);
  return '';
};
*/
$(document).ready(function(){
 $('a.slink').click(function(){
   window.saveScroll();
 });
});
/*
  $('.column-main-product, .column-menu')
  .theiaStickySidebar({
    additionalMarginTop: 95,
    minWidth: 768
  });*/
  $(document).ready(function(){
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


    //$('.category-menu>section ul li>.accordion-content li a.alink:has(.selected)').prevAll().addClass('expanded'); 
    //$('.accordion-content a.alink.selected').parent('.accordion-content').addClass('expand'); 
    $('.category-menu>section>ul>li:has(.accordion-content li .alink.selected)').addClass('expand'); 
  });

  /*
  $('.colum-main, .column-menu')
  .theiaStickySidebar({
    additionalMarginTop: 95,
    minWidth: 768
  });
  
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
    $(document).ready(function() {
/*
  $('.btn-sale input:checkbox').each(function(){
    $('.panel-sale-wrap').addClass("active");
  }); */
  
  if($('.btn-sale input:checkbox').is(":checked")) {
    $('.panel-sale-wrap').addClass("active");
  } else {
    $('.panel-sale-wrap').removeClass("active");
  }
  $('.btn-sale input:checkbox').change(function(){    
    if($('.btn-sale input:checkbox').is(":checked")) {
      $('.panel-sale-wrap').addClass("active");
    } else {
      $('.panel-sale-wrap').removeClass("active");
    }
  });



});
    /*
    ;(function($){

     //Store scroll position for and set it after reload
     //@return {boolean} [loacalStorage is available]
     $.fn.scrollPosReaload = function(){
      if (localStorage) {
        var posReader = localStorage["posStorage"];
        if (posReader) {
          $(window).scrollTop(posReader);
          localStorage.removeItem("posStorage");
        }
        $('.alink').click(function(e) {
          localStorage["posStorage"] = $(window).scrollTop();
        });

        return true;
      }

      return false;
    }
    
     //================================================== 

    $(document).ready(function() {
        // Feel free to set it for any element who trigger the reload
        $('.alink').scrollPosReaload();
      });

  }(jQuery));  
*/

/*!
 * Scroll Sneak
 * http://mrcoles.com/scroll-sneak/
 *
 * Copyright 2010, Peter Coles
 * Licensed under the MIT licenses.
 * http://mrcoles.com/media/mit-license.txt
 *
 * Date: Mon Mar 8 10:00:00 2010 -0500

var ScrollSneak = function(prefix, wait) {
    // clean up arguments (allows prefix to be optional - a bit of overkill)
    if (typeof(wait) == 'undefined' && prefix === true) prefix = null, wait = true;
    prefix = (typeof(prefix) == 'string' ? prefix : window.location.host).split('_').join('');
    var pre_name;

    // scroll function, if window.name matches, then scroll to that position and clean up window.name
    this.scroll = function() {
        if (window.name.search('^'+prefix+'_(\\d+)_(\\d+)_') == 0) {
            var name = window.name.split('_');
            window.scrollTo(name[1], name[2]);
            window.name = name.slice(3).join('_');
        }
    }
    // if not wait, scroll immediately
    if (!wait) this.scroll();

    this.sneak = function() {
    // prevent multiple clicks from getting stored on window.name
  if (typeof(pre_name) == 'undefined') pre_name = window.name;

  // get the scroll positions
        var top = 0, left = 0;
        if (typeof(window.pageYOffset) == 'number') { // netscape
            top = window.pageYOffset, left = window.pageXOffset;
        } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) { // dom
            top = document.body.scrollTop, left = document.body.scrollLeft;
        } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) { // ie6
            top = document.documentElement.scrollTop, left = document.documentElement.scrollLeft;
        }
  // store the scroll
        if (top || left) window.name = prefix + '_' + left + '_' + top + '_' + pre_name;
        return true;
    }
}

// Example of applying sneak to a link:
(function() {
    var sneaky = new ScrollSneak(location.hostname);
    document.getElementsByClassName('.alink').onclick = sneaky.sneak;
})();
 */

l("product-main-list fully loaded");
}); /* end of universal function */