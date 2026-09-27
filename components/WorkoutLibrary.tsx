"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

export default function WorkoutLibrary({ workouts }: { workouts: Workout[] }) {
  const [sort, setSort] = useState("duration");

  const sorted = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sort === "calories") return b.caloriesBurned - a.caloriesBurned;
      if (sort === "rating") return b.rating - a.rating;
      return a.duration - b.duration;
    });
  }, [workouts, sort]);

  return (
    <section id="library" className="px-5 py-10 sm:px-7 sm:py-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="display-font section-title">THE LIBRARY</h2>
          <p className="mt-2 text-[10px] text-[#818996]">Twelve lifts covering every major muscle group.</p>
        </div>
        <label className="flex items-center gap-2 text-[9px] font-bold uppercase text-[#7f8792]">
          Sort By
          <span className="relative">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none rounded border border-[#2b3039] bg-[#11141a] px-3 py-2 pr-8 text-[9px] font-bold text-white outline-none">
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <ChevronDown size={12} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
          </span>
        </label>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}
      </div>
    </section>
  );
}
