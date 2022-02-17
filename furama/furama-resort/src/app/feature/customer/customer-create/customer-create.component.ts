import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../../model/customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: number;
  phone: string;
  email: string;
  address: string;

  @Output()
  evenCreate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  createCustomer() {
    const customer: Customer = new Customer(this.id, this.firstName, this.lastName, this.dateOfBirth, this.gender, this.phone, this.email, this.address);
    this.evenCreate.emit(customer);
  }
}
