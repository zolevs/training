$(document).ready(function(){
	var navOffset = $("nav").offset().top;
	// alert (navOffset);

	$("nav").wrap('<div class="nav-placeholder"></div>');
	$(".nav-placeholder").height($("nav").outerHeight())

	$("nav").wrapInner('<div class="nav-inner"> </div>');

	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		// $(".status").html(scrollPos);

		if(scrollPos >= navOffset){
			$("nav").addClass("fixed")
		} else {
			$("nav").removeClass("fixed");
		}
	});

});
