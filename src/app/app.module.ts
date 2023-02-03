import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user/user-details/user-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserEffects } from './user/user/store/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './user-interface/header/header.component';
import { FooterComponent } from './user-interface/footer/footer.component';
import { Interceptor } from './interceptor/interceptor.interceptor';
import { UsersCreateUpdateComponent } from './user/user/users-create-update/users-create-update.component';
import { UsersListComponent } from './user/user/users-list/users-list.component';
import { userReducer, FEATURE_KEY } from './user/user/store/user.reducer';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './user/home/home.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailsComponent,
    UsersCreateUpdateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatSnackBarModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forFeature(FEATURE_KEY, userReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
