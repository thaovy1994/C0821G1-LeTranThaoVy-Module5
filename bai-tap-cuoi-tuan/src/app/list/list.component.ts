import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public studentList = [];
  constructor() { }

  ngOnInit(): void {
    this.studentList.push(new Student(1, 'Ng A', 1, 8.5));
    this.studentList.push(new Student(2, 'Ng B', 0, 8));
  }

}
