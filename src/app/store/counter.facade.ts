import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CounterActions from '../store/counter.action';
import * as CounterSelector from '../store/counter.selector';

@Injectable({
  providedIn: 'root',
})
export class CounterFacade {
  counter$ = this.store.select(CounterSelector.counterSelector);

  constructor(private store: Store) {}

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

}