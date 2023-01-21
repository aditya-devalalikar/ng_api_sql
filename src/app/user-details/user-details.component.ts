import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {
  id: number = 0;
  user: User = {
    id: -1,
    College: '',
    enrollmentNumber: 0,
    name: '',
    University: '',
  };
  constructor(private route: ActivatedRoute, private usersServiceService: UsersServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = parseInt(id);
      this.usersServiceService.getUserByID(this.id).subscribe((data: User) => {
        if (data != null) {
          this.user = data;
        }
        else{
          this.user.id= 0;
        }
      });
    }
  }
}
