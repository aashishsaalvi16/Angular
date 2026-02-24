import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      <p class="subtitle">Welcome to My Shop - Business Management System</p>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">👤</div>
          <h3>Total Users</h3>
          <p class="stat-value">0</p>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📦</div>
          <h3>Total Products</h3>
          <p class="stat-value">0</p>
        </div>
        <div class="stat-card">
          <div class="stat-icon">💰</div>
          <h3>Total Expenses</h3>
          <p class="stat-value">₹0</p>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📊</div>
          <h3>Today's Sales</h3>
          <p class="stat-value">₹0</p>
        </div>
      </div>

      <div class="info-section">
        <h2>Quick Links</h2>
        <ul class="info-list">
          <li>
            <a href="#user-master" aria-label="Go to User Master">👤 Manage Users</a>
          </li>
          <li>
            <a href="#product-master" aria-label="Go to Product Master">📦 Manage Products</a>
          </li>
          <li>
            <a href="#add-expense" aria-label="Go to Add Expense">💰 Add Expense</a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      color: #333;
      font-size: 32px;
      margin: 0 0 8px 0;
    }

    .subtitle {
      color: #666;
      font-size: 16px;
      margin: 0 0 32px 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .stat-card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    }

    .stat-icon {
      font-size: 32px;
      margin-bottom: 12px;
    }

    .stat-card h3 {
      color: #666;
      font-size: 14px;
      margin: 0 0 8px 0;
      font-weight: 500;
    }

    .stat-value {
      color: #667eea;
      font-size: 28px;
      font-weight: 600;
      margin: 0;
    }

    .info-section {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .info-section h2 {
      color: #333;
      font-size: 20px;
      margin: 0 0 16px 0;
    }

    .info-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .info-list li a {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      color: #667eea;
      text-decoration: none;
      border-radius: 8px;
      transition: background-color 0.3s ease;
    }

    .info-list li a:hover {
      background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 24px;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      .stat-card {
        padding: 16px;
      }

      .stat-icon {
        font-size: 24px;
      }

      .stat-value {
        font-size: 20px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
