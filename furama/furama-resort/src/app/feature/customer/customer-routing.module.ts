import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'customer-list', pathMatch: 'full'},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'create-customer', component: CustomerCreateComponent},
  {path: 'edit-customer/:id', component: CustomerEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CustomerRoutingModule { }
