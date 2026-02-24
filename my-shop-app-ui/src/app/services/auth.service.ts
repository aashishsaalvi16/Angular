import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'myshop_auth';
  private roleKey = 'myshop_role';

  login(role: 'admin' | 'user') {
    localStorage.setItem(this.storageKey, 'true');
    localStorage.setItem(this.roleKey, role);
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.roleKey);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }

  getRole(): 'admin' | 'user' | null {
    const r = localStorage.getItem(this.roleKey);
    if (r === 'admin') return 'admin';
    if (r === 'user') return 'user';
    return null;
  }
}
