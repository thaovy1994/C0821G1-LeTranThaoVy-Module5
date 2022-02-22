import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  idEdit: number;

  customerFrom = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.minLength(9)),
    address: new FormControl('', Validators.required)
  });


  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.idEdit = +paramMap.get('id');
        this.getCustomer(this.idEdit);

    });

    // this.activatedRoute.params.subscribe(data => {
    //   this.idEdit = data.id;
    //   console.log('hello' +data.id);
    //   // tslint:disable-next-line:no-shadowed-variable
    //   this.customerService.findById(this.idEdit).subscribe(data => {
    //     console.log(data);
    //     this.customerFrom = this.fb.group({
    //       id: data.id,
    //       firstName: data.firstName,
    //       lastName: data.lastName,
    //       dateOfBirth: data.dateOfBirth,
    //       email: data.email,
    //       gender: data.gender,
    //       phone: data.phone,
    //       address: data.address
    //     });
    //   });
    // });
  }

  public getCustomer(id: number){
    return this.customerService.findById(id).subscribe(data => {
      this.customerFrom = this.fb.group({
              id: data.id,
              firstName: data.firstName,
              lastName: data.lastName,
              dateOfBirth: data.dateOfBirth,
              email: data.email,
              gender: data.gender,
              phone: data.phone,
              address: data.address
      });
    });
  }

  ngOnInit(): void {
  }

  edit(id: number) {
    this.idEdit = id;
  }

  editCustomer(id: number) {
    const customer = Object.assign({}, this.customerFrom.value);
    this.customerService.editCustomer(customer).subscribe(value => {
      alert('Updated !');
      console.log('updated');
      this.router.navigateByUrl('/customer-list');
    }, error => {
    }, () => {
    });
  }

  // updateCustomer(): void {
  //   const customerUpdate = Object.assign({}, this.customerFrom.value);
  //   this.customerService.editCustomer(customerUpdate).subscribe();
  //   this.router.navigateByUrl('customer/list');
  // }
}
