"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function MarqueeTicker() {
  const words = [
    "FULL-STACK ENGINEERING",
    "FLUID MICRO-INTERACTIONS",
    "NEXT.JS & REACT 19",
    "PERFORMANCE FIRST",
    "SYSTEM ARCHITECTURE",
    "60 FPS EXPERIENCES",
    "ACCESSIBLE BY DESIGN",
    "MODERN DEV OPS",
  ];

  return (
    <div className="relative py-8 bg-surface-50 border-y border-white/5 overflow-hidden my-16 select-none">
      {/* Subtle edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee Row */}
      <div className="flex w-max animate-marquee">
        {[...words, ...words].map((word, i) => (
          <div
            key={i}
            className="flex items-center gap-6 mx-6 text-sm sm:text-base font-mono font-bold tracking-widest text-zinc-500 uppercase hover:text-emerald-400 transition-colors"
          >
            <span>{word}</span>
            <Sparkles className="w-3.5 h-3.5 text-emerald-400/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
