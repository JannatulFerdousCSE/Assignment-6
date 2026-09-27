"use client";

import { Check, Bookmark, Plus } from "lucide-react";
import toast from "react-hot-toast";
import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

export default function DetailActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveWorkout, isInPlan, isSaved, plan } = useFitLog();
  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  function handlePlan() {
    if (inPlan) return toast("Already in today's plan");
    if (plan.length >= 5) return toast.error("Today's plan is full (5 lifts max)");
    addToPlan(workout);
    toast.success("Added to today's plan");
  }

  function handleSave() {
    if (saved) return toast("Already saved for later");
    saveWorkout(workout);
    toast.success("Saved for later");
  }

  return (
    <div className="mt-7 flex flex-wrap gap-2">
      <button onClick={handlePlan} disabled={inPlan} className="flex items-center gap-2 rounded-sm accent-bg px-4 py-2.5 text-[9px] font-black uppercase disabled:cursor-not-allowed disabled:opacity-60">
        {inPlan ? <Check size={13} /> : <Plus size={13} />} {inPlan ? "In today's plan" : "Add to today's plan"}
      </button>
      <button onClick={handleSave} disabled={saved} className="flex items-center gap-2 rounded-sm border border-[#353b45] px-4 py-2.5 text-[9px] font-black uppercase disabled:cursor-not-allowed disabled:opacity-60">
        {saved ? <Check size={13} /> : <Bookmark size={13} />} {saved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
