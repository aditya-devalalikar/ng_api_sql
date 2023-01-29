import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CounterActions from '../store/counter.action';
import * as CounterSelector from '../store/counter.selector';
import { User } from '../users-service.service';

@Injectable({
  providedIn: 'root',
})

export class CounterFacade {
  counter$ = this.store.select(CounterSelector.counterSelector);
  userList$ = this.store.select(CounterSelector.userListSelector);
  singleUser$ = this.store.select(CounterSelector.singleUserDetailsSelector);

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(CounterActions.increment());
  }
  
  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  getAllData() {
    this.store.dispatch(CounterActions.getAllData());
  }
  
  getUserById(id:number) {
    this.store.dispatch(CounterActions.getUserById({id}));
  }

  createUser(user:any) {
    this.store.dispatch(CounterActions.createUser({user}));
  }
  
  updateUser(user:any) {
    this.store.dispatch(CounterActions.updateUser({user}));
  }

  deleteUser(user:any) {
    this.store.dispatch(CounterActions.deleteUser({user}));
  }
}