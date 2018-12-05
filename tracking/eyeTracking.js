var balls = document.getElementsByClassName("ball");
document.onmousemove = function(){
	var x = event.clientX * 100 / window.innerWidth+"%";
	var y = event.clientY * 100 / window.innerHeight+"%";
	// event.clientX => get the horizontal cordinate on mouse move
	// window.innerWidth => get the browser width

	console.log(x);
	for (var i=0; i<2; i++){
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].style.transform = "translate(-"+x+",-"+y+")";
	}


}