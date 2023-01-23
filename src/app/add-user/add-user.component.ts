import { Component } from '@angular/core';
import { UsersServiceService } from '../users-service.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  id: number = 0;
  name: string = '';
  enrollmentNumber: number = 0;
  college: string = '';
  university: string = '';

  // usersForm = new Form Control

  constructor(private userServiceService: UsersServiceService) { }

  sendData() {
    const data: User = {
      id: this.id,
      name: this.name,
      enrollmentNumber: this.enrollmentNumber,
      college: this.college,
      university: this.university
    };
    
    this.userServiceService.receiveData(data);

    interface User {
      id: number,
      name: string,
      enrollmentNumber: number,
      college: string,
      university: string
    }
  }
  
}


