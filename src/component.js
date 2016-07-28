'use strict';

import NoteComponent from './component/note';
import RestComponent from './component/rest';
import InstrumentComopnent from './component/instrument';
import RepeatComponent from './component/repeat';
import ConductorComponent from './component/conductor';

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

/**
 * Because 'injectComponentClasses' won't work, we need to dispatch to
 * different internal component from this generic one.
 */
const Component = function(element) {
  var classes = {
    note: NoteComponent,
    rest: RestComponent,
    repeat: RepeatComponent,
    instrument: InstrumentComopnent,
    conductor: ConductorComponent
  };
  var ctor = classes[element.type];
  if (!ctor) { throw new `'There is no registered component for the tag ${element.type}`; }
  return new ctor(element);
};

export default Component;

