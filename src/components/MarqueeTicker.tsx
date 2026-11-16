"use client";

import { Orbit, Rocket, Sparkles } from "lucide-react";

export default function MarqueeTicker() {
  const words = [
    "AERO-ASTRO INTELLIGENCE",
    "SPACE ROCKETRY & PROPULSION",
    "AUTONOMOUS UAV & UGV SYSTEMS",
    "ROBOTIC PERCEPTION & ADAPTIVE CONTROL",
    "CGPA 4.97 / 5.00 VALEDICTORIAN",
    "REINFORCEMENT LEARNING",
    "SPE PUBLISHED AUTHOR",
    "ROS2 & GAZEBO DYNAMICS",
    "ASME SCHOLAR",
  ];

  return (
    <div className="relative py-7 bg-space-dark/80 border-y border-cyan-500/15 overflow-hidden my-12 select-none backdrop-blur-md">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-space-void to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-space-void to-transparent z-10" />

      {/* Marquee Row */}
      <div className="flex w-max animate-marquee">
        {[...words, ...words].map((word, i) => (
          <div
            key={i}
            className="flex items-center gap-6 mx-6 text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-400 uppercase hover:text-cyan-300 transition-colors"
          >
            <span>{word}</span>
            <Rocket className="w-3.5 h-3.5 text-cyan-400/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
