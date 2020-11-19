var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.loop = true;
	volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

var speed = 1;

document.querySelector("#slower").addEventListener("click", function() {
	speed *= 0.9;
	video.playbackRate = speed;
	console.log("New speed is " + speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	speed /= 0.9;
	video.playbackRate = speed;
	console.log("New speed is " + speed);
});

var skipTime = 5;
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += skipTime;
	console.log("Current location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted) {	// Muted --> Unmuted
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else {						// Unmuted --> Muted
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}

});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	volume.innerHTML = this.value + "%";
	video.volume = this.value / 100;
	console.log(video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});