import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UserAction from './user.action';
import * as UserSelector from './user.selector';
import { User } from '../users-service.service';

@Injectable({
  providedIn: 'root',
})

export class UserFacade {
  userList$ = this.store.select(UserSelector.userListSelector);
  singleUser$ = this.store.select(UserSelector.singleUserDetailsSelector);
  diplayMessage$ = this.store.select(UserSelector.displayMessageSelector);

  constructor(private store: Store) {}

  displayMessage(){
    this.store.dispatch(UserAction.resetDisplayMessage());
  }

  getAllData() {
    this.store.dispatch(UserAction.getAllData());
  }
  
  getUserById(id:number) {
    this.store.dispatch(UserAction.getUserById({id}));
  }

  createUser(user:any) {
    this.store.dispatch(UserAction.createUser({user}));
  }
  
  updateUser(user:any) {
    this.store.dispatch(UserAction.updateUser({user}));
  }

  deleteUser(id: number) {
    this.store.dispatch(UserAction.deleteUser({id}));
  }
}