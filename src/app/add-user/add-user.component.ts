import { Component } from '@angular/core';
import { CounterFacade } from '../store/counter.facade';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  Id: number = 0;
  UserName: string = '';
  Email: string = '';
  Password: string = '';
  Role: string = '';
  CollegeName: string = '';
  UniversityName: string = '';

  // usersForm = new Form Control

  constructor(private userServiceService: UsersServiceService,
    private countFacade: CounterFacade) { }

  sendData() {
    const data: User = {
      Id: this.Id,
      UserName: this.UserName,
      Email: this.Email,
      Password: this.Password,
      Role: this.Role,
      CollegeName: this.CollegeName,
      UniversityName: this.UniversityName
    };

    this.countFacade.getUserById(data.Id);

    // this.userServiceService.receiveData(data);

    interface User {
      Id: number,
      UserName: string,
      Email: string,
      Role: string,
      Password: string,
      CollegeName: string,
      UniversityName: string
    }
  }

}


