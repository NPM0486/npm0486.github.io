/*https://www.youtube.com/watch?v=vd_GnTBzJ4U&t=69s*/
	
$(document).ready(function() {
	var NavY = $('.newmen').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.man3').addClass('sticky');
		$('.man').addClass('man2');
	} else {
		$('.man3').removeClass('sticky'); 
		$('.man').removeClass('man2');
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});