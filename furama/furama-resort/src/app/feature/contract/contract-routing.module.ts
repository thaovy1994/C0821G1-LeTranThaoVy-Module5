import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from '../customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from '../customer/customer-create/customer-create.component';
import {CustomerEditComponent} from '../customer/customer-edit/customer-edit.component';

const routes: Routes = [

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContractRoutingModule { }
