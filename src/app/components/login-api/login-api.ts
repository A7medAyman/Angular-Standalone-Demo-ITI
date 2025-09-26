import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule,
  ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-api',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login-api.html',
  styleUrl: './login-api.css'
})
export class LoginApi {
 private authService = inject(Auth);
  private router = inject(Router); 
  loginForm: FormGroup;

  error: string = '';

  constructor(
    private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  login() {
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: () => {
        this.router.navigate(['/productsapi']);
      },
      error: (err: { error: { message: string; }; }) => {
        this.error = err.error.message || 'Login Failed';
      },
    });
  }
}
