'use client';

import { addCardio } from '@/lib/actions';
import { useState } from 'react';
import { format } from 'date-fns';
import { CARDIO_ACTIVITIES } from '@/lib/exercise-library';

export default function CardioForm() {
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [activity, setActivity] = useState('walk');
  const [durationMinutes, setDurationMinutes] = useState('');
  const [distanceKm, setDistanceKm] = useState('');
  const [calories, setCalories] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const result = await addCardio({
      date,
      activity,
      duration_minutes: parseInt(durationMinutes),
      distance_km: distanceKm ? parseFloat(distanceKm) : undefined,
      calories: calories ? parseInt(calories) : undefined,
    });

    if (result.success) {
      setDurationMinutes('');
      setDistanceKm('');
      setCalories('');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Cardio</h2>

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
            Activity
          </label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          >
            {CARDIO_ACTIVITIES.map((act) => (
              <option key={act.id} value={act.id}>
                {act.name} ({act.recommendedDuration} min recommended)
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">
            {CARDIO_ACTIVITIES.find((a) => a.id === activity)?.description}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration (minutes)
          </label>
          <input
            type="number"
            value={durationMinutes}
            onChange={(e) => setDurationMinutes(e.target.value)}
            placeholder="e.g., 20"
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Distance (km) - Optional
          </label>
          <input
            type="number"
            step="0.1"
            value={distanceKm}
            onChange={(e) => setDistanceKm(e.target.value)}
            placeholder="e.g., 2.5"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Calories - Optional
          </label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="e.g., 150"
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 transition"
        >
          {loading ? 'Adding...' : 'Add Cardio'}
        </button>
      </div>
    </form>
  );
}
