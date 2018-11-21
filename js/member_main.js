!function(e){var t=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]},i=function(t,i,n){this.setting={axis:"y",reverse:!1,trigger:"click",speed:500,forceHeight:!1,forceWidth:!1,autoSize:!0,front:".front",back:".back"},this.setting=e.extend(this.setting,i),"string"!=typeof i.axis||"x"!==i.axis.toLowerCase()&&"y"!==i.axis.toLowerCase()||(this.setting.axis=i.axis.toLowerCase()),"boolean"==typeof i.reverse&&(this.setting.reverse=i.reverse),"string"==typeof i.trigger&&(this.setting.trigger=i.trigger.toLowerCase());var s=parseInt(i.speed);isNaN(s)||(this.setting.speed=s),"boolean"==typeof i.forceHeight&&(this.setting.forceHeight=i.forceHeight),"boolean"==typeof i.forceWidth&&(this.setting.forceWidth=i.forceWidth),"boolean"==typeof i.autoSize&&(this.setting.autoSize=i.autoSize),("string"==typeof i.front||i.front instanceof e)&&(this.setting.front=i.front),("string"==typeof i.back||i.back instanceof e)&&(this.setting.back=i.back),this.element=t,this.frontElement=this.getFrontElement(),this.backElement=this.getBackElement(),this.isFlipped=!1,this.init(n)};e.extend(i.prototype,{flipDone:function(e){var i=this;i.element.one(t(),function(){i.element.trigger("flip:done"),"function"==typeof e&&e.call(i.element)})},flip:function(e){if(!this.isFlipped){this.isFlipped=!0;var t="rotate"+this.setting.axis;this.frontElement.css({transform:t+(this.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}),this.backElement.css({transform:t+"(0deg)","z-index":"1"}),this.flipDone(e)}},unflip:function(e){if(this.isFlipped){this.isFlipped=!1;var t="rotate"+this.setting.axis;this.frontElement.css({transform:t+"(0deg)","z-index":"1"}),this.backElement.css({transform:t+(this.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),this.flipDone(e)}},getFrontElement:function(){return this.setting.front instanceof e?this.setting.front:this.element.find(this.setting.front)},getBackElement:function(){return this.setting.back instanceof e?this.setting.back:this.element.find(this.setting.back)},init:function(e){var t=this,i=t.frontElement.add(t.backElement),n="rotate"+t.setting.axis,s=2*t.element["outer"+("rotatex"===n?"Height":"Width")](),o={perspective:s,position:"relative"},r={transform:n+"("+(t.setting.reverse?"180deg":"-180deg")+")","z-index":"0",position:"relative"},a={"backface-visibility":"hidden","transform-style":"preserve-3d",position:"absolute","z-index":"1"};t.setting.forceHeight?i.outerHeight(t.element.height()):t.setting.autoSize&&(a.height="100%"),t.setting.forceWidth?i.outerWidth(t.element.width()):t.setting.autoSize&&(a.width="100%"),(window.chrome||window.Intl&&Intl.v8BreakIterator)&&"CSS"in window&&(o["-webkit-transform-style"]="preserve-3d"),i.css(a).find("*").css({"backface-visibility":"hidden"}),t.element.css(o),t.backElement.css(r),setTimeout(function(){var n=t.setting.speed/1e3||.5;i.css({transition:"all "+n+"s ease-out"}),"function"==typeof e&&e.call(t.element)},20),t.attachEvents()},clickHandler:function(t){t||(t=window.event),this.element.find(e(t.target).closest('button, a, input[type="submit"]')).length||(this.isFlipped?this.unflip():this.flip())},hoverHandler:function(){var t=this;t.element.off("mouseleave.flip"),t.flip(),setTimeout(function(){t.element.on("mouseleave.flip",e.proxy(t.unflip,t)),t.element.is(":hover")||t.unflip()},t.setting.speed+150)},attachEvents:function(){var t=this;"click"===t.setting.trigger?t.element.on(e.fn.tap?"tap.flip":"click.flip",e.proxy(t.clickHandler,t)):"hover"===t.setting.trigger&&(t.element.on("mouseenter.flip",e.proxy(t.hoverHandler,t)),t.element.on("mouseleave.flip",e.proxy(t.unflip,t)))},flipChanged:function(e){this.element.trigger("flip:change"),"function"==typeof e&&e.call(this.element)},changeSettings:function(e,t){var i=this,n=!1;if(void 0!==e.axis&&i.setting.axis!==e.axis.toLowerCase()&&(i.setting.axis=e.axis.toLowerCase(),n=!0),void 0!==e.reverse&&i.setting.reverse!==e.reverse&&(i.setting.reverse=e.reverse,n=!0),n){var s=i.frontElement.add(i.backElement),o=s.css(["transition-property","transition-timing-function","transition-duration","transition-delay"]);s.css({transition:"none"});var r="rotate"+i.setting.axis;i.isFlipped?i.frontElement.css({transform:r+(i.setting.reverse?"(-180deg)":"(180deg)"),"z-index":"0"}):i.backElement.css({transform:r+(i.setting.reverse?"(180deg)":"(-180deg)"),"z-index":"0"}),setTimeout(function(){s.css(o),i.flipChanged(t)},0)}else i.flipChanged(t)}}),e.fn.flip=function(t,n){return"function"==typeof t&&(n=t),"string"==typeof t||"boolean"==typeof t?this.each(function(){var i=e(this).data("flip-model");"toggle"===t&&(t=!i.isFlipped),t?i.flip(n):i.unflip(n)}):this.each(function(){if(e(this).data("flip-model")){var s=e(this).data("flip-model");!t||void 0===t.axis&&void 0===t.reverse||s.changeSettings(t,n)}else e(this).data("flip-model",new i(e(this),t||{},n))}),this}}(jQuery),define("jsflip",function(){}),define("member_main",["jsflip"],function(e){is_touch_device()&&$(".accordion-account").on("click",function(){$(this).parent().hasClass("expand")?($(this).parent().find(".accordion-content").slideUp(500),$(this).parent().removeClass("expand").find(".expand").removeClass("expand")):($(this).parent().addClass("expand"),$(this).siblings(".accordion-content").slideDown(500),$(this).parent().siblings(".expand").find(".accordion-content").slideUp(500),$(this).parent().siblings(".expand").removeClass("expand").find(".expand").removeClass("expand"))}),$(".flipper").flip({trigger:"manual",axis:"y"}),$(".forget-pws").click(function(){$(".front").css("visibility","hidden"),$(".back").css("visibility","visible"),$(".flipper").flip(!0)}),$(".go-back").click(function(e){$(".flipper").flip(!1),$(".front").css("visibility","visible"),$(".back").css("visibility","hidden")}),$.fn.digits=function(){return this.each(function(){$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))})},$(".count").digits().css("opacity","1");var t=$(".block-edit-tel .edit"),i=$(".block-edit-tel .cancel"),n="hide",s=$(".block-edit-tel .tel-no-edit"),o=$(".block-edit-tel .tel-edit"),r=$(".block-edit-mobile .edit"),a=$(".block-edit-mobile .cancel"),l=$(".block-edit-mobile .tel-no-edit"),c=$(".block-edit-mobile .tel-edit"),f=$(".block-edit-tel .tel-edit input.form-control"),d=$(".block-edit-mobile .tel-edit input.form-control");t.on("click",function(e){e.preventDefault(),s.addClass(n),o.removeClass(n)}),i.on("click",function(e){e.preventDefault(),s.removeClass(n),o.addClass(n),f.val("")}),r.on("click",function(e){e.preventDefault(),l.addClass(n),c.removeClass(n)}),a.on("click",function(e){e.preventDefault(),l.removeClass(n),c.addClass(n),d.val("")}),$(".reasonType").on("change",function(){"02"===$(this).val()||"51"===$(this).val()?$(this).closest(".order-detail").children(".form-group").show():$(this).closest(".order-detail").children(".form-group").hide()})});