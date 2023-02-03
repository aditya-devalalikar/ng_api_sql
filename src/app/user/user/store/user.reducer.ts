import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store/src';
import * as userAction from './user.action';
import { UserState } from './user.state';
import { initialState } from './user.state';

export const FEATURE_KEY = 'user';

export interface PartialState {
  readonly [FEATURE_KEY]: UserState;
}

const UserReducer = createReducer(
    initialState,

    //display snacbar after action is complete
    on(userAction.resetDisplayMessage, state => {
        return {...state, displayMessage: initialState.displayMessage}
    }),
    on(userAction.displayMessage, (state, action) => {
        return {...state, displayMessage: action.data}
    }),


    //reducer for get all user data
    on(userAction.getAllData, state => {
        return {...state, userList: []}
    }),
    on(userAction.getAllDataSuccess, (state, action) => {
        return {...state, userList: action.userList}
    }),
    on(userAction.getAllDataFailed, state => {
        return {...state, userList: []}
    }),
    

    //reducer for get user by id
    on(userAction.getUserById, state => {
        return {...state, singleUser: initialState.singleUser}
    }),
    on(userAction.getUserByIdSuccess, (state, action) => {
        return {...state, singleUser: action.user}
    }),
    on(userAction.getUserByIdFailed, state => {
        return {...state, singleUser: initialState.singleUser}
    }),


    //reducer for create user
    on(userAction.createUser, state => {
        return {...state, userList: []}
    }),
    on(userAction.createUserSuccess, (state, action) => {
        return {...state, userList: action.user}
    }),
    on(userAction.createUserFailed, state => {
        return {...state, userList: []}
    }),


    //reducer for update user
    on(userAction.updateUser, state => {
        return {...state, userList: []}
    }),
    on(userAction.updateUserSuccess, (state, action) => {
        return {...state, userList: action.user}
    }),
    on(userAction.updateUserFailed, state => {
        return {...state, userList: []}
    }),


    //reducer for delete user
    on(userAction.deleteUser, state => {
        return {...state, userList: []}
    }),
    on(userAction.deleteUserSuccess, (state, action) => {
        return {...state}
    }),
    on(userAction.deleteUserFailed, state => {
        return {...state, userList: []}
    }),
);

export function userReducer (state: UserState | undefined, action: Action): UserState {
    return UserReducer(state, action);
}
