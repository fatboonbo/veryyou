define(["jquery"], function($) {
   /* clear search */
    (function($) {
        $.fn.clearSearch = function(options) {
            var settings = $.extend({
                'clearClass': 'clear_input',
                'focusAfterClear': true,
                'linkText': '&times;'
            }, options);
            return this.each(function() {
                var $this = $(this),
                    btn,
                    divClass = settings.clearClass + '_div';

                if (!$this.parent().hasClass(divClass)) {
                    $this.wrap('<div style="position: relative;" class="' + divClass + '"></div>');
                    $this.after('<a style="position: absolute; cursor: pointer;" class="' +
                        settings.clearClass + '">' + settings.linkText + '</a>');
                }
                btn = $this.next();

                function clearField() {
                    $this.val('').change();
                    triggerBtn();
                    if (settings.focusAfterClear) {
                        $this.focus();
                    }
                    if (typeof(settings.callback) === 'function') {
                        settings.callback();
                    }
                }

                function triggerBtn() {
                    if (hasText()) {
                        btn.show();
                    } else {
                        btn.hide();
                    }
                    update();
                }

                function hasText() {
                    return $this.val().replace(/^\s+|\s+$/g, '').length > 0;
                }

                function update() {
                    var width = $this.outerWidth(),
                        height = $this
                        .outerHeight();
                    btn.css({
                        top: height / 2 - btn.height() / 2,
                        left: width - height / 2 - btn.height() / 2
                    });
                }

                if ($this.prop('autofocus')) {
                    $this.focus();
                }

                btn.on('click', clearField);
                $this.on('keyup keydown change focus', triggerBtn);
                triggerBtn();
            });
        };
    })(jQuery);
    $(function() {
        // init plugin (with callback)
        $('.clearable').clearSearch({
            callback: function() {
                //console.log("cleared");
                l("cleared");
            }
        });

    });
    $(function() {
        	var input = document.getElementById("search-id");
        	var savedsearch = localStorage.getItem("savedsearch");
        	if (savedsearch !== null) {
        			$("#search-id").attr("value", savedsearch),l(savedsearch + " searched");
        			$(".breadcrumb.style1 h1").text("搜尋結果 : "+savedsearch),l(input.value+" loaded");;
        			$(".searchModal").addClass("active");
                    setTimeout(function() {
                        $("#nav-header").addClass("headroom--pinned");
                    }, 200);


        			//var sm = $(".searchModal"),
        			//ac = "active";
        			//return sm.hasClass(ac) ? Dt.disable():Dt.enable();	
        	}  
        	if (input.value == savedsearch)  {
        		//l(savedsearch + " same?");
        		localStorage.removeItem("savedsearch");
        		//l(savedsearch + " now?");

        	}
        	$("form.search_form").on("submit",function(e){
        		if($.trim($('#search-id').val()) == ''){
        			e.preventDefault();
        			$("#search-id").attr("placeholder", "請輸入關鍵字").addClass("warning_search").val("").focus().blur();
        		} else {
        			var input = document.getElementById("search-id");
        			localStorage.setItem("savedsearch", input.value);l("set storage "+input.value);  
        		}
        	});

    });

});