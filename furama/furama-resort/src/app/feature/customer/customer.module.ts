import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';

import {CustomerRoutingModule} from './customer-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {FacilityListComponent} from '../facility/facility-list/facility-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: []
})
export class CustomerModule { }
