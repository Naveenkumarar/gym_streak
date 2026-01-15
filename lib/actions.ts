'use server';

import { executeQuery } from './db';
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
    await executeQuery(async (client) => {
      await client.sql`
        INSERT INTO exercises (date, day_of_week, exercise_name, category)
        VALUES (${data.date}, ${data.day_of_week}, ${data.exercise_name}, ${data.category})
      `;
    });
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
    return await executeQuery(async (client) => {
      const result = await client.sql`
        SELECT * FROM exercises WHERE date = ${date} ORDER BY created_at DESC
      `;
      return result.rows as Exercise[];
    });
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return [];
  }
}

export async function getExercisesByDayOfWeek(dayOfWeek: string) {
  try {
    return await executeQuery(async (client) => {
      const result = await client.sql`
        SELECT * FROM exercises WHERE day_of_week = ${dayOfWeek} ORDER BY date DESC, created_at DESC
      `;
      return result.rows as Exercise[];
    });
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return [];
  }
}

export async function deleteExercise(id: number) {
  try {
    await executeQuery(async (client) => {
      await client.sql`DELETE FROM exercises WHERE id = ${id}`;
    });
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
    await executeQuery(async (client) => {
      await client.sql`
        INSERT INTO cardio (date, activity, duration_minutes, distance_km, calories)
        VALUES (${data.date}, ${data.activity}, ${data.duration_minutes}, ${data.distance_km || null}, ${data.calories || null})
      `;
    });
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
    return await executeQuery(async (client) => {
      const result = await client.sql`
        SELECT * FROM cardio WHERE date = ${date} ORDER BY created_at DESC
      `;
      return result.rows as Cardio[];
    });
  } catch (error) {
    console.error('Error fetching cardio:', error);
    return [];
  }
}

export async function deleteCardio(id: number) {
  try {
    await executeQuery(async (client) => {
      await client.sql`DELETE FROM cardio WHERE id = ${id}`;
    });
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
    await executeQuery(async (client) => {
      await client.sql`
        INSERT INTO food_intake (date, food_item, meal_time)
        VALUES (${data.date}, ${data.food_item}, ${data.meal_time})
      `;
    });
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
    return await executeQuery(async (client) => {
      const result = await client.sql`
        SELECT * FROM food_intake WHERE date = ${date} ORDER BY created_at ASC
      `;
      return result.rows as FoodIntake[];
    });
  } catch (error) {
    console.error('Error fetching food:', error);
    return [];
  }
}

export async function deleteFood(id: number) {
  try {
    await executeQuery(async (client) => {
      await client.sql`DELETE FROM food_intake WHERE id = ${id}`;
    });
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
    await executeQuery(async (client) => {
      await client.sql`
        INSERT INTO weight_history (date, weight_kg)
        VALUES (${data.date}, ${data.weight_kg})
        ON CONFLICT (date) DO UPDATE SET weight_kg = ${data.weight_kg}
      `;
    });
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
    return await executeQuery(async (client) => {
      const result = await client.sql`
        SELECT * FROM weight_history ORDER BY date DESC
      `;
      return result.rows as WeightHistory[];
    });
  } catch (error) {
    console.error('Error fetching weight history:', error);
    return [];
  }
}

export async function getLatestWeight() {
  try {
    return await executeQuery(async (client) => {
      const result = await client.sql`
        SELECT * FROM weight_history ORDER BY date DESC LIMIT 1
      `;
      return result.rows[0] as WeightHistory | undefined;
    });
  } catch (error) {
    console.error('Error fetching latest weight:', error);
    return undefined;
  }
}

export async function deleteWeight(id: number) {
  try {
    await executeQuery(async (client) => {
      await client.sql`DELETE FROM weight_history WHERE id = ${id}`;
    });
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
