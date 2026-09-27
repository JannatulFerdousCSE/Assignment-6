import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const heroImage = "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740";

export default function Hero() {
  return (
    <section className="mx-5 mt-5 overflow-hidden rounded-lg border border-[#242933] bg-[#15181e] sm:mx-7">
      <div className="grid min-h-[300px] grid-cols-1 md:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col justify-center px-6 py-10 sm:px-9">
          <span className="mb-3 text-[9px] font-black tracking-[.22em] text-[#aeb5bf]">WORKOUT LIBRARY</span>
          <h1 className="display-font max-w-[620px] text-4xl leading-[.94] sm:text-5xl md:text-6xl">
            TRAIN WITH INTENT.<br />LOG EVERY SET.
          </h1>
          <p className="mt-5 max-w-[530px] text-[11px] leading-5 text-[#8e96a3]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link href="#library" className="mt-6 flex w-fit items-center gap-2 rounded-sm accent-bg px-4 py-2.5 text-[9px] font-black uppercase tracking-wider">
            Browse workouts <ArrowDownRight size={13} strokeWidth={3} />
          </Link>
        </div>
        <div className="relative min-h-[250px] overflow-hidden">
          <ImageWithFallback src={heroImage} alt="Workout illustration" className="absolute inset-0 h-full w-full object-cover object-center opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#15181e] via-transparent to-transparent md:w-1/2" />
        </div>
      </div>
    </section>
  );
}
