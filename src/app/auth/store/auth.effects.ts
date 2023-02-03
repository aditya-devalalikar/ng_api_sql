import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap, of } from 'rxjs';


@Injectable()
export class UserEffects {

login$ = createEffect(() =>
  this.actions$.pipe(
    ofType('LOGIN'),
    switchMap(() => {
      // logic 
      return of({ type: 'LOGIN_SUCCESS' });
    })
  )
);


constructor(
    private actions$: Actions,
    private store: Store) {
}
}