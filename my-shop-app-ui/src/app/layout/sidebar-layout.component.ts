import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './sidebar-layout.component.html',
  styleUrl: './sidebar-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLayoutComponent {
  menuItems = [
    { label: 'User Master', icon: '👤', route: '/app/user-master' },
    { label: 'Product Master', icon: '📦', route: '/app/product-master' },
    { label: 'Add Expense', icon: '💰', route: '/app/add-expense' },
  ];
}
