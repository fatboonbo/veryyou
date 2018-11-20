define(["stickysidebar","jsflip"], function(stickysidebar,jsflip) {
// Convert text to JSON
  /*  version = JSON.parse(version);

    requirejs.config({
        urlArgs: "v=" + version.v
    });
    
        //var csslink = "css/grid.min.css?v="+ version.v;
        //var csslink2 = "css/checkout.min.css?v="+ version.v;
        var csslink = ["css/checkout.min.css?v="+ version.v,"css/grid.min.css?v="+ version.v];
        var cssstyle = ["css1","css2"];
        for (var i = 0,y = 0; i < csslink.length &&  y < cssstyle.length; i++, y++) {
          var preloadLink = document.createElement("link");
          document.head.appendChild(preloadLink);
          preloadLink.href = csslink[i];
          preloadLink.rel = "preload";
          preloadLink.as = "style";
          preloadLink.id = cssstyle[y];
          l(cssstyle[y]);
        }
          $("#css1,#css2").attr('onload', 'this.onload=null;this.rel="stylesheet"');l("grid.min.css+checkout.min.css");

       if (isFirefox>0 ||isSafari>0 || isIE>0 || isEdge>0)
       {
            require(["libs/modules/cache-css"], function() {
                require(["css!../css/grid.min.css","css!../css/checkout.min.css"]);l("grid.min.css+checkout.min.css");
            });

       }*/
    //$('head').append( $('<link rel="preload" type="text/css" />').attr('href', 'css/checkout.min.css?v='+ version.v).attr('as', 'style').attr('id','#css1').attr('onload', 'this.onload=null;this.rel="stylesheet"') );
    //$('head').append( $('<link rel="preload" type="text/css" />').attr('href', 'css/grid.min.css?v='+ version.v).attr('as', 'style').attr('id','#css2').attr('onload', 'this.onload=null;this.rel="stylesheet"') );
    //$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/checkout.min.css?v='+ version.v).attr('id','#css1'));
    //$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/grid.min.css?v='+ version.v).attr('id','#css2') );
    //$("#css1").attr('onload', 'this.onload=null;this.rel="stylesheet"');l("grid.min.css+checkout.min.css");
            //require(["csspreload"], function() {
              
            //});
            //require(["csspreload"]);
//login code refreshing
if (is_touch_device()) {
      $('.accordion-account').on('click', function(){
        if($(this).parent().hasClass('expand')){
          $(this).parent().find('.accordion-content').slideUp(500);
          $(this).parent().removeClass('expand').find('.expand').removeClass('expand');
        }else{
          $(this).parent().addClass('expand');
          $(this).siblings('.accordion-content').slideDown(500);
          $(this).parent().siblings('.expand').find('.accordion-content').slideUp(500);
          $(this).parent().siblings('.expand').removeClass('expand').find('.expand').removeClass('expand');
        }
      })
    }
  $('.column-main-old, .column-menu-old')
  .theiaStickySidebar({
    additionalMarginTop: 95,
    minWidth: 768
  });
  $(".flipper").flip({
    trigger: 'manual',
    axis: 'y'
  });
  $(".forget-pws").click(function() {
    $('.front').css('visibility','hidden');
    $('.back').css('visibility','visible');
    $(".flipper").flip(true);
  });
  $(".go-back").click(function(event) {
    $(".flipper").flip(false);
    $('.front').css('visibility','visible');
    $('.back').css('visibility','hidden');
  });
  $.fn.digits = function(){ 
    return this.each(function(){ 
      $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
  }
  $(".count").digits().css("opacity","1");

      var Bt = $(".block-edit-tel .edit"),
      Bc = $(".block-edit-tel .cancel"),
      hd = "hide",
      Tn = $(".block-edit-tel .tel-no-edit"),
      Te = $(".block-edit-tel .tel-edit"),
      Be = $(".block-edit-mobile .edit"),
      Bm = $(".block-edit-mobile .cancel"),
      Bn = $(".block-edit-mobile .tel-no-edit"),
      Ba = $(".block-edit-mobile .tel-edit"),
      e1 = $(".block-edit-tel .tel-edit input.form-control"),
      e2 = $(".block-edit-mobile .tel-edit input.form-control");
      Bt.on("click", function(t) {
        t.preventDefault(), Tn.addClass(hd), Te.removeClass(hd)
      }),Bc.on("click", function(t) {
        t.preventDefault(), Tn.removeClass(hd), Te.addClass(hd), e1.val('')
      }),Be.on("click", function(t) {
        t.preventDefault(), Bn.addClass(hd), Ba.removeClass(hd)
      }),Bm.on("click", function(t) {
        t.preventDefault(), Bn.removeClass(hd), Ba.addClass(hd), e2.val('')
      })


      $('.reasonType').on('change', function () {
        if ($(this).val() === "02" || $(this).val() === "51") {
          $(this).closest('.order-detail').children('.form-group').show();
        }
        else {
          $(this).closest('.order-detail').children('.form-group').hide()
        }
      });
            

}); /* end of universal function */