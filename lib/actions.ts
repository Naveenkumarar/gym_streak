'use server';

import db from './db';
import { revalidatePath } from 'next/cache';

// Types
export type Exercise = {
  id: number;
  date: string;
  day_of_week: string;
  exercise_name: string;
  category: string;
  created_at: string;
};

export type Cardio = {
  id: number;
  date: string;
  activity: string;
  duration_minutes: number;
  distance_km: number | null;
  calories: number | null;
  created_at: string;
};

export type FoodIntake = {
  id: number;
  date: string;
  food_item: string;
  meal_time: string;
  created_at: string;
};

export type WeightHistory = {
  id: number;
  date: string;
  weight_kg: number;
  created_at: string;
};

// Exercise Actions
export async function addExercise(data: {
  date: string;
  day_of_week: string;
  exercise_name: string;
  category: string;
}) {
  try {
    const stmt = db.prepare(`
      INSERT INTO exercises (date, day_of_week, exercise_name, category)
      VALUES (?, ?, ?, ?)
    `);
    stmt.run(data.date, data.day_of_week, data.exercise_name, data.category);
    revalidatePath('/exercises');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error adding exercise:', error);
    return { success: false, error: 'Failed to add exercise' };
  }
}

export async function getExercisesByDate(date: string) {
  try {
    const stmt = db.prepare(`
      SELECT * FROM exercises WHERE date = ? ORDER BY created_at DESC
    `);
    return stmt.all(date) as Exercise[];
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return [];
  }
}

export async function getExercisesByDayOfWeek(dayOfWeek: string) {
  try {
    const stmt = db.prepare(`
      SELECT * FROM exercises WHERE day_of_week = ? ORDER BY date DESC, created_at DESC
    `);
    return stmt.all(dayOfWeek) as Exercise[];
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return [];
  }
}

export async function deleteExercise(id: number) {
  try {
    const stmt = db.prepare('DELETE FROM exercises WHERE id = ?');
    stmt.run(id);
    revalidatePath('/exercises');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting exercise:', error);
    return { success: false, error: 'Failed to delete exercise' };
  }
}

// Cardio Actions
export async function addCardio(data: {
  date: string;
  activity: string;
  duration_minutes: number;
  distance_km?: number;
  calories?: number;
}) {
  try {
    const stmt = db.prepare(`
      INSERT INTO cardio (date, activity, duration_minutes, distance_km, calories)
      VALUES (?, ?, ?, ?, ?)
    `);
    stmt.run(
      data.date,
      data.activity,
      data.duration_minutes,
      data.distance_km || null,
      data.calories || null
    );
    revalidatePath('/cardio');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error adding cardio:', error);
    return { success: false, error: 'Failed to add cardio' };
  }
}

export async function getCardioByDate(date: string) {
  try {
    const stmt = db.prepare(`
      SELECT * FROM cardio WHERE date = ? ORDER BY created_at DESC
    `);
    return stmt.all(date) as Cardio[];
  } catch (error) {
    console.error('Error fetching cardio:', error);
    return [];
  }
}

export async function deleteCardio(id: number) {
  try {
    const stmt = db.prepare('DELETE FROM cardio WHERE id = ?');
    stmt.run(id);
    revalidatePath('/cardio');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting cardio:', error);
    return { success: false, error: 'Failed to delete cardio' };
  }
}

// Food Intake Actions
export async function addFood(data: {
  date: string;
  food_item: string;
  meal_time: string;
}) {
  try {
    const stmt = db.prepare(`
      INSERT INTO food_intake (date, food_item, meal_time)
      VALUES (?, ?, ?)
    `);
    stmt.run(data.date, data.food_item, data.meal_time);
    revalidatePath('/food');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error adding food:', error);
    return { success: false, error: 'Failed to add food' };
  }
}

export async function getFoodByDate(date: string) {
  try {
    const stmt = db.prepare(`
      SELECT * FROM food_intake WHERE date = ? ORDER BY created_at ASC
    `);
    return stmt.all(date) as FoodIntake[];
  } catch (error) {
    console.error('Error fetching food:', error);
    return [];
  }
}

export async function deleteFood(id: number) {
  try {
    const stmt = db.prepare('DELETE FROM food_intake WHERE id = ?');
    stmt.run(id);
    revalidatePath('/food');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting food:', error);
    return { success: false, error: 'Failed to delete food' };
  }
}

// Weight History Actions
export async function addWeight(data: { date: string; weight_kg: number }) {
  try {
    const stmt = db.prepare(`
      INSERT INTO weight_history (date, weight_kg)
      VALUES (?, ?)
      ON CONFLICT(date) DO UPDATE SET weight_kg = excluded.weight_kg
    `);
    stmt.run(data.date, data.weight_kg);
    revalidatePath('/weight');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error adding weight:', error);
    return { success: false, error: 'Failed to add weight' };
  }
}

export async function getWeightHistory() {
  try {
    const stmt = db.prepare(`
      SELECT * FROM weight_history ORDER BY date DESC
    `);
    return stmt.all() as WeightHistory[];
  } catch (error) {
    console.error('Error fetching weight history:', error);
    return [];
  }
}

export async function getLatestWeight() {
  try {
    const stmt = db.prepare(`
      SELECT * FROM weight_history ORDER BY date DESC LIMIT 1
    `);
    return stmt.get() as WeightHistory | undefined;
  } catch (error) {
    console.error('Error fetching latest weight:', error);
    return undefined;
  }
}

export async function deleteWeight(id: number) {
  try {
    const stmt = db.prepare('DELETE FROM weight_history WHERE id = ?');
    stmt.run(id);
    revalidatePath('/weight');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting weight:', error);
    return { success: false, error: 'Failed to delete weight' };
  }
}

// Dashboard Data
export async function getDashboardData(date: string) {
  try {
    const exercises = await getExercisesByDate(date);
    const cardio = await getCardioByDate(date);
    const food = await getFoodByDate(date);
    const latestWeight = await getLatestWeight();

    return {
      exercises,
      cardio,
      food,
      latestWeight,
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return {
      exercises: [],
      cardio: [],
      food: [],
      latestWeight: undefined,
    };
  }
}
