 

$(document).ready(function() {

	var height = $(window).height();
	$(".blocks").height(height);

		var toggleON = {
			height: height-50,
			position: "absolute",
			top: "50px",
			left: "0px",
			width: "50%",
		};

		var toggleOFF = {
			height: "80%",
			width:"80%",
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


