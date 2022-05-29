/*https://www.youtube.com/watch?v=vd_GnTBzJ4U&t=69s*/
	
$(document).ready(function() {
	var NavY = $('.nav').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.nav').addClass('sticky');
		$('.nav2').addClass('nav3');
	} else {
		$('.nav').removeClass('sticky'); 
		$('.nav2').removeClass('nav3');
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	});