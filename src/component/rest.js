'use strict';

import ReactMultiChild from 'react/lib/ReactMultiChild';

const RestComponent = function(element) {

  this.node = null;
  this._mountImage = null;
  this._renderedChildren = null;
  this._currentElement = element;
};

const RestComponentMixin = {
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
    this._commit({}, props);
    // Don't care about children: a single note shouldn't have children.
    return this.node;
  },

  receiveComponent(nextElement, transaction, context) {
    const prevElement = this._currentElement;
    this._currentElement = nextElement;

    const props = nextComponent.props;
    const oldProps = this._currentElement.props;
    this._commit(oldProps, props);
    // Don't care about children: a single note shouldn't have children.
    this._currentElement = nextComponent;
  },
  getHostNode() {},
  unmountComponent() {},


  _commit: function(oldProps, props) {
    var { rhythm, pitch, tie, instrument } = props;
    // We don't care the difference between old and new props,
    // because we just send new sections to the engine to commit it.
    instrument.rest(rhythm);
  },

};

Object.assign(
  RestComponent.prototype,
  RestComponentMixin,
  ReactMultiChild.Mixin
);

export default RestComponent

