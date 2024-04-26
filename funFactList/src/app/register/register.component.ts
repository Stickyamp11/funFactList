import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  errorMessage: string | null = '';
  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit(): void{
    console.log("submited form: ", this.registerForm.value);
    const rawForm = this.registerForm.getRawValue();
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe(_ => {
      this.router.navigateByUrl('/');
    },
  error => {this.errorMessage = error.code});
  }

}
