// Exercise library with proper names and visual demonstrations
// Images from free-exercise-db - a free open source exercise database

export type ExerciseData = {
  id: string;
  name: string;
  category: string;
  gifUrl: string;
  instructions: string[];
};

export const EXERCISE_LIBRARY: ExerciseData[] = [
  // CHEST EXERCISES
  {
    id: 'chest-1',
    name: 'Barbell Bench Press',
    category: 'chest',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press/0.jpg',
    instructions: [
      'Lie on bench with eyes under the bar',
      'Grip bar slightly wider than shoulder-width',
      'Lower bar to mid-chest with controlled motion',
      'Press back up until arms are fully extended',
    ],
  },
  {
    id: 'chest-2',
    name: 'Incline Dumbbell Press',
    category: 'chest',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Incline_Bench_Press/0.jpg',
    instructions: [
      'Set bench to 30-45 degree incline',
      'Hold dumbbells at shoulder level',
      'Press dumbbells up until arms extend',
      'Lower with control back to start position',
    ],
  },
  {
    id: 'chest-3',
    name: 'Cable Chest Fly',
    category: 'chest',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Fly/0.jpg',
    instructions: [
      'Stand in center of cable machine',
      'Hold cables at shoulder height',
      'Bring handles together in front of chest',
      'Return to starting position with control',
    ],
  },
  {
    id: 'chest-4',
    name: 'Dumbbell Chest Press',
    category: 'chest',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg',
    instructions: [
      'Lie on flat bench with dumbbells',
      'Start with arms extended above chest',
      'Lower dumbbells to chest level',
      'Press back up to starting position',
    ],
  },
  {
    id: 'chest-5',
    name: 'Push-Ups',
    category: 'chest',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Up/0.jpg',
    instructions: [
      'Start in plank position, hands shoulder-width',
      'Keep body straight from head to heels',
      'Lower chest toward ground',
      'Push back up to starting position',
    ],
  },

  // SHOULDER EXERCISES
  {
    id: 'shoulder-1',
    name: 'Barbell Overhead Press',
    category: 'shoulder',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Standing_Military_Press/0.jpg',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Hold barbell at shoulder height',
      'Press bar overhead until arms fully extend',
      'Lower back to shoulders with control',
    ],
  },
  {
    id: 'shoulder-2',
    name: 'Dumbbell Shoulder Press',
    category: 'shoulder',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg',
    instructions: [
      'Sit on bench with back support',
      'Hold dumbbells at shoulder level',
      'Press dumbbells overhead',
      'Lower back to starting position',
    ],
  },
  {
    id: 'shoulder-3',
    name: 'Lateral Raises',
    category: 'shoulder',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lateral_Raise/0.jpg',
    instructions: [
      'Stand with dumbbells at sides',
      'Raise arms out to sides to shoulder height',
      'Keep slight bend in elbows',
      'Lower with control',
    ],
  },
  {
    id: 'shoulder-4',
    name: 'Front Raises',
    category: 'shoulder',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Front_Raise/0.jpg',
    instructions: [
      'Stand with dumbbells in front of thighs',
      'Raise dumbbells forward to shoulder height',
      'Keep arms straight with slight bend in elbows',
      'Lower back down with control',
    ],
  },
  {
    id: 'shoulder-5',
    name: 'Arnold Press',
    category: 'shoulder',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Press/0.jpg',
    instructions: [
      'Start with dumbbells at chest, palms facing you',
      'Press up while rotating palms forward',
      'End with arms extended overhead',
      'Reverse motion to return',
    ],
  },

  // LAT/BACK EXERCISES
  {
    id: 'lat-1',
    name: 'Pull-Ups',
    category: 'lat',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pull-Up/0.jpg',
    instructions: [
      'Hang from bar with overhand grip',
      'Pull body up until chin clears bar',
      'Keep core engaged throughout',
      'Lower with control to starting position',
    ],
  },
  {
    id: 'lat-2',
    name: 'Lat Pulldown',
    category: 'lat',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lat_Pulldown/0.jpg',
    instructions: [
      'Sit at lat pulldown machine',
      'Grip bar wider than shoulder-width',
      'Pull bar down to upper chest',
      'Return to starting position with control',
    ],
  },
  {
    id: 'lat-3',
    name: 'Seated Cable Row',
    category: 'lat',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Cable_Row/0.jpg',
    instructions: [
      'Sit at cable row machine',
      'Grab handle with arms extended',
      'Pull handle to lower chest',
      'Squeeze shoulder blades together',
    ],
  },
  {
    id: 'lat-4',
    name: 'Bent Over Barbell Row',
    category: 'lat',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bent_Over_Row/0.jpg',
    instructions: [
      'Bend forward at hips with slight knee bend',
      'Hold barbell with overhand grip',
      'Pull bar to lower chest',
      'Lower back down with control',
    ],
  },
  {
    id: 'lat-5',
    name: 'Straight Arm Pulldown',
    category: 'lat',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight_Arm_Pulldown/0.jpg',
    instructions: [
      'Stand facing cable machine',
      'Grab bar with arms extended overhead',
      'Pull down to thighs keeping arms straight',
      'Return to starting position',
    ],
  },

  // BICEPS EXERCISES
  {
    id: 'biceps-1',
    name: 'Barbell Bicep Curl',
    category: 'biceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Hold barbell with underhand grip',
      'Curl bar up toward shoulders',
      'Lower with control to starting position',
    ],
  },
  {
    id: 'biceps-2',
    name: 'Dumbbell Bicep Curl',
    category: 'biceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bicep_Curl/0.jpg',
    instructions: [
      'Stand with dumbbells at sides',
      'Keep elbows close to body',
      'Curl dumbbells up to shoulders',
      'Lower back down with control',
    ],
  },
  {
    id: 'biceps-3',
    name: 'Hammer Curls',
    category: 'biceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Hammer_Curl/0.jpg',
    instructions: [
      'Hold dumbbells with neutral grip (palms facing)',
      'Keep elbows at sides',
      'Curl weights toward shoulders',
      'Lower back to starting position',
    ],
  },
  {
    id: 'biceps-4',
    name: 'Preacher Curl',
    category: 'biceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Preacher_Curl/0.jpg',
    instructions: [
      'Sit at preacher bench',
      'Rest upper arms on pad',
      'Curl weight up toward shoulders',
      'Lower with control',
    ],
  },
  {
    id: 'biceps-5',
    name: 'Incline Dumbbell Curl',
    category: 'biceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Incline_Curl/0.jpg',
    instructions: [
      'Sit on incline bench (45 degrees)',
      'Let arms hang straight down',
      'Curl dumbbells up to shoulders',
      'Lower back to full extension',
    ],
  },

  // LEG EXERCISES
  {
    id: 'leg-1',
    name: 'Barbell Back Squat',
    category: 'leg',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Squat/0.jpg',
    instructions: [
      'Place bar on upper back',
      'Stand with feet shoulder-width apart',
      'Lower into squat keeping chest up',
      'Drive through heels to stand',
    ],
  },
  {
    id: 'leg-2',
    name: 'Leg Press',
    category: 'leg',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg',
    instructions: [
      'Sit in leg press machine',
      'Place feet shoulder-width on platform',
      'Lower platform by bending knees',
      'Press back up to starting position',
    ],
  },
  {
    id: 'leg-3',
    name: 'Romanian Deadlift',
    category: 'leg',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Romanian_Deadlift/0.jpg',
    instructions: [
      'Stand with barbell at hip level',
      'Hinge at hips pushing them back',
      'Lower bar along legs',
      'Return to standing by driving hips forward',
    ],
  },
  {
    id: 'leg-4',
    name: 'Leg Extension',
    category: 'leg',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extension/0.jpg',
    instructions: [
      'Sit in leg extension machine',
      'Place ankles under pad',
      'Extend legs until straight',
      'Lower back down with control',
    ],
  },
  {
    id: 'leg-5',
    name: 'Walking Lunges',
    category: 'leg',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunge/0.jpg',
    instructions: [
      'Stand with feet together',
      'Step forward into lunge position',
      'Lower back knee toward ground',
      'Push off to bring back leg forward',
    ],
  },

  // TRICEPS EXERCISES
  {
    id: 'triceps-1',
    name: 'Close-Grip Bench Press',
    category: 'triceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Close-Grip_Bench_Press/0.jpg',
    instructions: [
      'Lie on bench, grip bar narrower than shoulders',
      'Lower bar to chest keeping elbows close',
      'Press back up to starting position',
      'Keep core engaged throughout',
    ],
  },
  {
    id: 'triceps-2',
    name: 'Tricep Dips',
    category: 'triceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips/0.jpg',
    instructions: [
      'Grip parallel bars, body suspended',
      'Lower body by bending elbows',
      'Keep elbows close to body',
      'Push back up to starting position',
    ],
  },
  {
    id: 'triceps-3',
    name: 'Tricep Pushdown',
    category: 'triceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Pushdown/0.jpg',
    instructions: [
      'Stand at cable machine',
      'Grip bar with overhand grip',
      'Push down until arms fully extended',
      'Return to starting position with control',
    ],
  },
  {
    id: 'triceps-4',
    name: 'Overhead Tricep Extension',
    category: 'triceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Overhead_Tricep_Extension/0.jpg',
    instructions: [
      'Hold dumbbell overhead with both hands',
      'Lower weight behind head',
      'Keep elbows pointing forward',
      'Extend arms back to starting position',
    ],
  },
  {
    id: 'triceps-5',
    name: 'Skull Crushers',
    category: 'triceps',
    gifUrl: 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lying_Triceps_Extension_Skull_Crusher/0.jpg',
    instructions: [
      'Lie on bench holding EZ bar above chest',
      'Lower bar toward forehead',
      'Keep upper arms stationary',
      'Extend arms back to starting position',
    ],
  },
];

