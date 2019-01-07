define(["Dt"],function(Dt) {
	return {
		globalmenu: function() {

			"use strict";
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
					l("close button clicked");
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
					c.preventDefault();
					hh.removeClass(allelse);
					sm.toggleClass(ac);
					ct.removeClass(it);
					mt.removeClass(im);
					Nhp.removeClass(iss);
					Dt.enable();
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
				Sp.on("click", function(c) {
					c.preventDefault();
					hh.removeClass(allelse);
					mt.removeClass(im);
					ct.removeClass(it);
					mt.removeClass(it);
					Nhp.removeClass(iss);
					sm.toggleClass(ac);
					tt.focus();
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



		}//edn of global menu

	};
});