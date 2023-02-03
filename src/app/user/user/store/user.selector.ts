import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY } from './user.reducer';
import { UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>(FEATURE_KEY);

export const userListSelector = createSelector(selectUserState, state => {
    return state.userList
});

export const singleUserDetailsSelector = createSelector(selectUserState, state => {
    return state.singleUser
});

export const displayMessageSelector = createSelector(selectUserState, state => {
    return state.displayMessage
});