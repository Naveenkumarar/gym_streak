'use client';

import { addFood } from '@/lib/actions';
import { useState } from 'react';
import { format } from 'date-fns';

const MEAL_TIMES = [
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'snack', label: 'Snack' },
];

export default function FoodForm() {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [foodItem, setFoodItem] = useState('');
  const [mealTime, setMealTime] = useState('breakfast');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!foodItem.trim()) return;

    setLoading(true);
    const result = await addFood({
      date,
      food_item: foodItem,
      meal_time: mealTime,
    });

    if (result.success) {
      setFoodItem('');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Food</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Meal Time
          </label>
          <select
            value={mealTime}
            onChange={(e) => setMealTime(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          >
            {MEAL_TIMES.map((meal) => (
              <option key={meal.value} value={meal.value}>
                {meal.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Food Item
          </label>
          <input
            type="text"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            placeholder="e.g., Rice, Chicken, Chapati, Prawn"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 transition"
        >
          {loading ? 'Adding...' : 'Add Food'}
        </button>
      </div>
    </form>
  );
}
