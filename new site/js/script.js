

$(document).ready(function() {


	var height = $(window).height();
	$(".blocks").height(height);

	$(".icon").on("click",function(){
		var content = $(this).attr("id");
		$("#iframe").attr("src",content + ".html");
		$("#windowtitle").html("<p>"+content+"</p>");
	});

	var background = Math.floor((Math.random()*10) + 1)
	$("#banner_main").css("background-image","url(assets/img/background/"+background+".jpg)");
	
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
	$("#twitbut").hover(function(){
		$("#twitter").show()},
		function(){
		$("#twitter").hide();
	});

	$(".icon").on("click",function(){
		$("#window").css("display","block");
	});

	$("#face").hover(function(){
		$("#facebook").show()},
		function(){
		$("#facebook").hide();
	});

	$(".social").hover(function(){
		$(this).show()},
		function(){
		$(this).hide();
	});

	$(".people_info").children("h1").toggle(function(){
		$(this).siblings("p").show()},
		function () {
			$(this).siblings("p").hide();
	});
		$(".people_info").children("h1").toggle(function(){
		$(this).siblings("p").show()},
		function () {
			$(this).siblings("p").hide();
	});

	
});


$(window).resize(function () {
	var height = $(window).height();
	$(".blocks").height(height);
});



