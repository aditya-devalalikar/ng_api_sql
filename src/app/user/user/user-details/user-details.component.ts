import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User, UsersServiceService } from '../users-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFacade } from '../store/user.facade';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {
  Id: number = 0;
  user: User = {
    Id: -1,
    CollegeName: 'asd',
    Email: '',
    Role:'',
    Password:'',
    UserName: '',
    UniversityName: '',
  };

  singleUser$ : Observable<User>;

  constructor(private route: ActivatedRoute, 
    private usersServiceService: UsersServiceService,
    private dialog: MatDialog,
    private userFacade : UserFacade,
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.singleUser$ = this.userFacade.singleUser$
    }

  ngOnInit(): void {
    const id = this.data.id;
    if (id != null) {
    this.userFacade.getUserById(parseInt(id));
    }
  }
}
