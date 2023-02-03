import { Component } from '@angular/core';
import { User } from '../users-service.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UsersCreateUpdateComponent } from '../users-create-update/users-create-update.component';
import { UserFacade } from '../store/user.facade';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users: User[] = [];
  text: string = '';
  showUsers: boolean = false;
  buttonTitle: string = "";
  userId: string = "";
  userList$: Observable<User[]>;
  showUserForm: boolean = false;
  updateUserId: string = "";

  displayedColumns: string[] = ['Id', 'UserName', 'Email', 'Password', 'Role', 'College', 'University'];
  dataSource = this.users;

  constructor(private userFacade: UserFacade,
    private dialog: MatDialog) {
    this.userList$ = this.userFacade.userList$;
  }

  ngOnInit() {
    this.userFacade.getAllData();
  }

  userDetails(id: number){
    // this.userId = id.toString();
    // this.dialog.open(UserDetailsComponent, {userId: this.userId});

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id: id };

    this.dialog.open(UserDetailsComponent, dialogConfig);
  }


  updateUser(id: number) {
    this.showUserForm = true;
    this.buttonTitle = "Update User";
    this.userId = id.toString();
  }

  deleteUser(id: number) {
    this.userFacade.deleteUser(id);
  }

  openDialog() {
    this.showUserForm = true;
    this.buttonTitle = "Create User"
    let data = {
      buttonTitle: this.buttonTitle,
      userId: this.userId
    }
    this.dialog.open(UsersCreateUpdateComponent, {data});
  }
}
