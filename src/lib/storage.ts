import type { Activity, ActivityWithScore, Stats, StatKey, ActivityCategory } from "./types";

const STORE_KEY = "slg:activities";

export function loadActivities(): Activity[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw) as Activity[];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function saveActivities(activities: Activity[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORE_KEY, JSON.stringify(activities));
}

export function addActivity(a: Activity) {
  const all = loadActivities();
  all.push(a);
  saveActivities(all);
}

// Simple scoring model: base per category * duration hours * intensity
const categoryBase: Record<ActivityCategory, number> = {
  Workout: 10,
  Study: 8,
  Meditation: 7,
  Sleep: 6,
  Diet: 5,
  Social: 4,
  Creative: 6,
  Chores: 3,
};

export function scoreActivity(a: Activity): number {
  const hours = Math.max(0, a.durationMin) / 60;
  const intensity = Math.min(5, Math.max(1, a.intensity));
  return Math.round(categoryBase[a.category] * hours * intensity * 10) / 10;
}

export function computeStats(activities: Activity[]): Stats {
  const stats: Stats = {
    Strength: 0,
    Agility: 0,
    Vitality: 0,
    Intelligence: 0,
    Focus: 0,
    Creativity: 0,
    Discipline: 0,
    Charisma: 0,
    Resilience: 0,
    Sleep: 0,
    Nutrition: 0,
    Mindfulness: 0,
  };

  const weights: Partial<Record<ActivityCategory, Partial<Record<StatKey, number>>>> = {
    Workout: { Strength: 1, Agility: 0.6, Vitality: 0.8, Discipline: 0.4, Resilience: 0.5 },
    Study: { Intelligence: 1, Focus: 0.7, Discipline: 0.5 },
    Meditation: { Mindfulness: 1, Focus: 0.6, Resilience: 0.3 },
    Sleep: { Sleep: 1, Vitality: 0.5, Focus: 0.2 },
    Diet: { Nutrition: 1, Vitality: 0.3, Discipline: 0.2 },
    Social: { Charisma: 1, Resilience: 0.3 },
    Creative: { Creativity: 1, Focus: 0.3 },
    Chores: { Discipline: 0.8, Resilience: 0.2 },
  };

  for (const a of activities) {
    const s = scoreActivity(a);
    const w = weights[a.category] || {};
    for (const key in w) {
      const k = key as StatKey;
      stats[k] += s * (w[k] as number);
    }
  }

  // Round for display
  for (const k in stats) {
    const key = k as StatKey;
    stats[key] = Math.round(stats[key] * 10) / 10;
  }

  return stats;
}

export function activitiesWithScores(activities: Activity[]): ActivityWithScore[] {
  return activities.map(a => ({ ...a, score: scoreActivity(a) }));
}

