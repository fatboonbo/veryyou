// Setup requirejs configuration
requirejs.config({
waitSeconds: 0,
enforceDefine: false,
baseUrl: "js",
paths: {
    //"jquery": "//unpkg.com/jquery@2.2.0/dist/jquery.min.js",
    "fontloader": "libs/fontfaceobserver2",
    "slick": "libs/slick.min",
    //"bootstrap3modal": "libs/bootstrap3modal.min",
    "bootstrap3modal": "libs/bootstrap",
    "ekko": "libs/ekko-lightbox.min",
    //"lazysizes": "libs/lazysizes.min",
    "lazysizes": "libs/lazysizes",
    "unveilhooks": "libs/ls.unveilhooks.min",
    "picturefill":"libs/picturefill.min",
    "picturefill3":"libs/picturefill_3.min",
    "picturefillbg":"libs/picturefill-background",
    "headroom": "libs/Headroom",
    "jheadroom": "libs/jQuery.headroom",
    //"headroom": "libs/headroom.min",
    "jscrollto":"libs/jquery-scrollto.min",
    //"stickysidebar": "libs/theia-sticky-sidebar.min",
    "stickysidebar": "libs/theia-sticky-sidebar",
    //"wowwow": "libs/wow.min",
    "wowwow": "libs/wow",
    //"imgready": "libs/imagesloaded.pkgd.min",
    "rwdmap": "libs/jquery.rwdImageMaps.min",
    "featherlight": "libs/featherlight.min",
    "fgallery": "libs/featherlight.gallery.min",
    "jsflip": "libs/jquery.flip.min",
    "jquerylazy": "libs/jquery.lazyload.min",
    "lazy2": "libs/lazy2",
    "domReady":"libs/domReady",
    "text": "libs/text.min",
    //"csspreload": "libs/cssrelpreload",
    "loadCSS": "libs/loadCSS",
    //"GlobalV": "libs/modules/global",
    //"css":"libs/require.css",
    "css":"libs/css",
    "syotimer":"libs/jquery.syotimer.min",
    //"imagesLoaded":"addon/imagesloaded.pkgd.min",
    //"masonry":"addon/masonry.pkgd.min",
    //"charming":"addon/charming.min",
    //"charming":"addon/charming",
    //"tweenmax":"addon/TweenMax.min",
    "demo":"libs/demo",
    //"core":bust('core.js'),
    "typewriter":"libs/jquerytypewriter.min"
  },
  "shim": {
    "product_main": {
      deps: ["lazy2"]
    },/*
    "masonry": {
      deps: ["jquery"]
    },
    "libs/modules/global-menu": {
      deps: ["libs/modules/dt"]
    },
    "css/common.css": {
      deps: ["libs/modules/cache-css"]
    },
    "libs/modules/dt" : {
      deps: ["headroom"]
    },
    "libs/modules/css-module" : {
      deps: ["config"]
    },
    "jheadroom" : {
      deps: ["headroom"]
    },
    
    "index_main": {
      deps: ["core"]
    },
    "index_main": {
      deps: ["libs/modules/css-module"]
    },
    "libs/modules/css-module": {
      deps: ["csspreload"]
    },
    "core": {
      deps: ["libs/modules/css-module"]
    },*//*
    "rwdmap": {
      deps: ["lazysizes"],
    },
    "popupmodule" : {
      deps: ["libs/modules/cache", "bmodal"]
    },
    "libs/modules/css-module": {
      deps:["loadCSS"],
    },
    "loadCSS": {
      deps:["jquery"],
    },*/
    "fgallery": {
      deps:["featherlight"],
    },
    "ekko": {
      deps:["bootstrap3modal"],
    },/*
    "libs/modules/cache-css": {
        deps: ["css"]
    }*/
  },
 /* 
  map: {
  '*': {
    'css': 'libs/css', // or whatever the path to require-css is
     deps: ["libs/modules/cache-css"]
  }
  

  map: {
  '*': {
    //'libs/modules/cache-css': 'css', // or whatever the path to require-css is
    css: ["libs/css"]
  },
  packages: [
    "line"
  ]
}*/
});
define("jquery", [], function() {
  return jQuery;
});

//define("domrouter", [], function() {
//  return domrouter;
//})

