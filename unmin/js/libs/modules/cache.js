//define(["text!version.json?bust=" +  (new Date()).getTime()], function(version) {
define(["text!version.json?bust=" + (new Date()).getTime()], function(version) {

    // Convert text to JSON
    version = JSON.parse(version);

    requirejs.config({
        urlArgs: "v=" + version.v
    });

});
