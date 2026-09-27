import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link href={`/workout/${workout.id}`} className="panel card-hover block overflow-hidden rounded-md">
      <div className="relative h-[150px] overflow-hidden bg-[#20242b] sm:h-[155px]">
        <ImageWithFallback src={workout.image} alt={workout.name} className="h-full w-full object-cover" />
      </div>
      <div className="p-3.5">
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.slice(0, 3).map((tag) => <span key={tag} className="rounded-sm accent-bg px-1.5 py-1 text-[7px] font-black uppercase">{tag}</span>)}
        </div>
        <h3 className="mt-2 text-[12px] font-black uppercase tracking-tight">{workout.name}</h3>
        <p className="mt-1 truncate text-[9px] text-[#7e8692]">{workout.equipment}</p>
        <div className="mt-3 flex items-center justify-between text-[8px] text-[#9299a5]">
          <span className="flex items-center gap-1"><Clock3 size={11} /> {workout.duration} min</span>
          <span className="flex items-center gap-1"><Flame size={11} /> {workout.caloriesBurned} kcal</span>
          <span className="flex items-center gap-1"><Star size={11} /> {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
