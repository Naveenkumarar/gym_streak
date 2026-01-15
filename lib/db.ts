import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Initialize database tables
export function initDatabase() {
  // Exercises table
  db.exec(`
    CREATE TABLE IF NOT EXISTS exercises (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      day_of_week TEXT NOT NULL,
      exercise_name TEXT NOT NULL,
      category TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create index on date for faster queries
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_exercises_date ON exercises(date)
  `);

  // Cardio table
  db.exec(`
    CREATE TABLE IF NOT EXISTS cardio (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      activity TEXT NOT NULL,
      duration_minutes INTEGER NOT NULL,
      distance_km REAL,
      calories INTEGER,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_cardio_date ON cardio(date)
  `);

  // Food intake table
  db.exec(`
    CREATE TABLE IF NOT EXISTS food_intake (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      food_item TEXT NOT NULL,
      meal_time TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_food_date ON food_intake(date)
  `);

  // Weight history table
  db.exec(`
    CREATE TABLE IF NOT EXISTS weight_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL UNIQUE,
      weight_kg REAL NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_weight_date ON weight_history(date)
  `);
}

// Initialize database on module load
initDatabase();

export default db;
