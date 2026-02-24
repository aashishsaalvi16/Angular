import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(username: string, _password: string) {
    const role = username === 'admin' ? 'admin' : 'user';
    this.auth.login(role as 'admin' | 'user');
    // navigate to dashboard after login
    this.router.navigate(['/dashboard']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
