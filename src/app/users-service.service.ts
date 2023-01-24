import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersServiceService {
  students: User[] = [{
    Id: 1,
    UserName: 'Krunal',
    Email: 'Krunal@gmail.com',
    Role: 'User',
    Password: 'String',
    CollegeName: 'VVP Engineering College',
    UniversityName: 'GTU University'
  },
  {
    Id: 2,
    UserName: 'Rushabh',
    Email: 'Rushabh@gmail.com',
    Role: 'User',
    Password: 'String',
    CollegeName: 'VVP Engineering College',
    UniversityName: 'GTU University'
  },
  {
    Id: 3,
    UserName: 'Ankit',
    Email: 'Ankit@gmail.com',
    Role: 'User',
    Password: 'String',
    CollegeName: 'VVP Engineering College',
    UniversityName: 'GTU University'
  }];

  constructor(private http: HttpClient) { }

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
        if (item.Id == id) {
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

  receiveData(data: User) {
    this.students.push(data);
  }

  private apiUrl = 'http://localhost:3000/api';

  getAllDataAPI(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/data`);
  }
}

export interface User {
  Id: Number,
  UserName: String,
  Email: String,
  Role: String,
  Password: String,
  CollegeName?: String,
  UniversityName?: String
}