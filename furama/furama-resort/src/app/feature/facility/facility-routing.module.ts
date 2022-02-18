import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'facility-list', pathMatch: 'full'},
  {path: 'facility-list', component: FacilityListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FacilityRoutingModule { }
