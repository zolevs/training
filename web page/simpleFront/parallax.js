$(window).scroll(function(){
	parallax();
})

function parallax(){

	var wScroll = $(window).scrollTop();
	// console.log("Hello");
	// console.log(wScroll);

	$('.parallax--bg').css('background-position', 'center '+(wScroll * 0.7)+'px');

	$('.parallax--box').css('top',-5+(wScroll*0.006)+'em');
}
