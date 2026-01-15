'use client';

import { WeightHistory } from '@/lib/actions';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';

type Props = {
  data: WeightHistory[];
};

export default function WeightChart({ data }: Props) {
  if (data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-500 text-center">No weight data available yet</p>
      </div>
    );
  }

  const chartData = data
    .slice()
    .reverse()
    .map((entry) => ({
      date: format(parseISO(entry.date), 'MMM dd'),
      weight: entry.weight_kg,
      fullDate: entry.date,
    }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Weight Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            domain={['dataMin - 2', 'dataMax + 2']}
            label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
            labelStyle={{ color: '#333' }}
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ fill: '#2563eb', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
