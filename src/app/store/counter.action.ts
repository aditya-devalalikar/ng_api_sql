import { createAction, props } from '@ngrx/store';
import { User } from '../users-service.service';

//actions for me
// export const increment = createAction('[Counter] Increment');

//actions for increment-decrement
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');


//actions for getting all users data
export const getAllData = createAction('[User] getAllData');
export const getAllDataSuccess = createAction('[User] getAllDataSuccess', props<{ userList: User[] }>());
export const getAllDataFailed = createAction('[User] getAllDataFailed', props<{ error:string[] }>());


//actions for getting user by id
export const getUserById = createAction('[User] getUserById', props<{ id:number }>());
export const getUserByIdSuccess = createAction('[User] getUserByIdSuccess', props<{ user: User }>());
export const getUserByIdFailed = createAction('[User] getUserByIdFailed', props<{ error:string[] }>());


//actions for creating a new user
export const createUser = createAction('[User] createUser', props<{ user:any }>());
export const createUserSuccess = createAction('[User] createUserSuccess', props<{ user: User[] }>());
export const createUserFailed = createAction('[User] createUserFailed', props<{ error:string[] }>());


//actions for updating a user data
export const updateUser = createAction('[User] updateUser', props<{ user:any }>());
export const updateUserSuccess = createAction('[User] updateUserSuccess', props<{ user: User[] }>());
export const updateUserFailed = createAction('[User] updateUserFailed', props<{ error:string[] }>());


//actions to delete a user data 
export const deleteUser = createAction('[User] deleteUser', props<{ id:any }>());
export const deleteUserSuccess = createAction('[User] deleteUserSuccess');
export const deleteUserFailed = createAction('[User] deleteUserFailed', props<{ error:string[] }>());

