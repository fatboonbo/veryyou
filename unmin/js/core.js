define([/*"fontloader",*/"headroom","libs/modules/search-module", /**/"libs/modules/lazy-module","wowwow","bmodal",/*"libs/modules/global-menu",*/"libs/modules/sticky-module", "jscrollto"], function(headroom,search,lazy,wowwow,bmodal,/*globalmenu,*/sticky,jscrollto) {
    /**/
    function isNavVisible(nav) {
      return ( nav.classList.contains('visible') ? true : false );
    }
    var Headroom = require("headroom");
    var nav = document.getElementById('nav-header');
    // grab an element
    var myElement = document.querySelector("header");
    // construct an instance of Headroom, passing the element
    var options = {
        onUnpin: function() {
            if (isNavVisible(nav)) {
                this.elem.classList.remove(this.classes.unpinned);
                this.elem.classList.add(this.classes.pinned);
            } else {
                this.elem.classList.add(this.classes.unpinned);
                this.elem.classList.remove(this.classes.pinned);
            }
        }
    };
    var headroom = new Headroom(myElement,options);
    headroom.init();
    
    //globalmenu.globalmenu();
    /*
    (function() {
        new Headroom(document.querySelector("header"), {
            tolerance: 10,
            offset : 205
      }).init();

    }());*/
        
/*

if (!is_touch_device()) {
    var font0 = new FontFaceObserver('veryyou', {
        weight: 400
    });
    var fontA = new FontFaceObserver('reInconsolata', {
        weight: 400
    });
    var fontB = new FontFaceObserver('reInconsolata', {
        weight: 700
    });
    var fontC = new FontFaceObserver('rePlayfair Display', {
        weight: 400
    });
    var fontD = new FontFaceObserver('rePlayfair Display', {
        weight: 700
    });
    Promise.all([font0.load(null, 5000),fontA.load(null, 5000), fontB.load(null, 5000), fontC.load(null, 5000), fontD.load(null, 5000)]).then(function () {
      document.documentElement.className += " webfont-loaded",l('fonts loaded');
    }, function() {
      l('Web font could not be loaded in time. Falling back to system fonts.'),alert('Web font could not be loaded in time. Falling back to system fonts.');
    });
}
*/
/*
    $(document).ready(function() {

        ChangeMenu(); // check from the start
        var changed = true; // keep track of whether the element is added

        function ChangeMenu() {
            if (changed && $(window).width() >= 1024) {
                $('.inner-header.wrapper').append($('.nav-bottom'));
                //$('.list-style-nav-bottom').append($('.search-desktop')).insertBefore(('.member'));
                $('.list-style-nav-bottom').prepend($('.search-desktop'));
                //console.log('desktop menu initiate');
                changed = false;
            } else if (!changed && $(window).width() < 1024) {
                $('body').append($('.inner-header.wrapper .nav-bottom'));
                $('.list-style-nav-header').prepend($('.search-desktop'));
                //console.log('mobile menu initiate');
                changed = true;
            }
        }

        $(window).resize(ChangeMenu);


    });


    $(window).trigger('resize');
*/
    var wow = new WOW({
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        callback: function(box) {
            //console.log(box.tagName);
        }
    });
    wow.init();
    l("wow initiate");
/*
    //$("a.alink").click(function() {
    $(document).one("click touch", "a.alink", function(event) {
        var id = $(this);
        //var id = $('a.alink').index(this);
        //var id = $(this).attr("id");
        $("a.alink").removeClass("selected");
        $(id).addClass("selected");
        //$("a[href*='" + selectedolditem + "'].alink").parent('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
        //if (!$(id).hasClass("selected")) {
          //$('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
          $(id).parent('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
          l("hello hello hello")
        //}
        sessionStorage.setItem("selectedolditem", $(id).attr('href'));
    });
    var selectedolditem = sessionStorage.getItem("selectedolditem");
    if (selectedolditem !== null) {
        $("a[href*='" + selectedolditem + "'].alink").addClass("selected");
        //$("a[href*='" + selectedolditem + "'].alink").parent('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
        l(selectedolditem + " clicked");
    } 
*/
    //$("a.alink").click(function() {
    $(document).one("click touch", "a.alink", function(event) {
        var id = $(this);
        //var id = $('a.alink').index(this);
        //var id = $(this).attr("id");
        $("a.alink").removeClass("selected");
        $(id).addClass("selected");
        //$("a[href*='" + selectedolditem + "'].alink").parent('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
        //if (!$(id).hasClass("selected")) {
          //$('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
          $(id).parent('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
          l("hello hello hello")
        //}
        sessionStorage.setItem("selectedolditem", $(id).attr('href')),l(selectedolditem);
    });
    var selectedolditem = sessionStorage.getItem("selectedolditem");
    if (selectedolditem !== null) {
        $("a[href*='" + selectedolditem + "'].alink").addClass("selected");
        $("a[href*='" + selectedolditem + "'].alink").parent('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
        l(selectedolditem + " clicked");
    } 
/*
    //$("a.alink").click(function() {
    $(document).one("click touch", "li:not(.clink):not(.mlink) a.alink", function(event) {
        var id = $(this);
        //var id = $('a.alink').index(this);
        //var id = $(this).attr("id");
        $("a.alink").removeClass("selected");
        $(id).addClass("selected");
        //$("a[href*='" + selectedolditem + "'].alink").parent('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
        //if (!$(id).hasClass("selected")) {
          //$('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
          //$(id).parent('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
          l("hello hello hello")
        //}
        sessionStorage.setItem("selectedolditem", $(id).attr('href'));
    });
    var selectedolditem = sessionStorage.getItem("selectedolditem");
    if (selectedolditem !== null) {
        $("li:not(.clink):not(.mlink) a.alink").removeClass("selected");
        $("li:not(.clink):not(.mlink) a[href*='" + selectedolditem + "'].alink").addClass("selected");
        //$("a[href*='" + selectedolditem + "'].alink").parent('.secondary-nav li:has(a.selected)').closest('.nav-header-panel').prev().addClass('selected');
        l(selectedolditem + " clicked");
    } 
    
    //$('a.alink').on('click', function(e) {
    $(document).one("click touch", ".nav-header a.alink", function(e) {
        var id = $(this);
        l(id);
        l(JSON.stringify(id));
        sessionStorage.setItem('activeTab', $('.nav-header a.alink').index(id));
    });
    var activeTab = sessionStorage.getItem('activeTab');
    $("a.alink").removeClass("selected");
    if (activeTab) {
        activeTabEL = $('.nav-header a.alink').eq(parseInt(activeTab));
        activeTabEL.addClass('selected');
        //$('#nav1').parent().addClass('active'); 
        l(activeTabEL);
        //$("ul li.navigation-item").eq(parseInt(activeTab)).append("<span> - 2nd!</span>");
        $(".nav-header a.alink").eq(parseInt(activeTab)).addClass("selected");
    }

*/
 
    /*
    $('.scrollable').on('DOMMouseScroll mousewheel scroll touchmove', function(ev) {
        var $this = $(this),
        scrollTop = this.scrollTop,
        scrollHeight = this.scrollHeight,
        height = $this.innerHeight(),
        delta = ev.originalEvent.wheelDelta,
        up = delta > 0;

        var prevent = function() {
            ev.stopPropagation();
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        }

        if (!up && -delta > scrollHeight - height - scrollTop) {
        // Scrolling down, but this will take us past the bottom.
        $this.scrollTop(scrollHeight);
        return prevent();
    } else if (up && delta > scrollTop) {
        // Scrolling up, but this will take us past the top.
        $this.scrollTop(0);
        return prevent();
    }
    });
    */
/**/
$.scrollLock = ( function scrollLockClosure() {
    'use strict';

    var $html      = $( 'html' ),
    // State: unlocked by default
    locked     = false,
    // State: scroll to revert to
    prevScroll = {
        scrollLeft : $( window ).scrollLeft(),
        scrollTop  : $( window ).scrollTop()
    },
    // State: styles to revert to
    prevStyles = {},
    lockStyles = {
        'overflow-y' : 'scroll',
        'position'   : 'fixed',
        'width'      : '100%'
    };

    // Instantiate cache in case someone tries to unlock before locking
    saveStyles();

    // Save context's inline styles in cache
    function saveStyles() {
        var styleAttr = $html.attr( 'style' ),
        styleStrs = [],
        styleHash = {};

        if( !styleAttr ){
            return;
        }

        styleStrs = styleAttr.split( /;\s/ );

        $.each( styleStrs, function serializeStyleProp( styleString ){
            if( !styleString ) {
                return;
            }

            var keyValue = styleString.split( /\s:\s/ );

            if( keyValue.length < 2 ) {
                return;
            }

            styleHash[ keyValue[ 0 ] ] = keyValue[ 1 ];
        } );

        $.extend( prevStyles, styleHash );
    }

    function lock() {
        var appliedLock = {};

        // Duplicate execution will break DOM statefulness
        if( locked ) {
            return;
        }

        // Save scroll state...
        prevScroll = {
            scrollLeft : $( window ).scrollLeft(),
            scrollTop  : $( window ).scrollTop()
        };

        // ...and styles
        saveStyles();

        // Compose our applied CSS
        $.extend( appliedLock, lockStyles, {
            // And apply scroll state as styles
            'left' : - prevScroll.scrollLeft + 'px',
            'top'  : - prevScroll.scrollTop  + 'px'
        } );

        // Then lock styles...
        $html.css( appliedLock );

        // ...and scroll state
        $( window )
        .scrollLeft( 0 )
        .scrollTop( 0 );

        locked = true;
    }

    function unlock() {
        // Duplicate execution will break DOM statefulness
        if( !locked ) {
            return;
        }

        // Revert styles
        $html.attr( 'style', $( '<x>' ).css( prevStyles ).attr( 'style' ) || '' );

        // Revert scroll values
        $( window )
        .scrollLeft( prevScroll.scrollLeft )
        .scrollTop(  prevScroll.scrollTop );

        locked = false;
    }

    return function scrollLock( on ) {
        // If an argument is passed, lock or unlock depending on truthiness
        if( arguments.length ) {
            if( on ) {
                lock();
            }
            else {
                unlock();
            }
        }
        // Otherwise, toggle
        else {
            if( locked ){
                unlock();
            }
            else {
                lock();
            }
        }
    };
}() 
);
var Dt = {
        disable: function() {
            $.scrollLock( true );
            headroom.destroy();
            $("header").addClass("headroom--not-top ffix headroom--pinned");
        },
        enable: function() {
            $.scrollLock( false );
            headroom.init();
            $("header").addClass("headroom--not-top ffix headroom--pinned");
        }
    };
    function globalmenu() {
    "use strict";
    //shopping cart popup
    //var $this = $(this);
    var alink = $("a.alink", $(this));
    var timer;
    var delay = 150;
    var Cp = $(".cart-pop"),
        Mp = $(".member-pop"),
        Sp = $(".search-pop"),
        Nhp = $(".nav-header-panel"),
        ct = $(".cart-panel"),
        mt = $(".member-panel"),
        it = "is-open",
        so = "is-open-sale",
        im = "is-open-m",
        sm = $(".searchModal"),
        ov = $(".overlay"),
        ac = "active",
        cb = "cart-bottom",
        iss = "is-shown",
        hh = $("html"),
        bt = $("html button.close, html .overlay"),
        mo = "mobile-menu-open",
        Mbt = $(".btn-mobile"),
        Nhp = $(".nav-header-panel"),
        Hdd = $("#nav-header"),
        hnt = "headroom--pinned",
        hi = "hidden",
        tt = $(".smcs-input"),
        allbutm = "is-open is-open-sale mobile-menu-open",
        allbutt = "is-open-m is-open-sale mobile-menu-open",
        allbuts = "is-open-m is-open mobile-menu-open",
        allbutmo = "is-open-m is-open is-open-sale",
        allelse = "is-open-m is-open is-open-sale mobile-menu-open",
        mlink = $(".list-style-nav-header>li.mlink"),
        mlinka = $(".list-style-nav-header>li.mlink a"),
        clink = $(".list-style-nav-header>li.clink"),
        Bce = $(".btn-cart-edit"),
        Sscs = $(".section-shopping-cart.sales");
        //oot= $("<div class='overlay'></div>");
        //bdd = $("body");
        //hep = "headroom--top";
        //nav = $("#nav-header");
        //open sale temp cart to edit
        if (is_touch_device()) {
            Cp.on("click", function(c) {
                c.preventDefault(c);
                hh.removeClass(allbutt);
                ct.toggleClass(it);
                hh.toggleClass(it);
                mt.removeClass(im);
                sm.removeClass(ac);
                Nhp.removeClass(iss);
                return hh.hasClass(it) ? Dt.disable():Dt.enable();
            });
            Mp.on("click", function(d) {
                d.preventDefault();
                hh.removeClass(allbutm);
                mt.toggleClass(im);
                hh.toggleClass(im);
                ct.removeClass(it);
                sm.removeClass(ac);
                Nhp.removeClass(iss);
                return hh.hasClass(im) ? Dt.disable():Dt.enable();
            });
            hh.on("click","button.close", function(e) {
                e.preventDefault();
                hh.removeClass(allelse);
                ct.removeClass(it);
                mt.removeClass(im);
                Nhp.removeClass(iss);
                Dt.enable();
                l("overlay clicked");
            });
            ov.on("click", function(o) {
                o.preventDefault();
                hh.removeClass(allelse);
                ct.removeClass(it);
                mt.removeClass(im);
                Nhp.removeClass(iss);
                Dt.enable();
                l("overlay clicked");
            });
            Sp.on("click", function(c) {
            //$("button.close, .overlay").on("click", function(c) {
                c.preventDefault();
                //Hdd.addClass(hnt);
                hh.removeClass(allelse);
                sm.toggleClass(ac);
                ct.removeClass(it);
                mt.removeClass(im);
                Nhp.removeClass(iss);
                //bd.toggleClass(hi);
                Dt.enable();
                //return sm.hasClass(ac) ? Dt.disable():Dt.enable();
            });

            mlink.on("click touch", function(event) {
                var alink = $("a.alink", $(this));
                if (alink.next(Nhp).hasClass((iss))) {
                    Nhp.removeClass(iss);
                    hh.removeClass(allelse);
                    Dt.enable();
                } else {
                    Nhp.removeClass(iss);
                    hh.removeClass(allbuts);
                    alink.next(Nhp).addClass(iss);
                    hh.addClass(so);
                    Dt.disable();
                }
            });
            Bce.on("click", function(h) {
                h.preventDefault();
                if (Sscs.hasClass(ac)) {
                    Sscs.removeClass(ac);
                    Bce.removeClass(ac);
                    Dt.enable();
                } else {
                    Sscs.addClass(ac);
                    Bce.addClass(ac);
                    Dt.disable();
                }
            });
        } else {
            Cp.on("mouseenter", function(c) {
                $(this).data('timeout', setTimeout(function() {
                    ct.addClass(it);
                    hh.addClass(it);
                    mt.removeClass(im);
                    Nhp.removeClass(iss);
                    Dt.enable();
                }, 200));
            }).mouseleave(function() {
                clearTimeout($(this).data('timeout'));
            });
            bt.on("click", function(c) {
                ct.removeClass(it);
                hh.removeClass(it);
                mt.removeClass(im);
                Dt.enable();
            });
            ct.on("mouseleave", function(c) {
                ct.removeClass(it);
                hh.removeClass(it);
                Dt.enable();
            });
            //Mp.on("click", function(p) {});
            Sp.on("click", function(c) {
                c.preventDefault();
                hh.removeClass(allelse);
                mt.removeClass(im);
                ct.removeClass(it);
                mt.removeClass(it);
                Nhp.removeClass(iss);
                sm.toggleClass(ac);
                tt.focus();
                //bd.toggleClass(hi),
                Dt.enable();
            });
            mlink.on("mouseenter", function(event) {
                var alink = $("a.alink", $(this));
                timer = setTimeout(function() {
                    alink.next(Nhp).addClass(iss);
                    hh.addClass(so);
                }, delay);
            }).mouseleave(function(event) {
                clearTimeout(timer);
            });
            mlink.on("mouseleave", function(event) {
                alink.next(Nhp).removeClass(iss);
                Nhp.removeClass(iss);
                hh.removeClass(allbutmo);
            });
            mlinka.on("click", function(e) {
                if (alink.next(Nhp).is(":visible")) {
                    clink.off("mouseenter").off("mouseleave");
                }
            });
        }

    Mbt.on("touchmove click", function(m) {
        m.preventDefault();
        hh.removeClass(allbutmo);
        hh.toggleClass(mo);
        Nhp.removeClass(im);
        Nhp.removeClass(iss);
        return hh.hasClass(mo) ? Dt.disable():Dt.enable();
    });
    
};
globalmenu();
    /*
    var Dt = {
        disable: function() {
            $(".overlay, #nav-header").on("scroll mousewheel touchmove", function(t) {
                t.preventDefault(), t.stopPropagation()
            })
        },
        enable: function() {
            $(".overlay, #nav-header").off("scroll mousewheel touchmove")
        }
    };
    var Dt = {
        disable: function() {
            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            })
        },
        enable: function() {
            $('body').css({
                overflow: 'auto',
                height: 'auto'
            })
        }
    };
*/
/*
function stopScrolling (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}
function opn1(h) {
    h.preventDefault();
    $('.nav-header-panel').removeClass("is-shown");
    $('a.alink', this).next('.nav-header-panel').addClass("is-shown");
    //$('.nav-header-panel.is-shown').on('scroll mousewheel touchmove', stopScrolling);
    $(this).one("click", opn2);
    console.log("opn2");
}

function opn2(h) {
    h.preventDefault();
    $('.nav-header-panel').removeClass("is-shown");
    $('a.alink', this).next('.nav-header-panel').removeClass("is-shown");
    //$('body').off('scroll mousewheel touchmove', stopScrolling);
    $(this).one("click", opn1);
    console.log("opn1");
}
*/

/*, Mbt.off("touchmove click", function(m) {
        m.preventDefault(), hl.removeClass(mo), bd.removeClass(hi), Dt.enable()
    }), ov.on("touchmove click", function(m) {
        m.preventDefault(), hl.toggleClass(mo), Dt.enable()
    })*//*
    var Srh = $(".search-pop"),
    sm = $(".searchModal"),
    ov = $(".overlay"),
    bd = $("main"),
    ac = "active",
    ov = $(".overlay"),
    hi = "hidden";
    Srh.on("touchmove click", function(b) {
        b.preventDefault(), sm.toggleClass(ac),bd.toggleClass(hi), Dt.disable()
    })*/
    // BACKTOTOP
    //$(window).scroll(function() {
    //window.addEventListener('scroll', function(){
    window.addEventListener('scroll', throttle(callback, 1000));

    function throttle(fn, wait) {
      var time = Date.now();
      return function() {
        if ((time + wait - Date.now()) < 0) {
          fn();
          time = Date.now();
      }
      }
    }
    function callback() {
        var topped = false;
        if (!topped && $(this).scrollTop() > 300) {
            $("#backtotop").addClass("active");
            topped = true;
        } else {
            $("#backtotop").removeClass("active");
            topped = false;
        }
    }
    //});
    $('#backtotop').on("click touchstart", function() {

        if (isIE > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
        {

            $('body').ScrollTo({
                easing: 'linear',
                offsetTop: '0px'
            }); // or ui.newContent, if you prefer
        } else // If another browser, return 0
        {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        }

    });

      //$('.accordion-mobile').on('click', function(){
      $(document).on("click touch", ".accordion-mobile", function() {
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
      //$('.accordion-footer').on('click', function(){
      $(document).on("click touch", ".accordion-footer", function() {
        if($(this).parent().hasClass('expand')){
          $(this).parent().find('.accordion-content').slideUp(500);
          $(this).parent().removeClass('expand').find('.expand').removeClass('expand');
        }else{
          $(this).parent().addClass('expand');
          $(this).siblings('.accordion-content').slideDown(500);
          $(this).parent().siblings('.expand').find('.accordion-content').slideUp(500);
          $(this).parent().siblings('.expand').removeClass('expand').find('.expand').removeClass('expand');
        }
      });
      $("a.accordion-mobile").each(function(){
        //if($(this).next(".accordion-content").not('ul.accordion-content')) {
        if($(this).next().is("ul.accordion-content")) {
        //if($(this).next("ul")[0]) {
            //return false;
        } else {
          $(this).find("span.x").removeClass("x").addClass("icon-angle-right");
          }
      });
/*

if (is_touch_device()) {

    var hoverClass = 'tlink', // the "simulated hover" class
        $projectContainers = $('.list-style-nav-header>li.mlink');

    $projectContainers.on('click',function(event){
        var $this = $(this);
        if(!$this.hasClass(hoverClass)){
            event.preventDefault();
            //$projectContainers.removeClass(hoverClass);
            //$this.addClass(hoverClass);
            return false;
        }
    }).on('focusout',function(){
        // remove the class if the user focuses on another element
        $(this).removeClass(hoverClass);  
    });
}
*/
   /* 
    $("#email_form").on("submit", function(e){
     e.preventDefault();
     var $this = $(this);
     var email = $('.input-subscribe').val();
     $.ajax({
            url: $this.attr('action'), // Le nom du fichier indiqué dans le formulaire
            method:"POST",
            dataType: "json", // La méthode indiquée dans le formulaire (get ou post)
            data: {message: email}, // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
            success: function(data, textStatus, xhr) {
                if(xhr.status==200)
                    alert('Nous vous tiendrons au courant de nos dernières actu ! \n Wefoot');
                $('.input-subscribe').val('');
                $('#notice_modal').modal('show'); // Add this and it will open the modal 

            }
        });

 });*/
 /*
 var email = $('input[name=EMAIL]').val();

if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
  // valid email
} else {
  // invalid email
}

$(function(){
    $('#email_form').on('submit', function(e){
        e.preventDefault();
        var $this = $(this);
        var email = $('input[name=EMAIL]').val();
        $.ajax({
            //url: url, //this is the submit URL
            url: $this.attr('action'),
            type: 'POST', //or POST
            data: $('#email_form').serialize(),
            success: function(data){
               //alert('successfully submitted')
               $('.input-subscribe').val('');
               $('#notice_modal').modal('show');
           }
       });
    });
});
return {
subscribeFooter: function() {
    $('#email_form').on('submit', function(e) {
        e.preventDefault();
        var $this = $(this);
        var email = $('input[name=EMAIL]').val();
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
            $.ajax({
                url: $this.attr('action'),
                type: 'POST',
                //data: {message: email}
                data: $('#email_form').serialize(),
                success: function(data) {
                    $(".input-subscribe").val('');
                    var alas = '<div class="modal fade" id="email_subscribe" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div id="notice"> <div class="notice-wrapper"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="btnclose icon-close"></i></button> <div class="title-wrapper"> <br><div> <div>Thank You!</div><h2>訂閱成功!</h2> </div></div><p>感謝您的喜愛與支持，<br>VERYYOU電子報訂閱成功!<br>每週定期給你最新VERYYOU消息與優惠❤ </p><div class="newsletter-form2" > <div class="button-group-2 button-row" style="margin:0"> <div> <button type="submit" class="btn btn-confirm" data-dismiss="modal">確認</button> </div></div></div></div></div></div></div></div>';
                    $("body").before(alas);
                    $("#email_subscribe").modal('show');
                    $(".error-subscribe").hide();
                    e.preventDefault();
                }
            });
            return false;
        } else {
            if(!$('.error-subscribe').length) {
                $(".block-subscribe").append($('<div class="error-subscribe" style="color:#DC5168;font-size:.9em">請輸入正確的電子信箱格式! ex: example@gmail.com</div>'));
            }            
            //$(".error-subscribe").show();
        }
    });
     
}
}

function subscribePopup() {
    $('#email_form2').on('submit', function(d) {
        d.preventDefault();
        var $this = $(this);
        var email = $('input[name=EMAIL]').val();
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
            $.ajax({
                url: $this.attr('action'),
                type: 'POST',
                //data: {message: email}
                data: $('#email_form2').serialize(),
                success: function(data) {
                    $(".input").val('');
                    var alas = '<div class="modal fade" id="email_subscribe" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div id="notice"> <div class="notice-wrapper"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="btnclose icon-close"></i></button> <div class="title-wrapper"> <br><div> <div>Thank You!</div><h2>訂閱成功!</h2> </div></div><p>感謝您的喜愛與支持，<br>VERYYOU電子報訂閱成功!<br>每週定期給你最新VERYYOU消息與優惠❤ </p><div class="newsletter-form2" > <div class="button-group-2 button-row" style="margin:0"> <div> <button type="submit" class="btn btn-confirm" data-dismiss="modal">確認</button> </div></div></div></div></div></div></div></div>';
                    $("body").before(alas);
                    $("#email_subscribe").modal('show');
                    $(".error-subscribe").hide();
                    d.preventDefault();
                }
            });
            return false;
        } else {
            if(!$('.error-subscribe').length) {
              $(".email_form01").append($('<div class="error-subscribe" style="color:#DC5168;font-size:.9em">請輸入正確的電子信箱格式!<br>ex: example@gmail.com</div>'));
            }
            //$(".error-subscribe").show();
        }
    });
     
};
*/

require(['js/libs/modules/subscribe-footer.js'], function(subscribeFooter) {
    $('.btn-subscribe').on('click', function() {
        subscribeFooter.subscribeFooter();
    });
});
require(['js/libs/modules/subscribe-email.js'], function(subscribePopup) {
    $('#btnNewletter').on('click', function() {
        subscribePopup.subscribePopup();
    });
});
//return {subscribeFooter:subscribeFooter};
//subscribeFooter();
//subscribePopup();
l("core plugin fully loaded");

  // invalid email


}); /* end of universal function */