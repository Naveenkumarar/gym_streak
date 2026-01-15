import { sql } from '@vercel/postgres';

// Initialize database tables
export async function initDatabase() {
  try {
    // Exercises table
    await sql`
      CREATE TABLE IF NOT EXISTS exercises (
        id SERIAL PRIMARY KEY,
        date TEXT NOT NULL,
        day_of_week TEXT NOT NULL,
        exercise_name TEXT NOT NULL,
        category TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_exercises_date ON exercises(date)
    `;

    // Cardio table
    await sql`
      CREATE TABLE IF NOT EXISTS cardio (
        id SERIAL PRIMARY KEY,
        date TEXT NOT NULL,
        activity TEXT NOT NULL,
        duration_minutes INTEGER NOT NULL,
        distance_km REAL,
        calories INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_cardio_date ON cardio(date)
    `;

    // Food intake table
    await sql`
      CREATE TABLE IF NOT EXISTS food_intake (
        id SERIAL PRIMARY KEY,
        date TEXT NOT NULL,
        food_item TEXT NOT NULL,
        meal_time TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_food_date ON food_intake(date)
    `;

    // Weight history table
    await sql`
      CREATE TABLE IF NOT EXISTS weight_history (
        id SERIAL PRIMARY KEY,
        date TEXT NOT NULL UNIQUE,
        weight_kg REAL NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_weight_date ON weight_history(date)
    `;

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

export { sql };
