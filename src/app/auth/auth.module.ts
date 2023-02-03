import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
// import { reducer } from './store/auth.reducer';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    // StoreModule.forFeature('login', reducer)
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
