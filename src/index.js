import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import crash from "./sounds/crash.mp3";
import ride from "./sounds/ride.mp3";
import hatOpen from "./sounds/hat-open.mp3";
import hatClosed from "./sounds/hat-closed.mp3";
import tom from "./sounds/tom.mp3";
import snare from "./sounds/snare-flanged.wav";
import clap from "./sounds/clap.mp3";
import kick from "./sounds/kick.mp3";

ReactDOM.render(<App />, document.getElementById("root"));

const crashAud = new Audio(crash);
const rideAud = new Audio(ride);
const hatOpenAud = new Audio(hatOpen);
const hatClosedAud = new Audio(hatClosed);
const tomAud = new Audio(tom);
const snareAud = new Audio(snare);
const clapAud = new Audio(clap);
const kickAud = new Audio(kick);

const cols = document.querySelectorAll(".col");

// let bpm = 120;
let currCol = 0;
let stepLoop;

function start() {
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
  cols[prevCol].classList.remove("active");
  cols[currCol].classList.add("active");

  Array.from(cols[currCol].children).forEach(child => {
    if (child.classList.contains("on")) {
      child.style.transform = "scale(1)";
    }
  });

  Array.from(cols[currCol].children)
    .filter(i => i.classList.contains("on"))
    .map(i => i.dataset.instrument)
    .forEach(playInstrument);

  setTimeout(function() {
    Array.from(cols[currCol].children).forEach(child => {
      if (child.classList.contains("on")) {
        child.style.transform = "scale(0.5)";
      }
    });
  }, 1000);
}

function playInstrument(instrument) {
  if (instrument === "crash") {
    crashAud.currentTime = 0;
    crashAud.play();
  }
  if (instrument === "ride") {
    rideAud.currentTime = 0;
    rideAud.play();
  }
  if (instrument === "hatOpen") {
    hatOpenAud.currentTime = 0;
    hatOpenAud.play();
  }
  if (instrument === "hatClosed") {
    hatClosedAud.currentTime = 0;
    hatClosedAud.play();
  }
  if (instrument === "tom") {
    tomAud.currentTime = 0;
    tomAud.play();
  }
  if (instrument === "snare") {
    snareAud.currentTime = 0;
    snareAud.play();
  }
  if (instrument === "clap") {
    clapAud.currentTime = 0;
    clapAud.play();
  }
  if (instrument === "kick") {
    kickAud.currentTime = 0;
    kickAud.play();
  }
}

let playing = false;

document.getElementById("playPause").addEventListener("click", () => {
  playing ? pause() : start();
  playing = !playing;
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
