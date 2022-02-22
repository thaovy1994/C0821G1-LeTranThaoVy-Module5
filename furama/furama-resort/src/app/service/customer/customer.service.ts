import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:3000/customerList';

  apiUrl1 = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  findById(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + customerId);
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  createCustomer(customerObj: Customer): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, customerObj);
  }

  deleteCustomer(idDelete: number) {
    return this.httpClient.delete<void>(this.API_URL + '/' + idDelete);
  }

  editCustomer(customerObj: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + customerObj.id, customerObj);
  }
}
