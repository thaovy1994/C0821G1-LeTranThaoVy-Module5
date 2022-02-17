import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceCreateComponent} from './feature/service/service-create/service-create.component';
import {ServiceEditComponent} from './feature/service/service-edit/service-edit.component';
import {ServiceListComponent} from './feature/service/service-list/service-list.component';
import {TypeOfRoomComponent} from './feature/service/type-of-room/type-of-room.component';
import {MainPageComponent} from './main-page/main-page.component';
import {CustomerCreateComponent} from './feature/customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './feature/customer/customer-edit/customer-edit.component';
import {CustomerListComponent} from './feature/customer/customer-list/customer-list.component';
import {LoginRegisterComponent} from './login-register/login-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ServiceCreateComponent,
    ServiceEditComponent,
    ServiceListComponent,
    TypeOfRoomComponent,
    MainPageComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent,
    LoginRegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
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
export class AppModule {
}
