import { createReducer, on } from '@ngrx/store';
import { AuthState, initialAuthState } from './auth.state';
import * as AuthActions from './auth.actions';
import { Actions } from '@ngrx/effects';

// const authReducer = createReducer(
//   initialAuthState,
//   on(AuthActions.login, (state) =>    
//     ({ ...state, isLoading: true })),
//   on(AuthActions.loginSuccess, (state, { email }) => 
//     ({ ...state, email, isLoading: false })),
//   on(AuthActions.loginFailure, (state, { error }) => 
//     ({ ...state, error, isLoading: false }))
// );


// export function reducer (state: AuthState | undefined, action: Actions): AuthState {
//     return authReducer (state, action);
// }


