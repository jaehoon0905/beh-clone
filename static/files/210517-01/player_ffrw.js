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
  });
