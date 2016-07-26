'use strict';

import ReactInjection from 'react/lib/ReactInjection';
import ReactDefaultBatchingStrategy from 'react/lib/ReactDefaultBatchingStrategy';
import ReactComponentEnvironment from 'react/lib/ReactComponentEnvironment';
import RendererReconcileTransaction from './reconcileTransaction';
import RendererComponent from './component';

function inject() {
  (ReactInjection.NativeComponent || ReactInjection.HostComponent).injectGenericComponentClass(
    RendererComponent
  );

  ReactInjection.Updates.injectReconcileTransaction(
    RendererReconcileTransaction
  );

  ReactInjection.Updates.injectBatchingStrategy(
    ReactDefaultBatchingStrategy
  );
}

export { inject };

