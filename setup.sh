#!/bin/bash

# Daily Expenditure Tracker - Setup Script

echo "🚀 Installing Daily Expenditure Tracker..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Backend setup
echo "📦 Setting up backend..."
cd backend
npm install
cp .env.example .env
echo "✅ Backend dependencies installed"

# Frontend setup
echo "📦 Setting up frontend..."
cd ../frontend
npm install
echo "✅ Frontend dependencies installed"

cd ..

echo "✅ Installation complete!"
echo ""
echo "📝 Next steps:"
echo "1. Edit backend/.env with your MongoDB connection string"
echo "2. Start backend: cd backend && npm run dev"
echo "3. Start frontend: cd frontend && npm start"
echo "4. Open http://localhost:3000 in your browser"
echo ""
echo "🐳 Or use Docker Compose:"
echo "docker-compose up -d"
