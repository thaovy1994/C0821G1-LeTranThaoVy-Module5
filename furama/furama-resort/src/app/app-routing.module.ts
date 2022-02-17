import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './feature/customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './feature/customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './feature/customer/customer-edit/customer-edit.component';
import {FacilityListComponent} from './feature/facility/facility-list/facility-list.component';
import {HomeComponent} from './feature/home/home.component';


const routes: Routes = [
  // {
  //   path: 'customer',
  //   loadChildren: () => import('./feature/customer/customer.module').then(module => module.CustomerModule)
  // },
  // {
  //   path: 'facility',
  //   loadChildren: () => import('./feature/facility/facility.module').then(module => module.FacilityModule)
  // },
  // {
  //   path: 'contract',
  //   loadChildren: () => import('./feature/contract/contract.module').then(module => module.ContractModule)
  // }
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'create', component: CustomerCreateComponent},
  {path: 'edit', component: CustomerEditComponent},
  {path: 'facility-list', component: FacilityListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
