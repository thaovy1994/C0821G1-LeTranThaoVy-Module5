import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {CustomerCreateComponent} from '../customer-create/customer-create.component';
import {CustomerEditComponent} from '../customer-edit/customer-edit.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: CustomerListComponent},
  {path: 'create', component: CustomerCreateComponent},
  {path: 'edit', component: CustomerEditComponent}
  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class CustomerRoutingModule { }
