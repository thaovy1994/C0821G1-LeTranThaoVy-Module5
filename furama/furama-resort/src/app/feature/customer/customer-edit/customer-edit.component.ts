import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  idEdit: number;

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  registerFrom = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.minLength(9)),
    address: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  edit(id: number) {
    this.idEdit = id;
  }

  editCustomer() {
    const customer = Object.assign({}, this.registerFrom.value);
    this.customerService.editCustomer(customer).subscribe(value => {
    }, error => {
    }, () => {
      this.router.navigateByUrl('/edit-list');
    });
  }
}
