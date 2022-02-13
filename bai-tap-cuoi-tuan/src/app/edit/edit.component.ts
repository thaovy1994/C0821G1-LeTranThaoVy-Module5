import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student = {
    studentId: 1,
    studentName: 'Ng Van A',
    gender: 1,
    studentPoint: 9};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(editStudentForm: NgForm) {
console.log(this.student);
  }
}
