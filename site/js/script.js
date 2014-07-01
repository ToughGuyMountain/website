

$(document).ready(function() {
	
	var height = $(window).height();
	$(".blocks").height(height);

		var toggleON = {
			height: height-50,
			position: "absolute",
			top: "100px",
			left: "0px",
		};

		var toggleOFF = {
			height: "100%",
			position: "relative",
			top: "0px",
			margin:"0px",
		};

	$(".people").toggle(function(){

		$(".people").not(this).hide();
		$(this).children("img").css(toggleON);
		$(this).children(".people_info").css("display","block");
		},
		function() {
			$(this).children("img").css(toggleOFF);
			$(this).children(".people_info").css("display","none");
			$(".people").not(this).show();
			

		});

});

$(window).resize(function () {
	var height = $(window).height();
	$(".blocks").height(height);
});
