import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor() {
  }

  registerFrom = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
    confirmPassword: new FormControl('', [Validators.minLength(6), this.checkPassword]),
    country: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    phone: new FormControl('', Validators.pattern('[^\\+84\\d{9,10}$]'))
  });

  ngOnInit(): void {
  }

  checkPassword(abstractControl: AbstractControl): any {
    // return abstractControl.value === this.registerFrom.value.password ? null : {checkPass: true};
  }

  registerInformation(): void {
    console.log(this.registerFrom.value);
    console.log();
    console.log(this.registerFrom.value.password);
  }
}
