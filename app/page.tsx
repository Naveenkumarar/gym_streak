import { getDashboardData } from '@/lib/actions';
import { format } from 'date-fns';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const today = format(new Date(), 'yyyy-MM-dd');
  const data = await getDashboardData(today);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Exercises Today</h3>
          <p className="text-3xl font-bold text-blue-600">{data.exercises.length}</p>
          <Link href="/exercises" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
            View Details
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Cardio Sessions</h3>
          <p className="text-3xl font-bold text-green-600">{data.cardio.length}</p>
          <Link href="/cardio" className="text-sm text-green-600 hover:underline mt-2 inline-block">
            View Details
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Food Items</h3>
          <p className="text-3xl font-bold text-orange-600">{data.food.length}</p>
          <Link href="/food" className="text-sm text-orange-600 hover:underline mt-2 inline-block">
            View Details
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Current Weight</h3>
          <p className="text-3xl font-bold text-purple-600">
            {data.latestWeight ? `${data.latestWeight.weight_kg} kg` : '-'}
          </p>
          <Link href="/weight" className="text-sm text-purple-600 hover:underline mt-2 inline-block">
            View History
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Today&apos;s Exercises</h2>
          {data.exercises.length > 0 ? (
            <div className="space-y-2">
              {data.exercises.map((exercise) => (
                <div key={exercise.id} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium text-gray-800">{exercise.exercise_name}</p>
                    <p className="text-sm text-gray-500 capitalize">{exercise.category}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No exercises recorded today</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Today&apos;s Cardio</h2>
          {data.cardio.length > 0 ? (
            <div className="space-y-2">
              {data.cardio.map((cardio) => (
                <div key={cardio.id} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium text-gray-800 capitalize">{cardio.activity.replace('_', ' ')}</p>
                    <p className="text-sm text-gray-500">
                      {cardio.duration_minutes} min
                      {cardio.distance_km && ` • ${cardio.distance_km} km`}
                      {cardio.calories && ` • ${cardio.calories} cal`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No cardio recorded today</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Today&apos;s Food</h2>
          {data.food.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['breakfast', 'lunch', 'dinner', 'snack'].map((mealTime) => {
                const items = data.food.filter((f) => f.meal_time === mealTime);
                return (
                  <div key={mealTime}>
                    <h3 className="font-medium text-gray-700 capitalize mb-2">{mealTime}</h3>
                    {items.length > 0 ? (
                      <ul className="list-disc list-inside text-gray-600">
                        {items.map((food) => (
                          <li key={food.id}>{food.food_item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-400">No items</p>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500">No food recorded today</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-blue-50 p-4 rounded-lg">
        <Link
          href="/exercises"
          className="bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 text-center font-medium transition"
        >
          Log Exercise
        </Link>
        <Link
          href="/cardio"
          className="bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 text-center font-medium transition"
        >
          Log Cardio
        </Link>
        <Link
          href="/food"
          className="bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 text-center font-medium transition"
        >
          Log Food
        </Link>
        <Link
          href="/weight"
          className="bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 text-center font-medium transition"
        >
          Record Weight
        </Link>
      </div>
    </div>
  );
}
