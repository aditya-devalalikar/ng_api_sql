import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { User, UsersServiceService } from '../users-service.service';
import * as CounterActions from '../store/counter.action';
import { Actions, ofType } from '@ngrx/effects/src';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map, tap } from 'rxjs/operators';


@Injectable()
export class CounterEffects {

    constructor(private userServiceService: UsersServiceService,
        private actions$: Actions) { }

    users: User[] = [];
    text: string = '';
    showUsers: boolean = false;


    getUserData$ = createEffect(
        () => this.actions$.pipe(
            ofType(CounterActions.getAllData),
            map(() =>
                this.userServiceService.getAllDataAPI().pipe(
                    map((userList: User[]) =>
                        CounterActions.getAllDataSuccess({ userList })),
                    catchError(() => of(CounterActions.getAllDataFailed()))
                )
            )
        )
    );

    // getUserData$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(CounterActions.getAllData),
    //         map(() => {
    //             return this.userServiceService.getAllDataAPI().pipe(
    //                 map((userList: User[]) => {
    //                     if (userList.length > 0) {
    //                         return CounterActions.getAllDataSuccess({ userList })
    //                     }
    //                 }),
    //                 catchError(() => of(CounterActions.getAllDataFailed()))
    //       })
    //     );
    // });
}