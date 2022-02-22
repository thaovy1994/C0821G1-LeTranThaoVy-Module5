import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';
import {Employee} from '../../model/employee/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  urlAPI = 'localhost:8080';



  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.urlAPI);
  }
  createEmployee(employee: Employee): Observable<void> {
    return this.httpClient.post<void>(this.urlAPI, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.urlAPI + '/' + id);
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.urlAPI + '/' + id);
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient.patch<void>(this.urlAPI + '/' + employee.id, employee);
  }
}
