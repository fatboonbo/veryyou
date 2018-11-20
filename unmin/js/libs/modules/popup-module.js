define([], function() {
	$(document).ready(function() {
        var popup = true; // false to disable popup
        if (popup)
        	if (sessionStorage.getItem("hotdada") !== 'true') {
        		sessionStorage.setItem("hotdada", "true");

        		var csslink2 = "css/popup.css?v=" + (new Date()).getTime();
        		var preloadLink = document.createElement("link");
        		preloadLink.href = csslink2;
        		preloadLink.rel = "preload";
        		preloadLink.as = "style";
        		preloadLink.id = "popup";
        		document.head.appendChild(preloadLink);
        		$('#popup').attr('onload', 'this.onload=null;this.rel="stylesheet"'),l("popup.css applied");
        		if (isFirefox>0 || isSafari>0 || isIE>0 || isEdge>0)
        		{
        			require(["libs/modules/cache-css"], function() {
        				require(["css!../css/popup.css"]);
        				l("popup.css");
        			});
        		}
        		var eles = '<div class="modal fade in index-popup" id="popup-default" tabindex="-1" role="dialog" aria-hidden="true" style="display: none"><div class="modal-dialog"><div class="modal-content"><div class="popup-default-content" style="visibility:hidden"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="btnclose3 icon-close"></i></button></div><div id="popgif" style="background:transparent;"><div style="display:inline-block;"><a href="https://www.veryyou.com.tw/PDSaleDiscount.asp?pi=6847001901"><img src="https://photo.eyescream.com.tw/VeryYou/banner/popupbanner/2018090602.gif" alt="秋季新裝 甜甜嘗鮮價 NT.390" title="秋季新裝 甜甜嘗鮮價 NT.390"></a></div></div></div></div></div></div><div class="modal-backdrop fade in" style="display: none"></div>';
        		$('main').before(eles);
        		$(".popup-default-content").addClass("fadeindownpop");
        		$("#popup-default,.modal-backdrop").show(), l('#popup-default show');                
        		$("#popup-default,button.close").click(function() {
        			$("#popup-default,.modal-backdrop").hide(), l('#popup-default hide');                   
        		});
            } //localStorage or sessionStorage
            return false;
        });
});