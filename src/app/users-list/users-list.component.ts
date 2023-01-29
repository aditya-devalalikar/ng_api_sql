import { Component } from '@angular/core';
import { User } from '../users-service.service';
import { CounterFacade } from '../store/counter.facade';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users: User[] = [];
  text: string = '';
  showUsers: boolean = false;
  buttonTittle: string = "";
  buttonTittle1: string = "";
  userList$: Observable<User[]>;
  showUserForm: boolean = false;
  updateUserId: string = "";

  constructor(private countFacade: CounterFacade,
    private dialog: MatDialog) {
    this.userList$ = this.countFacade.userList$;
  }

  ngOnInit() {
    this.countFacade.getAllData();
  }

  addNewUser() {
    this.showUserForm = true;
    this.buttonTittle = "Create User"
  }

  updateUser(id: number) {
    this.showUserForm = true;
    this.buttonTittle = "Update User";
    this.buttonTittle1 = id.toString();
  }

  deleteUser(id: number) {
    this.countFacade.deleteUser(id);
  }

  updateUserFormVisibility(value:boolean){
    this.showUserForm = value;
  }
}
