"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { ArrowDown, Award, BookOpen, ExternalLink, FileText, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  const floatingTags = [
    { label: "🚀 Aerospace Robotics", x: -160, y: -40, delay: 0 },
    { label: "🧠 Autonomous UAV/UGV", x: 160, y: -50, delay: 0.2 },
    { label: "🛰️ Aero-Astro Intelligence", x: -180, y: 70, delay: 0.4 },
    { label: "⚡ Reinforcement Learning", x: 170, y: 60, delay: 0.6 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Background Glows (Terra Industries aura) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 glass-panel border-emerald-500/25 mb-8 shadow-[0_0_24px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium tracking-wide text-zinc-300">
            First-Class Aerospace Engineer &bull; Seeking Graduate Research in Robotic Perception &amp; Control
          </span>
        </motion.div>

        {/* Dual Layout: Portrait + Headline */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 my-4">
          {/* Portrait with 3D Tilt Aura (DevFest / Terra style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group shrink-0"
          >
            {/* Ambient backlight ring */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-teal-400 opacity-60 blur-lg group-hover:opacity-100 transition duration-500" />

            <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 rounded-3xl overflow-hidden border-2 border-white/20 bg-surface-100 shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
              <Image
                src="/images/samuel-adebanjo.jpg"
                alt="Samuel Oluolamide Adebanjo"
                fill
                sizes="(max-width: 768px) 208px, 240px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Floating Top 100 Leader Stamp */}
            <div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-surface-50 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
              <Award className="w-3 h-3 text-emerald-400" />
              <span>4.97 / 5.00 CGPA</span>
            </div>
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Adebanjo
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="mt-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed"
            >
              Pioneering <span className="text-white font-medium">Aero-Astro Intelligence</span> — integrating robotics, autonomous UAV/UGV platforms, deep learning, and adaptive control logic to solve aerospace and infrastructure challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-zinc-400"
            >
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                Overall Best Graduating Student (LASU 2026)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                Top 100 African Future Leaders
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                ASME Scholar
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
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 px-7 py-3.5 text-sm font-semibold text-black transition-all shadow-[0_0_24px_rgba(16,185,129,0.35)] hover:shadow-[0_0_36px_rgba(16,185,129,0.5)]"
            >
              <span>Explore Aero-Astro Research</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </MagneticButton>

          <MagneticButton strength={25}>
            <a
              href="https://github.com/Oluola4002"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full glass-panel hover:bg-zinc-800/80 border-zinc-700/80 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-zinc-500"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>GitHub / Oluola4002</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </MagneticButton>

          <MagneticButton strength={25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-panel hover:bg-zinc-800/80 border-zinc-700/80 px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white transition-all"
            >
              <span>Contact Samuel</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Metrics Bar with Real CV Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-zinc-800/80 pt-8 w-full max-w-4xl"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
              4.97 / 5.00
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
              LASU Valedictorian Record
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
              SPE Published
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
              Lead Author (SPE-235104-MS)
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
              SkyClerk Lead
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
              Autonomous Delivery UAV
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">
              ASME $2,500
            </div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
              Hoffmann Merit Award
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
