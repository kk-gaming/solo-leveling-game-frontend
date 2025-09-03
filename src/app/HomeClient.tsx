"use client";
import { useEffect, useState } from "react";
import { computeStats, loadActivities } from "@/lib/storage";
import type { Stats } from "@/lib/types";
import { getHeroBackgroundUrl } from "@/lib/theme";


export default function HomeClient() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const acts = loadActivities();
    setStats(computeStats(acts));
  }, []);

  return (
    <>
      <div
        className="sl-hero-img"
        style={{
          backgroundImage: `url(${getHeroBackgroundUrl()})`,
        }}
      />
      <div className="sl-hero-overlay" />
      <section className="sl-hero">
        <div className="max-w-5xl mx-auto p-6">
          <div className="sl-glass rounded-xl p-6">
            <h2 className="text-3xl font-semibold sl-gradient-text">Welcome, Hunter</h2>
            <p className="mt-2 text-sm text-gray-300">
              Log your daily quests and watch your stats rise. Enter the dungeon of
              discipline.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold sl-gradient-text">Dashboard</h2>
        </div>

        <section>
          <h3 className="text-xl font-medium mb-3">Your Stats</h3>
          {stats ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {Object.entries(stats).map(([k, v]) => (
                <div key={k} className="sl-card rounded-md p-3">
                  <div className="text-sm text-gray-400">{k}</div>
                  <div className="text-lg font-semibold">{v}</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No data yet. Start by logging an activity.</p>
          )}
        </section>

        <section>
          <div className="rounded-md border p-4 bg-gray-50">
            <h4 className="font-medium mb-1">Tip</h4>
            <p className="text-sm text-gray-700">
              Activities add XP to multiple stats. Try a mix: workouts for
              Strength/Vitality, study for Intelligence/Focus, and meditation for
              Mindfulness.
            </p>
          </div>
        </section>
      <div className="bg-credit">
        Background: <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">Pexels</a>
      </div>
      </div>
    </>
  );
}

