import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FacilityRoutingModule} from './facility-routing.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { FacilityListComponent } from './facility-list/facility-list.component';



@NgModule({
  declarations: [FacilityListComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }
