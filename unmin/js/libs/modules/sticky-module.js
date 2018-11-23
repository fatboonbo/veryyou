define(["stickysidebar"], function() {

  $(document).ready(function() {
    $(document).router({
        product_list_main: function() { 
          $('.column-main-product, .column-menu')
          .theiaStickySidebar({
            additionalMarginTop: 95,
            minWidth: 768
          });
        },
        product_main: function() {
          $('.column-main-product, .column-menu, .column-product-description')
          .theiaStickySidebar({
            additionalMarginTop: 95,
            minWidth: 768
          });
        },
        member_main: function() {
          $('.column-main-old, .column-menu-old')
          .theiaStickySidebar({
            additionalMarginTop: 95,
            minWidth: 768
          });
        },
        about_main: function() {
          $('.column-main-old, .column-menu-old')
          .theiaStickySidebar({
            additionalMarginTop: 210,
            minWidth: 768
          });
        }
    });
});


});