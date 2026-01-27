# Getting Started with Expense Tracker

## What is this project?

Daily Expenditure Tracker is a modern web application that helps you track your daily expenses. You can:
- Create an account and sign in securely
- Add expenses with categories (Food, Transport, Entertainment, etc.)
- View all your expenses
- See detailed analytics of your spending patterns
- View minute-wise, hour-wise, daily, weekly, monthly, and yearly reports

## Installation Steps

### Option 1: Using Docker (Easiest)

1. **Install Docker** from https://www.docker.com/products/docker-desktop

2. **Navigate to project directory**
   ```bash
   cd "d:\tt\PPROJECTS\DAILY EXPENDITURES"
   ```

3. **Start the application**
   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: mongodb://localhost:27017

5. **Stop the application**
   ```bash
   docker-compose down
   ```

### Option 2: Local Setup

**Backend:**
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## First Time Setup

1. Visit http://localhost:3000
2. Click "Sign Up"
3. Create an account with your email and password
4. Click "Sign In" with your credentials
5. Start adding expenses!

## Features Tour

### Add Expense
- Click "Add Expense" tab
- Fill in the title (e.g., "Lunch")
- Select category (Food, Transport, etc.)
- Enter amount
- Choose date
- Click "Add Expense"

### View Expenses
- Click "My Expenses" tab
- See all your expenses listed
- Delete expenses if needed

### View Analytics
- Click "Analytics" tab
- Select different time periods (minute, hour, day, week, month, year)
- See total spending and category breakdown
- Analyze spending patterns

## Default Credentials (For Testing)

After sign up, use your credentials to log in.

## File Structure

```
DAILY EXPENDITURES/
├── backend/               # Express.js API server
├── frontend/              # React web application
├── docker-compose.yml     # Docker configuration
├── README.md              # Full documentation
├── DEPLOYMENT.md          # Deployment guide
└── QUICKSTART.md          # This file
```

## Common Commands

```bash
# Start application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop application
docker-compose down

# Rebuild containers
docker-compose build --no-cache

# Clean everything
docker-compose down -v
```

## Default Ports

- Frontend: 3000
- Backend API: 5000
- MongoDB: 27017

## Need Help?

1. Check logs: `docker-compose logs backend`
2. Restart services: `docker-compose restart`
3. See DEPLOYMENT.md for detailed information
4. Check README.md for full documentation

## Next Steps

1. ✅ Start the application
2. ✅ Create an account
3. ✅ Add some expenses
4. ✅ Check analytics
5. ✅ Deploy to cloud (see DEPLOYMENT.md)

Enjoy tracking your expenses! 💰
