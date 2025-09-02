"use client";
import { useEffect, useState } from "react";
import { activitiesWithScores, computeStats, loadActivities } from "@/lib/storage";
import type { ActivityWithScore, Stats } from "@/lib/types";

export default function HistoryPage() {
  const [items, setItems] = useState<ActivityWithScore[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const acts = loadActivities();
    setItems(activitiesWithScores(acts));
    setStats(computeStats(acts));
  }, []);

  return (
    <div className="max-w-3xl mx-auto w-full p-6 space-y-6">
      <h1 className="text-2xl font-semibold sl-gradient-text">History</h1>

      <section>
        <h2 className="text-xl font-medium mb-2">Aggregated Stats</h2>
        {stats ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(stats).map(([k, v]) => (
              <div key={k} className="border rounded-md p-3">
                <div className="text-sm text-gray-600">{k}</div>
                <div className="text-lg font-semibold">{v}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No stats yet.</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">Logged Activities</h2>
        {items.length ? (
          <ul className="divide-y border rounded-md">
            {items.map((a) => (
              <li key={a.id} className="p-3 flex items-center justify-between sl-card">
                <div>
                  <div className="font-medium">
                    {a.category}
                    <span className="ml-2 text-sm text-gray-400">{a.date}</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    {a.durationMin}m · Intensity {a.intensity}
                    {a.notes ? ` · ${a.notes}` : ""}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Score</div>
                  <div className="font-semibold">{a.score}</div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No entries yet. Try logging something.</p>
        )}
      </section>
    </div>
  );
}

