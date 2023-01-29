import { Component, Input, Output, EventEmitter,OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterFacade } from '../store/counter.facade';
import { User } from '../users-service.service';


@Component({
  selector: 'users-create-update',
  templateUrl: './users-create-update.component.html',
  styleUrls: ['./users-create-update.component.css']
})
export class UsersCreateUpdateComponent implements OnChanges {

  @Input() buttonTittle: string = "";
  @Input() buttonTittle1: string = "";
  @Output() hideUserForm: EventEmitter<boolean> = new EventEmitter();

  userForm = new FormGroup({
    id: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl('', Validators.email),
    role: new FormControl(''),
    password: new FormControl('', Validators.minLength(6)),
    confirmPassword: new FormControl('', Validators.minLength(6)),
    collegeName: new FormControl(''),
    universityName: new FormControl(''),
  });

  constructor(
    private countFacade: CounterFacade) {
  }
  ngOnChanges() {
    
    if (this.buttonTittle === "Update User") {
      let user: any;
      this.countFacade.userList$.forEach(item => {
        user = item.find(i => i.Id == parseInt(this.buttonTittle1))
      });

      this.userForm.patchValue({
        id: user?.Id.toString(),
        userName: user?.UserName.toString(),
        email: user?.Email.toString(),
        role: user?.Role.toString(),
        password: user?.Password.toString(),
        confirmPassword: user?.Password.toString(),
        collegeName: user?.CollegeName?.toString(),
        universityName: user?.UniversityName?.toString(),
      })
    }
  }
  ngOnInit() {
  }

  submitUserData() {
    if (this.buttonTittle != "" && this.buttonTittle === "Create User") {
      this.countFacade.createUser(this.userForm.value);
      this.hideUserForm.emit(false);
    } else {
      this.countFacade.updateUser(this.userForm.value);
      this.hideUserForm.emit(false);
    }
  }
}
