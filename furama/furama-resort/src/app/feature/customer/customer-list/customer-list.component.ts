import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer';
import {FormControl} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';
import {CustomertypeService} from '../../../service/customer/customertype.service';
import {Subscription} from 'rxjs';
import {CustomerType} from '../../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customerTypes: CustomerType[];
  idDelete: number;
  content = new FormControl();
  term: any;
  p: any;
  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomertypeService) {
    this.customerService.findAll().subscribe(value => {
      this.customers = value;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }
  subscription: Subscription;
  ngOnInit(): void {
    this.subscription = this.customerTypeService.getAllCustomerType().subscribe(data => {
        this.customerTypes = data;
        console.log(this.customerTypes);
      }
      , error => {
      });
  }
  delete(id: number) {
    this.idDelete = id;
  }
  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(value => {
      }, error => {},
      () => {
        this.customerService.findAll().subscribe(value => {
          this.customers = value;
        });
      });
  }

  edit(id: any) {

  }
}
