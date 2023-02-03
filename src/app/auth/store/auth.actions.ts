import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const loginSuccess = createAction('[Auth] Login Success', props<{ email: string }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());
