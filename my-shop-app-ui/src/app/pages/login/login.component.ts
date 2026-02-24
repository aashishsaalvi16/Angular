import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="login-page">
      <div class="login-box">
        <h2>Sign in</h2>
        <form (submit)="onSubmit(username.value, password.value)">
          <label>
            Username
            <input #username type="text" required />
          </label>
          <label>
            Password
            <input #password type="password" required />
          </label>
          <p class="hint">Use username "admin" for Admin role; any other username becomes User.</p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
    .login-page { display:flex; align-items:center; justify-content:center; height:100vh; background:#f5f7fb; }
    .login-box { background:white; padding:24px; border-radius:8px; box-shadow:0 6px 18px rgba(0,0,0,0.08); width:320px }
    h2 { margin:0 0 12px 0; }
    label { display:block; margin-bottom:12px; font-size:14px; color:#333 }
    input { width:100%; padding:8px 10px; margin-top:6px; box-sizing:border-box }
    .hint { font-size:12px; color:#666; margin-bottom:12px }
    button { width:100%; padding:10px; background:#667eea; color:white; border:none; border-radius:6px }
  `],
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
}
