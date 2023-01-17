import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDataComponent } from './main-data/main-data.component';
import { IdDataComponent } from './id-data/id-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDataComponent,
    IdDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
