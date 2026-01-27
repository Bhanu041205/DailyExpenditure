# Daily Expenditure Tracker

A comprehensive web application for tracking daily expenses with detailed analytics and time-based reporting.

## Features

- ✅ **User Authentication** - Secure sign up and sign in
- ✅ **Add Expenses** - Track expenses with category and date
- ✅ **View Expenses** - List all expenses with ability to delete
- ✅ **Analytics Dashboard** - View spending patterns
- ✅ **Time-based Reports** - Minute, hour, day, week, month, and year-wise breakdown
- ✅ **Category-wise Spending** - Track spending by category
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Docker Support** - Easy deployment with Docker

## Tech Stack

### Frontend
- React 18
- React Router v6
- Axios for API calls
- CSS3 for styling
- Chart.js for data visualization

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- Bcrypt for password hashing
- Express Validator for input validation

### Deployment
- Docker & Docker Compose
- Support for Azure, AWS, Heroku

## Project Structure

```
expense-tracker/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── styles/          # CSS files
│   │   ├── api.js           # API client
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   ├── Dockerfile           # Docker image for frontend
│   └── package.json
│
├── backend/                  # Express backend API
│   ├── models/              # Database models
│   │   ├── User.js
│   │   └── Expense.js
│   ├── routes/              # API routes
│   │   ├── auth.js          # Authentication
│   │   ├── expenses.js      # Expense CRUD
│   │   └── analytics.js     # Analytics endpoints
│   ├── middleware/          # Custom middleware
│   │   └── auth.js          # JWT authentication
│   ├── Dockerfile           # Docker image for backend
│   ├── .env.example         # Environment variables template
│   ├── server.js            # Express server
│   └── package.json
│
├── docker-compose.yml       # Docker Compose configuration
├── DEPLOYMENT.md            # Deployment guide
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ or Docker
- MongoDB (included in Docker Compose)

### Quick Start with Docker

```bash
# Clone the repository
git clone <repository-url>
cd expense-tracker

# Start with Docker Compose
docker-compose up -d

# Access the application
Frontend: http://localhost:3000
Backend API: http://localhost:5000
```

### Local Development

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/signin` - Sign in user

### Expenses
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Add new expense
- `GET /api/expenses/:id` - Get expense by ID
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

### Analytics
- `GET /api/analytics/summary/:period` - Get spending summary (minute/hour/day/week/month/year)
- `GET /api/analytics/categories` - Get category-wise breakdown
- `GET /api/analytics/total` - Get total spending

## Usage

### Sign Up
1. Click "Sign Up" on the home page
2. Enter name, email, and password
3. Create account

### Add Expense
1. Go to Dashboard
2. Click "Add Expense" tab
3. Fill in title, category, amount, and date
4. Click "Add Expense"

### View Analytics
1. Click "Analytics" tab
2. Select time period (minute/hour/day/week/month/year)
3. View spending breakdown by time and category

### Expense Categories
- 🍔 Food
- 🚗 Transport
- 🎬 Entertainment
- 🛍️ Shopping
- 💡 Utilities
- ⚕️ Health
- 📌 Other

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/expense-tracker
JWT_SECRET=your_secret_key_here_change_in_production
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Deployment Options

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Local Docker Compose
- Azure Container Instances
- Azure App Service
- AWS EC2
- AWS Elastic Beanstalk
- Heroku

## Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT-based authentication
- ✅ CORS enabled
- ✅ Input validation
- ✅ User isolation (users can only see their expenses)

## Performance Optimizations

- Indexed MongoDB queries
- Efficient data aggregation
- Client-side caching with localStorage
- Responsive design for fast loading

## Future Enhancements

- [ ] Email notifications for spending alerts
- [ ] Budget planning and alerts
- [ ] Multiple currency support
- [ ] Bill splitting feature
- [ ] Recurring expenses
- [ ] PDF report export
- [ ] Mobile app (React Native)
- [ ] Two-factor authentication
- [ ] Dark mode
- [ ] Data import/export (CSV)

## Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process using the port
lsof -i :5000
kill -9 <PID>
```

**MongoDB connection failed**
- Ensure MongoDB is running
- Check connection string in .env
- For Docker: `mongodb://admin:password@mongodb:27017/expense-tracker`

**CORS errors**
- Check backend CORS configuration
- Ensure frontend and backend URLs match in .env

## License

MIT License - See LICENSE file for details

## Support

For issues and feature requests, please create an issue on GitHub.

## Contributors

- Your Name (Your Role)

## Changelog

### v1.0.0 (Current)
- Initial release
- User authentication
- Expense tracking
- Analytics dashboard
- Time-based reporting
- Docker deployment
