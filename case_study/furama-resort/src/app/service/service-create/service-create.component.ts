import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../customer';
import {Service} from '../../service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  id: number;
  name: string;
  area: number;
  price: number;
  amountPerson: number;
  type: string;

  @Output()
  evenCreate = new EventEmitter();

  serviceForm: FormGroup;
  serviceObj: Service;

  constructor() {
    this.serviceForm = new FormGroup({
      name: new FormControl('', Validators.required),
      area: new FormControl(),
      price: new FormControl(),
      amountPerson: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  createService(): void {
    this.serviceObj = Object.assign({}, this.serviceForm.value);
    console.log(this.serviceObj);
  }
}
