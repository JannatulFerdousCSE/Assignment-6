"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Workout } from "@/types/workout";

const PLAN_KEY = "fitlog-todays-plan";
const SAVED_KEY = "fitlog-saved-workouts";

export type FitLogContextValue = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => boolean;
  saveWorkout: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  markDone: (id: number) => void;
};

const FitLogContext = createContext<FitLogContextValue | null>(null);

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  useEffect(() => {
    try {
      const savedPlan = localStorage.getItem(PLAN_KEY);
      const savedItems = localStorage.getItem(SAVED_KEY);
      if (savedPlan) setPlan(JSON.parse(savedPlan));
      if (savedItems) setSaved(JSON.parse(savedItems));
    } catch {
      localStorage.removeItem(PLAN_KEY);
      localStorage.removeItem(SAVED_KEY);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved]);

  const value = useMemo<FitLogContextValue>(() => ({
    plan,
    saved,
    addToPlan: (workout) => {
      if (plan.length >= 5 || plan.some((item) => item.id === workout.id)) return false;
      setPlan((current) => [...current, workout]);
      return true;
    },
    saveWorkout: (workout) => {
      if (saved.some((item) => item.id === workout.id)) return false;
      setSaved((current) => [...current, workout]);
      return true;
    },
    removeFromPlan: (id) => setPlan((current) => current.filter((item) => item.id !== id)),
    removeFromSaved: (id) => setSaved((current) => current.filter((item) => item.id !== id)),
    isInPlan: (id) => plan.some((item) => item.id === id),
    isSaved: (id) => saved.some((item) => item.id === id),
    markDone: (id) => setPlan((current) => current.filter((item) => item.id !== id))
  }), [plan, saved]);

  return <FitLogContext.Provider value={value}>{children}</FitLogContext.Provider>;
}

export function useFitLog() {
  const context = useContext(FitLogContext);
  if (!context) throw new Error("useFitLog must be used inside FitLogProvider");
  return context;
}
