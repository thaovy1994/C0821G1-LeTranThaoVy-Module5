import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:3000/customerList';
  constructor(private httpClient: HttpClient) { }

  findById(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + customerId);
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  create(customerObj: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + customerObj.id, customerObj);
  }

  deleteTodo(customerObj: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + customerObj);
  }
}
