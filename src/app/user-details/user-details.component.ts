import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {
  Id: number = 0;
  user: User = {
    Id: -1,
    CollegeName: '',
    Email: '',
    Role:'',
    Password:'',
    UserName: '',
    UniversityName: '',
  };
  constructor(private route: ActivatedRoute, private usersServiceService: UsersServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.Id = parseInt(id);
      this.usersServiceService.getUserByID(this.Id).subscribe((data: User) => {
        if (data != null) {
          this.user = data;
        }
        else{
          this.user.Id= 0;
        }
      });
    }
  }
}
