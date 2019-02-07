import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import crashClip from "./sounds/crash.mp3";
import rideClip from "./sounds/ride.mp3";
import hatOpenClip from "./sounds/hat-open.mp3";
import hatClosedClip from "./sounds/hat-closed.mp3";
import tomClip from "./sounds/tom.mp3";
import snareClip from "./sounds/snare-flanged.mp3";
import clapClip from "./sounds/clap.mp3";
import kickClip from "./sounds/kick.mp3";

ReactDOM.render(<App />, document.getElementById("root"));

const sounds = {
  crash: new Audio(crashClip),
  ride: new Audio(rideClip),
  hatOpen: new Audio(hatOpenClip),
  hatClosed: new Audio(hatClosedClip),
  tom: new Audio(tomClip),
  snare: new Audio(snareClip),
  clap: new Audio(clapClip),
  kick: new Audio(kickClip)
};

const cols = document.querySelectorAll(".col");

let currentColumn = 0;
let stepLoop;
let muted = true;

// play the beat
function start() {
  let bpm = document.getElementById("tempo").innerHTML;
  let milliseconds = 60000 / bpm / 4;
  stepLoop = setInterval(function() {
    handleThisStep();
    // after each step, move to the next column; start over after the last column
    currentColumn < 15
      ? (currentColumn = currentColumn + 1)
      : (currentColumn = 0);
  }, milliseconds);
}

// pause the beat
function pause() {
  clearInterval(stepLoop);
}

function handleThisStep() {
  // set the value of previousColumn to one less than currentColumn
  let previousColumn = currentColumn > 0 ? currentColumn - 1 : 15;
  // highlight the current column and remove highlight from the previous column
  cols[previousColumn].classList.remove("active");
  cols[currentColumn].classList.add("active");

  // play instrument sound for all instruments turned on in this column
  Array.from(cols[currentColumn].children)
    .filter(i => i.classList.contains("on"))
    .map(i => i.dataset.instrument)
    .forEach(playInstrument);

  // animate gridSquares when they are played
  Array.from(cols[currentColumn].children).forEach(child => {
    if (child.classList.contains("on")) {
      child.style.transform = "scale(0.9)";
    }
  });
  setTimeout(function() {
    Array.from(cols[currentColumn].children).forEach(child => {
      if (child.classList.contains("on")) {
        child.style.transform = "scale(0.5)";
      }
    });
  }, 1000);
}

function playInstrument(instrument) {
  if (!muted) {
    sounds[instrument].currentTime = 0;
    sounds[instrument].play();
  }
}

let playing = false;

document.getElementById("playPause").addEventListener("click", () => {
  playing ? pause() : start();
  playing = !playing;
});

document.getElementById("mute-btn").addEventListener("click", () => {
  muted = !muted;
  document.getElementById("mute-icon").classList.contains("ion-md-volume-off")
    ? document.getElementById("mute-icon").classList.remove("ion-md-volume-off")
    : document.getElementById("mute-icon").classList.add("ion-md-volume-off");
  document.getElementById("mute-icon").classList.contains("ion-md-volume-high")
    ? document
        .getElementById("mute-icon")
        .classList.remove("ion-md-volume-high")
    : document.getElementById("mute-icon").classList.add("ion-md-volume-high");
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
