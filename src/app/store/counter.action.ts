import { createAction, props } from '@ngrx/store';
import { User } from '../users-service.service';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

export const getAllData = createAction('[User] getAllData');
export const getAllDataSuccess = createAction('[User] getAllDataSuccess', props<{ userList: User[] }>());
export const getAllDataFailed = createAction('[User] getAllDataFailed', props<{ error:string }>());

export const getUserById = createAction('[User] getUserById', props<{ id:number }>());
export const getUserByIdSuccess = createAction('[User] getUserByIdSuccess', props<{ user: User }>());
export const getUserByIdFailed = createAction('[User] getUserByIdFailed', props<{ error:string }>());

export const createUser = createAction('[User] createUser', props<{ user:any }>());
export const createUserSuccess = createAction('[User] createUserSuccess', props<{ user: User[] }>());
export const createUserFailed = createAction('[User] createUserFailed', props<{ error:string }>());

export const updateUser = createAction('[User] updateUser', props<{ user:any }>());
export const updateUserSuccess = createAction('[User] updateUserSuccess', props<{ user: User[] }>());
export const updateUserFailed = createAction('[User] updateUserFailed', props<{ error:string }>());

export const deleteUser = createAction('[User] deleteUser', props<{ user:any }>());
export const deleteUserSuccess = createAction('[User] deleteUserSuccess', props<{ user: User }>());
export const deleteUserFailed = createAction('[User] deleteUserFailed', props<{ error:string }>());