import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent} from './feature/customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from "./feature/customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./feature/customer/customer-edit/customer-edit.component";


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: CustomerListComponent},
  {path: 'create', component: CustomerCreateComponent},
  {path: 'edit', component: CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
