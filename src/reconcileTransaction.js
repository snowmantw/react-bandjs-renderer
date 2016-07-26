'use strict';

import CallbackQueue from 'react/lib/CallbackQueue';
import PooledClass from 'react/lib/PooledClass';
import Transaction from 'react/lib/Transaction';

const ON_RENDERER_READY_QUEUEING = {
  initialize: function() {
    this.reactMountReady.reset();
  },

  close: function() {
    this.reactMountReady.notifyAll();
  },
};

const TRANSACTION_WRAPPERS = [ON_RENDERER_READY_QUEUEING];

function ReconcileTransaction() {
  this.reinitializeTransaction();
  this.reactMountReady = CallbackQueue.getPooled(null);
}

const Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   */
  getTransactionWrappers: function() {
    return TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `ready` callbacks with.
   */
  getReactMountReady: function() {
    return this.reactMountReady;
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */
  destructor: function() {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;
  },
};

Object.assign(
  ReconcileTransaction.prototype,
  Transaction.Mixin,
  ReconcileTransaction,
  Mixin
);

PooledClass.addPoolingTo(ReconcileTransaction);

export default ReconcileTransaction;

