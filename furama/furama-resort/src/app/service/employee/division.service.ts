import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Division} from '../../model/division';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private httpClient: HttpClient) {
  }

  // getDivisionList(): Observable<Division[]> {
  //   // return this.httpClient.get<Division[]>(this.API_URL);
  // }
}
