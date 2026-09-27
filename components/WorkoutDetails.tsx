import { Clock3, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";
import DetailActions from "@/components/DetailActions";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function WorkoutDetails({ workout }: { workout: Workout }) {
  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", String(workout.sets)],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating.toFixed(1)]
  ];

  return (
    <main className="px-5 py-7 sm:px-7 sm:py-10">
      <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
        <div className="overflow-hidden rounded-md border border-[#2a3039] bg-[#15181e] lg:sticky lg:top-5 lg:h-fit">
          <ImageWithFallback src={workout.image} alt={workout.name} className="aspect-square h-full w-full object-cover" />
        </div>

        <div className="py-1">
          <h1 className="display-font text-3xl leading-none sm:text-5xl">{workout.name}</h1>
          <p className="mt-3 max-w-2xl text-[11px] leading-5 text-[#8a929e]">{workout.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {workout.muscleGroups.map((tag) => <span key={tag} className="rounded-sm accent-bg px-2 py-1 text-[8px] font-black uppercase">{tag}</span>)}
          </div>

          <div className="mt-6 overflow-hidden rounded-md border border-[#262c35] bg-[#11141a]">
            {specs.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[1fr_auto] border-b border-[#242a33] px-4 py-3 last:border-0">
                <span className="text-[8px] font-black uppercase tracking-widest text-[#727a86]">{label}</span>
                <span className="text-right text-[9px] font-bold text-[#d9dde2]">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <h2 className="text-[10px] font-black uppercase tracking-[.18em]">Instructions</h2>
            <ol className="mt-3 space-y-3">
              {workout.instructions.map((instruction, index) => (
                <li key={instruction} className="flex gap-3 text-[10px] leading-4 text-[#939aa5]">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#363c47] text-[8px] font-bold text-[#dce0e4]">{index + 1}</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-5 flex flex-wrap gap-5 text-[9px] text-[#8d95a1]">
            <span className="flex items-center gap-1"><Clock3 size={12} /> {workout.duration} min</span>
            <span className="flex items-center gap-1"><Flame size={12} /> {workout.caloriesBurned} kcal</span>
            <span className="flex items-center gap-1"><Star size={12} /> {workout.rating}</span>
          </div>

          <DetailActions workout={workout} />
        </div>
      </div>
    </main>
  );
}
