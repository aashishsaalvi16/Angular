import { Routes } from '@angular/router';
import { SidebarLayoutComponent } from './layout/sidebar-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserMasterComponent } from './pages/user-master/user-master.component';
import { ProductMasterComponent } from './pages/product-master/product-master.component';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  // default redirect to login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // public login route (initial page)
  { path: 'login', component: LoginComponent },

  // public signup route
  { path: 'signup', component: SignupComponent },

  // protected app routes inside the sidebar layout
  {
    path: 'app',
    component: SidebarLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user-master', component: UserMasterComponent },
      { path: 'product-master', component: ProductMasterComponent },
      { path: 'add-expense', component: AddExpenseComponent },
    ],
  },

  // fallback - catch all unmatched routes
  { path: '**', redirectTo: '/login' },
];
