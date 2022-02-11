import { Component, OnInit } from '@angular/core';
import {Customer} from '../../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
public customerList = [];

  constructor() {
    this.customerList.push(
      new Customer(1,'Thao','Vy','2022-02-02',0,'0706123456','vy@gmail.com','DN'));
    this.customerList.push(
      new Customer(2,'Mina','Le','2022-02-01',0,'0706333444','mina@gmail.com','Danang'));
    this.customerList.push(
      new Customer(3,'Yibo','wang','2022-02-08',1,'0905333444','yibo@gmail.com','LuoYang'));
  }

  ngOnInit(): void {
  }

  receivedFromCreate(customer: any) {
    console.log(customer);
    this.customerList.push(customer);
  }
}
