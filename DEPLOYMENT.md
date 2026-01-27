# Deployment Guide

## Prerequisites
- Docker and Docker Compose installed
- Node.js 18+ (for local development)
- MongoDB (if not using Docker)
- Git

## Local Development Setup

### 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

The app will be available at `http://localhost:3000`

## Docker Deployment

### Using Docker Compose (Recommended)
```bash
docker-compose up -d
```

This will start:
- MongoDB on port 27017
- Backend API on port 5000
- Frontend on port 3000

### Manual Docker Build
```bash
# Build backend
cd backend
docker build -t expense-tracker-backend .
docker run -p 5000:5000 -e MONGODB_URI=mongodb://localhost:27017/expense-tracker expense-tracker-backend

# Build frontend
cd frontend
docker build -t expense-tracker-frontend .
docker run -p 3000:3000 expense-tracker-frontend
```

## Cloud Deployment (Azure)

### Prerequisites
- Azure account
- Azure CLI installed
- Docker Hub account

### Deploy to Azure Container Instances
```bash
# Login to Azure
az login

# Create resource group
az group create --name expense-tracker-rg --location eastus

# Deploy using docker-compose
az container create \
  --resource-group expense-tracker-rg \
  --name expense-tracker \
  --image <your-docker-hub-username>/expense-tracker:latest \
  --ports 80 3000 5000
```

### Deploy to Azure App Service
```bash
# Create App Service Plan
az appservice plan create \
  --name expense-tracker-plan \
  --resource-group expense-tracker-rg \
  --sku B1 --is-linux

# Create web app
az webapp create \
  --resource-group expense-tracker-rg \
  --plan expense-tracker-plan \
  --name expense-tracker-app \
  --runtime "NODE|18-lts"

# Deploy code
az webapp deployment source config-zip \
  --resource-group expense-tracker-rg \
  --name expense-tracker-app \
  --src app.zip
```

## AWS Deployment

### Using AWS EC2
```bash
# SSH into EC2 instance
ssh -i your-key.pem ubuntu@your-instance-ip

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Clone repository
git clone <your-repo-url>
cd expense-tracker

# Run docker-compose
docker-compose up -d
```

### Using AWS Elastic Beanstalk
```bash
eb init -p docker expense-tracker
eb create expense-tracker-env
eb deploy
```

## Heroku Deployment

```bash
heroku login
heroku create expense-tracker-app
git push heroku main
```

## Environment Variables

Create `.env` file in backend directory:
```
MONGODB_URI=mongodb://localhost:27017/expense-tracker
JWT_SECRET=your_super_secret_key_change_this
PORT=5000
NODE_ENV=production
```

## Database Setup

MongoDB connection string format:
```
mongodb://username:password@host:port/database
```

For MongoDB Atlas (Cloud):
```
mongodb+srv://username:password@cluster.mongodb.net/expense-tracker
```

## SSL/HTTPS

For production, use a reverse proxy like Nginx:

```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location /api {
        proxy_pass http://localhost:5000;
    }

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

## Monitoring

Use services like:
- PM2 for process management
- New Relic for monitoring
- CloudFlare for CDN and DDoS protection

## Troubleshooting

### Port already in use
```bash
# Find process using port
lsof -i :5000
kill -9 <PID>
```

### MongoDB connection issues
```bash
# Check MongoDB status
sudo systemctl status mongod

# Start MongoDB
sudo systemctl start mongod
```

### Docker issues
```bash
# Clean up
docker-compose down -v

# Rebuild
docker-compose build --no-cache
docker-compose up -d
```

## Backup and Restore

### MongoDB Backup
```bash
mongodump --uri "mongodb://localhost:27017/expense-tracker" --out ./backup
```

### MongoDB Restore
```bash
mongorestore --uri "mongodb://localhost:27017" ./backup
```

## Support
For issues and questions, create an issue on GitHub or contact the development team.
