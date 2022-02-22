import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {FormControl} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: Student[] = [];
  idDelete: number;
  content = new FormControl();
  term: any;
  p: any;

  constructor(private studentService: StudentService,
              private router: Router) {
    console.log('vy');
    this.studentService.findAll().subscribe(value => {
      this.students = value;
    }, error => {
      console.log('error');
    }, () => {
      console.log('complete');
    });
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.idDelete = id;
  }

  deleteCustomer() {
    this.studentService.deleteStudent(this.idDelete).subscribe(value => {
      }, error => {
      },
      () => {
        this.studentService.findAll().subscribe(value => {
          this.students = value;
        });
      });
  }
}
