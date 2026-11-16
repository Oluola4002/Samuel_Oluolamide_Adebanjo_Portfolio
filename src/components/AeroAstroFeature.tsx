"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Cpu, ExternalLink, Orbit, Radio, Rocket, Sparkles } from "lucide-react";

export default function AeroAstroFeature() {
  const pillars = [
    {
      title: "Space Rocketry & Propulsion",
      desc: "Trained across 7 departments at NASRDA CSTP: solid/liquid rocket propulsion, combustion mechanics, and trajectory dynamics.",
      icon: Rocket,
      accent: "text-red-400",
    },
    {
      title: "Autonomous Aerial & Ground Robotics",
      desc: "End-to-end mission flow, ROS2, Gazebo physics, multi-sensor perception, and obstacle avoidance logic for UAVs and UGVs.",
      icon: Cpu,
      accent: "text-cyan-400",
    },
    {
      title: "Planetary & Critical Infrastructure",
      desc: "Pioneering robotic systems for monitoring extreme pipelines, habitat maintenance beyond Earth, and autonomous remote survey.",
      icon: Orbit,
      accent: "text-blue-400",
    },
    {
      title: "Adaptive Machine Learning & Control",
      desc: "Reinforcement learning for dynamic environments, hybrid CFD-ML leak detection, and edge computing algorithms.",
      icon: Sparkles,
      accent: "text-sky-400",
    },
  ];

  return (
    <section id="research" className="relative py-28 px-4 max-w-6xl mx-auto">
      {/* Background Cosmic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-blue-700/15 via-cyan-600/15 to-transparent blur-[160px] pointer-events-none rounded-full" />

      {/* Main Glass Showcase Card */}
      <div className="relative z-10 glass-panel rounded-3xl p-8 sm:p-14 border-cyan-500/20 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Header row with AeroAstroIntelligence Logo Banner */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-blue-900/40">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 block flex items-center justify-center lg:justify-start gap-1.5">
              <Rocket className="w-3.5 h-3.5 text-cyan-400" />
              <span>// Pioneering Research Direction</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Aero-Astro Intelligence
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              A self-developed research framework uniting aerospace engineering, space rocketry, autonomous UAVs/UGVs, and artificial intelligence to solve challenges on Earth and across planetary frontiers.
            </p>
          </div>

          {/* Official AeroAstroIntelligence Image Banner */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-full max-w-md h-36 sm:h-44 rounded-2xl bg-space-void/90 border border-cyan-500/30 p-4 flex items-center justify-center shadow-[0_0_35px_rgba(0,229,255,0.2)] group"
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
                className="p-6 rounded-2xl bg-space-navy/60 border border-blue-900/30 hover:border-cyan-500/40 transition-colors group"
              >
                <div className={`p-3 rounded-xl bg-white/5 w-fit ${pillar.accent} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Published Papers Highlight */}
        <div className="mt-12 pt-10 border-t border-blue-900/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
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
                className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href="https://researchgate.net"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
              >
                <span>ResearchGate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Paper 1 */}
            <div className="p-6 rounded-2xl bg-space-navy/80 border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>SPE-235104-MS &bull; Lead Author</span>
              </div>
              <h4 className="text-sm font-bold text-white leading-snug">
                Integrated Aero-Astro Intelligence Framework for Real-Time Pipeline Monitoring and Predictive Maintenance in Oil &amp; Gas
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Authored in collaboration with Assoc. Prof. Dr. O. T. Olakoyejo (UNILAG). Proposed a 6-layer unified architecture combining UAVs and UGVs with AI-driven analytics, reviewing 60 literature sources. Presented at NAICE 2026.
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>DOI: 10.2118/235104-MS</span>
                <span className="text-cyan-400 font-semibold">Society of Petroleum Engineers</span>
              </div>
            </div>

            {/* Paper 2 */}
            <div className="p-6 rounded-2xl bg-space-navy/80 border border-blue-500/25 hover:border-blue-400 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>SPE-235078-MS &bull; Co-Author</span>
              </div>
              <h4 className="text-sm font-bold text-white leading-snug">
                Building a Hybrid Computational Fluid Dynamics &ndash; Machine Learning Framework for Real-Time Pipeline Leak Detection
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Companion study integrating high-fidelity ANSYS CFD fluid dynamics models with predictive ML algorithms for rapid anomaly detection across pressurized transport networks.
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>DOI: 10.2118/235078-MS</span>
                <span className="text-sky-400 font-semibold">SPE NAICE 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
