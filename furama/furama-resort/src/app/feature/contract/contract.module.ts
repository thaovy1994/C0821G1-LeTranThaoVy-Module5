import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @ts-ignore
import { ContractComponent } from './contract/contract.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ContractRoutingModule} from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';


@NgModule({
  declarations: [ContractListComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
