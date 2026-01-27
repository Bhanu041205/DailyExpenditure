import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/signin');
  };

  if (isAuthenticated && currentPage === 'dashboard') {
    return <Dashboard />;
  }

  return (
    <div className="app">
      {currentPage === 'home' && (
        <div className="home">
          <div className="home-content">
            <h1>💰 Daily Expenditure Tracker</h1>
            <p>Track your spending with ease</p>
            <div className="home-buttons">
              <button onClick={() => setCurrentPage('signin')} className="primary-btn">
                Sign In
              </button>
              <button onClick={() => setCurrentPage('signup')} className="secondary-btn">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
      {currentPage === 'signin' && <SignIn />}
      {currentPage === 'signup' && <SignUp />}
    </div>
  );
}

export default App;
