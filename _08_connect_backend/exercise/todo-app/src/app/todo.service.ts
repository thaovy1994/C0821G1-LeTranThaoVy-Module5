import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL = 'http://localhost:3000/todoList';

  constructor(private httpClient: HttpClient) {
  }

  findById(todoId: number): Observable<Todo> {
    return this.httpClient.get<Todo>(this.API_URL + '/' + todoId);
  }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  create(todoObj: Todo): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + todoObj.id, todoObj);
  }

  deleteTodo(todoId: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + todoId);
  }
}
