# Getting Started - Daily Expenditure Tracker

## 🎯 What You Have

A **complete, production-ready web application** for tracking daily expenses with:
- User authentication (Sign Up/Sign In)
- Expense management (Add, View, Delete)
- Advanced analytics with multiple time-based views
- Beautiful, responsive UI
- Docker deployment ready
- Cloud-ready for Azure, AWS, Heroku

---

## ⚡ Quick Start (5 minutes)

### Option A: Docker (Easiest)
```bash
cd "d:\tt\PPROJECTS\DAILY EXPENDITURES"
docker-compose up -d
```
Then open **http://localhost:3000**

### Option B: Windows Setup
```bash
cd "d:\tt\PPROJECTS\DAILY EXPENDITURES"
setup.bat
```
Then follow the prompts

### Option C: Manual Setup
**Terminal 1:**
```bash
cd backend
npm install
npm run dev
```

**Terminal 2:**
```bash
cd frontend
npm install
npm start
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **README.md** | Complete feature documentation |
| **QUICKSTART.md** | Quick setup guide |
| **DEPLOYMENT.md** | Cloud deployment instructions |
| **PROJECT_OVERVIEW.md** | Detailed technical overview |
| **package.json** | Project scripts |

---

## 🏗️ Project Structure

```
DAILY EXPENDITURES/
├── backend/          ← Express.js API Server
├── frontend/         ← React Web Application  
├── docker-compose.yml ← Full stack setup
├── setup.bat         ← Windows setup
├── setup.sh          ← Linux/Mac setup
└── Documentation files
```

---

## 🎨 Features

✅ Secure user authentication  
✅ Add/view/delete expenses  
✅ 7 expense categories  
✅ Analytics by: minute, hour, day, week, month, year  
✅ Category-wise spending breakdown  
✅ Responsive design  
✅ Beautiful UI with gradients  
✅ Docker & cloud ready  

---

## 🔧 Tech Stack

**Frontend:** React 18 + CSS3  
**Backend:** Node.js + Express.js  
**Database:** MongoDB  
**Security:** JWT + Bcrypt  
**Deployment:** Docker + Cloud-ready  

---

## 💡 First Time Use

1. **Start the app** (Docker recommended)
2. **Sign Up** at the home page
3. **Add Expenses** in the dashboard
4. **View Analytics** to see spending trends
5. **Logout** when done

---

## 🚀 Deployment

### Azure
See DEPLOYMENT.md → Cloud Deployment (Azure)

### AWS
See DEPLOYMENT.md → Cloud Deployment (AWS)

### Heroku
See DEPLOYMENT.md → Cloud Deployment (Heroku)

---

## 📞 Support

- Check **README.md** for features
- Check **DEPLOYMENT.md** for deployment
- Check **PROJECT_OVERVIEW.md** for technical details
- Check **QUICKSTART.md** for setup help

---

## ✨ Key Files

| File | What It Does |
|------|-------------|
| `backend/server.js` | API server setup |
| `backend/routes/auth.js` | Login/Signup |
| `backend/routes/expenses.js` | Expense CRUD |
| `backend/routes/analytics.js` | Analytics data |
| `frontend/src/App.js` | Main app |
| `frontend/src/components/Dashboard.js` | Dashboard UI |
| `docker-compose.yml` | Full setup |

---

## 🎓 Learn More

1. Frontend code: `frontend/src/components/`
2. Backend code: `backend/routes/`
3. Database: `backend/models/`
4. Styling: `frontend/src/styles/`

---

## 🎉 You're All Set!

Your expense tracker is ready to use. Start with Docker:

```bash
docker-compose up -d
```

Open http://localhost:3000 and start tracking! 💰
