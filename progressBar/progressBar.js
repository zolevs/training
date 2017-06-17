function changeProgress(progressBarId,progressValue,animDurPerStep=15){
	var progressBar = document.getElementById(progressBarId);
	var oldProgressValue = -parseInt(window.getComputedStyle(progressBar).getPropertyValue("background-position"));
	if(progressValue > 100)
		progressValue = 100;
	else if(progressValue<0)
		progressValue = 0;
	else
		progressValue = Math.round(progressValue/10)*10;

	var steps=Math.abs(oldProgressValue-progressValue)/10;
	var totalAnimDur = animDurPerStep*steps;

	progressBar.style.transition = totalAnimDur + "ms steps("+steps+")";
	progressBar.style.backgroundPosition=-progressValue+"%";
}
