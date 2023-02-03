import { Component, Input, Output, EventEmitter, OnChanges, Inject, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserFacade } from '../store/user.facade';
import { DisplayMessage, MessageType } from '../store/user.state';


@Component({
  selector: 'users-create-update',
  templateUrl: './users-create-update.component.html',
  styleUrls: ['./users-create-update.component.css']
})
export class UsersCreateUpdateComponent implements OnChanges, OnDestroy {

  form: FormGroup;
  unsubscribe = new Subject<void>() 

  constructor(private userFacade: UserFacade,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UsersCreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.formBuilder.group({
      id: [''],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: [''],
      role: [''],
      collegeName: [''],
      universityName: ['']
    });
  }

  ngOnChanges() {

    if (this.data.buttonTitle === "Update User") {
      let user: any;
      this.userFacade.userList$.forEach(item => {
        user = item.find(i => i.Id == parseInt(this.data.userId))
      });
      // this.dialog.open(UsersCreateUpdateComponent, { user });
    }
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  submitUserData() {
    if (this.data.buttonTitle != "" && this.data.buttonTitle === "Create User") {
      this.userFacade.createUser(this.form.value);
      this.userFacade.diplayMessage$
      .pipe(takeUntil(this.unsubscribe))
        .subscribe((data: DisplayMessage)=>{
        if(data.type == MessageType.SUCCESS){
          this.dialogRef.close();
        }
      })
    } else {
      this.userFacade.updateUser(this.form.value);
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
