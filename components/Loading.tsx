export default function Loading({ label = "Loading workouts…" }: { label?: string }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-4 text-xs text-[#8b929f]">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-[#343a44] border-t-[#ccff00]" />
      {label}
    </div>
  );
}
