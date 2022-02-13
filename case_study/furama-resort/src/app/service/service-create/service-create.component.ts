import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../customer';
import {Service} from '../../service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  service: Service[];
  id: number;
  name: string;
  area: number;
  price: number;
  amountPerson: number;
  type: string;
  serviceList = [
    {id: 1, name: 'Vila'},
    {id: 2, name: 'House'}
  ];
  @Output()
  evenCreate = new EventEmitter();
  contactForm = new FormGroup({
    name: new FormControl(),
    area: new FormControl(),
    price: new FormControl(),
    amountPerson: new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  createService() {
    const services: Service = new Service(this.id, this.name, this.area, this.price, this.amountPerson, this.type);
    this.evenCreate.emit(services);
  }
}
