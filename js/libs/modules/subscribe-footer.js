define(["jquery"],function(e,i){return{subscribeFooter:function(){e("#form_epaper1").on("submit",function(i){i.preventDefault();var s=e(this);if(/(.+)@(.+){2,}\.(.+){2,}/.test(e("input[name=email]").val()))return e.ajax({url:s.attr("https://www.veryyou.com.tw/Epaper.asp"),type:"POST",data:e("#form_epaper1").serialize(),success:function(s){e(".input-subscribe").val(""),e("body").before('<div class="modal fade" id="email_subscribe" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div id="notice"> <div class="notice-wrapper"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="btnclose icon-close"></i></button> <div class="title-wrapper"> <br><div> <div>Thank You!</div><h2>訂閱成功!</h2> </div></div><p>感謝您的喜愛與支持，<br>VERYYOU電子報訂閱成功!<br>每週定期給你最新VERYYOU消息與優惠❤ </p><div class="newsletter-form2" > <div class="button-group-2 button-row" style="margin:0"> <div> <button type="submit" class="btn btn-confirm" data-dismiss="modal">確認</button> </div></div></div></div></div></div></div></div>'),e("#email_subscribe").modal("show"),e(".error-subscribe").remove(),e("#email_subscribe").on("hidden",function(){e(this).data("modal",null),e(".error-subscribe").remove()}),i.preventDefault()}}),!1;e(".error-subscribe").length||e(".block-subscribe").append(e('<div class="error-subscribe" style="color:#DC5168;font-size:.9em">請輸入正確的電子信箱格式! ex: example@gmail.com</div>'))})}}});