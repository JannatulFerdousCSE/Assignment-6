"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();
  const activePlan = pathname === "/my-plan";

  return (
    <header className="border-b border-[#1d2128] bg-[#090b0e]">
      <div className="flex min-h-[64px] items-center justify-between gap-4 px-5 sm:px-7">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-black tracking-tight">
          <span className="grid h-6 w-6 place-items-center rounded-sm accent-bg"><Dumbbell size={14} strokeWidth={3} /></span>
          <span className="text-sm">FITLOG</span>
        </Link>

        <nav className="hidden items-center gap-7 text-[10px] font-bold uppercase tracking-wider text-[#8d94a0] sm:flex">
          <Link href="/" className={!activePlan ? "text-white" : "hover:text-white"}>Workouts</Link>
          <Link href="/my-plan" className={activePlan ? "rounded-full accent-bg px-3 py-1.5" : "hover:text-white"}>My Plan</Link>
        </nav>

        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider">
          <Link href="/my-plan?tab=plan" className="flex items-center gap-1.5 rounded-full accent-bg px-2.5 py-1.5">
            Plan <span className="grid h-4 min-w-4 place-items-center rounded-full bg-black/15 px-1">{plan.length}</span>
          </Link>
          <Link href="/my-plan?tab=saved" className="flex items-center gap-1.5 rounded-full border border-[#303640] px-2.5 py-1.5 text-[#d6dae0]">
            Saved <span>{saved.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
