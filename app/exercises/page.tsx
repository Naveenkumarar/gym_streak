import ExerciseForm from '@/components/ExerciseForm';
import { getExercisesByDate, deleteExercise } from '@/lib/actions';
import { format } from 'date-fns';

export const dynamic = 'force-dynamic';

async function ExerciseList() {
  const today = format(new Date(), 'yyyy-MM-dd');
  const exercises = await getExercisesByDate(today);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Today&apos;s Exercises</h2>
      {exercises.length > 0 ? (
        <div className="space-y-3">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-md"
            >
              <div>
                <p className="font-medium text-gray-800">{exercise.exercise_name}</p>
                <p className="text-sm text-gray-500">
                  <span className="capitalize">{exercise.category}</span> • {' '}
                  <span className="capitalize">{exercise.day_of_week}</span>
                </p>
              </div>
              <form action={deleteExercise.bind(null, exercise.id)}>
                <button
                  type="submit"
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No exercises recorded today</p>
      )}
    </div>
  );
}

export default function ExercisesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Exercise Tracking</h1>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Weekly Schedule</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><strong>Monday:</strong> Chest & Shoulder (3 exercises each)</li>
          <li><strong>Tuesday:</strong> Lat & Biceps</li>
          <li><strong>Wednesday:</strong> Leg & Triceps</li>
          <li><strong>Thursday:</strong> Chest & Shoulder (repeat)</li>
          <li><strong>Friday:</strong> Lat & Biceps (repeat)</li>
          <li><strong>Saturday:</strong> Leg & Triceps (repeat)</li>
          <li><strong>Sunday:</strong> Rest Day</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ExerciseForm />
        <ExerciseList />
      </div>
    </div>
  );
}
