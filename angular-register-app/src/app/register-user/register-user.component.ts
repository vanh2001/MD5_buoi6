import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 1, name: 'Nhật Bản'},
    {id: 1, name: 'Hàn Quốc'}
  ];

  userForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(19)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})\\b')]),
  });
  constructor() {

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  get passwordConfirm() {
    return this.userForm.get('passwordConfirm');
  }
  get country() {
    return this.userForm.get('country');
  }
  get age() {
    return this.userForm.get('age');
  }
  get gender() {
    return this.userForm.get('gender');
  }
  get phone() {
    return this.userForm.get('phone');
  }
}
