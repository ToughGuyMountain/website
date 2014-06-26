

$(document).ready(function() {
	var height = $(window).height();
	$(".blocks").height(height);
	$("#people").height(height);
});

$(window).resize(function () {
	var height = $(window).height();
	$(".blocks").height(height);
	$("#people").height(height);
});
