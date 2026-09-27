import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 border-t border-[#1d2128] px-6 py-7 text-[10px] text-[#858c97] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 font-black text-white">
        <span className="grid h-5 w-5 place-items-center rounded-sm accent-bg"><Dumbbell size={11} strokeWidth={3} /></span>
        FITLOG
      </div>
      <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </footer>
  );
}
