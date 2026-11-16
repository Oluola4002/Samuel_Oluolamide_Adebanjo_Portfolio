"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import HeroImageSlideshow from "./HeroImageSlideshow";
import { ArrowDown, ExternalLink, Rocket, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Deep Space Cosmic Auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-16 right-10 w-[400px] h-[400px] bg-sky-600/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Availability / Trajectory Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 glass-pill border-cyan-500/30 mb-8 shadow-[0_0_24px_rgba(0,229,255,0.2)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
          </span>
          <span className="text-xs font-mono font-medium tracking-wide text-cyan-200">
            First-Class Aerospace Engineer &bull; Valedictorian &bull; Seeking Graduate Research in Robotic Autonomy
          </span>
        </motion.div>

        {/* Dual Layout: Interactive Portrait Slideshow + Headline */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 my-4">
          {/* Animated Personal Photos Slideshow (No caricature) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HeroImageSlideshow />
          </motion.div>

          {/* Headline Text */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]"
            >
              Samuel Oluolamide{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Adebanjo
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed"
            >
              Pioneering <span className="text-white font-medium">Aero-Astro Intelligence</span> — integrating deep space rocketry principles, autonomous aerial UAVs, ground robotics, and adaptive machine learning to solve critical aerospace and planetary infrastructure challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-zinc-400"
            >
              <span className="px-2.5 py-1 rounded-md bg-blue-950/50 border border-cyan-500/30 text-cyan-300">
                Overall Best Graduating Student (LASU 2026)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-blue-950/50 border border-blue-500/30 text-sky-300">
                Top 100 African Future Leaders
              </span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
                ASME Scholar ($2,500)
              </span>
            </motion.div>
          </div>
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
              href="#research"
              data-cursor="project"
              data-cursor-text="RESEARCH"
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 px-7 py-3.5 text-sm font-semibold text-black transition-all shadow-[0_0_24px_rgba(0,229,255,0.4)] hover:shadow-[0_0_36px_rgba(0,229,255,0.6)]"
            >
              <Rocket className="w-4 h-4 text-black group-hover:-translate-y-0.5 transition-transform" />
              <span>Explore Aero-Astro Research</span>
              <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
            </a>
          </MagneticButton>

          <MagneticButton strength={25}>
            <a
              href="https://github.com/Oluola4002"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full glass-panel hover:bg-space-navy border-cyan-500/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan-400"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>GitHub / Oluola4002</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </MagneticButton>

          <MagneticButton strength={25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-panel hover:bg-space-navy border-white/10 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-all"
            >
              <span>Contact Samuel</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Metrics Bar with Space Telemetry Numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-blue-900/40 pt-8 w-full max-w-4xl"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
              4.97 / 5.00
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
              LASU Valedictorian Record
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
              SPE Published
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
              Lead Author (SPE-235104-MS)
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-sky-400">
              SkyClerk Drone
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
              Autonomous UAV Lead
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-blue-400">
              NASRDA CSTP
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
              Rocket Propulsion R&amp;D
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
