import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import * as CounterActions from './counter.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { User, UsersServiceService } from '../users-service.service';
import { HttpRes } from './counter.state';
import { CounterFacade } from './counter.facade';


@Injectable()
export class CounterEffects {

    //Load all Users using static data
    // loadUserList$ = createEffect(() => this.actions$.pipe(
    //     ofType(CounterActions.getAllData),
    //     mergeMap(() => this.userServiceService.getAllUsers()
    //         .pipe(
    //             map((userList: User[]) => (CounterActions.getAllDataSuccess({ userList }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));


    //Load all Users using data from database
    loadUserList$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.getAllData),
        mergeMap(() => this.userServiceService.getAllUsersAPI()
            .pipe(
                map((response: HttpRes) => {
                    if (!response.isSuccess || response.data.length==0) {
                        return CounterActions.getAllDataFailed({
                            error: response.errorMessages
                        })
                    }
                    return CounterActions.getAllDataSuccess({ userList: response.data })
                }),
                catchError(() => EMPTY)
            ))
    ));


    //Load User by ID using static data
    // loadUserById$ = createEffect(() => this.actions$.pipe(
    //     ofType(CounterActions.getUserById),
    //     mergeMap((action) => this.userServiceService.getUserByID(action.id)
    //         .pipe(
    //             map((user: User) => (CounterActions.getUserByIdSuccess({ user }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));


    //Load user by ID using data from database 
    loadUserById$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.getUserById),
        mergeMap((action) => this.userServiceService.getUserByIdAPI(action.id)
            .pipe(
                map((response: HttpRes) => {
                    if (!response.isSuccess || response.data.length==0) {
                        return CounterActions.getUserByIdFailed({
                            error: response.errorMessages
                        })
                    }
                    return CounterActions.getUserByIdSuccess({ user: response.data[0] })
                }),
                catchError(() => EMPTY)
            ))
    ));


    //create user by static data
    // createUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(CounterActions.createUser),
    //     mergeMap((action) => this.userServiceService.createUser(action.user)
    //         .pipe(
    //             map((user: User[]) => (CounterActions.createUserSuccess({ user }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));

    //create user by using database 
    createUser$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.createUser),
        mergeMap((action) => this.userServiceService.createUserAPI(action.user)
        .pipe(
            map((response: HttpRes) => {
                if (!response.isSuccess || response.data.length==0) {
                    return CounterActions.getUserByIdFailed({
                        error: response.errorMessages
                    })
                }
                return CounterActions.getAllData();
            }),
            catchError(() => EMPTY)
        ))
    ));



    //update user using static data
    // updateUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(CounterActions.updateUser),
    //     mergeMap((action) => this.userServiceService.updateUser(action.user)
    //         .pipe(
    //             map((user: User[]) => (CounterActions.updateUserSuccess({ user }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));


    //update user using database
    updateUser$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.updateUser),
        mergeMap((action) => this.userServiceService.updateUserByIdAPI(action.user)
        .pipe(
            map((response: HttpRes) => {
                if (!response.isSuccess) {
                    return CounterActions.updateUserFailed({
                        error: response.errorMessages
                    })
                }
                return CounterActions.getAllData();
            }),
            catchError(() => EMPTY)
        ))
    ));


    //delete user
    // deleteUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(CounterActions.deleteUser),
    //     mergeMap((action) => this.userServiceService.deleteUser(action.id)
    //         .pipe(
    //             map((user: User[]) => (CounterActions.deleteUserSuccess({ user }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));


    deleteUser$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.deleteUser),
        mergeMap((action) => this.userServiceService.deleteUserAPI(action.id)
            .pipe(
                map((response: HttpRes) => {
                    if (!response.isSuccess) {
                        return CounterActions.deleteUserFailed({
                            error: response.errorMessages
                        })
                    }
                    // this.countFacade.getAllData();
                    return CounterActions.getAllData()
                }),
                catchError(() => EMPTY)
            ))
    ));

    
    userList$: Observable<User[]>;

    constructor(private userServiceService: UsersServiceService,
                private actions$: Actions,
                private countFacade: CounterFacade) { 
                    this.userList$ = this.countFacade.userList$;
                }
}