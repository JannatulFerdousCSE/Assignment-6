"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";
import PlanCard from "@/components/PlanCard";

export default function MyPlanPage({ initialTab }: { initialTab: "plan" | "saved" }) {
  const { plan, saved } = useFitLog();
  const [tab, setTab] = useState(initialTab);
  const current = tab === "plan" ? plan : saved;
  const [sort, setSort] = useState("duration");

  const sorted = useMemo(() => [...current].sort((a: Workout, b: Workout) => {
    if (sort === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sort === "rating") return b.rating - a.rating;
    return a.duration - b.duration;
  }), [current, sort]);

  const minutes = plan.reduce((sum, item) => sum + item.duration, 0);
  const calories = plan.reduce((sum, item) => sum + item.caloriesBurned, 0);

  return (
    <main className="px-5 py-7 sm:px-7 sm:py-10">
      <div>
        <h1 className="display-font text-3xl leading-none sm:text-5xl">MY PLAN</h1>
        <p className="mt-2 text-[10px] text-[#7f8792]">Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-md border border-[#262c35] bg-[#11141a]">
        <Metric label="Exercises" value={plan.length} />
        <Metric label="Minutes" value={minutes} />
        <Metric label="Calories" value={calories} />
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-fit rounded border border-[#252b34] bg-[#11141a] p-0.5">
          <button onClick={() => setTab("plan")} className={`rounded px-4 py-2 text-[8px] font-bold ${tab === "plan" ? "accent-bg" : "text-[#858d98]"}`}>Today&apos;s Plan</button>
          <button onClick={() => setTab("saved")} className={`rounded px-4 py-2 text-[8px] font-bold ${tab === "saved" ? "accent-bg" : "text-[#858d98]"}`}>Saved</button>
        </div>
        <label className="flex items-center gap-2 text-[8px] uppercase text-[#777f8b]">
          Sort By
          <span className="relative">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none rounded border border-[#2b3039] bg-[#11141a] px-3 py-2 pr-8 text-[8px] font-bold text-white outline-none">
              <option value="duration">Duration</option><option value="calories">Calories</option><option value="rating">Rating</option>
            </select>
            <ChevronDown size={11} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
          </span>
        </label>
      </div>

      <div className="mt-3 space-y-2.5">
        {sorted.length > 0 ? sorted.map((workout) => <PlanCard key={workout.id} workout={workout} savedTab={tab === "saved"} />) : <EmptyState savedTab={tab === "saved"} />}
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return <div className="border-r border-[#242a33] px-4 py-4 last:border-r-0"><p className="text-[7px] font-bold uppercase text-[#707884]">{label}</p><p className="mt-1 text-xl font-black">{value}</p></div>;
}

function EmptyState({ savedTab }: { savedTab: boolean }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-md border border-[#202630] bg-[#0e1116] px-5 text-center">
      <h2 className="display-font text-xl">NOTHING HERE YET</h2>
      <p className="mt-2 max-w-md text-[9px] leading-4 text-[#7e8691]">{savedTab ? "Save workouts from the library and they will appear here for later." : "Browse the library and add a lift to get today moving."}</p>
      <Link href="/" className="mt-5 rounded-sm accent-bg px-4 py-2 text-[8px] font-black uppercase">Go to workouts</Link>
    </div>
  );
}
