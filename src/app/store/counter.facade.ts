import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CounterActions from '../store/counter.action';
import * as CounterSelector from '../store/counter.selector';

@Injectable({
  providedIn: 'root',
})

export class CounterFacade {
  counter$ = this.store.select(CounterSelector.counterSelector);
  userList$ = this.store.select(CounterSelector.userListSelector);
  singleUser$ = this.store.select(CounterSelector.singleUserDetailsSelector);

  constructor(private store: Store) {}

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  getAllData() {
    this.store.dispatch(CounterActions.getAllData());
  }
  
  getUserById(id:number) {
    this.store.dispatch(CounterActions.getUserById({id}));
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

 

}