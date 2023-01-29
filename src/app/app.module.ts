import { NgModule } from '@angular/core';
import { isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
// import { MatDialog } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { countReducer, FEATURE_KEY } from './store/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { CounterEffects } from './store/counter.effects';
import { EffectsModule } from '@ngrx/effects';
import { UsersCreateUpdateComponent } from './users-create-update/users-create-update.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailsComponent,
    CounterComponent,
    UsersCreateUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    // MatDialog,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([CounterEffects]),
    StoreModule.forFeature(FEATURE_KEY, countReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
