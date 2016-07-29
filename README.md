# React Bandjs Renderer

#### A proof of concept that React.js' "rendering" is actually effect compositor, and can be used in any domain without visual elements 

#### Setup

    npm install react-bandjs-renderer

#### Usage

1. Import the renderer:

    ```javascript
    import render from 'react-bandjs-renderer';
    // -- Or, if in CommonJS way:
    var render = require('react-bandjs-renderer');
    ```

2. Render some JSX with customised internal components. Note the `dummytags` is necessary for JSX:

    ```javascript
    // -- This is necessary because JSX doesn't support customised tags.
    import { Conductor, Instrument, Note, Rest, Repeat } from 'react-bandjs-renderer/lib/dummytags'
    render(
      <Conductor signature={[2,2]} tempo={180}>
        <Instrument id="rightHand" waveform="square">
          {/* Bar 1*/}
          <Note rhythm="quarter" pitch="E5, F#4" />
          <Note rhythm="quarter" pitch="E5, F#4" />
          <Rest rhythm="quarter" />
          <Note rhythm="quarter" pitch="E5, F#4" />
          {/*....*/}
        </Instrument>
      </Conductor>
    , (conductor, player) => player.play());
    ```

3. Done! A completed demo from [Band.js](https://github.com/meenie/band.js/) is in the [demo/mbros-theme](https://github.com/snowmantw/react-bandjs-renderer/tree/master/demo/mbros-theme).

Or, you can also check my [online demo on Heroku](https://react-bandjs-renderer-mbros.herokuapp.com/).

#### Components

Internal components in this renderes are:

* Conductor
* Instrument
* Note
* Rest
* Repeat

They map different operations in Band.js.

### Reference

* [Tiny React Renderer](https://github.com/iamdustan/tiny-react-renderer): great reference for learning how to build your own renderer.
* [Band.js](https://github.com/meenie/band.js/): internal components here will execute specific operations defined by Band.js

### License

Copyright 2016 Greg Weng and various contributors. Released under the [MIT License (MIT)](LICENSE).

Band.js is under MIT license and it's a project owned by [Cody Lundquist](https://github.com/meenie/band.js/)

