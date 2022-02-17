import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../todo.service';
import {Router} from '@angular/router';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService,
              private router: Router) {
    this.todoService.findAll().subscribe(value => {
      this.todos = value;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe();
    this.router.navigateByUrl('');
  }
}
