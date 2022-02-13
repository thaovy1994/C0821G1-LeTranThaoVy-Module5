import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // id: number;
  // name: string;
  // gender: number;
  // point: number;

  student = {
    studentId: 1,
    studentName: 'Ng Van A',
    gender: 1,
    studentPoint: 9};

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(createStudentForm: NgForm) {
    console.log(createStudentForm.value);
  }
}
