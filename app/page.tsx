"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import type { Workout } from "@/types/workout";
import { API_URL, FALLBACK_API_URL } from "@/lib/api";

export default function HomePage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        let response = await fetch(API_URL);
        if (!response.ok) response = await fetch(FALLBACK_API_URL);
        if (!response.ok) throw new Error("Could not load workouts");
        const data = await response.json();
        if (active) setWorkouts(data);
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, []);

  return (
    <main>
      <Hero />
      {loading ? <Loading /> : error ? (
        <div className="px-6 py-16 text-center">
          <p className="text-sm font-bold">Couldn&apos;t load workouts.</p>
          <p className="mt-2 text-xs text-[#7e8692]">Please refresh the page and try again.</p>
        </div>
      ) : <WorkoutLibrary workouts={workouts} />}
    </main>
  );
}
