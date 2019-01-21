define([],function() {
	return {
		lineHelpermenu: function() {

			"use strict";
			var helper;
            //var loadLine = false;
			
            if (!is_touch_device()) {
                /*
                $.get('html/line-helper.html', function(data){
                    helper= data;
                    $("#footer").before(helper),l("line helper html");
                });
                */
                var html = [];
                html.push('<div id="line-helper" class="line-helper-wrapper">'+
                    '<div class="line-helper">'+
                    '<button type="button" class="close" aria-label="Close"><span class="icon-close"></span></button>'+
                    '<div class="line-helper-logo">'+
                    '<div class="half"><div class="agent circle"><i class="icon-logo-veryyou"></i></div></div>'+
                    '</div>'+
                    '<div class="line-helper-title-wrap">'+
                    '<div class="line-helper-title">'+
                    '<h2 class="poweredby">-- Powered by <i class="icon-logo-veryyou"></i>--</h2>'+
                    '</div>'+
                    '<div class="messages">'+
                    '<div><img src="css/images/blank.gif" class="lazyload" data-src="https://photo.eyescream.com.tw/VeryYou/banner/aboutus/VERYYOU%20LINE@%20QR%20CODE.jpg" alt="加入LINE好友!" title="加入LINE好友!" width="330" height="331"></div>'+
                    '</div>'+
                    '<div class="line-helper-footer">'+
                    '<h2>透過QR code加入LINE好友</h2>'+
                    '<p>請在<span class="line-green">LINE</span>應用程式上開啟「好友」分頁，點選畫面右上方用來加入好友的圖示。</p>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+

                    '<div id="button_line">'+
                    '<i class="icon-line"></i>'+
                    '</div>'+
                    '<div id="message_bubble"><p>需要協助嗎?<br>點我可以聯繫小幫手唷!</p></div>'+
                    '</div>');

                document.getElementById('footer').insertAdjacentHTML("beforeBegin",html.join(''),l("line helper jquery2"));
                //document.getElementById('footer').innerHTML = html.join(''),l("line helper jquery");
            } else {
                var html = [];
                html.push('<div id="line-helper" class="line-helper-wrapper">'+
                    '<div id="button_line">'+
                    '<i class="icon-line"></i>'+
                    '</div>'+
                    '<div id="message_bubble"><p>需要協助嗎?<br>點我可以聯繫小幫手唷!</p></div>');

                document.getElementById('footer').innerHTML = html.join(''),l("test added");
            }

            var  //msg = $("#message_bubble"),
            //msgc = "message_bubble",
            //msg = $(msgc),
            lineWrapper = $(".line-helper-wrapper"),
            /*
            lineHelper = '<div class="line-helper-wrapper">'+
            '<div id="button_line">'+
            '<i class="icon-line"></i>'+
            '</div>'+
            '<div id="'+msgc+'"><p>需要協助嗎?<br>點我可以聯繫小幫手唷!</p></div>',
            */
            lineWrapper = $(".line-helper-wrapper"),
            atv = "active",
            clk = "clicked";
            /*
            var html = [];
            html.push('<div class="line-helper-wrapper">'+
                '<div id="button_line">'+
                '<i class="icon-line"></i>'+
                '</div>'+
                '<div id="'+msgc+'"><p>需要協助嗎?<br>點我可以聯繫小幫手唷!</p></div>');

            document.getElementById('footer').innerHTML = html.join(''),l("test added");
            */


            //if (document.getElementById("line-helper")) {
                setTimeout(function() {
                    $(".line-helper button.close").on("click",function(){
                        $("#line-helper").removeClass(atv);
                        //$("#button_line").removeClass("atv clk");
                    })
                    if (is_touch_device()) {
                        $("#button_line").on("click touch",function() {
                            window.location = "https://line.me/R/ti/p/%40ixo8426n";
                        });
                    } else {
                    	setTimeout(function() {
                    		if (!$(".line-helper").hasClass(atv)) {
                    			$("#message_bubble").addClass(atv).delay(5000).queue(function(){
                    				$(this).removeClass(atv).dequeue();
                    			});
                    		}
                    	}, 3000);
                        $(".line-helper-wrapper").on("mouseenter", function() {
                            $(this).data('timeout', setTimeout(function() {
                                if ($("#line-helper").hasClass(atv)) {
                                    $("#message_bubble").removeClass(atv);
                                } else {
                                    $("#message_bubble").addClass(atv);
                                }
                            }, 200));
                        }).mouseleave(function() {
                            $("#message_bubble").removeClass(atv);
                            clearTimeout($(this).data('timeout'));
                        });
/*
                        $("#button_line").on('click',function(){  
                        	if (!$("#line-helper").hasClass(atv)) {
                        		$("#line-helper").addClass(atv);
                        	} else {
                        		$("#line-helper").removeClass(atv);
                        	}
                        	// handle click event, put money in my bank account  
                        }).one("mouseenter",function(){  
                        	$("#message_bubble").removeClass(atv);                        	
                        	$(this).data('timeout', setTimeout(function() {                        		
                        		if (!$(this).hasClass(atv)) {
                        			$(this).addClass(atv);
                        		}
                        		if (!$("#line-helper").hasClass(atv)) {
                        		$("#button_line").trigger('click');
                        		}
                        	}, 200));
                        	
                        	// handle hover mouse enter of hover event, put money in my bank account  
                        }).on('mouseenter',function(){  
                        	// handle hover mouse enter of hover event, put money in my bank account  
                        }).on('mouseleave',function(){  
                        	// handle mouse leave event of hover, put money in my bank account  
                        });
*/
                        $("#button_line").on('click',function(){  
                        	if (!$("#line-helper").hasClass(atv)) {
                        		$("#line-helper").addClass(atv);
                        	} else {
                        		$("#line-helper").removeClass(atv);
                        	}
                        	// handle click event, put money in my bank account  
                        }).on('mouseenter',function(){  
                        	$("#message_bubble").removeClass(atv);                        	
                        	$(this).data('timeout', setTimeout(function() {                        		
                        		if (!$(this).hasClass(atv)) {
                        			$(this).addClass(atv);
                        		}
                        		if (!$("#line-helper").hasClass(atv)) {
                        		$("#button_line").trigger('click');
                        		}
                        	}, 200));
                        	// handle hover mouse enter of hover event, put money in my bank account  
                        }).on('mouseleave',function(){  
                        	// handle mouse leave event of hover, put money in my bank account  
                        });
/*
                        $("#button_line").on("mouseenter",function() {
                        	$("#message_bubble").removeClass(atv);                        	
                        	$(this).data('timeout', setTimeout(function() {                        		
                        		if (!$(this).hasClass(atv)) {
                        			$(this).addClass(atv);
                        		}
                        		if (!$("#line-helper").hasClass(atv)) {
                        		$("#button_line").click();
                        		}
                        	}, 200));
                        	
                        });
                        $("#button_line").on("click", function(){
                        	
                        	if (!$("#line-helper").hasClass(atv)) {
                        		$("#line-helper").addClass(atv);
                        	} else {
                        		$("#line-helper").removeClass(atv);
                        	}
                        });
*/
                    }
                }, 0);
            //}
            
            //lineWrapper.load(lineMsg);
            //}



		}//edn of line helper menu

	};
});