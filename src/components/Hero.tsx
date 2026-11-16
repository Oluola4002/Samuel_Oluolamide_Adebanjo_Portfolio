"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowDown, Code2, Globe, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  const floatingTags = [
    { label: "⚡ Next.js & React", x: -140, y: -40, delay: 0 },
    { label: "🎨 Creative Interactions", x: 140, y: -60, delay: 0.2 },
    { label: "🚀 Scalable Architectures", x: -160, y: 80, delay: 0.4 },
    { label: "✨ High-Performance UX", x: 150, y: 70, delay: 0.6 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Glows (Terra Industries aura) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 glass-panel border-emerald-500/20 mb-8 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium tracking-wide text-zinc-300">
            Available for new opportunities &amp; partnerships
          </span>
        </motion.div>

        {/* Big Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05]"
        >
          Samuel Oluolamide{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Adebanjo
          </span>
        </motion.h1>

        {/* Subtitle / Role Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed"
        >
          Software Engineer &amp; Creative Technologist crafting high-octane web
          applications, fluid micro-interactions, and resilient systems.
        </motion.p>

        {/* DevFest-Style Floating Interaction Badges */}
        <div className="hidden lg:block relative w-full h-12 my-4 pointer-events-none">
          {floatingTags.map((tag, idx) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                delay: 0.4 + tag.delay,
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                left: `calc(50% + ${tag.x}px)`,
                top: `${tag.y}px`,
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-zinc-900/80 border border-zinc-700/60 text-zinc-300 shadow-lg pointer-events-auto cursor-grab hover:border-emerald-400/50 hover:text-white transition-colors"
            >
              {tag.label}
            </motion.div>
          ))}
        </div>

        {/* CTAs with Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton strength={25}>
            <a
              href="#projects"
              data-cursor="project"
              data-cursor-text="VIEW"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 px-7 py-3.5 text-sm font-semibold text-black transition-all shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_36px_rgba(16,185,129,0.5)]"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </MagneticButton>

          <MagneticButton strength={25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full glass-panel hover:bg-zinc-800/80 border-zinc-700/80 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-zinc-500"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Get in Touch</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-zinc-800/80 pt-8 w-full max-w-3xl"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
              100%
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
              Performance Core
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
              &lt; 50ms
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
              Fluid Animation Speed
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
              Modern
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
              Component Systems
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">
              Global
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
              Scale &amp; Accessibility
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
