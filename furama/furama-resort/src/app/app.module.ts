import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import { HomeComponent } from './feature/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomerListComponent} from './feature/customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './feature/customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './feature/customer/customer-edit/customer-edit.component';
import {FacilityListComponent} from './feature/facility/facility-list/facility-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent,
    FacilityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
