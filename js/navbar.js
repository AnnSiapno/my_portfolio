$(document).ready(function() {

// DETECT SCROLLING START
	var nav = $('.navbar-fixed-top');

	// When reloding anywhere in the page

		var distance = $('.navbar-fixed-top').offset();

		if (distance.top >= 190 ) {
			$("#navEffect").addClass('effect');
			$("#navEffect").removeClass('hidden');
		} else {
			$("#navEffect").removeClass('effect');
			$("#navEffect").addClass('hidden');
		}

		// When scrolling throught the page
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();

			if (scroll >= 190) {
				$("#navEffect").addClass('effect');
				$("#navEffect").removeClass('hidden');
			} else {
				$("#navEffect").removeClass('effect');
				$("#navEffect").addClass('hidden');
			}
		});

// DETECT SCROLLING END


});
