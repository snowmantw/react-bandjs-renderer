require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import render from './src/mount.js';

// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var defaultOscillator = audioCtx.createOscillator();

defaultOscillator.type = 'square';
defaultOscillator.frequency.value = 0; // value in hertz
defaultOscillator.connect(audioCtx.destination);
defaultOscillator.start();

const Node = (frequency, duration, children) => {
    return React.createElement('node', {context: audioCtx, frequency, duration, key: frequency + duration }, children);
}

render(
  Node(1000, 6000, [Node(8000, 5000),Node(2000, 10000) ])
);
