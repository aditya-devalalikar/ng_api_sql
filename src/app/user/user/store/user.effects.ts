import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import * as UserAction from './user.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { User, UsersServiceService } from '../users-service.service';
import { DisplayMessage, HttpRes, MessageType } from './user.state';
import { UserFacade } from './user.facade';
import { Store } from '@ngrx/store';


let data: DisplayMessage = {
    message: 'User creation failed.',
    type: MessageType.ERROR
}

@Injectable()
export class UserEffects {

    //Load all Users using static data
    // loadUserList$ = createEffect(() => this.actions$.pipe(
    //     ofType(UserAction.getAllData),
    //     mergeMap(() => this.userServiceService.getAllUsers()
    //         .pipe(
    //             map((userList: User[]) => (UserAction.getAllDataSuccess({ userList }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));


    //Load all Users using data from database
    loadUserList$ = createEffect(() => this.actions$.pipe(
        ofType(UserAction.getAllData),
        mergeMap(() => this.userServiceService.getAllUsersAPI()
            .pipe(
                map((response: HttpRes) => {
                    if (!response.isSuccess || response.data.length == 0) {
                        return UserAction.getAllDataFailed({
                            error: response.errorMessages
                        })
                    }
                    return UserAction.getAllDataSuccess({ userList: response.data });
                }),
                catchError(() => EMPTY)
            ))
    ));


    //Load User by ID using static data
    // loadUserById$ = createEffect(() => this.actions$.pipe(
    //     ofType(UserAction.getUserById),
    //     mergeMap((action) => this.userServiceService.getUserByID(action.id)
    //         .pipe(
    //             map((user: User) => (UserAction.getUserByIdSuccess({ user }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));


    //Load user by ID using data from database 
    loadUserById$ = createEffect(() => this.actions$.pipe(
        ofType(UserAction.getUserById),
        mergeMap((action) => this.userServiceService.getUserByIdAPI(action.id)
            .pipe(
                map((response: HttpRes) => {
                    if (!response.isSuccess || response.data.length == 0) {
                        return UserAction.getUserByIdFailed({
                            error: response.errorMessages
                        })
                    }
                    return UserAction.getUserByIdSuccess({ user: response.data[0] })
                }),
                catchError(() => EMPTY)
            ))
    ));


    //create user by static data
    // createUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(UserAction.createUser),
    //     mergeMap((action) => this.userServiceService.createUser(action.user)
    //         .pipe(
    //             map((user: User[]) => (UserAction.createUserSuccess({ user }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));

    //create user by using database 
    createUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserAction.createUser),
        mergeMap((action) => this.userServiceService.createUserAPI(action.user)
            .pipe(
                map((response: HttpRes) => {
                    if (!response.isSuccess || response.data.length == 0) {
                        this.store.dispatch(UserAction.displayMessage({ data }));
                        return UserAction.getUserByIdFailed({
                            error: response.errorMessages
                        })
                    }
                    data = {
                        message: 'User created successfully with ID:' + response.data[0].Id,
                        type: MessageType.SUCCESS
                    }
                    this.store.dispatch(UserAction.displayMessage({ data }));
                    this.store.dispatch(UserAction.resetDisplayMessage());
                    return UserAction.getAllData();
                }),
                catchError(() => EMPTY)
            ))
    ));


    //update user using static data
    // updateUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(UserAction.updateUser),
    //     mergeMap((action) => this.userServiceService.updateUser(action.user)
    //         .pipe(
    //             map((user: User[]) => (UserAction.updateUserSuccess({ user }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));


    //update user using database
    updateUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserAction.updateUser),
        mergeMap((action) => this.userServiceService.updateUserByIdAPI(action.user)
            .pipe(
                map((response: HttpRes) => {
                    if (!response.isSuccess) {
                        this.store.dispatch(UserAction.displayMessage({ data }));
                        return UserAction.updateUserFailed({
                            error: response.errorMessages
                        })
                    }
                    data = {
                        message: 'User updated successfully with ID:' + response.data[0].Id,
                        type: MessageType.SUCCESS
                    }
                    this.store.dispatch(UserAction.displayMessage({ data }));
                    this.store.dispatch(UserAction.resetDisplayMessage());
                    return UserAction.getAllData();
                }),
                catchError(() => EMPTY)
            ))
    ));


    //delete user
    // deleteUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(UserAction.deleteUser),
    //     mergeMap((action) => this.userServiceService.deleteUser(action.id)
    //         .pipe(
    //             map((user: User[]) => (UserAction.deleteUserSuccess({ user }))),
    //             catchError(() => EMPTY)
    //         ))
    // ));


    deleteUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserAction.deleteUser),
        mergeMap((action) => this.userServiceService.deleteUserAPI(action.id)
            .pipe(
                map((response: HttpRes) => {
                    if (!response.isSuccess) {
                        this.store.dispatch(UserAction.displayMessage({ data }));
                        return UserAction.deleteUserFailed({
                            error: response.errorMessages
                        })
                    }
                    data = {
                        message: 'User deleted successfully.',
                        type: MessageType.SUCCESS
                    }
                    this.store.dispatch(UserAction.displayMessage({ data }));
                    this.store.dispatch(UserAction.resetDisplayMessage());
                    return UserAction.getAllData()
                }),
                catchError(() => EMPTY)
            ))
    ));


    userList$: Observable<User[]>;

    constructor(private userServiceService: UsersServiceService,
        private actions$: Actions,
        private userFacade: UserFacade,
        private store: Store) {
        this.userList$ = this.userFacade.userList$;
    }
}