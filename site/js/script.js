

$(document).ready(function() {
	var height = $(window).height();
	$(".blocks").height(height);
});

$(window).resize(function () {
	var height = $(window).height();
	$(".blocks").height(height);
});

