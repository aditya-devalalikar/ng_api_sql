import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersServiceService {
  students: User[] = [{
    id: 1,
    name: 'Krunal',
    enrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU University'
  },
  {
    id: 2,
    name: 'Rushabh',
    enrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    // University: 'GTU University'
  },
  {
    id: 3,
    name: 'Ankit',
    enrollmentNumber: 110470116022,
    College: 'VVP Engineering College',
    University: 'GTU University'
  }];

  constructor(private httpclient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return new Observable<User[]>(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });
  }

  getUserByID(id: number): Observable<User> {
    return new Observable<User>(observer => {
      let student = this.students.find(item => {
        if (item.id == id) {
          return item;
        }
        return null;
      });
      setTimeout(() => {
        observer.next(student);
      }, 1000);
    });
  }

  text: string = '';
  addNewUserService(): Observable<string> {
    return of('Hello, New User Added!');
  }

  receiveData(data: User){
    this.students.push(data);
  }

  // getAllUsersAPI(): Observable<User[]> {
  //   const headers = new HttpHeaders();
  //   headers.set('Content-Type', 'application/json; charset=utf-8');
  //   headers.set('Content-Type', 'application/json; charset=utf-8');
  //   return this.httpclient.get<User[]>("localhost:5500/users", { headers });
  // }

  // getUserByIDAPI(id: number): Observable<User> {
  //   return this.httpclient.get<User>("localhost:5500/user/"+id);
  // }
}

export interface User {
  id: Number,
  name: String,
  enrollmentNumber: Number,
  College?: String,
  University?: String
}