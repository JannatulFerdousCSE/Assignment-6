import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="accent text-[10px] font-black uppercase tracking-[.25em]">404</p>
      <h1 className="display-font mt-3 text-5xl">WORKOUT NOT FOUND</h1>
      <p className="mt-3 max-w-md text-xs text-[#7e8692]">This route does not exist. Head back to the library and choose a workout.</p>
      <Link href="/" className="mt-6 rounded-sm accent-bg px-5 py-3 text-[9px] font-black uppercase">Back to workouts</Link>
    </main>
  );
}
