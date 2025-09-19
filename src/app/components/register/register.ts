import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
registrationForm: FormGroup;
  submittedData: any = null;

  constructor() {
    this.registrationForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      mobiles: new FormArray([
        new FormControl('', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)])
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, { validators: this.passwordMatchValidator });
  }

  get f() { return this.registrationForm.controls; }
  get mobiles() { return this.registrationForm.get('mobiles') as FormArray; }

  addMobile() {
    this.mobiles.push(new FormControl('', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]));
  }

  removeMobile(index: number) {
    if (index > 0) this.mobiles.removeAt(index);
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const pass = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  resetForm() {
    this.registrationForm.reset();
    this.mobiles.clear();
    this.addMobile();
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.submittedData = this.registrationForm.value;
      this.resetForm();
    }
  }
}
