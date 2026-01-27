import React, { useState, useEffect } from 'react';
import { analyticsAPI } from '../api';
import '../styles/Analytics.css';

const Analytics = () => {
  const [period, setPeriod] = useState('day');
  const [analytics, setAnalytics] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState({ totalAmount: 0, totalExpenses: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAnalytics();
  }, [period]);

  const loadAnalytics = async () => {
    setLoading(true);
    try {
      const [analyticsData, categoriesData, totalData] = await Promise.all([
        analyticsAPI.getSummary(period),
        analyticsAPI.getCategories(),
        analyticsAPI.getTotal(),
      ]);

      setAnalytics(analyticsData.data);
      setCategories(categoriesData.data);
      setTotal(totalData.data);
    } catch (err) {
      console.error('Failed to load analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  const getPeriodLabel = (period) => {
    const labels = {
      minute: 'Minute-wise',
      hour: 'Hour-wise',
      day: 'Day-wise',
      week: 'Week-wise',
      month: 'Month-wise',
      year: 'Year-wise',
    };
    return labels[period] || period;
  };

  if (loading) return <div className="loading">Loading analytics...</div>;

  return (
    <div className="analytics-container">
      <h2>Spending Analytics</h2>

      <div className="summary-cards">
        <div className="card">
          <h3>Total Spent</h3>
          <p className="amount">₹{total.totalAmount?.toFixed(2) || '0.00'}</p>
        </div>
        <div className="card">
          <h3>Total Expenses</h3>
          <p className="amount">{total.totalExpenses || 0}</p>
        </div>
      </div>

      <div className="period-selector">
        <h3>View by Period:</h3>
        <div className="button-group">
          {['minute', 'hour', 'day', 'week', 'month', 'year'].map((p) => (
            <button
              key={p}
              className={`period-btn ${period === p ? 'active' : ''}`}
              onClick={() => setPeriod(p)}
            >
              {getPeriodLabel(p)}
            </button>
          ))}
        </div>
      </div>

      <div className="analytics-section">
        <h3>{getPeriodLabel(period)} Breakdown</h3>
        <div className="analytics-list">
          {analytics.length > 0 ? (
            analytics.map((item, idx) => (
              <div key={idx} className="analytics-item">
                <span className="period">{item._id}</span>
                <span className="total">₹{item.total.toFixed(2)}</span>
                <span className="count">({item.count} expenses)</span>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>

      <div className="analytics-section">
        <h3>Category-wise Spending</h3>
        <div className="category-list">
          {categories.length > 0 ? (
            categories.map((cat, idx) => (
              <div key={idx} className="category-item">
                <div className="category-info">
                  <span className="category-name">{cat._id}</span>
                  <span className="category-count">{cat.count} expenses</span>
                </div>
                <div className="category-amount">₹{cat.total.toFixed(2)}</div>
              </div>
            ))
          ) : (
            <p>No category data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
