"use client";
import { useState } from "react";
import { addActivity } from "@/lib/storage";
import type { Activity, ActivityCategory } from "@/lib/types";

const categories: ActivityCategory[] = [
  "Workout",
  "Study",
  "Meditation",
  "Sleep",
  "Diet",
  "Social",
  "Creative",
  "Chores",
];

export default function LogPage() {
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [category, setCategory] = useState<ActivityCategory>("Workout");
  const [duration, setDuration] = useState<number>(30);
  const [intensity, setIntensity] = useState<number>(3);
  const [notes, setNotes] = useState<string>("");
  const [saved, setSaved] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const activity: Activity = {
      id: crypto.randomUUID(),
      date: date,
      category,
      durationMin: Number(duration) || 0,
      intensity: Number(intensity) || 1,
      notes: notes.trim() || undefined,
    };
    addActivity(activity);
    setSaved(true);
    setNotes("");
  }

  return (
    <div className="max-w-xl mx-auto w-full p-6">
      <h1 className="text-2xl font-semibold mb-4 sl-gradient-text">Log Activity</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => setCategory(c)}
                className={`sl-chip ${category === c ? "active" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Duration (minutes)</label>
          <input
            type="number"
            min={0}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Intensity</label>
          <div className="sl-segment">
            {[1,2,3,4,5].map((i) => (
              <button
                type="button"
                key={i}
                data-active={intensity === i}
                onClick={() => setIntensity(i)}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            rows={3}
          />
        </div>
        <button type="submit" className="sl-button rounded-md px-4 py-2">
          Save
        </button>
        {saved && <p className="text-green-700 text-sm">Saved!</p>}
      </form>
    </div>
  );
}

