$(document).ready(function() {
	setInterval(checkScroll, 200);
});

function checkScroll(){
	var nav = $('.top-nav').first();
	if ($(document).scrollTop() > 0 && !nav.hasClass('scrolling')) {
		nav.addClass('scrolling');
	} else if ($(document).scrollTop() === 0 && nav.hasClass('scrolling')) {
		nav.removeClass('scrolling');
	};
};
