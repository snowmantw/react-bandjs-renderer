'use strict';

import React from 'react';
import ReactMultiChild from 'react/lib/ReactMultiChild';

const InstrumentComponent = function(element) {

  this.node = null;
  this._mountImage = null;
  this._renderedChildren = null;
  this._currentElement = element;
};

const InstrumentComponentMixin = {
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
    var instrument = this._create(props);
    // Set the instrument for every single note.
    var children = this._setNoteInstrument(instrument, props.children);
    this.mountChildren(children, transaction, context);
    return this.node;
  },

  receiveComponent(nextElement, transaction, context) {
    const prevElement = this._currentElement;
    this._currentElement = nextElement;

    const props = nextComponent.props;
    const oldProps = this._currentElement.props;
    var instrument = this._create(props);    // Old props doesn't matter.
    // Set the instrument for every single note.
    var children = this._setNoteInstrument(instrument, nextElement.props.children);
    this.updateChildren(children, transaction, context);
    this._currentElement = nextComponent;
  },
  getHostNode() {},
  unmountComponent() {},

  _setNoteInstrument: function(instrument, children) {
    return React.Children.map(children,
      (child) => React.cloneElement(child, { instrument })
    ); 
  },

  _create: function(props) {
    var { waveform, pack, conductor } = props;
    return conductor.createInstrument(waveform, pack);
  },
};

Object.assign(
  InstrumentComponent.prototype,
  InstrumentComponentMixin,
  ReactMultiChild.Mixin
);

export default InstrumentComponent

