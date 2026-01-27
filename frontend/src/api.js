import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  signup: (name, email, password) =>
    api.post('/auth/signup', { name, email, password }),
  signin: (email, password) => api.post('/auth/signin', { email, password }),
};

export const expenseAPI = {
  getAll: () => api.get('/expenses'),
  getOne: (id) => api.get(`/expenses/${id}`),
  add: (expense) => api.post('/expenses', expense),
  update: (id, expense) => api.put(`/expenses/${id}`, expense),
  delete: (id) => api.delete(`/expenses/${id}`),
};

export const analyticsAPI = {
  getSummary: (period) => api.get(`/analytics/summary/${period}`),
  getCategories: () => api.get('/analytics/categories'),
  getTotal: () => api.get('/analytics/total'),
};

export default api;
