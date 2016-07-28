'use strict';

// If client doesn't use JSX, import this file for function stacking style like:
/*
render(
  Conductor([2, 2], 180, [
    Instrument('square', { id: 'rightHand' }, [
      Note('quarter', 'E5, F#4', {}),
      Rest('quarter'),
      Note('quarter', 'E5, F#4', {}),
    ]),

    Instrument('triangle', { id: 'leftHand' }, [
      Note('quarter', 'D3', {}),
      Rest('quarter'),
      Note('quarter', 'D3', {}),
    ]),

    Instrument('white', {pack: 'noises', volume: 50}, [
      Rest('whole')
    ]),
  ])
, (player) => player.play());
*/

import React from 'react';

var _key = 0;

function fetchKey() {
  _key += 1;
  return _key;
}

const Conductor = ({signature, tempo, children}) => {
  return React.createElement('conductor', {signature, tempo, key: fetchKey()}, children);
};

const Instrument = ({waveform, id, pack, volume, children}) => {
  return React.createElement('instrument', {waveform, pack, key: id || fetchKey()}, children);
};

const Note = ({rhythm, pitch, tie, children}) => {
  return React.createElement('note', {rhythm, pitch, tie, key: fetchKey()}, children);
};

const Rest = ({rhythm, children}) => {
  return React.createElement('rest', {rhythm, key: fetchKey()}, children);
};

export {
  Conductor,
  Instrument,
  Note,
  Rest
};
