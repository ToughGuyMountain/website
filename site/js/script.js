

$(document).ready(function() {
	
	var height = $(window).height();
	$(".blocks").height(height);

	$("#people_banner").children("div").click(function(event){

		$("#people_banner").children("div").hide(600,"swing");

		$(".people").children("div").show(600,"swing");
	});


});

$(window).resize(function () {
	var height = $(window).height();
	$(".blocks").height(height);
});
