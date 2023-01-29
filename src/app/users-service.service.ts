import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpRes } from './store/counter.state';

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

  index: number = 0;
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

  createUser(data: any) {
    var user: User = {
      Id: this.students.length + 1,
      UserName: data.userName,
      Email: data.email,
      Role: data.role,
      Password: data.password,
      CollegeName: data.collegeName,
      UniversityName: data.universityName
    };
    var list = [...this.students, user];
    this.students = list;
    return new Observable<User[]>(observer => {
      setTimeout(() => {
        observer.next(list);
      }, 1000);
    });
  }

  updateUser(data: any) {
    var list;
    list = this.students.filter(item => item.Id != data.id)
    var user: User = {
      Id: parseInt(data.id),
      UserName: data.userName,
      Email: data.email,
      Role: data.role,
      Password: data.password,
      CollegeName: data.collegeName,
      UniversityName: data.universityName
    };
    list = [...list, user];
    this.students = list;
    this.students.sort(
      (p1, p2) =>
        (p1.Id < p2.Id) ? 1 : (p1.Id > p2.Id) ? -1 : 0);
    return new Observable<User[]>(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });
  }

  deleteUser(index: number): Observable<User[]> {
    var list;
    list = this.students.filter(item => item.Id != index)
    this.students = list;
    return new Observable<User[]>(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });
  }

  private apiUrl = 'http://localhost:3000/api';

  private headers = new HttpHeaders ()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', 'http://localhost:3000/api/users')
    .set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");

  getAllUsersAPI(): Observable<HttpRes> {
    const headers = this.headers;
    return this.http.get<HttpRes>(`${this.apiUrl}/users`, { headers });
  }

  getUserByIdAPI(id: number): Observable<HttpRes> {
    const headers = this.headers;
    return this.http.get<HttpRes>(`${this.apiUrl}/user/` +id, { headers });
  }

  createUserAPI(data: any): Observable<HttpRes> {
    const headers = this.headers;
    const body: User = {
      Id: data.id,
      UserName: data.userName,
      Email: data.email,
      Role: data.role,
      Password: data.password,
      CollegeName: data.collegeName,
      UniversityName: data.universityName
    };
    return this.http.post<HttpRes>(`${this.apiUrl}/user`, body, { headers });
  }

  //functionName(paraName: paraType ): returnType { 
  // const returnData: returnType;
  // return returnData 
  //}

  updateUserByIdAPI(data: any): Observable<HttpRes> {
    const headers = this.headers;
    const body: User = {
      Id: data.id,
      UserName: data.userName,
      Email: data.email,
      Role: data.role,
      Password: data.password,
      CollegeName: data.collegeName,
      UniversityName: data.universityName
    };
    return this.http.put<HttpRes>(`${this.apiUrl}/user`, body, { headers });
  }

  deleteUserAPI(id: number): Observable<HttpRes> {
    const headers = this.headers;
    const body: any = {
      Id: id
    }
    return this.http.delete<HttpRes>(`${this.apiUrl}/user`, { headers, body});
  }
}

export interface User {
  Id: number,
  UserName: string,
  Email: string,
  Role: string,
  Password: string,
  CollegeName?: string,
  UniversityName?: string
}