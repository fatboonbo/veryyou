define([/*"text!version-css.json?bust=" + (new Date()).getTime()*/"libs/modules/slick-module"], function(/*version*/) {
    // Convert text to JSON
    //require(["grid_main"]);
/*
    version = JSON.parse(version);

    requirejs.config({
        urlArgs: "v=" + version.v
    }); */
        //$('head').append( $('<link rel="preload" type="text/css" />').attr('href', 'css/act.css?v='+ version.v).attr('as', 'style').attr('onload', 'this.onload=null;this.rel="stylesheet"'),l("append act.css") );
        /*
        var csslink = "css/act.css?v="+ version.v;
        var preloadLink = document.createElement("link");
        document.head.appendChild(preloadLink),l("act.css appended");
        preloadLink.href = csslink;
        preloadLink.rel = "preload";
        preloadLink.as = "style";
        preloadLink.id = "cssstyle";
        $('#cssstyle').attr('onload', 'this.onload=null;this.rel="stylesheet"'),l("act.css applied");

        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
        if (isSafari > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
        {
            require(["libs/modules/cache-css"], function() {
                require(["css!../css/act.css"]),l("act.css");
            });
        }
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
        {
            require(["libs/modules/cache-css"], function() {
                require(["css!../css/act.css"]),l("act.css");
            });
        }

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
        {
            require(["libs/modules/cache-css"], function() {
                require(["css!../css/act.css"]),l("act.css");
            });
        }
       
       if (isSafari>0 || isIE>0)
       {
            require(["libs/modules/cache-css"], function() {
                require(["css!../css/act.css"]),l("act.css required");
            });

       }
    $(document).ready(function() { 
        NewsPosition(); // check from the start
        var changed = false; // keep track of whether the element is added

        function NewsPosition() {
            if (!changed && $(window).innerWidth() < 1000) {
                $('.section-banner .left').append($('.section-index-news.wrapper'));
                changed = true;
                l("news section rearranged");
            } 
        }
        $(window).resize(NewsPosition);
    });*/
    $(document).ready(function() { 
        NewsPosition(); // check from the start
        var changed = false; // keep track of whether the element is added

        function NewsPosition() {
            if (!changed && $(window).innerWidth() > 1000) {
                //$('.section-banner .left').append($('.section-index-news.wrapper'));
                //$('.section-category-banner .left').append($('.section-index-news.wrapper'));
                $('.section-index-news.wrapper').insertBefore('.section-category-banner');
                //document.getElementById('section-category-banner').insertAdjacentHTML("beforeBegin",$('.section-index-news.wrapper'),l("line helper jquery2"));
                changed = true;
                l("news section rearranged");
            } 
        }
        $(window).resize(NewsPosition);
    });
    /*
    var html = [];
    var len = 20;
    for (var i = 0; i < len; i++) {
      html.push('<div>Test ' + i + '</div>');
  }

  document.getElementById('footer').innerHTML = html.join(''),l("news section inserted");
  */
    l("index-main fully loaded");
}); /* end of universal function */