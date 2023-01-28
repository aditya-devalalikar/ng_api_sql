import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import * as CounterActions from './counter.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { User, UsersServiceService } from '../users-service.service';


@Injectable()
export class CounterEffects {

    //Load all Users
    loadUserList$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.getAllData),
        mergeMap(() => this.userServiceService.getAllUsers()
            .pipe(
                map((userList: User[]) => (CounterActions.getAllDataSuccess({ userList }))),
                catchError(() => EMPTY)
            ))
    ));

    //Load User by ID
    loadUserById$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.getUserById),
        mergeMap((action) => this.userServiceService.getUserByID(action.id)
            .pipe(
                map((user: User) => (CounterActions.getUserByIdSuccess({ user }))),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(private userServiceService: UsersServiceService,
        private actions$: Actions) { }
}