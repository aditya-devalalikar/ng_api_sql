import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CounterFacade } from '../store/counter.facade';
import { User } from '../users-service.service';


@Component({
  selector: 'users-create-update',
  templateUrl: './users-create-update.component.html',
  styleUrls: ['./users-create-update.component.css']
})
export class UsersCreateUpdateComponent {

  @Input() buttonTittle: string = ""

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

  ngOnInit() {
  }

  submitUserData() {
    if (this.buttonTittle != "" && this.buttonTittle === "Create User") {
      this.countFacade.createUser(this.userForm.value)
    } else {
      this.countFacade.updateUser(this.userForm.value)
    }
  }
}
