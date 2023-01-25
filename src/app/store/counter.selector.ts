import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FEATURE_KEY } from './counter.reducer';
import { CounterState } from './counter.state';

export const selectCounterState = createFeatureSelector<CounterState>(FEATURE_KEY);

export const counterSelector = createSelector(selectCounterState, state => {
    return state.count
});
