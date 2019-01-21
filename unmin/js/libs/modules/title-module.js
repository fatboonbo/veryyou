define(function() {
	return {
		titleChange: function() {
			// dynamic change web title when tab/window is active/inactive
			var title = document.title;//grab title value
			sessionStorage.setItem("currentTitleVu", title);//store current title value to sessionStorage
			var singleTitle = "La La means I love you";//use this if you only need one title
			var quotes = new Array("La La means I love you", "blah blah blah");//title set for random pick
			randomTitle = quotes[Math.floor( Math.random() * chance/*quotes.length*/ )];//use this if you want random title
			var newTitles=[randomTitle, sessionStorage.getItem("currentTitleVu")];//titles for looping, seperate by comma

			var i=0;
			var interval = null;

			var timerTitle = function(){
				interval = setInterval(function(){
					if(i===newTitles.length) {i=0;}
					document.title = newTitles[i];
					i++;
				},1500);//loop interval times
			};

			$(document).ready(function() {
				$(".cart-pop .cart-count").each(function(){
					if ($(this).text() > '0') {

						window.addEventListener('focus', function() {
							clearInterval(interval);//clear title loop
							document.title = sessionStorage.getItem("currentTitleVu");
						});
						window.addEventListener('blur', function() {
							//document.title = randomTitle;
							timerTitle();
						});

					}
				});
			});

		}
	};
});