# 🚀 START YOUR APPLICATION

## ⚡ FASTEST WAY (30 seconds)

### Step 1: Install Docker
Download from: https://www.docker.com/products/docker-desktop

### Step 2: Run This Command
```bash
cd "d:\tt\PPROJECTS\DAILY EXPENDITURES"
docker-compose up -d
```

### Step 3: Open Browser
```
http://localhost:3000
```

✅ Done! Create an account and start tracking expenses.

---

## 🖥️ WINDOWS SETUP (If you don't have Docker)

### Step 1: Install Node.js
Download from: https://nodejs.org (18.x LTS)

### Step 2: Run Setup Script
```bash
cd "d:\tt\PPROJECTS\DAILY EXPENDITURES"
setup.bat
```

### Step 3: Start Backend
Open first terminal:
```bash
cd backend
npm run dev
```

### Step 4: Start Frontend
Open second terminal:
```bash
cd frontend
npm start
```

✅ Frontend opens automatically at http://localhost:3000

---

## 🐧 LINUX/MAC SETUP

### Step 1: Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Run Setup Script
```bash
cd "d:\tt\PPROJECTS\DAILY EXPENDITURES"
bash setup.sh
```

### Step 3: Start Backend
```bash
cd backend
npm run dev
```

### Step 4: Start Frontend
```bash
cd frontend
npm start
```

✅ Frontend opens automatically at http://localhost:3000

---

## 🐳 DOCKER DETAILED (If you want to see what's running)

### Start Services
```bash
cd "d:\tt\PPROJECTS\DAILY EXPENDITURES"
docker-compose up -d
```

### View Logs
```bash
docker-compose logs -f
```

### Stop Services
```bash
docker-compose down
```

### Stop and Remove All Data
```bash
docker-compose down -v
```

---

## 🔧 ENVIRONMENT SETUP

### Backend MongoDB Connection

Edit `backend/.env`:
```
MONGODB_URI=mongodb://localhost:27017/expense-tracker
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development
```

### For MongoDB Atlas (Cloud Database)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/expense-tracker
```

---

## ✅ VERIFY EVERYTHING IS RUNNING

**Frontend:** http://localhost:3000
- You should see the home page with Sign Up/Sign In buttons

**Backend API:** http://localhost:5000/api/health
- You should see: `{ "status": "OK", "timestamp": "..." }`

**MongoDB:** Port 27017
- Check with: `mongo mongodb://localhost:27017`

---

## 🎯 FIRST USE WORKFLOW

1. **Open http://localhost:3000**

2. **Click "Sign Up"**
   - Enter your name
   - Enter your email
   - Enter password (min 6 characters)
   - Click "Sign Up"

3. **You're logged in!** Now click:
   - **"Add Expense"** to track spending
   - **"My Expenses"** to see all expenses
   - **"Analytics"** to view spending patterns

4. **Add Your First Expense**
   - Title: "Lunch"
   - Category: "Food"
   - Amount: "250"
   - Date: Today
   - Click "Add Expense"

5. **View Your Analytics**
   - Click "Analytics" tab
   - Select "Day" to see today's spending
   - Try other periods (week, month, year)

---

## 🆘 NEED HELP?

### Docker Won't Start?
```bash
# Restart Docker Desktop and try again
docker-compose restart

# Or clean and rebuild
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

### Node Modules Issue?
```bash
# Delete and reinstall
cd backend
rm -r node_modules
npm install

cd ../frontend
rm -r node_modules
npm install
```

### Port Already in Use?
```bash
# Find what's using port 5000
Windows: netstat -ano | findstr :5000
Mac/Linux: lsof -i :5000

# Kill the process
Windows: taskkill /PID <PID> /F
Mac/Linux: kill -9 <PID>
```

### MongoDB Connection Failed?
```bash
# Check if MongoDB is running (Docker)
docker-compose logs mongodb

# Restart MongoDB
docker-compose restart mongodb

# Verify connection string in backend/.env
```

---

## 📝 IMPORTANT FILES

| File | What to Do |
|------|-----------|
| backend/.env | Set your MongoDB URI and JWT secret |
| docker-compose.yml | Configure MongoDB credentials |
| frontend/src/api.js | Configure API URL if changed |

---

## 🎓 UNDERSTANDING THE STRUCTURE

```
Frontend (React) ← → Backend (Express.js) ← → MongoDB Database
    :3000              :5000                      :27017
```

**Frontend** - What you see in browser
**Backend** - Processes your requests, talks to database
**MongoDB** - Stores all your data

---

## 🚀 QUICK REFERENCE

| What You Want | Command |
|---------------|---------|
| Start app with Docker | `docker-compose up -d` |
| Stop app | `docker-compose down` |
| View logs | `docker-compose logs -f` |
| Start backend | `cd backend && npm run dev` |
| Start frontend | `cd frontend && npm start` |
| Open app | http://localhost:3000 |
| API status | http://localhost:5000/api/health |

---

## ✨ YOU'RE READY!

Pick one option above and run the commands. Your expense tracker will be running in minutes!

Questions? Check:
- **README.md** - Features & detailed guide
- **DEPLOYMENT.md** - How to deploy online
- **PROJECT_OVERVIEW.md** - Technical details

Happy tracking! 💰
