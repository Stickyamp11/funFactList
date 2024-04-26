import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  errorMessage: string | null = '';
  loginForm = this.fb.nonNullable.group({
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit(): void{
    console.log("submited form: ", this.loginForm.value);
    const rawForm = this.loginForm.getRawValue();
    this.authService.login(rawForm.email, rawForm.password).subscribe(res => {
      this.router.navigateByUrl('/main');
    },
  error => {this.errorMessage = error.code});
  }
}
