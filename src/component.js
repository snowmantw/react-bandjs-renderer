
'use strict';

import ReactMultiChild from 'react/lib/ReactMultiChild';

/**
const MinimumViableComponent = function(element) {
  this.node = null;
  this._mountImage = null;
  this._renderedChildren = null;
  this._currentElement = element;
};

MinimumViableComponent.prototype = Object.assign(
  {
    getPublicInstance() {},
    mountComponent() {},
    receiveComponent() {},
    unmountComponent() {},
    getNativeNode() {},
    getHostNode() {}
  },
  ReactMultiChild.Mixin
);
**/

const ConcertoComponent = function(element) {
  this.node = null;
  this._mountImage = null;
  this._renderedChildren = null;
  this._currentElement = element;
  this._playingTimeoutID = null;
  this._oscillator = null;
};

const ConcertoComponentMixin = {
  getPublicInstance() {
    return this.node;
  },

  mountComponent(
    transaction,
    nativeParent,
    nativeContainerInfo,
    context
  ) {
    const props = this._currentElement.props
    this.node = this._currentElement;
    this._play({}, props);
    this.mountChildren(props.children, transaction, context);

    return this.node;
  },

  receiveComponent(nextElement, transaction, context) {
    const prevElement = this._currentElement;
    this._currentElement = nextElement;

    const props = nextComponent.props;
    const oldProps = this._currentElement.props;
    this._play(oldProps, props);
    this._currentElement = nextComponent;

    this.updateChildren(nextElement.props.children, transaction, context);
  },
  getHostNode() {},
  unmountComponent() {
    this._reset(this._currentElement.props.oscillator);
  },

  _reset: function(oscillator) {
    window.clearTimeout(this._playingTimeoutID);
    oscillator.stop();
  },

  _play: function(oldProps, props) {
    if (0 !== Object.keys(oldProps).length) {
      this._reset(this._oscillator);
    }

    var oscillator = this._createOscillator(props.context, props.frequency);
    this._oscillator = oscillator;
    console.log('>> play: ', props.frequency, props.duration);
    oscillator.start();
    this._playingTimeoutID = window.setTimeout(() => {
      this._reset(oscillator);
    }, props.duration);
  },

  _createOscillator: function(context, frequency) {
    var osc = context.createOscillator();
    osc.type = 'square';
    osc.frequency.value = frequency; // value in hertz
    osc.connect(context.destination);
    return osc;
  },
};

Object.assign(
  ConcertoComponent.prototype,
  ConcertoComponentMixin,
  ReactMultiChild.Mixin
);

export default ConcertoComponent