/*
function bust(path) {
    //return path + "?v=" + (new Date()).getTime();
    return path + "?v=" + (new Date()).getFullYear() + (new Date()).getMonth() + (new Date()).getDate() + (new Date()).getHours();
}

function is_touch_device() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
} // works on IE10/11 and Surface || works on most browsers */
/*
function is_touch_device() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function(query) {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}*/
/*
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    //var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    //var iOSSafari = iOS && webkit && !(Chrome|CriOS|OPiOS);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/OPiOS/i) && !ua.match(/EdgiOS/i) && !window.chrome;

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';


    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    
    // Internet Explorer 6-11
    var isIE = false || !!document.documentMode;//@cc_on!@false || !!document.documentMode;
    */
// Custom console log wrapper
// 
// Usage: l("message");
// 
// To turn logging on with: 
//localStorage.setItem("debug", true);
// 
// Turn logging off with: 
//window.performance && window.performance.mark && window.performance.mark("optimizely:blockBegin");
localStorage.setItem("debug", false);

var timerStart = Date.now();
window.l = function(message) {
  if (typeof console != "undefined") {
    if (localStorage.getItem("debug") == "true") {
      console.log(message, Date.now() - timerStart);
    }
  }
}
l("loading config");
/*
if (is_touch_device()) {
  $("html").removeClass("no-touchevents");
  $("html").addClass("touchevents");
  l("touch device");
} else {
  $("html").removeClass("touchevents");
  $("html").addClass("no-touchevents");
  l("desktop");
}

$(document).ready(function(){
    if (is_touch_device()) {
      $("html").removeClass("no-touchevents");
      $("html").addClass("touchevents");
      l("touch device - document ready");
    } else {
      $("html").removeClass("touchevents");
      $("html").addClass("no-touchevents");
      l("desktop - document ready");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    if (is_touch_device()) {
      $("html").removeClass("no-touchevents");
      $("html").addClass("touchevents");
      l("touch device - dom ready");
    } else {
      $("html").removeClass("touchevents");
      $("html").addClass("no-touchevents");
      l("desktop - dom ready");
    }
});*/
//var consoleHolder = console;
//console = consoleHolder;
/**/

if (is_touch_device()) {
  $("html").removeClass("no-touchevents");
  $("html").addClass("touchevents");
  l("touch device - dom ready");
} else {
  $("html").removeClass("touchevents");
  $("html").addClass("no-touchevents");
  l("desktop - dom ready");
}

$(document).ready(function(){
    var threshold = 1025;//1007
    var initialDiff = ($(window).width() > threshold) ? 1:-1;
    $(window).on("resize",function(e){
        var w = $(window).width();
        var currentDiff = w - threshold;
        if(currentDiff*initialDiff < 0) {         
            location.reload();
        } 
            l("Site refreshed");
    });
    
});

