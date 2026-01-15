import WeightForm from '@/components/WeightForm';
import WeightChart from '@/components/WeightChart';
import { getWeightHistory, deleteWeight } from '@/lib/actions';
import { format, parseISO } from 'date-fns';

export const dynamic = 'force-dynamic';

async function WeightHistoryTable() {
  const history = await getWeightHistory();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Weight History</h2>
      {history.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 text-gray-700">Date</th>
                <th className="text-left py-2 px-4 text-gray-700">Weight (kg)</th>
                <th className="text-right py-2 px-4 text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry) => (
                <tr key={entry.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-800">
                    {format(parseISO(entry.date), 'MMM dd, yyyy')}
                  </td>
                  <td className="py-3 px-4 text-gray-800 font-medium">
                    {entry.weight_kg} kg
                  </td>
                  <td className="py-3 px-4 text-right">
                    <form action={deleteWeight.bind(null, entry.id)} className="inline">
                      <button
                        type="submit"
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No weight history recorded</p>
      )}
    </div>
  );
}

export default async function WeightPage() {
  const history = await getWeightHistory();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Weight Tracking</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <WeightForm />
        </div>
        <div className="lg:col-span-2">
          <WeightChart data={history} />
        </div>
      </div>

      <WeightHistoryTable />
    </div>
  );
}
