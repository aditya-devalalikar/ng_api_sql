import { Component } from '@angular/core';
import { User, UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users: User[] = [];
  showUsers: boolean = false;
  constructor(private userServiceService: UsersServiceService) { }

  ngOnInit() {
    this.userServiceService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      if (data.length > 0) {
        this.showUsers = true;
      }
    });
  }

}
