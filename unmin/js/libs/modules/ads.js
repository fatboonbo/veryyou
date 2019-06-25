define(["jquery"],function($,adsBanner) {
	return {
		adsBanner: function() {
			$.ajax({
				type: 'GET',
				cache: false,
				url: location.href,
				success: function (req, textStatus,xhr) {
					var dateString = xhr.getResponseHeader('Date');
					if (dateString.indexOf('GMT') === -1) {
						dateString += ' GMT';
					}
					var dtNow = new Date(dateString);
					l(dtNow);
					//$('#serverTime').text(dtNow);
					$(".timedContentWrap").each(function (index) {
						var sRange = $(this).find(".DateRange").html();
						var arrTemp = sRange.split(" to ");
						var dtFrom = new Date(arrTemp[0]);
						//var dtFrom = new Date(st);
						l(dtFrom);
						var dtTo = new Date(arrTemp[1]);

						//var newdtTo = arrTemp[1].replace(/ /g,'');
						var newdtTo = arrTemp[0].replace(/:/g, '').replace(/ /g,'');
						//var dtTo = srvTime(arrTemp[1]);
						l(dtTo);
						//var dtNow = new Date();
						var timeInMillis = Date.parse(dtTo);
						l(newdtTo);
						//$name='myfile_'.date('m-d-Y_hia').'html';
						if (dtNow >= dtFrom && dtNow <= dtTo) 
							$.ajax({
								url: "ads/ads-"+newdtTo+".html",
								cache: false,
								success: function (data) {
									//$('body').append(data);
									document.getElementById("footer").insertAdjacentHTML('beforeend',data);
									l("ads added");
									//$('head').append('<link rel="stylesheet" href="css/ads.css?v=2019061901" type="text/css" />');

									$("#ads-header button.close").click(function() {
										$("#ads-header").addClass("hidden");
									});
									$("#ads-footer button.close").click(function() {
										$("#ads-footer").addClass("hidden");               
									}); 
								},
								dataType: 'html'
							});
						//$(this).delay(300).slideDown('slow');
					});
				}
			});

		}
	};
});