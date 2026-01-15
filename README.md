# Gym Streak Tracker

A comprehensive personal gym tracking application built with Next.js, TypeScript, and Vercel Postgres.

## Features

- **Exercise Tracking**: 30+ professional exercises organized by muscle groups
  - Chest, Shoulder, Lat/Back, Biceps, Leg, Triceps
  - Visual demonstrations with proper form images
  - Exercise library with detailed instructions

- **Cardio Tracking**: Log daily cardio activities
  - Track duration, distance, and calories
  - Multiple activity types (walking, cycling, floor exercises)

- **Food Intake**: Track meals organized by time
  - Breakfast, lunch, dinner, and snacks

- **Weight History**: Record and visualize weight trends
  - Daily weight entries
  - Interactive chart visualization
  - Historical data table

- **Dashboard**: Overview of today's activities and progress

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: Vercel Postgres
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Deployment**: Vercel

## Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier)

### Step 1: Push Code to GitHub
Your code is already on GitHub at: https://github.com/Naveenkumarar/gym_streak.git

### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `Naveenkumarar/gym_streak`
4. Configure project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
5. Click "Deploy"

### Step 3: Add Vercel Postgres

1. After deployment, go to your project dashboard
2. Click on "Storage" tab
3. Click "Create Database"
4. Select "Postgres" and click "Continue"
5. Accept the terms and click "Create"
6. Vercel will automatically add the required environment variables

### Step 4: Initialize Database

After Postgres is set up, visit your deployed site and go to:
```
https://your-app-name.vercel.app/api/init-db
```

This will create all necessary tables. You should see:
```json
{"success": true, "message": "Database initialized"}
```

### Step 5: Start Using the App

Your gym tracker is now live! Visit your Vercel URL and start tracking:
- Exercises
- Cardio activities
- Food intake
- Weight history

## Local Development

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Naveenkumarar/gym_streak.git
cd gym_streak
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with Vercel Postgres credentials:
```
POSTGRES_URL="your-postgres-url"
POSTGRES_PRISMA_URL="your-prisma-url"
POSTGRES_URL_NON_POOLING="your-non-pooling-url"
POSTGRES_USER="your-user"
POSTGRES_HOST="your-host"
POSTGRES_PASSWORD="your-password"
POSTGRES_DATABASE="your-database"
```

4. Initialize the database:
Visit `http://localhost:3000/api/init-db` after starting the dev server

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Database Schema

### exercises
- id: SERIAL PRIMARY KEY
- date: TEXT
- day_of_week: TEXT
- exercise_name: TEXT
- category: TEXT
- created_at: TIMESTAMP

### cardio
- id: SERIAL PRIMARY KEY
- date: TEXT
- activity: TEXT
- duration_minutes: INTEGER
- distance_km: REAL
- calories: INTEGER
- created_at: TIMESTAMP

### food_intake
- id: SERIAL PRIMARY KEY
- date: TEXT
- food_item: TEXT
- meal_time: TEXT
- created_at: TIMESTAMP

### weight_history
- id: SERIAL PRIMARY KEY
- date: TEXT (UNIQUE)
- weight_kg: REAL
- created_at: TIMESTAMP

## Exercise Schedule

- **Monday & Thursday**: Chest & Shoulder (3 exercises each)
- **Tuesday & Friday**: Lat & Biceps
- **Wednesday & Saturday**: Leg & Triceps
- **Sunday**: Rest Day

## License

MIT

## Credits

- Exercise images from [free-exercise-db](https://github.com/yuhonas/free-exercise-db)
- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com)
