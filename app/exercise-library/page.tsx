'use client';

import { useState } from 'react';
import { EXERCISE_LIBRARY, CARDIO_ACTIVITIES } from '@/lib/exercise-library';

export default function ExerciseLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(null);

  const categories = ['all', 'chest', 'shoulder', 'lat', 'biceps', 'leg', 'triceps'];

  const filteredExercises =
    selectedCategory === 'all'
      ? EXERCISE_LIBRARY
      : EXERCISE_LIBRARY.filter((ex) => ex.category === selectedCategory);

  const selectedExercise = EXERCISE_LIBRARY.find((ex) => ex.id === selectedExerciseId);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Exercise Library</h1>
        <p className="text-gray-600">Browse exercises with proper form demonstrations</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedExerciseId(null);
            }}
            className={`px-4 py-2 rounded-md font-medium transition ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Exercises ({filteredExercises.length})
            </h2>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {filteredExercises.map((exercise) => (
                <button
                  key={exercise.id}
                  onClick={() => setSelectedExerciseId(exercise.id)}
                  className={`w-full text-left p-3 rounded-md transition ${
                    selectedExerciseId === exercise.id
                      ? 'bg-blue-50 border-2 border-blue-500'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <p className="font-medium text-gray-800">{exercise.name}</p>
                  <p className="text-xs text-gray-500 capitalize mt-1">{exercise.category}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedExercise ? (
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedExercise.name}</h2>
                <p className="text-sm text-gray-500 capitalize mt-1">
                  Target: {selectedExercise.category}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
                <img
                  src={selectedExercise.gifUrl}
                  alt={selectedExercise.name}
                  className="max-w-full h-auto rounded-lg"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions</h3>
                <ol className="space-y-2">
                  {selectedExercise.instructions.map((instruction, index) => (
                    <li key={index} className="flex">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 pt-0.5">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-64">
              <p className="text-gray-500">Select an exercise to view details</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cardio Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CARDIO_ACTIVITIES.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 text-lg">{activity.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
              <p className="text-sm text-blue-600 font-medium mt-2">
                Recommended: {activity.recommendedDuration} minutes
              </p>
              <div className="mt-3">
                <p className="text-xs font-medium text-gray-700 mb-1">Benefits:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {activity.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-1">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
