'use strict';

import ReactInjection from 'react/lib/ReactInjection';
import ReactDefaultBatchingStrategy from 'react/lib/ReactDefaultBatchingStrategy';
import ReactComponentEnvironment from 'react/lib/ReactComponentEnvironment';
import RendererReconcileTransaction from './reconcileTransaction';
import Component from './component.js';

function inject() {
  (ReactInjection.NativeComponent || ReactInjection.HostComponent).injectGenericComponentClass(
    Component  
  );

  ReactInjection.Updates.injectReconcileTransaction(
    RendererReconcileTransaction
  );

  ReactInjection.Updates.injectBatchingStrategy(
    ReactDefaultBatchingStrategy
  );

  /** THIS DOESN'T WORK: BUG/INCOMPLETED FEATURE IN THE FILE "ReactHostComponent.js"
   * 
  (ReactInjection.NativeComponent || ReactInjection.HostComponent).injectComponentClasses({
    note: NoteComponent,
    rest: RestComponent,
    instrument: InstrumentComopnent,
    conductor: ConductorComponent
  });
  **/
}

export { inject };

