define(["text!version-css.json?bust=" + (new Date()).getTime()], function(version) {
    version = JSON.parse(version);

    requirejs.config({
        urlArgs: "v=" + version.v
    });

  $(document).ready(function() {
    $(document).router({
        common: function() {
//loadCSS('css/font.css');
/*
            require(["loadCSS"], function() {
                loadCSS( "css/common.css?="+ version.v ),l("common css loaded");
                //loadCSS( "css/base.css?="+ version.v ),l("base css loaded");
            });*/
            /*
            $('body').append( $('<link rel="preload" type="text/css" />').attr('href', 'css/common.css?c='+ version.v).attr('as', 'style').attr('onload', 'this.onload=null;this.rel="stylesheet"'),l("append act.css") );

            if (isFirefox > 0 || isSafari > 0 || isIE > 0 || isEdge > 0) {
                require(["loadCSS"], function() {
                    loadCSS( "css/common.css?c="+ version.v ),l("request index.css");
                });
            }*/
/* exported loadCSS 
function loadCSS( href, before, media, callback ){
    "use strict";
    // Arguments explained:
    // `href` is the URL for your CSS file.
    // `before` optionally defines the element we'll use as a reference for injecting our <link>
    // By default, `before` uses the first <script> element in the page.
    // However, since the order in which stylesheets are referenced matters, you might need a more specific location in your document.
    // If so, pass a different reference element to the `before` argument and it'll insert before that instead
    // note: `insertBefore` is used instead of `appendChild`, for safety re: http://www.paulirish.com/2011/surefire-dom-element-insertion/
    var ss = window.document.createElement( "link" );
    var ref = before || window.document.getElementsByTagName( "script" )[ 0 ];
    var sheets = window.document.styleSheets;
    ss.rel = "stylesheet";
    ss.href = href;
    // temporarily, set media to something non-matching to ensure it'll fetch without blocking render
    ss.media = "only x";
    // DEPRECATED
    if( callback ) {
        ss.onload = callback;
    }
    // inject link
    ref.parentNode.insertBefore( ss, ref );
    // This function sets the link's media back to `all` so that the stylesheet applies once it loads
    // It is designed to poll until document.styleSheets includes the new sheet.
    ss.onloadcssdefined = function( cb ){
        var defined;
        for( var i = 0; i < sheets.length; i++ ){
            if( sheets[ i ].href && sheets[ i ].href === ss.href ){
                defined = true;
            }
        } 
        if( defined ){
            cb();
        } else {
            setTimeout(function() {
                ss.onloadcssdefined( cb );
            });
        }
    };
    ss.onloadcssdefined(function() {
        ss.media = media || "all";
    });
    return ss;
}       
// use loadCSS to load fonts.css
loadCSS( "css/common.css?="+ version.v ),l("common css loaded");*/

        },
        index_main: function() {
            //$('head').append( $('<link rel="preload" type="text/css" />').attr('href', 'css/act.css?v='+ version.v).attr('as', 'style').attr('onload', 'this.onload=null;this.rel="stylesheet"')
                    //,l("append act.css") );
            //require(["csspreload"]);

            //loadCSS( "css/act.css?v="+ version.v );

            /*
        (function() {
            var req = document.createElement("link");
            req.rel = "stylesheet";
            //req.href = "slow.css.php";
            req.href = "css/act.css";
            document.body.appendChild(req);
            l("append act.css")
        })();

            require(["loadCSS"], function() {
                loadCSS( "css/index.css?v="+ version.v ),l("request index.css");
            });
        
            $('head').append( $('<link rel="preload" type="text/css" />').attr('href', 'css/index.css?o='+ version.v).attr('as', 'style').attr('onload', 'this.onload=null;this.rel="stylesheet"'),l("append act.css") );

            if (isFirefox > 0 || isSafari > 0 || iOSSafari > 0 || isIE > 0 || isEdge > 0) {
                require(["loadCSS"], function() {
                    loadCSS( "css/index.css?v="+ version.v ),l("request index.css");
                });
            }
*/
        },
        product_list_main: function() {
            require(["loadCSS"], function() {
                loadCSS( "css/product_list_main.css?="+ version.v ),l("checkout css loaded");
                loadCSS( "css/grid.min.css?="+ version.v ),l("grid css loaded");
                loadCSS( "css/checkout.min.css?="+ version.v ),l("checkout css loaded");
            });
        },
        product_main: function() {
            require(["loadCSS"], function() {
                loadCSS( "css/product_main.css?="+ version.v ),l("checkout css loaded");
                loadCSS( "css/size-chart.min.css?="+ version.v ),l("size-chart css loaded");
            });
        },
        checkout_main: function() {
            require(["loadCSS"], function() {
                loadCSS( "css/grid.min.css?="+ version.v ),l("grid css loaded");
                loadCSS( "css/checkout.min.css?="+ version.v ),l("checkout css loaded");
            });
        },
        member_main: function() {
            require(["loadCSS"], function() {
                loadCSS( "css/member_main.css?="+ version.v ),l("grid css loaded");
                loadCSS( "css/grid.min.css?="+ version.v ),l("grid css loaded");
                loadCSS( "css/checkout.min.css?="+ version.v ),l("checkout css loaded");
            });
        },
        about_main: function() {
            require(["loadCSS"], function() {
                loadCSS( "css/about.min.css?="+ version.v ),l("about css loaded");
            });
        },
        grid_main: function() {
            require(["loadCSS"], function() {
                loadCSS( "css/base.css?="+ version.v ),l("base css loaded");
            });
        }
    });
});
l("css-module loaded");



});