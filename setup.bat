@echo off
REM Daily Expenditure Tracker - Setup Script for Windows

echo 🚀 Installing Daily Expenditure Tracker...

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org
    exit /b 1
)

echo ✅ Node.js version:
node --version

REM Backend setup
echo 📦 Setting up backend...
cd backend
call npm install
copy .env.example .env
echo ✅ Backend dependencies installed

REM Frontend setup
echo 📦 Setting up frontend...
cd ..\frontend
call npm install
echo ✅ Frontend dependencies installed

cd ..

echo ✅ Installation complete!
echo.
echo 📝 Next steps:
echo 1. Edit backend\.env with your MongoDB connection string
echo 2. Start backend: cd backend ^&^& npm run dev
echo 3. Start frontend: cd frontend ^&^& npm start
echo 4. Open http://localhost:3000 in your browser
echo.
echo 🐳 Or use Docker Compose:
echo docker-compose up -d
pause
