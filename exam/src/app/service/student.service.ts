import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API_URL = 'http://localhost:3000/studentList';

  constructor(private httpClient: HttpClient) {
  }

  findById(studentId: number): Observable<Student> {
    return this.httpClient.get<Student>(this.API_URL + '/' + studentId);
  }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  createStudent(studentObj: Student): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, studentObj);
  }

  deleteStudent(idDelete: number) {
    return this.httpClient.delete<void>(this.API_URL + '/' + idDelete);
  }

  editStudent(studentObj: Student): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + studentObj.id, studentObj);
  }
}
