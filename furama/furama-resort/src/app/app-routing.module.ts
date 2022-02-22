import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './feature/customer/customer-list/customer-list.component';
import {FacilityListComponent} from './feature/facility/facility-list/facility-list.component';
import {HomeComponent} from './feature/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CustomerCreateComponent} from './feature/customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './feature/customer/customer-edit/customer-edit.component';


const routes: Routes = [
  // {
  //   path: 'customer',
  //   loadChildren: () => import('./feature/customer/customer.module.js').then(module => module.CustomerModule)
  // }
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'create-customer', component: CustomerCreateComponent},
  {path: 'edit-customer', component: CustomerEditComponent},
  {path: 'facility-list', component: FacilityListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
