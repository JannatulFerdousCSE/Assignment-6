import type { Workout } from "@/types/workout";

export const API_URL = "https://api.abcz.workers.dev/api/fitlog";
export const FALLBACK_API_URL = "https://api.api-store.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  try {
    const response = await fetch(API_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Primary API failed");
    return response.json();
  } catch {
    const response = await fetch(FALLBACK_API_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Workout API failed");
    return response.json();
  }
}

export async function getWorkout(id: string | number): Promise<Workout | undefined> {
  const workouts = await getWorkouts();
  return workouts.find((workout) => workout.id === Number(id));
}
