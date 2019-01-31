define([], function() {    
// Convert text to JSON
/*
    version = JSON.parse(version);

    requirejs.config({
        urlArgs: "v=" + version.v
    });

        var csslink = "css/about.min.css?v="+ version.v;
        var preloadLink = document.createElement("link");
        preloadLink.href = csslink;
        preloadLink.rel = "preload";
        preloadLink.as = "style";
        preloadLink.id = "cssstyle";
        document.head.appendChild(preloadLink);
        $('#cssstyle').attr('onload', 'this.onload=null;this.rel="stylesheet"');l("about.min.css");

       if (isFirefox>0 ||isSafari>0 || isIE>0 || isEdge>0)
       {
            require(["libs/modules/cache-css"], function() {
                require(["css!../css/about.min.css"]);l("require about.min.css");
            });

       }
*/

if (is_touch_device()) {
  $('.accordion-account').on('click', function(){
    if($(this).parent().hasClass('expand')){
      $(this).parent().find('.accordion-content').slideUp(500);
      $(this).parent().removeClass('expand').find('.expand').removeClass('expand');
    }else{
      $(this).parent().siblings('.expand').find('.accordion-content').slideUp(500);
      $(this).parent().siblings('.expand').removeClass('expand').find('.expand').removeClass('expand');
      $(this).parent().addClass('expand');
      $(this).siblings('.accordion-content').slideDown(500);
    }
  })
}
    /*
  $('.column-main-old, .column-menu-old')
  .theiaStickySidebar({
    additionalMarginTop: 210,
    minWidth: 768
  });*/
//if (is_touch_device()) {
  $('.accordion-faq').on('click', function(){
    if($(this).parent().hasClass('expand')){
      //$(this).parent().siblings('.expand').find('.icon-chevron-down').removeClass('icon-chevron-up').addClass('icon-chevron-down');
      $(this).parent().find('.accordion-content').slideUp(500);
      $(this).parent().removeClass('expand').find('.expand').removeClass('expand');
    }else{
      //$(this).parent().siblings('.expand').find('.accordion-content').hide(0);
      //$(this).parent().siblings('.expand').removeClass('expand').find('.expand').removeClass('expand');
      $(this).parent().addClass('expand');      
      //$(this).find('.icon-chevron-down').removeClass('icon-chevron-down').addClass('icon-chevron-up');
      $(this).siblings('.accordion-content').slideDown(500);
    }
  })
//  }


  /*
  $(function() {

  var hash = window.location.hash;
  if (hash) {
    $('a.accordion-faq[href="' + hash + '"]').parent('li').addClass('expand');
    $('a.accordion-faq[href="' + hash + '"]').parent('li').siblings().removeClass("expand");
    var tabmenu = $('a[href="' + hash + '"]').attr("data-goto");
    console.log(tabmenu + ' here');
    //$(".list-style-faq .accordion-content").not(tabmenu).slideUp(500);
    //$(".list-style-faq .accordion-content").css("display", "block");
    $(".list-style-faq .accordion-content").not(tabmenu).css("display", "none");
    var elementID = hash.replace('#', '');
    $(elementID).ScrollTo({
      duration: 6000,
      easing: 'linear'
    });
    console.log(elementID + ' here');
    //$(elementID).ScrollTo();
    //$(elementID).show();
    $(tabmenu).css("display", "block");
  } else {
    

    //$(".faq-tab div:nth-child(2)").css("display", "none");
  }
});
*/
  //$('#q04').ScrollTo();
  /*
  function offsetAnchor() {

    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 190);
    }
  }
  */

  // applying to the offset
  /**/
  function offsetAnchor() {    
    if(location.hash.length !== 0) {//if href with hash
      if ($('.article-privacy').length > 0) {
        if (!is_touch_device()) {
          window.scrollTo(window.scrollX, window.scrollY - 105);
        } else {
          window.scrollTo(window.scrollX, window.scrollY - 15);
        }
      } 
    } 
  }

// capturing hash changes while on the page
$(window).on("hashchange", function () {
  offsetAnchor();
});

window.setTimeout(function() {
  offsetAnchor();
}, 1);

            

}); /* end of universal function */