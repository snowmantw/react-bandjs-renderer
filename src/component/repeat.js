'use strict';

import React from 'react';
import ReactMultiChild from 'react/lib/ReactMultiChild';

const RepeatComponent = function(element) {

  this.node = null;
  this._mountImage = null;
  this._renderedChildren = null;
  this._currentElement = element;
};

const RepeatComponentMixin = {
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
    const { instrument, times } = props;
    this.node = this._currentElement;

    // Before commit all notes, mark the beginning of repeating.
    this._begin(instrument);

    // Set the instrument for every single note.
    var children = this._setNoteInstrument(instrument, props.children);
    this.mountChildren(children, transaction, context);

    this._end(instrument, times);
    return this.node;
  },

  receiveComponent(nextElement, transaction, context) {
    const prevElement = this._currentElement;
    this._currentElement = nextElement;

    const props = nextComponent.props;
    const oldProps = this._currentElement.props;
    const { instrument, times } = props;

    // Before commit all notes, mark the beginning of repeating.
    this._begin(instrument);

    // Set the instrument for every single note.
    var children = this._setNoteInstrument(instrument, nextElement.props.children);
    this.updateChildren(children, transaction, context);

    this._end(instrument, times);
    this._currentElement = nextComponent;
  },
  getHostNode() {},
  unmountComponent() {},

  _setNoteInstrument: function(instrument, children) {
    return React.Children.map(children,
      (child) => React.cloneElement(child, { instrument })
    ); 
  },

  _begin: function(instrument) {
    instrument.repeatStart();
  },

  _end: function(instrument, times) {
    instrument.repeat(times); 
  }
};

Object.assign(
  RepeatComponent.prototype,
  RepeatComponentMixin,
  ReactMultiChild.Mixin
);

export default RepeatComponent

