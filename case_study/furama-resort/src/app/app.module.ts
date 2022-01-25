import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceCreateComponent } from './service/service-create/service-create.component';
import { ServiceEditComponent } from './service/service-edit/service-edit.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { TypeOfRoomComponent } from './service/type-of-room/type-of-room.component';
import { HomeComponent } from './home/home.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceCreateComponent,
    ServiceEditComponent,
    ServiceListComponent,
    TypeOfRoomComponent,
    HomeComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
