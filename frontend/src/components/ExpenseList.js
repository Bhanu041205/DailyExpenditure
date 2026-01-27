import React from 'react';
import { expenseAPI } from '../api';
import '../styles/ExpenseList.css';

const ExpenseList = ({ expenses, loading, onDelete }) => {
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await expenseAPI.delete(id);
        onDelete(id);
      } catch (err) {
        alert('Failed to delete expense');
      }
    }
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      Food: '🍔',
      Transport: '🚗',
      Entertainment: '🎬',
      Shopping: '🛍️',
      Utilities: '💡',
      Health: '⚕️',
      Other: '📌',
    };
    return emojis[category] || '📌';
  };

  if (loading) return <div className="loading">Loading expenses...</div>;

  if (expenses.length === 0) {
    return <div className="empty-state">No expenses yet. Start tracking!</div>;
  }

  return (
    <div className="expense-list-container">
      <h2>My Expenses</h2>
      <div className="expense-list">
        {expenses.map((expense) => (
          <div key={expense._id} className="expense-item">
            <div className="expense-left">
              <div className="expense-emoji">{getCategoryEmoji(expense.category)}</div>
              <div className="expense-details">
                <h3>{expense.title}</h3>
                <p>{expense.category}</p>
                {expense.description && <p className="desc">{expense.description}</p>}
                <small>{new Date(expense.date).toLocaleDateString()}</small>
              </div>
            </div>
            <div className="expense-right">
              <div className="expense-amount">₹{expense.amount.toFixed(2)}</div>
              <button
                onClick={() => handleDelete(expense._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
