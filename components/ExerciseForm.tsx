'use client';

import { addExercise } from '@/lib/actions';
import { useState } from 'react';
import { format } from 'date-fns';
import ExerciseSelector from './ExerciseSelector';
import { ExerciseData } from '@/lib/exercise-library';

const DAYS_OF_WEEK = [
  { value: 'monday', label: 'Monday', categories: ['chest', 'shoulder'] },
  { value: 'tuesday', label: 'Tuesday', categories: ['lat', 'biceps'] },
  { value: 'wednesday', label: 'Wednesday', categories: ['leg', 'triceps'] },
  { value: 'thursday', label: 'Thursday', categories: ['chest', 'shoulder'] },
  { value: 'friday', label: 'Friday', categories: ['lat', 'biceps'] },
  { value: 'saturday', label: 'Saturday', categories: ['leg', 'triceps'] },
];

export default function ExerciseForm() {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [dayOfWeek, setDayOfWeek] = useState('monday');
  const [category, setCategory] = useState('chest');
  const [selectedExercise, setSelectedExercise] = useState<ExerciseData | null>(null);
  const [loading, setLoading] = useState(false);

  const selectedDay = DAYS_OF_WEEK.find((d) => d.value === dayOfWeek);

  const handleExerciseSelect = (exercise: ExerciseData) => {
    setSelectedExercise(exercise);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedExercise) return;

    setLoading(true);
    const result = await addExercise({
      date,
      day_of_week: dayOfWeek,
      exercise_name: selectedExercise.name,
      category,
    });

    if (result.success) {
      setSelectedExercise(null);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Exercise</h2>

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
            Day of Week
          </label>
          <select
            value={dayOfWeek}
            onChange={(e) => {
              setDayOfWeek(e.target.value);
              const day = DAYS_OF_WEEK.find((d) => d.value === e.target.value);
              if (day) setCategory(day.categories[0]);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          >
            {DAYS_OF_WEEK.map((day) => (
              <option key={day.value} value={day.value}>
                {day.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          >
            {selectedDay?.categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Exercise
          </label>
          <ExerciseSelector category={category} onSelect={handleExerciseSelect} />
        </div>

        {selectedExercise && (
          <div className="bg-blue-50 p-3 rounded-md">
            <p className="text-sm text-gray-700">
              Selected: <span className="font-semibold">{selectedExercise.name}</span>
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !selectedExercise}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 transition"
        >
          {loading ? 'Adding...' : 'Add Exercise'}
        </button>
      </div>
    </form>
  );
}