// Cardio exercises with proper details
export type CardioActivity = {
  id: string;
  name: string;
  description: string;
  recommendedDuration: number; // in minutes
  benefits: string[];
};

export const CARDIO_ACTIVITIES: CardioActivity[] = [
  {
    id: 'walk',
    name: 'Walking',
    description: 'Low-impact steady-state cardio',
    recommendedDuration: 20,
    benefits: [
      'Improves cardiovascular health',
      'Low impact on joints',
      'Burns calories steadily',
      'Great for recovery days',
    ],
  },
  {
    id: 'cycle',
    name: 'Cycling',
    description: 'Stationary or regular bike cycling',
    recommendedDuration: 10,
    benefits: [
      'Strengthens leg muscles',
      'Low impact cardio',
      'Improves endurance',
      'Burns significant calories',
    ],
  },
  {
    id: 'burpees',
    name: 'Burpees',
    description: 'Full-body explosive floor exercise',
    recommendedDuration: 5,
    benefits: [
      'Full body workout',
      'High calorie burn',
      'Builds strength and endurance',
      'No equipment needed',
    ],
  },
  {
    id: 'mountain_climbers',
    name: 'Mountain Climbers',
    description: 'Core and cardio floor exercise',
    recommendedDuration: 5,
    benefits: [
      'Engages core muscles',
      'Improves agility',
      'Burns calories quickly',
      'Strengthens shoulders',
    ],
  },
  {
    id: 'jumping_jacks',
    name: 'Jumping Jacks',
    description: 'Classic cardio warmup exercise',
    recommendedDuration: 5,
    benefits: [
      'Increases heart rate',
      'Full body movement',
      'Easy to perform',
      'Great warmup exercise',
    ],
  },
  {
    id: 'high_knees',
    name: 'High Knees',
    description: 'Running in place with high knee lift',
    recommendedDuration: 5,
    benefits: [
      'Strengthens hip flexors',
      'Improves running form',
      'High intensity cardio',
      'Minimal space required',
    ],
  },
];

// Helper functions
export function getExercisesByCategory(category: string): ExerciseData[] {
  return EXERCISE_LIBRARY.filter((ex) => ex.category === category);
}

export function getExerciseById(id: string): ExerciseData | undefined {
  return EXERCISE_LIBRARY.find((ex) => ex.id === id);
}

export function getCardioActivityById(id: string): CardioActivity | undefined {
  return CARDIO_ACTIVITIES.find((act) => act.id === id);
}
