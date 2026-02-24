import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header">
        <h1>Add Expense</h1>
        <p class="page-subtitle">Record daily expenses for your business</p>
      </div>

      <div class="page-content">
        <form class="expense-form">
          <div class="form-group">
            <label for="expense-date">Date</label>
            <input type="date" id="expense-date" placeholder="Select date" />
          </div>

          <div class="form-group">
            <label for="expense-category">Category</label>
            <select id="expense-category">
              <option value="">Select Category</option>
              <option value="rent">Rent</option>
              <option value="utilities">Utilities</option>
              <option value="supplies">Supplies</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="expense-amount">Amount (₹)</label>
            <input type="number" id="expense-amount" placeholder="Enter amount" step="0.01" />
          </div>

          <div class="form-group">
            <label for="expense-description">Description</label>
            <textarea id="expense-description" placeholder="Enter description" rows="4"></textarea>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" aria-label="Submit expense">
              Submit Expense
            </button>
            <button type="reset" class="btn btn-secondary" aria-label="Clear form">
              Clear
            </button>
          </div>
        </form>
      </div>

      <div class="recent-expenses">
        <h2>Recent Expenses</h2>
        <div class="empty-state">
          <p class="empty-icon">💰</p>
          <p>No expenses recorded yet</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 800px;
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
      margin-bottom: 32px;
    }

    .expense-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      color: #333;
      font-size: 14px;
      font-weight: 500;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      padding: 10px 12px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      font-size: 14px;
      font-family: inherit;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-actions {
      display: flex;
      gap: 12px;
      margin-top: 12px;
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
      flex: 1;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: #f5f5f5;
      color: #333;
      flex: 1;
    }

    .btn-secondary:hover {
      background: #e0e0e0;
    }

    .recent-expenses {
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      padding: 24px;
    }

    .recent-expenses h2 {
      color: #333;
      font-size: 20px;
      margin: 0 0 16px 0;
    }

    .empty-state {
      text-align: center;
      padding: 32px 24px;
    }

    .empty-icon {
      font-size: 32px;
      display: block;
      margin-bottom: 8px;
    }

    .empty-state p {
      color: #666;
      font-size: 14px;
      margin: 0;
    }

    @media (max-width: 768px) {
      .page-container {
        max-width: 100%;
      }

      .form-actions {
        flex-direction: column;
      }

      .btn {
        flex: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddExpenseComponent {}
