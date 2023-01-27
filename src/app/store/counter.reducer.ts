import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store/src';
import { increment, decrement, getAllData, getAllDataSuccess, getAllDataFailed } from './counter.action';
import { CounterState } from './counter.state';
import { initialState } from './counter.state';

export const FEATURE_KEY = 'counter';

export interface PartialState {
  readonly [FEATURE_KEY]: CounterState;
}

const counterReducer = createReducer(
    initialState,
    on(increment, state => {
        return {...state, count: state.count + 1}
    }),
    on(decrement, state => {
        return {...state, count: state.count - 1}
    }),
    on(getAllData, state => {
        return {...state, userList: []}
    }),
    on(getAllDataSuccess, (state, action) => {
        return {...state, userList: action.userList}
    }),
    on(getAllDataFailed, state => {
        return {...state, userList: []}
    }),

);

export function countReducer (state: CounterState | undefined, action: Action): CounterState {
    return counterReducer(state, action);
  }
