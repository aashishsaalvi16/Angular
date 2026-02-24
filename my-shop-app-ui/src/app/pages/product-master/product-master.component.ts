import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-master',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header">
        <h1>Product Master</h1>
        <p class="page-subtitle">Manage all products in your inventory</p>
      </div>

      <div class="page-content">
        <div class="action-bar">
          <button class="btn btn-primary" aria-label="Add new product">+ Add New Product</button>
        </div>

        <div class="empty-state">
          <p class="empty-icon">📦</p>
          <h2>No Products Yet</h2>
          <p>Start by adding your first product to the inventory.</p>
          <button class="btn btn-secondary" aria-label="Add new product">Add Product</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1000px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: 32px;
    }

    .page-header h1 {
      color: #333;
      font-size: 28px;
      margin: 0 0 8px 0;
    }

    .page-subtitle {
      color: #666;
      font-size: 14px;
      margin: 0;
    }

    .page-content {
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      padding: 24px;
    }

    .action-bar {
      margin-bottom: 24px;
      display: flex;
      gap: 12px;
    }

    .btn {
      padding: 10px 20px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: #f5f5f5;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .btn-secondary:hover {
      background: #667eea;
      color: white;
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
    }

    .empty-icon {
      font-size: 48px;
      display: block;
      margin-bottom: 16px;
    }

    .empty-state h2 {
      color: #333;
      font-size: 20px;
      margin: 0 0 8px 0;
    }

    .empty-state p {
      color: #666;
      font-size: 14px;
      margin: 0 0 24px 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductMasterComponent {}
