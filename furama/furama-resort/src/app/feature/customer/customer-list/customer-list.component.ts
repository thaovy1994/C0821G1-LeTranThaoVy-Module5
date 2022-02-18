import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer';
import {FormControl} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  // public customerList = [];
  customers: Customer[] = [];
  idDelete: number;
  content = new FormControl();
  term: any;
  p: any;
  constructor(private customerService: CustomerService,
              private router: Router) {
    this.customerService.findAll().subscribe(value => {
      this.customers = value;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  ngOnInit(): void {

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
