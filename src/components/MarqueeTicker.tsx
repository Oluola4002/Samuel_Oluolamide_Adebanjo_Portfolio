"use client";

import { Sparkles } from "lucide-react";

export default function MarqueeTicker() {
  const words = [
    "AERO-ASTRO INTELLIGENCE",
    "AUTONOMOUS UAV & UGV",
    "ROBOTIC PERCEPTION & CONTROL",
    "CGPA 4.97 / 5.00 VALEDICTORIAN",
    "REINFORCEMENT LEARNING",
    "SPE PUBLISHED AUTHOR",
    "ROS2 & GAZEBO FLIGHT DYNAMICS",
    "ASME SCHOLAR",
    "DEEP TECH R&D",
  ];

  return (
    <div className="relative py-7 bg-surface-50 border-y border-white/5 overflow-hidden my-12 select-none">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee Row */}
      <div className="flex w-max animate-marquee">
        {[...words, ...words].map((word, i) => (
          <div
            key={i}
            className="flex items-center gap-6 mx-6 text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-400 uppercase hover:text-emerald-400 transition-colors"
          >
            <span>{word}</span>
            <Sparkles className="w-3.5 h-3.5 text-emerald-400/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
