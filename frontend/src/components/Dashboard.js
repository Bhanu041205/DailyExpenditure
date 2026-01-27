import React, { useState, useEffect } from 'react';
import { expenseAPI, analyticsAPI } from '../api';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Analytics from './Analytics';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('add');
  const user = JSON.parse(localStorage.getItem('user'));

  const loadExpenses = async () => {
    setLoading(true);
    try {
      const response = await expenseAPI.getAll();
      setExpenses(response.data);
    } catch (err) {
      console.error('Failed to load expenses:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/signin';
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>💰 Expense Tracker</h1>
          <p>Welcome, {user?.name}!</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>

      <nav className="dashboard-nav">
        <button
          className={`nav-btn ${activeTab === 'add' ? 'active' : ''}`}
          onClick={() => setActiveTab('add')}
        >
          Add Expense
        </button>
        <button
          className={`nav-btn ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          My Expenses
        </button>
        <button
          className={`nav-btn ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          Analytics
        </button>
      </nav>

      <main className="dashboard-content">
        {activeTab === 'add' && <ExpenseForm onExpenseAdded={handleAddExpense} />}
        {activeTab === 'list' && (
          <ExpenseList
            expenses={expenses}
            loading={loading}
            onDelete={handleDeleteExpense}
          />
        )}
        {activeTab === 'analytics' && <Analytics />}
      </main>
    </div>
  );
};

export default Dashboard;
