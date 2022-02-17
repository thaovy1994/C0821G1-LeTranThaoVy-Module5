import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})
export class CustomerModule { }
