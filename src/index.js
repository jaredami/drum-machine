import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import kick from "./sounds/kick.mp3";

ReactDOM.render(<App />, document.getElementById("root"));

const crashUrl =
  "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Crash%2002-5823-Free-Loops.com.mp3";
const rideUrl =
  "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Korg%20Ride%20Cymbal%202-2526-Free-Loops.com.mp3";
const hatOpenUrl =
  "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Korg%20Open%20Hi%20Hat-2517-Free-Loops.com.mp3";
const hatClosedUrl =
  "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Alchemist%20HiHat%208-1803-Free-Loops.com.mp3";
const tomUrl =
  "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Tom%20Medium%2002-5871-Free-Loops.com.mp3";
const snareUrl =
  "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Alchemist%20Snare%202-1833-Free-Loops.com.mp3";
const clapUrl =
  "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Clap%2002-5817-Free-Loops.com.mp3";
const kickUrl =
  "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Drum%20Kick%2015-921-Free-Loops.com.mp3";

const cols = document.querySelectorAll(".col");

let bpm = 120;
let currCol = 0;
let stepLoop;

function start() {
  console.log("started");
  stepLoop = setInterval(function() {
    handleThisStep();
    currCol < 15 ? (currCol = currCol + 1) : (currCol = 0);
  }, 160);
}

function pause() {
  clearInterval(stepLoop);
}

function handleThisStep() {
  let prevCol = currCol > 0 ? currCol - 1 : 15;
  console.log(prevCol);
  cols[prevCol].classList.remove("active");
  cols[currCol].classList.add("active");

  Array.from(cols[currCol].children)
    .filter(i => i.classList.contains("on"))
    .map(i => i.dataset.instrument)
    .forEach(playInstrument);
}

function playInstrument(instrument) {
  if (instrument === "crash") {
    const crash = new Audio(crashUrl);
    crash.currentTime = 0;
    crash.play();
    // document.getElementById("crashLabel").classList.add("pulse");
  }
  if (instrument === "ride") {
    const ride = new Audio(rideUrl);
    ride.currentTime = 0;
    ride.play();
  }
  if (instrument === "hatOpen") {
    const hatOpen = new Audio(hatOpenUrl);
    hatOpen.currentTime = 0;
    hatOpen.play();
  }
  if (instrument === "hatClosed") {
    const hatClosed = new Audio(hatClosedUrl);
    hatClosed.currentTime = 0;
    hatClosed.play();
  }
  if (instrument === "tom") {
    const tom = new Audio(tomUrl);
    tom.currentTime = 0;
    tom.play();
  }
  if (instrument === "snare") {
    const snare = new Audio(snareUrl);
    snare.currentTime = 0;
    snare.play();
  }
  if (instrument === "clap") {
    const clap = new Audio(clapUrl);
    clap.currentTime = 0;
    clap.play();
  }
  if (instrument === "kick") {
    const kicky = new Audio(kick);
    kicky.currentTime = 0;
    kicky.play();
  }
}

const pads = document.querySelectorAll(".pad");
let playing = false;

// pads.forEach(pad =>
//   pad.addEventListener("click", () => {
//     pad.classList.toggle("on");
//   })
// );

document.getElementById("playPause").addEventListener("click", () => {
  playing ? pause() : start();
  playing = !playing;
  console.log("play clicked");
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