/* detect img src change
$('#img_div').load(function() {
  var imageObj = $(this);
  if (!(imageObj.width() == 1 && imageObj.height() == 1)) {
    l('Image source changed!!!!!');
  }
});
*/
define("cssversion", ["text!../css/version-css.json?bust=" + (new Date()).getTime()], function(cssversion) {
    cssversion = JSON.parse(cssversion);
    requirejs.config({
        urlArgs: "v=" + cssversion.v
    });
    return cssversion;
});
define("jsversion", ["text!version.json?bust=" + (new Date()).getTime()], function(jsversion) {
    jsversion = JSON.parse(jsversion);
    requirejs.config({
        urlArgs: "v=" + jsversion.v
    });
    return jsversion;
});
require(["cssversion"/*"libs/modules/cache-css"*/], function(cssversion) {
        var csscommon = "css/common.css?p="+ cssversion.v;
        var preloadLink = window.document.createElement("link");
        document.body.appendChild(preloadLink),l("common.css appended");
        preloadLink.href = csscommon;
        preloadLink.as = "style";
        preloadLink.rel = "preload";
        preloadLink.id = "csscommon";
        //preloadLink.media = "none";
        preloadLink.onload = function() {
            this.rel = "stylesheet";
            this.onload = null;
        },l("common.css loaded");
        if (isFirefox > 0 || isSafari > 0 || iOSSafari > 0 || isIE > 0 || isEdge > 0) {
            require(["loadCSS"], function(loadCss) {
                loadCSS( "css/common.css?v="+ cssversion.v ),l("request common.css");
            });
        };l("current css version "+cssversion.v)
        //$('#csscommon').attr('onload', 'this.onload=null;this.rel="stylesheet";this.media="all"'),l("common.css applied");
    //$('head').append( $('<link rel="preload" type="text/css" />').attr('href', 'css/common.css?v='+ version.v).attr('as', 'style').attr('onload', 'this.onload=null;this.rel="stylesheet"'),l("append act.css") );
/*
    if (isFirefox > 0 || isSafari > 0 || iOSSafari > 0 || isIE > 0 || isEdge > 0) {
        require(["loadCSS"], function(loadCss) {
            loadCSS( "css/common.css?v="+ version.v ),l("request index.css");
        });
    }*/
});
//require(["jquery","libs/modules/cache"], function() {
require(["jquery","jsversion"/*,"libs/modules/lazy-module"*/], function($,jsversion) {
    //define(["jquery", "domrouter"], function() {

    //$(document).ready(function() {
    document.addEventListener("DOMContentLoaded", function() {
        $(document).router({
            common: function() {
                /*
                require(["csspreload","text!version-css.json?bust=" + (new Date()).getTime()], function(csspreload,version) {
                    version = JSON.parse(version);

                    requirejs.config({
                        urlArgs: "v=" + version.v
                    });
                    var fontlink = ["css/fonts/veryyou.eot?v="+ version.v,"css/fonts/veryyou.woff2?v="+ version.v,"css/fonts/veryyou.woff?v="+ version.v,"css/fonts/veryyou.ttf?v="+ version.v,"css/fonts/veryyou.svg?v="+ version.v];
                    var fontstyle = ["font1","font2","font3","font4","font5"];
                    for (var i = 0,y = 0; i < fontlink.length &&  y < fontstyle.length; i++, y++) {
                      var preloadLink = document.createElement("link");
                      preloadLink.href = fontlink[i];
                      preloadLink.rel = "preload";
                      preloadLink.as = "font";

                      preloadLink.id = fontstyle[y];
                      l(fontstyle[y]);
                      document.head.appendChild(preloadLink);
                  }
                  l("font loaded");
                  //$("#font2").attr('crossorigin', 'anonymous');
                  $("#font1,#font2,#font3,#font4,#font5").attr('crossorigin', 'anonymous'),l("font applied");
                  

                });*/
                //require(["csspreload"], function() {
                //    require(["libs/modules/css-module"]);
                //});
                require([/*"libs/modules/css-module",*/"core"]);
                //require(["core"]);
                l("require : core");

                /*
                require(["loadCSS","text!version-css.json?bust=" + (new Date()).getTime()], function(loadCss,version) {version = JSON.parse(version);

                    requirejs.config({
                        urlArgs: "v=" + version.v
                    });
                    loadCSS( "css/common1.css?="+ version.v ),l("common css loaded");
                    //loadCSS( "css/base.css?="+ version.v ),l("base css loaded");
                });*/
            },
            index_main: function() {
                /*
                require(["libs/modules/cache-css"], function() {
                    require(["css!../css/act.css"]);
                    l("act.css");
                });*/
                //require(["text!version-css.json?bust=" + (new Date()).getTime()], function(version) {
                    //$('head').append( $('<link rel="preload" type="text/css" />').attr('href', 'css/index.css?c='+ version.v).attr('as', 'style').attr('onload', 'this.onload=null;this.rel="stylesheet"'),l("append act.css") );                    
                require(["cssversion"], function(cssversion) {
                    var indexcss = "css/index.css?a="+ cssversion.v;
                    var preloadLink = document.createElement("link");
                    document.body.appendChild(preloadLink),l("index.css appended");
                    preloadLink.href = indexcss;
                    preloadLink.as = "style";
                    preloadLink.rel = "preload";
                    preloadLink.id = "indexcss";
                    $('#indexcss').attr('onload', 'this.onload=null;this.rel="stylesheet"'),l("index.css applied");
                    if (isFirefox > 0 || isSafari > 0 || iOSSafari > 0 || isIE > 0 || isEdge > 0) {
                        require(["loadCSS"], function() {
                            loadCSS( "css/index.css?d="+ cssversion.v ),l("request index.css");
                        });
                    }
                });
                //});
            
                require([ /*"libs/modules/popup-module",*/ "index_main"]);
                l("require : index_main: ");
            },
            product_list_main: function() {
                //product_list: function() {
                // product list/PDList2.asp
                /*
                require(["libs/modules/cache-css"], function() {
                    require(["css!../css/grid.min.css","css!../css/checkout.min.css"]);
                    l("grid.min.css+checkout.min.css");
                });*/
                require(["cssversion"], function(cssversion) {

                  var listcss = ["css/product_list_main.css?v="+ cssversion.v];
                  var cssstyle = ["css1"];
                  for (var i = 0,y = 0; i < listcss.length &&  y < listcss.length; i++, y++) {
                    var preloadLink = document.createElement("link");
                    document.body.appendChild(preloadLink);
                    preloadLink.href = listcss[i];
                    preloadLink.as = "style";
                    preloadLink.rel = "preload";
                    preloadLink.id = cssstyle[y],l(cssstyle[y] + "loaded");
                  }
                  $("#css1,#css2,#css3").attr('onload', 'this.onload=null;this.rel="stylesheet"');l("product_list $grid & checkout applied");
                  if (isFirefox > 0 || isSafari > 0 || iOSSafari > 0 || isIE > 0 || isEdge > 0) {
                    require(["loadCSS"], function() {
                      loadCSS( "css/product_list_main.css?="+ cssversion.v ),l("product_list_main css loaded");
                      //loadCSS( "css/grid.min.css?="+ cssversion.v ),l("grid css loaded");
                      //loadCSS( "css/checkout_list.css?="+ cssversion.v ),l("checkout css loaded");
                    });
                  }
                });
                require(["product_list_main"]);
                l("require : product_list_main");
            },
            product_main: function() {
                //product_single: function() {
                // PDContent.asp
                /*
                require(["libs/modules/cache-css"], function() {
                    require(["css!../css/size-chart.min.css"]);
                    l("size-chart.min.css");
                });*/
                require(["cssversion"], function(cssversion) {
                  var listcss = ["css/product_main.css?v="+ cssversion.v/*,"css/size-chart.min.css?v="+ cssversion.v*/];
                  var cssstyle = ["css1"/*,"css2"*/];
                  for (var i = 0,y = 0; i < listcss.length &&  y < listcss.length; i++, y++) {
                    var preloadLink = document.createElement("link");
                    document.body.appendChild(preloadLink);
                    preloadLink.href = listcss[i];
                    preloadLink.as = "style";
                    preloadLink.rel = "preload";
                    preloadLink.id = cssstyle[y],l(cssstyle[y] + "loaded");
                  }
                  $("#css1,#css2").attr('onload', 'this.onload=null;this.rel="stylesheet"');l("product_man $ size-chart applied");
                  if (isFirefox > 0 || isSafari > 0 || iOSSafari > 0 || isIE > 0 || isEdge > 0) {
                    require(["loadCSS"], function() {
                      loadCSS( "css/product_main.css?="+ cssversion.v ),l("product_main css loaded");
                      //loadCSS( "css/size-chart.min.css?="+ cssversion.v ),l("size-chart css loaded");
                    });
                  }
                });
                require(["product_main"]);
                l("require : product_main");
            },
            checkout_main: function() {
                // PDContent.asp
                /*
                require(["libs/modules/cache-css"], function() {
                    require(["css!../css/checkout.min.css", "css!../css/grid.min.css"]);
                    l("checkout.min.css+grid.min.css");
                });*/
                var listcss = [/*"css/grid.css?v="+ cssversion.v,*/"css/checkout_cart.css?v="+ cssversion.v];
                var cssstyle = ["css1"];
                for (var i = 0,y = 0; i < listcss.length &&  y < listcss.length; i++, y++) {
                  var preloadLink = document.createElement("link");
                  document.body.appendChild(preloadLink);
                  preloadLink.href = listcss[i];
                  preloadLink.as = "style";
                  preloadLink.rel = "preload";
                  preloadLink.id = cssstyle[y],l(cssstyle[y] + "loaded");
                }
                $("#css1,#css2").attr('onload', 'this.onload=null;this.rel="stylesheet"');l("product_list $grid & checkout applied");
                if (isFirefox > 0 || isSafari > 0 || iOSSafari > 0 || isIE > 0 || isEdge > 0) {
                    require(["loadCSS"], function() {
                        //loadCSS( "css/grid.min.css?="+ cssversion.v ),l("grid css loaded");
                        loadCSS( "css/checkout_cart.css?="+ cssversion.v ),l("checkout css loaded");
                    });
                }
                require(["checkout_main"]);
            },
            member_main: function() {
                // PDContent.asp
                /*
                require(["libs/modules/cache-css"], function() {
                    require(["css!../css/checkout.min.css", "css!../css/grid.min.css"]);
                    l("checkout.min.css+grid.min.css");
                });*/

                var listcss = ["css/member_main.css?v="+ cssversion.v/*,"css/checkout_member.css?v="+ cssversion.v*/];
                var cssstyle = ["css1"];
                for (var i = 0,y = 0; i < listcss.length &&  y < listcss.length; i++, y++) {
                  var preloadLink = document.createElement("link");
                  document.body.appendChild(preloadLink);
                  preloadLink.href = listcss[i];
                  preloadLink.as = "style";
                  preloadLink.rel = "preload";
                  preloadLink.id = cssstyle[y],l(cssstyle[y] + "loaded");
                }
                $("#css1").attr('onload', 'this.onload=null;this.rel="stylesheet"');l("product_list $grid & checkout applied");
                if (isFirefox > 0 || isSafari > 0 || iOSSafari > 0 || isIE > 0 || isEdge > 0) {
                    require(["loadCSS"], function() {
                        loadCSS( "css/member_main.css?="+ cssversion.v ),l("member_main css loaded");
                        //loadCSS( "css/grid.min.css?="+ cssversion.v ),l("grid css loaded");
                        //loadCSS( "css/checkout_member.css?="+ cssversion.v ),l("checkout css loaded");
                    });
                }
                require(["member_main"]);
                l("require : member_main");
            },
            about_main: function() {
                // PDContent.asp
                /*
                require(["libs/modules/cache-css"], function() {
                    require(["css!../css/about.min.css"]);
                    l("about.min.css");
                });*/
                var aboutcss = "css/about.min.css?a="+ cssversion.v;
                var preloadLink = document.createElement("link");
                document.body.appendChild(preloadLink),l("about.css appended");
                preloadLink.href = aboutcss;
                preloadLink.as = "style";
                preloadLink.rel = "preload";
                preloadLink.id = "aboutcss";
                $('#aboutcss').attr('onload', 'this.onload=null;this.rel="stylesheet"'),l("index.css applied");
                if (isFirefox > 0 || isSafari > 0 || iOSSafari > 0 || isIE > 0 || isEdge > 0) {
                    require(["loadCSS"], function() {
                        loadCSS( "css/about.min.css?d="+ cssversion.v ),l("request about.css");
                    });
                }
                require(["about_main"]);
                l("require : about_main");
            }
        });
    });
})
/*
Foo = {

debug: function(bool) {
    if (!bool) {
        consoleHolder = console;
        console = {};        
        Object.keys(consoleHolder).forEach(function(key) {
            console[key] = function() {};
        })
    } else {

        require(["domReady"], function(domReady) {
            domReady(function() {

                console.log("%cThe DOM is ready before I happen", "color: #1c00cf", Date.now() - timerStart);
            });
            $(function() {
                console.log("load inside function", Date.now() - timerStart);
            });
            console.log("%cThe DOM might not be ready before I happen", "color: #1c00cf", Date.now() - timerStart);
        });
        $(window).load(function() {
            console.log("%cTime until everything loaded: ", "color: #1c00cf", Date.now() - timerStart);
        });
        $(document).ready(function() {
            console.log("%cTime until DOMready: ", "color: #1c00cf", Date.now() - timerStart);
        });

    }
}


}
Foo.debug(false);// true or false, set to false if it"s in production
*/
if (localStorage.getItem("debug") == "true") {
    $(window).on("load",function() {
        l("Time until everything loaded:window.load");
    });
    $(document).ready(function() {
        l("Time until DOMready:document ready");
    });
    require(["domReady"], function(domReady) {
        domReady(function() {
            l("The DOM is ready before I happen:require domready");
        });
        $(function() {
            l("load inside function:require function");
        });
        l("The DOM might not be ready before I happen:require");
    });
    document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM ready!");
    });
}
l("config loaded");