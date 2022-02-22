import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../model/student';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StudentService} from '../../service/student.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  studentEditForm = new FormGroup({
    studentName: new FormControl('', [Validators.required]),
    groupName: new FormControl(),
    topicName: new FormControl('', [Validators.required]),
    tutor: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,
      Validators.pattern('^(09|\\(84\\)\\+9)[01]\\d{7}$')])
  });
  id: number;
  subscription: Subscription;
  student: Student;
  compareFn: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private studentService: StudentService) {
    this.activatedRoute.paramMap.subscribe((a: ParamMap) => {
      this.id = +a.get('id');
      this.getCustomer(this.id);
      console.log(this.studentEditForm.value);
    });
  }

  getCustomer(id: number) {
    return this.studentService.findById(id).subscribe(student => {
      this.studentEditForm.setValue(this.student);
    });
    console.log('vy');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const studentUpdate = Object.assign({}, this.studentEditForm.value);
    this.studentService.editStudent(studentUpdate).subscribe();
    this.router.navigateByUrl('/list');
  }
}
