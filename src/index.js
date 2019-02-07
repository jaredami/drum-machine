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

let currentColumn = 0;
let stepLoop;

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
