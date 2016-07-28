'use strict';

var Band = require("../../vendor/band.min.js");
import React from 'react';
import ReactMultiChild from 'react/lib/ReactMultiChild';

const ConductorComponent = function(element) {

  this.node = null;
  this._mountImage = null;
  this._renderedChildren = null;
  this._currentElement = element;
  this._player = null;
};

const ConductorComponentMixin = {
  getPublicInstance() {
    // Return that so the outside world could accept this after the transaction,
    // and then to play it.
    return this._player;
  },

  mountComponent(
    transaction,
    nativeParent,
    nativeContainerInfo,
    context
  ) {
    const props = this._currentElement.props
    this.node = this._currentElement;
    var conductor = this._create(props);
    var children = this._setInstrumentConductor(conductor, props.children);
    this.mountChildren(children, transaction, context);
    // After insert all children (notes), commit the conductor.
    this._commit(conductor);
    return this.node;
  },

  receiveComponent(nextElement, transaction, context) {
    const prevElement = this._currentElement;
    this._currentElement = nextElement;

    const props = nextComponent.props;
    var conductor = this._create(props);
    // Set the conductor for every single instrument.
    var children = this._setInstrumentConductor(conductor, nextElement.props.children);

    this.updateChildren(children, transaction, context);
    // After insert all children (notes), commit the conductor.
    this._commit(conductor);
    this._currentElement = nextComponent;
  },
  getHostNode() {},
  unmountComponent() {},

  _setInstrumentConductor: function(conductor, children) {
    return React.Children.map(children,
      (child) => React.cloneElement(child, { conductor })
    ); 
  },

  _create: function(props) {
    var { signature, tempo } = props;
    var conductor = new Band();
    conductor.setTimeSignature(...signature);
    conductor.setTempo(tempo);
    return conductor;
  },

  _commit: function(conductor) {
    this._player = conductor.finish();
  },
};

Object.assign(
  ConductorComponent.prototype,
  ConductorComponentMixin,
  ReactMultiChild.Mixin
);

export default ConductorComponent

