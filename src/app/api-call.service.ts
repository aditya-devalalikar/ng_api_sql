import { Injectable } from '@angular/core';
import { Data } from './sample.data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  students: Data [] = [{
    id: 1,
    name: 'Krunal',
    enrollmentNumber: 110470116021,
    College: 'VVP Engineering College',
    University: 'GTU'
  },
  {
    id: 2,
    name: 'Rushabh',
    enrollmentNumber: 110470116023,
    College: 'VVP Engineering College',
    University: 'GTU'
  },
  {
    id: 3,
    name: 'Ankit',
    enrollmentNumber: 110470116022,
    College: 'VVP Engineering College',
    University: 'GTU'
  }];

  constructor() { }

  public getStudents(): any {
    const dataObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.students);
           }, 1000);
    });

    return dataObservable;
}
}
