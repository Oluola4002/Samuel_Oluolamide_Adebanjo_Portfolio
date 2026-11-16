"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Cpu, ExternalLink, Layers, Orbit, Radio, Shield, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function AeroAstroFeature() {
  const pillars = [
    {
      title: "Aerospace Systems",
      desc: "UAV airframe integration, propulsion optimization, flight dynamics, and 3D aerodynamic CFD simulations.",
      icon: Orbit,
      accent: "text-blue-400",
    },
    {
      title: "Autonomous Robotics",
      desc: "End-to-end mission flow, ROS2, Gazebo physics, multi-sensor perception, and obstacle avoidance logic.",
      icon: Cpu,
      accent: "text-emerald-400",
    },
    {
      title: "Sensor-Driven Autonomy",
      desc: "Telemetry fusion, payload bay design, voice-controlled servos, and real-time flight mission dashboards.",
      icon: Radio,
      accent: "text-cyan-400",
    },
    {
      title: "Adaptive Machine Learning",
      desc: "Reinforcement learning for dynamic environments, hybrid CFD-ML leak detection, and edge AI compute.",
      icon: Sparkles,
      accent: "text-amber-400",
    },
  ];

  return (
    <section id="research" className="relative py-28 px-4 max-w-6xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-emerald-600/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      {/* Main Glass Showcase Card */}
      <div className="relative z-10 glass-panel rounded-3xl p-8 sm:p-14 border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        {/* Header row with AeroAstroIntelligence Logo Banner */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              // Pioneering Research Direction
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Aero-Astro Intelligence
            </h2>
            <p className="mt-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
              A self-developed research framework fusing artificial intelligence, aerial drones (UAVs), and ground robotics (UGVs) to solve complex aerospace, critical infrastructure, and planetary exploration challenges.
            </p>
          </div>

          {/* Official AeroAstroIntelligence Image Banner */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-full max-w-md h-36 sm:h-44 rounded-2xl bg-black/80 border border-white/15 p-4 flex items-center justify-center shadow-[0_0_30px_rgba(0,245,155,0.15)] group"
          >
            <Image
              src="/images/aeroastro-intelligence.png"
              alt="AeroAstro Intelligence - Aerospace Robotics Autonomy AI"
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* The 4 Core Pillars */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-surface-100/80 border border-white/5 hover:border-emerald-500/30 transition-colors group"
              >
                <div className={`p-3 rounded-xl bg-white/5 w-fit ${pillar.accent} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Published Papers Highlight (SPE NAICE 2026) */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                // Peer-Reviewed Literature
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Published Research &amp; Conference Papers
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-zinc-600">&bull;</span>
              <a
                href="https://researchgate.net"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-zinc-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
              >
                <span>ResearchGate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Paper 1 */}
            <div className="p-6 rounded-2xl bg-surface-200/60 border border-emerald-500/20 hover:border-emerald-400/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>SPE-235104-MS &bull; Lead Author</span>
              </div>
              <h4 className="text-sm font-bold text-white leading-snug">
                Integrated Aero-Astro Intelligence Framework for Real-Time Pipeline Monitoring and Predictive Maintenance in Oil &amp; Gas
              </h4>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Authored in collaboration with Assoc. Prof. Dr. O. T. Olakoyejo (UNILAG). Proposed a 6-layer unified architecture combining UAVs and UGVs with AI-driven analytics, reviewing 60 literature sources. Presented at NAICE 2026.
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>DOI: 10.2118/235104-MS</span>
                <span className="text-emerald-400">Society of Petroleum Engineers</span>
              </div>
            </div>

            {/* Paper 2 */}
            <div className="p-6 rounded-2xl bg-surface-200/60 border border-white/10 hover:border-white/25 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>SPE-235078-MS &bull; Co-Author</span>
              </div>
              <h4 className="text-sm font-bold text-white leading-snug">
                Building a Hybrid Computational Fluid Dynamics &ndash; Machine Learning Framework for Real-Time Pipeline Leak Detection
              </h4>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Companion study integrating high-fidelity ANSYS CFD fluid dynamics models with predictive ML algorithms for rapid anomaly detection across pressurized transport networks.
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>DOI: 10.2118/235078-MS</span>
                <span className="text-cyan-400">SPE NAICE 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
