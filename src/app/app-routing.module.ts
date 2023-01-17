import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdDataComponent } from './id-data/id-data.component';
import { MainDataComponent } from './main-data/main-data.component';

const routes: Routes = [
  { path: '', component: MainDataComponent },
  { path: 'main-data', component: MainDataComponent },
  { path: 'id-data', component: IdDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
