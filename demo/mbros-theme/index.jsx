require("./node_modules/bootstrap/dist/css/bootstrap.min.css")

import React from 'react';
import reactToJsx from 'react-to-jsx';
import render from '../../lib/bundle.js';

// XXX: Because JSX looks for such "variables" (functions in fact).
// So we replace them as string again, in order to match the costumed internal components.
import { Conductor, Instrument, Note, Rest, Repeat } from '../../lib/dummytags.js'

document.getElementById('startplay').addEventListener('click', (e) => {
  doRendering();
});

const prompt = (jsx) => {
  document.querySelector('#sheet').textContent = jsx;
};

const doRendering = () => {
render(
  <Conductor signature={[2,2]} tempo={180}>
    <Instrument id="rightHand" waveform="square">
      {/* Bar 1*/}
      <Note rhythm="quarter" pitch="E5, F#4" />
      <Note rhythm="quarter" pitch="E5, F#4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="E5, F#4" />

      {/* Bar2*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="C5, F#4" />
      <Note rhythm="quarter" pitch="E5, F#4" />
      <Rest rhythm="quarter" />

      {/* Bar 3*/}
      <Note rhythm="quarter" pitch="G5, B4, G4" />
      <Rest rhythm="quarter" />
      <Rest rhythm="half" />

      {/* Bar 4*/}
      <Note rhythm="quarter" pitch="G4" />
      <Rest rhythm="quarter" />
      <Rest rhythm="half" />

      {/* Bar 5/13*/}
      <Repeat times={1}>

      <Note rhythm="quarter" pitch="C5, E4" />
      <Rest rhythm="quarter" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="G4, C4" />

      {/* bar 6/14*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="E4, G3" />
      <Rest rhythm="quarter" />

      {/* Bar 7/15*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="A4, C4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="B4, D4" />

      {/* Bar 8/16*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="Bb4, Db4" />
      <Note rhythm="quarter" pitch="A4, C4" />
      <Rest rhythm="quarter" />

      {/* Bar 9/17*/}
      <Note rhythm="tripletHalf" pitch="G4, C4" />
      <Note rhythm="tripletHalf" pitch="E5, G4" />
      <Note rhythm="tripletHalf" pitch="G5, B4" />

      {/* Bar 10/18*/}
      <Note rhythm="quarter" pitch="A5, C5" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="F5, A4" />
      <Note rhythm="quarter" pitch="G5, B4" />

      {/* Bar 11/19*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="E5, G4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="C5, E4" />

      {/* Bar 12/20*/}
      <Note rhythm="quarter" pitch="D5, F4" />
      <Note rhythm="quarter" pitch="B4, D4" />
      <Rest rhythm="half" />

      {/* Repeat back to Bar 5*/}
      </Repeat>

      {/* Bar 21*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="G5, E5" />
      <Note rhythm="quarter" pitch="Gb5, Eb5" />

      {/* Bar 22*/}
      <Note rhythm="quarter" pitch="F5, D5" />
      <Note rhythm="quarter" pitch="D#5, B4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="E5, C5" />

      {/* Bar 23*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="G#4, E4" />
      <Note rhythm="quarter" pitch="A4, F4" />
      <Note rhythm="quarter" pitch="C5, A4" />

      {/* Bar 24*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="A4, C4" />
      <Note rhythm="quarter" pitch="C5, E4" />
      <Note rhythm="quarter" pitch="D5, F4" />

      {/* Bar 25*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="G5, E5" />
      <Note rhythm="quarter" pitch="Gb5, Eb5" />

      {/* Bar 26*/}
      <Note rhythm="quarter" pitch="F5, D5" />
      <Note rhythm="quarter" pitch="D#5, B4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="E5, C5" />

      {/* Bar 27*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="C6, G6, F6" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="C6, G6, F6" />

      {/* Bar 28*/}
      <Note rhythm="quarter" pitch="C6, G6, F6" />
      <Rest rhythm="quarter" />
      <Rest rhythm="half" />

      {/* Bar 29*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="G5, E5" />
      <Note rhythm="quarter" pitch="Gb5, Eb5" />

      {/* Bar 30*/}
      <Note rhythm="quarter" pitch="F5, D5" />
      <Note rhythm="quarter" pitch="D#5, B4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="E5, C5" />

      {/* Bar 31*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="G#4, E4" />
      <Note rhythm="quarter" pitch="A4, F4" />
      <Note rhythm="quarter" pitch="C5, A4" />

      {/* Bar 32*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="A4, C4" />
      <Note rhythm="quarter" pitch="C5, E4" />
      <Note rhythm="quarter" pitch="D5, F4" />

      {/* Bar 33*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="Eb5, Ab4" />
      <Rest rhythm="quarter" />

      {/* Bar 34*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="D5, F4" />
      <Rest rhythm="half" />

      {/* Bar 35*/}
      <Note rhythm="quarter" pitch="C5, E4" />
      <Rest rhythm="quarter" />
      <Rest rhythm="half" />

      {/* Bar 36*/}
      <Rest rhythm="whole" />

    {/* END OF RIGHT HAND */}
    </Instrument>

    <Instrument id="leftHand" waveform="triangle">
      {/* Bar 1*/}
      <Note rhythm="quarter" pitch="D3" />
      <Note rhythm="quarter" pitch="D3" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="D3" />

      {/* Bar2*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="D3" />
      <Note rhythm="quarter" pitch="D3" />
      <Rest rhythm="quarter" />

      {/* Bar 3*/}
      <Rest rhythm="whole" />

      {/* Bar 4*/}
      <Note rhythm="quarter" pitch="G3" />
      <Rest rhythm="quarter" />
      <Rest rhythm="half" />

      {/* Bar 5/13*/}
      <Repeat times={1}>

      <Note rhythm="quarter" pitch="G3" />
      <Rest rhythm="quarter" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="E3" />

      {/* bar 6/14*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="C3" />
      <Rest rhythm="quarter" />

      {/* Bar 7/15*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="F3" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="G3" />

      {/* Bar 8/16*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="Gb3" />
      <Note rhythm="quarter" pitch="F3" />
      <Rest rhythm="quarter" />

      {/* Bar 9/17*/}
      <Note rhythm="tripletHalf" pitch="E3" />
      <Note rhythm="tripletHalf" pitch="C4" />
      <Note rhythm="tripletHalf" pitch="E4" />

      {/* Bar 10/18*/}
      <Note rhythm="quarter" pitch="F4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="D4" />
      <Note rhythm="quarter" pitch="E4" />

      {/* Bar 11/19*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="C4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="A3" />

      {/* Bar 12/20*/}
      <Note rhythm="quarter" pitch="B3" />
      <Note rhythm="quarter" pitch="G3" />
      <Rest rhythm="half" />

      {/* Repeat back to Bar 5*/}
      </Repeat>

      {/* Bar 21*/}
      <Note rhythm="quarter" pitch="C3" />
      <Rest rhythm="quarter" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="G3" />

      {/* Bar 22*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="C4" />
      <Rest rhythm="quarter" />

      {/* Bar 23*/}
      <Note rhythm="quarter" pitch="F3" />
      <Rest rhythm="quarter" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="C4" />

      {/* Bar 24*/}
      <Note rhythm="quarter" pitch="C4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="F3" />
      <Rest rhythm="quarter" />

      {/* Bar 25*/}
      <Note rhythm="quarter" pitch="C3" />
      <Rest rhythm="quarter" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="E3" />

      {/* Bar 26*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="G3" />
      <Note rhythm="quarter" pitch="C4" />

      {/* Bar 27*/}
      <Rest rhythm="whole" />

      {/* Bar 28*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="G3" />
      <Rest rhythm="quarter" />

      {/* Bar 29*/}
      <Note rhythm="quarter" pitch="C3" />
      <Rest rhythm="quarter" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="G3" />

      {/* Bar 30*/}
      <Rest rhythm="half" />
      <Note rhythm="quarter" pitch="C4" />
      <Rest rhythm="quarter" />

      {/* Bar 31*/}
      <Note rhythm="quarter" pitch="F3" />
      <Rest rhythm="quarter" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="C4" />

      {/* Bar 32*/}
      <Note rhythm="quarter" pitch="C4" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="F3" />
      <Rest rhythm="quarter" />

      {/* Bar 33*/}
      <Note rhythm="quarter" pitch="C3" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="Ab3" />
      <Rest rhythm="quarter" />

      {/* Bar 34*/}
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="Bb3" />
      <Rest rhythm="half" />

      {/* Bar 35*/}
      <Note rhythm="quarter" pitch="C4" />
      <Rest rhythm="quarter" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="G3" />

      {/* Bar 36*/}
      <Note rhythm="quarter" pitch="G3" />
      <Rest rhythm="quarter" />
      <Note rhythm="quarter" pitch="C3" />
      <Rest rhythm="quarter" />

    {/* END OF LEFT HAND */}
    </Instrument>

    <Instrument id="drum" waveform="white" pack="noises" volume={50}>
      {/* Bar 1*/}
      <Rest rhythm="whole" />

      {/* Bar2*/}
      <Rest rhythm="whole" />

      {/* Bar 3*/}
      <Rest rhythm="whole" />

      {/* Bar 4*/}
      <Rest rhythm="whole" />

      {/* Bar 5/13*/}
      <Repeat times={1}>

      <Note rhythm="eighth" pitch="A4" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" pitch="A4" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" pitch="A4" />

      {/* bar 6/14*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 7/15*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 8/16*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 9/17*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 10/18*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 11/19*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 12/20*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Repeat back to Bar 5*/}
      </Repeat>

      {/* Bar 21*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 22*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 23*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 24*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 25*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 26*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 27*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 28*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 29*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 30*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 31*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 32*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />


      {/* Bar 33*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 34*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 35*/}
      <Note rhythm="eighth" />
      <Rest rhythm="eighth" />
      <Rest rhythm="quarter" />
      <Note rhythm="tripletQuarter" />
      <Rest rhythm="tripletQuarter" />
      <Note rhythm="tripletQuarter" />

      {/* Bar 36*/}
      <Rest rhythm="whole" />

    {/* END OF DRUM */}
    </Instrument>
  </Conductor>
, (conductor, player) => {
  prompt(reactToJsx(conductor, {indent: '    '}));
  player.play()
});
};

