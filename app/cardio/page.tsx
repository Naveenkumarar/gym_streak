import CardioForm from '@/components/CardioForm';
import { getCardioByDate, deleteCardio } from '@/lib/actions';
import { format } from 'date-fns';

export const dynamic = 'force-dynamic';

async function CardioList() {
  const today = format(new Date(), 'yyyy-MM-dd');
  const cardioData = await getCardioByDate(today);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Today&apos;s Cardio</h2>
      {cardioData.length > 0 ? (
        <div className="space-y-3">
          {cardioData.map((cardio) => (
            <div
              key={cardio.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-md"
            >
              <div>
                <p className="font-medium text-gray-800 capitalize">
                  {cardio.activity.replace('_', ' ')}
                </p>
                <p className="text-sm text-gray-500">
                  {cardio.duration_minutes} minutes
                  {cardio.distance_km && ` • ${cardio.distance_km} km`}
                  {cardio.calories && ` • ${cardio.calories} calories`}
                </p>
              </div>
              <form action={deleteCardio.bind(null, cardio.id)}>
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
        <p className="text-gray-500">No cardio recorded today</p>
      )}
    </div>
  );
}

export default function CardioPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Cardio Tracking</h1>

      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Recommended Daily Cardio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div className="bg-white p-3 rounded-md">
            <p className="font-medium text-gray-800">Walking</p>
            <p className="text-gray-600">20 minutes</p>
            <p className="text-xs text-gray-500 mt-1">Low impact cardio</p>
          </div>
          <div className="bg-white p-3 rounded-md">
            <p className="font-medium text-gray-800">Cycling</p>
            <p className="text-gray-600">10 minutes</p>
            <p className="text-xs text-gray-500 mt-1">Leg strengthening</p>
          </div>
          <div className="bg-white p-3 rounded-md">
            <p className="font-medium text-gray-800">Floor Exercises</p>
            <p className="text-gray-600">5-10 minutes</p>
            <p className="text-xs text-gray-500 mt-1">High intensity</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardioForm />
        <CardioList />
      </div>
    </div>
  );
}
