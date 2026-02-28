import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, UserSignUp } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';

export interface SignupFormValue {
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: string;
  email: string;
  address1: string;
  // allow null so it matches database nullability after sanitizing
  address2?: string | null;
  password: string;
}

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
  isLoading = signal(false);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastService: ToastService
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      middleName: ['', Validators.maxLength(50)],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      address1: ['', [Validators.required, Validators.maxLength(100)]],
      address2: ['', Validators.maxLength(100)],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const pwd = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return pwd && confirm && pwd === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading.set(true);

      const formValue: SignupFormValue = this.signupForm.value;
      // remove confirmPassword before sending; undefined is fine for optional address2
      const payload: UserSignUp = {
        ...formValue,
        address2: formValue.address2 || undefined,
      };

      this.userService.registerUser(payload).subscribe({
        next: (response) => {
          this.isLoading.set(false);
          this.toastService.success('Account created successfully! Redirecting to login...');
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: (error) => {
          this.isLoading.set(false);
          const errorMsg = error?.error?.message || error?.message || 'Registration failed. Please try again.';
          this.toastService.error(errorMsg);
          console.error('Registration error:', error);
        },
      });
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
