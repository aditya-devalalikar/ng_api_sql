import { Component } from '@angular/core';
import { User } from '../users-service.service';
import { CounterFacade } from '../store/counter.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  users: User[] = [];
  text: string = '';
  showUsers: boolean = false;

  userList$ : Observable<User[]>;
  showUserForm : boolean = false;

  constructor(private countFacade : CounterFacade) {
              this.userList$ = this.countFacade.userList$;
              }

  ngOnInit() {
    this.countFacade.getAllData();
   
    
  }

  addNewUser() {
    this.showUserForm = true;
  }

  updateUser(id:number){
    this.showUserForm = true;
  }
  
}
