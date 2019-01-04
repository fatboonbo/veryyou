define(["jquery"],function($,subscribeFooter) {
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
						data: $('#email_form').serialize(),
						success: function(data) {
							$(".input-subscribe").val('');
							var alas = '<div class="modal fade" id="email_subscribe" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div id="notice"> <div class="notice-wrapper"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="btnclose icon-close"></i></button> <div class="title-wrapper"> <br><div> <div>Thank You!</div><h2>訂閱成功!</h2> </div></div><p>感謝您的喜愛與支持，<br>VERYYOU電子報訂閱成功!<br>每週定期給你最新VERYYOU消息與優惠❤ </p><div class="newsletter-form2" > <div class="button-group-2 button-row" style="margin:0"> <div> <button type="submit" class="btn btn-confirm" data-dismiss="modal">確認</button> </div></div></div></div></div></div></div></div>';
							$("body").before(alas);
							$("#email_subscribe").modal('show');
							$(".error-subscribe").remove();
							$('#email_subscribe').on('hidden', function(){
								$(this).data('modal', null);
								$(".error-subscribe").remove();   
							});
							e.preventDefault();
						}
					});
					return false;
				} else {
					if(!$('.error-subscribe').length) {
						$(".block-subscribe").append($('<div class="error-subscribe" style="color:#DC5168;font-size:.9em">請輸入正確的電子信箱格式! ex: example@gmail.com</div>'));
					}            
				}
			});

		}
	};
});