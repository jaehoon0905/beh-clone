/*
    FF / RW
*/

const OFFSET_X_MAX = 230;

document
  .querySelector(".player__timelineBar")
  .addEventListener("click", function (event) {
    // console.warn(
    //   "duration",
    //   audioElement.duration,
    //   "currentTime",
    //   audioElement.currentTime,
    //   "percentage",
    //   (audioElement.currentTime / audioElement.duration) * 100,
    //   "event.offsetX",
    //   event.offsetX,
    //   "event.offsetY",
    //   event.offsetY
    // );
    audioElement.currentTime =
      (audioElement.duration * event.offsetX) / OFFSET_X_MAX;
    //document.querySelector(".js-playtime").innerHTML = audioElement.currentTime; // for display Play time
  });

/*
  display Play time */

// document.querySelector(".js-totaltime").innerHTML = parseInt((parseInt(audioElement.duration)%3600)/60) + ":" + parseInt(audioElement.duration)%60;;
//document.querySelector(".js-playtime").innerHTML = audioElement.currentTime;

/*
var min = parseInt((seconds%3600)/60);
var sec = seconds%60;

document.querySelector(".js-totaltime").innerHTML = parseInt((parseInt(audioElement.duration)%3600)/60) + ":" + parseInt(audioElement.duration)%60;;
*/

function getTime(elem) {
  let mm = parseInt((parseInt(elem) % 3600) / 60);
  let ss = parseInt(elem) % 60;
  if (ss < 10) ss = "0" + ss;

  return mm + ":" + ss;
}
