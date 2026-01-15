import FoodForm from '@/components/FoodForm';
import { getFoodByDate, deleteFood } from '@/lib/actions';
import { format } from 'date-fns';

export const dynamic = 'force-dynamic';

async function FoodList() {
  const today = format(new Date(), 'yyyy-MM-dd');
  const foodData = await getFoodByDate(today);

  const groupedByMeal = {
    breakfast: foodData.filter((f) => f.meal_time === 'breakfast'),
    lunch: foodData.filter((f) => f.meal_time === 'lunch'),
    dinner: foodData.filter((f) => f.meal_time === 'dinner'),
    snack: foodData.filter((f) => f.meal_time === 'snack'),
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Today&apos;s Food Intake</h2>
      {foodData.length > 0 ? (
        <div className="space-y-4">
          {Object.entries(groupedByMeal).map(([mealTime, items]) => (
            <div key={mealTime}>
              <h3 className="font-medium text-gray-700 capitalize mb-2">{mealTime}</h3>
              {items.length > 0 ? (
                <div className="space-y-2 ml-4">
                  {items.map((food) => (
                    <div
                      key={food.id}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
                    >
                      <p className="text-gray-800">{food.food_item}</p>
                      <form action={deleteFood.bind(null, food.id)}>
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
                <p className="text-sm text-gray-400 ml-4">No items</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No food recorded today</p>
      )}
    </div>
  );
}

export default function FoodPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Food Intake</h1>

      <div className="bg-orange-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Common Foods</h3>
        <p className="text-sm text-gray-700">
          Rice, Chicken, Chapati, Prawn, and other Tamil Nadu cuisine
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FoodForm />
        <FoodList />
      </div>
    </div>
  );
}
