import { Component } from '@angular/core';
import { Data } from '../sample.data';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.css']
})
export class MainDataComponent {

  students: Data[] = [];

    constructor(private apicallservice: ApiCallService) {}

    ngOnInit() {
        const studentsObservable = this.apicallservice.getStudents();
        studentsObservable.subscribe((studentsData: Data[]) => {
            this.students = studentsData;
        });
    }

}
