import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      middleName: ['', Validators.maxLength(50)],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      phone: ['', Validators.maxLength(10)],
      email: ['', Validators.maxLength(50)],
      address1: ['', Validators.maxLength(100)],
      address2: ['', Validators.maxLength(100)],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Sign up form value:', this.signupForm.value);
      // TODO: Call backend to register user
      // For now, redirect to login
      this.router.navigate(['/login']);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
