var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
var volumeDisplay = document.getElementById("volume");

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// page load
var video = document.getElementById("player1");
video.autoplay = false;
video.loop = false;
// use of chatgot for line 14 & 15

// play & pause button
var playButton = document.getElementById("play");
playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    console.log("Video is playing");
  }
volumeDisplay.textContent = "100%";
  
});

var pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", function () {
  video.pause();
  console.log("Video is paused");
  updateVolumeDisplay();
});

// slow down
var slowButton = document.getElementById("slower");
slowButton.addEventListener("click", function () {
  video.playbackRate -= 0.1;
  console.log("Video speed slowed to: " + video.playbackRate);
});

// speed up
var speedButton = document.getElementById("faster");
speedButton.addEventListener("click", function () {
  video.playbackRate += 0.1;
  console.log("Video speed increased to: " + video.playbackRate);
});

// skip ahead
var skipButton = document.getElementById("skip");
skipButton.addEventListener("click", function () {
  video.currentTime += 10;
  if (video.currentTime > video.duration) {
    video.currentTime = 0;
  }
  console.log("Skipped to: " + video.currentTime + " seconds");
});

// mute
var muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    muteButton.textContent = "Mute";
  } else {
    video.muted = true;
    muteButton.textContent = "Unmute";
  }
  updateVolumeDisplay();
});

// volume
var volumeSlider = document.getElementById("slider");

// Update the volume display when the volume slider changes
volumeSlider.addEventListener("input", function () {
	var volumeValue = volumeSlider.value;
	video.volume = volumeValue / 100;
	volumeDisplay.textContent = volumeValue + "%";
  });
  

function updateVolumeDisplay() {
	if (video.muted) {
	  volumeDisplay.textContent = "0%";
	} else {
	  volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
	}
  }
  // used chatgpt to help debug and and add extra statements
  


  

// styled
var addOldSchoolButton = document.getElementById("vintage");
addOldSchoolButton.addEventListener("click", function () {
  video.classList.add("oldSchool");
});

var removeOldSchoolButton = document.getElementById("orig");
removeOldSchoolButton.addEventListener("click", function () {
  video.classList.remove("oldSchool");
});

// use of chatgpt in debugging errors