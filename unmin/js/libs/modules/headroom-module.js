define(["headroom","jheadroom"/**/], function() {
//define("headroom",["headroom","jheadroom"/**/], function(headroom) {
	/**/
    var Headroom = require("headroom");
    // grab an element
    var myElement = document.querySelector("header#nav-header");
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement);
    // initialise
    headroom.init();
    //return headroom;
    //l(headroom);






/*
    
    $(document).ready(function() {  
    var HeadroomInit = function() {
    	var Headroom = require("headroom");
    	var headroom = new Headroom(document.querySelector("header#nav-header"), {
    		tolerance: 5
    	});
    	var init = function() {
    		headroom.init();
    	}
    	return {
    		init: init
    	}
    }
    HeadroomInit();
    //l(HeadroomInit);
    });


$(document).ready(function() {  

		$("header#nav-header").headroom();
});*/
});