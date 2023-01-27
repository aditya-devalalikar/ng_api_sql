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