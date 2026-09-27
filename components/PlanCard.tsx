"use client";

import Link from "next/link";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import toast from "react-hot-toast";
import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function PlanCard({ workout, savedTab = false }: { workout: Workout; savedTab?: boolean }) {
  const { removeFromPlan, removeFromSaved, markDone } = useFitLog();

  function remove() {
    if (savedTab) removeFromSaved(workout.id);
    else removeFromPlan(workout.id);
    toast.success(savedTab ? "Removed from saved" : "Removed from today's plan");
  }

  function done() {
    markDone(workout.id);
    toast.success("Workout marked as done");
  }

  return (
    <article className="panel flex flex-col gap-4 rounded-md p-3 sm:flex-row sm:items-center">
      <Link href={`/workout/${workout.id}`} className="flex min-w-0 flex-1 items-center gap-3">
        <ImageWithFallback src={workout.image} alt={workout.name} className="h-16 w-20 shrink-0 rounded object-cover" />
        <div className="min-w-0">
          <h3 className="truncate text-[11px] font-black uppercase">{workout.name}</h3>
          <p className="mt-1 truncate text-[9px] text-[#7f8792]">{workout.equipment}</p>
          <div className="mt-2 flex flex-wrap gap-3 text-[8px] text-[#8d95a0]">
            <span className="flex items-center gap-1"><Clock3 size={10} />{workout.duration} min</span>
            <span className="flex items-center gap-1"><Flame size={10} />{workout.caloriesBurned} kcal</span>
            <span className="flex items-center gap-1"><Star size={10} />{workout.rating}</span>
          </div>
        </div>
      </Link>
      <div className="flex shrink-0 items-center gap-2">
        <Link href={`/workout/${workout.id}`} className="rounded-full border border-[#343a44] px-3 py-2 text-[8px] font-bold uppercase">View Details</Link>
        {!savedTab && <button onClick={done} className="flex items-center gap-1 rounded-full accent-bg px-3 py-2 text-[8px] font-black uppercase"><Check size={11} /> Mark as Done</button>}
        <button onClick={remove} aria-label="Remove" className="grid h-8 w-8 place-items-center rounded-full border border-[#343a44] text-[#a3aab4] hover:text-white"><X size={13} /></button>
      </div>
    </article>
  );
}
