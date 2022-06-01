/*https://www.youtube.com/watch?v=vd_GnTBzJ4U&t=69s*/
	
$(document).ready(function() {
	var NavY = $('.menu').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.menu_animation').addClass('sticky');
	} else {
		$('.menu_animation').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});