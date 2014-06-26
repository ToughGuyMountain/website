
$("document").ready(function() {

	$('#mask').click(function(){
		ga('send','event','navigation','click','hero');
		$('html, body').animate({scrollTop: $("#issues").offset().top}, 500);
		return false;
	});
	
	$('a#issuenav').click(function(){
		ga('send','event','navigation','click','issues');
		$('html, body').animate({scrollTop: $("#issues").offset().top}, 500);
		return false;
	});
	
	$('a#aboutnav').click(function(){
		ga('send','event','navigation','click','about');
		$('html, body').animate({scrollTop: $("#about").offset().top}, 500);
		return false;
	});
	
	$('.screen').cycle({
		fx: 'fade',
		easing: 'linear',
		speed:    1000,
		timeout:  1000
	});
	
	$('.binder').cycle({
		fx: 'fade',
		easing: 'linear',
		speed:    1000,
		timeout:  1000
	});
	
	$('#posters').cycle({
		fx: 'scrollVert',
		rev: 1,
		easing: 'swing',
		speed: 2500,
		timeout: 6000
	})
	
	$('.popup').click(function(){
  	return !window.open(this.href, '_blank', 'width=550,height=330');
	});
	
	/* STICKY TOP MENU */

	var issues_offset = jQuery('.first').offset().top-94;
	var sticky_navigation = function(){
		var scroll_top = jQuery(window).scrollTop(); // our current vertical position from the top
		if (scroll_top < issues_offset) {
  		jQuery('#logo').addClass('white');
		} else {
			jQuery('#logo').removeClass('white');
		}   
	};
	sticky_navigation();
	jQuery(window).scroll(function() {
		 sticky_navigation();
	});
	
});