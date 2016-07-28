'use strict';

import invariants from './invariants';
import instantiateReactComponent from 'react/lib/instantiateReactComponent';
import ReactInstanceHandles from 'react/lib/ReactInstanceHandles';
import ReactUpdates from 'react/lib/ReactUpdates';
import { inject } from './injection';

inject();

const render = (
  nextElement,
  callback
) => {

  invariants.isValidElement(nextElement);

  const rootId = ReactInstanceHandles.createReactRootID(0);
  const component = instantiateReactComponent(nextElement);

  ReactUpdates.batchedUpdates(() => {
    const transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
    transaction.perform(() => {
      component.mountComponent(
        transaction,
        rootId,
        {_idCounter: 0},
        {}
      );
      if (callback) {
        callback(nextElement, component.getPublicInstance());
      }
    });
    ReactUpdates.ReactReconcileTransaction.release(transaction);
  });
};

export default render;

