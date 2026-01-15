'use client';

import { useState } from 'react';
import { EXERCISE_LIBRARY, ExerciseData } from '@/lib/exercise-library';
import Image from 'next/image';

type Props = {
  category: string;
  onSelect: (exercise: ExerciseData) => void;
};

export default function ExerciseSelector({ category, onSelect }: Props) {
  const [selectedExercise, setSelectedExercise] = useState<ExerciseData | null>(null);
  const exercises = EXERCISE_LIBRARY.filter((ex) => ex.category === category);

  const handleSelect = (exercise: ExerciseData) => {
    setSelectedExercise(exercise);
  };

  const handleConfirm = () => {
    if (selectedExercise) {
      onSelect(selectedExercise);
      setSelectedExercise(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3">
        {exercises.map((exercise) => (
          <button
            key={exercise.id}
            type="button"
            onClick={() => handleSelect(exercise)}
            className={`p-3 border-2 rounded-lg text-left transition ${
              selectedExercise?.id === exercise.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <p className="font-medium text-gray-800">{exercise.name}</p>
          </button>
        ))}
      </div>

      {selectedExercise && (
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <h3 className="font-semibold text-gray-800">{selectedExercise.name}</h3>

          <div className="bg-white rounded-lg p-2 flex justify-center">
            <img
              src={selectedExercise.gifUrl}
              alt={selectedExercise.name}
              className="max-w-full h-auto rounded"
              style={{ maxHeight: '300px' }}
            />
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Instructions:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
              {selectedExercise.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Select This Exercise
          </button>
        </div>
      )}
    </div>
  );
}
