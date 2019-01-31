define(["lazysizes", "unveilhooks", "picturefill"], function() {

  $(document).ready(function() {

    $(document).router({
        index_main: function() {
            window.lazySizesConfig = window.lazySizesConfig || {};
            var timerStart = Date.now();
            window.lazySizesConfig.expand = 500;
            window.lazySizesConfig.loadMode = 1;
	        //window.lazySizesConfig.expand = 1600;
            //window.lazySizesConfig.expFactor = 3; // max 4
            l('init lazysize');
            /*
            var lazy = function lazy() {
              document.addEventListener('lazyloaded', {passive: true}, function (e)  {
                e.target.parentNode.classList.add('image-loaded');
                e.target.parentNode.classList.remove('loading');
            });
          }

          lazy();
          */
        },
        product_list_main: function() {
            window.lazySizesConfig = window.lazySizesConfig || {};
            var timerStart = Date.now();
            window.lazySizesConfig.ricTimeout = 300;
            window.lazySizesConfig.expand = 300;
            lazySizesConfig.expFactor = 3; // max 4
            window.lazySizesConfig.loadMode = 1;
	        //window.lazySizesConfig.expand = 1600;
            //window.lazySizesConfig.expFactor = 3; // max 4
            l('init lazysize');   
        }
    });
});
	/*
		if (is_touch_device()) {
			window.lazySizesConfig.expand = 1200;
			window.lazySizesConfig.loadMode = 1;
		}*/
// use .lazy instead of .lazyload
//lazySizesConfig.lazyClass = '.lazy';

//  $('.lazy').each(function(){
//    $('.lazy').addClass("lazyload");
//  })/*,console.log('%cinit lazysize', 'color: #ff0000', Date.now() - timerStart)*/;

  
//lazySizesConfig.srcAttr = 'data-original';
//lazySizesConfig.srcsetAttr = 'data-srcset';
//window.lazySizesConfig.expand = 825; //default is between 360-500 depending on viewport
//window.lazySizesConfig.expFactor = 1.1; // default is 1.7
/*
  if ($('#section-product-list').length > 0) {
    lazySizesConfig.srcAttr = 'data-original';
  };

  if ($('#section-crm').length > 0) {
    lazySizesConfig.srcAttr = 'data-original';
  };
*/
// use data-original instead of data-src
//lazySizesConfig.srcAttr = 'data-original';
//lazySizesConfig.srcsetAttr = 'data-srcset';


});