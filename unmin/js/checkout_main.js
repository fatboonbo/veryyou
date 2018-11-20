define([/*"text!version-css.json?bust=" + (new Date()).getTime()*/], function(/*version*/) {
// Convert text to JSON
/*    version = JSON.parse(version);

    requirejs.config({
        urlArgs: "v=" + version.v
    });

        //var csslink = "css/grid.min.css?v="+ version.v;
        //var csslink2 = "css/checkout.min.css?v="+ version.v;
        var csslink = ["css/checkout.min.css?v="+ version.v,"css/grid.min.css?v="+ version.v];
        var cssstyle = ["css1","css2"];
        for (var i = 0,y = 0; i < csslink.length &&  y < cssstyle.length; i++, y++) {
          var preloadLink = document.createElement("link");
          preloadLink.href = csslink[i];
          preloadLink.rel = "preload";
          preloadLink.as = "style";
          
            preloadLink.id = cssstyle[y];
            l(cssstyle[y]);
          document.head.appendChild(preloadLink);
        }
          $("#css1,#css2").attr('onload', 'this.onload=null;this.rel="stylesheet"');l("grid.min.css+checkout.min.css");

       if (isFirefox>0 ||isSafari>0 || isIE>0 || isEdge>0)
       {
            require(["libs/modules/cache-css"], function() {
                require(["css!../css/grid.min.css","css!../css/checkout.min.css"]);l("grid.min.css+checkout.min.css");
            });

       }

  $(window).on('load', function() {
    $('.checkout').css("visibility", "visible");
  });
*/
}); /* end of universal function */