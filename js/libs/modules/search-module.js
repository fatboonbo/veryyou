define(["jquery"],function(e){!function(e){e.fn.clearSearch=function(a){var t=e.extend({clearClass:"clear_input",focusAfterClear:!0,linkText:"&times;"},a);return this.each(function(){function a(){n.val("").change(),c(),t.focusAfterClear&&n.focus(),"function"==typeof t.callback&&t.callback()}function c(){l()?s.show():s.hide(),r()}function l(){return n.val().replace(/^\s+|\s+$/g,"").length>0}function r(){var e=n.outerWidth(),a=n.outerHeight();s.css({top:a/2-s.height()/2,left:e-a/2-s.height()/2})}var s,n=e(this),o=t.clearClass+"_div";n.parent().hasClass(o)||(n.wrap('<div style="position: relative;" class="'+o+'"></div>'),n.after('<a style="position: absolute; cursor: pointer;" class="'+t.clearClass+'">'+t.linkText+"</a>")),s=n.next(),n.prop("autofocus")&&n.focus(),s.on("click",a),n.on("keyup keydown change focus",c),c()})}}(jQuery),e(function(){e(".clearable").clearSearch({callback:function(){l("cleared")}})}),e(function(){var a=document.getElementById("search-id"),t=localStorage.getItem("savedsearch");null!==t&&(e("#search-id").attr("value",t),l(t+" searched"),e(".breadcrumb.style1 h1").text("搜尋結果 : "+t),l(a.value+" loaded"),is_touch_device()||e(".searchModal").addClass("active"),setTimeout(function(){e("#nav-header").addClass("headroom--pinned")},200)),a.value==t&&localStorage.removeItem("savedsearch"),e("form.search_form").on("submit",function(a){if(""==e.trim(e("#search-id").val()))a.preventDefault(),e("#search-id").attr("placeholder","請輸入關鍵字").addClass("warning_search").val("").focus().blur();else{var t=document.getElementById("search-id");localStorage.setItem("savedsearch",t.value),l("set storage "+t.value)}})})});