export type ActivityCategory =
  | "Workout"
  | "Study"
  | "Meditation"
  | "Sleep"
  | "Diet"
  | "Social"
  | "Creative"
  | "Chores";

export interface Activity {
  id: string;
  date: string; // ISO Date string
  category: ActivityCategory;
  durationMin: number; // minutes
  intensity: number; // 1 - 5
  notes?: string;
}

export type StatKey =
  | "Strength"
  | "Agility"
  | "Vitality"
  | "Intelligence"
  | "Focus"
  | "Creativity"
  | "Discipline"
  | "Charisma"
  | "Resilience"
  | "Sleep"
  | "Nutrition"
  | "Mindfulness";

export type Stats = Record<StatKey, number>;

export interface ActivityWithScore extends Activity {
  score: number;
}

