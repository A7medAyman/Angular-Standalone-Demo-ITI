import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 

  loginForm: FormGroup;
  submittedData: any = null;
  error: any;

  constructor() {
    this.loginForm = new FormGroup({
     email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
     
    });
  }

  get f() { return this.loginForm.controls; }

  resetForm() {
    this.loginForm.reset();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.submittedData = this.loginForm.value;
      this.resetForm();
    }
  }



}
