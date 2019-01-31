define("cssversion", ["text!../css/version-css.json?bust=" + (new Date()).getTime()], function(cssversion) {
    cssversion = JSON.parse(cssversion);
    requirejs.config({
        urlArgs: "c=" + cssversion.c
    });
    return cssversion;
});