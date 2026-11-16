"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Terminal, Sparkles, Wrench, Database } from "lucide-react";

interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "ai-tools";
  level: string;
  highlight?: boolean;
}

const skillsData: Skill[] = [
  // Frontend
  { name: "React 18/19", category: "frontend", level: "Advanced", highlight: true },
  { name: "Next.js (App Router)", category: "frontend", level: "Expert", highlight: true },
  { name: "TypeScript", category: "frontend", level: "Advanced", highlight: true },
  { name: "Tailwind CSS", category: "frontend", level: "Expert", highlight: true },
  { name: "Framer Motion", category: "frontend", level: "Advanced", highlight: true },
  { name: "Three.js / WebGL", category: "frontend", level: "Intermediate" },
  { name: "HTML5 / Canvas / SVG", category: "frontend", level: "Expert" },

  // Backend
  { name: "Node.js & Express", category: "backend", level: "Advanced", highlight: true },
  { name: "Python / FastAPI", category: "backend", level: "Advanced" },
  { name: "PostgreSQL & Prisma", category: "backend", level: "Advanced", highlight: true },
  { name: "RESTful & GraphQL APIs", category: "backend", level: "Advanced" },
  { name: "Redis & Caching", category: "backend", level: "Proficient" },
  { name: "Supabase & Firebase", category: "backend", level: "Advanced" },

  // DevOps & Cloud
  { name: "Docker & Containerization", category: "devops", level: "Proficient" },
  { name: "CI/CD (GitHub Actions)", category: "devops", level: "Advanced" },
  { name: "Vercel & AWS", category: "devops", level: "Advanced", highlight: true },
  { name: "Linux / Shell Scripting", category: "devops", level: "Advanced" },

  // Tools & Modern Stack
  { name: "Git & Version Control", category: "ai-tools", level: "Expert" },
  { name: "System Architecture", category: "ai-tools", level: "Advanced", highlight: true },
  { name: "UI/UX & Figma", category: "ai-tools", level: "Advanced" },
  { name: "LLM & AI Integration", category: "ai-tools", level: "Proficient", highlight: true },
];

export default function InteractiveSkills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const categories = [
    { id: "all", label: "All Technologies", icon: Sparkles },
    { id: "frontend", label: "Frontend & UI", icon: Layers },
    { id: "backend", label: "Backend & Systems", icon: Database },
    { id: "devops", label: "Cloud & DevOps", icon: Terminal },
    { id: "ai-tools", label: "Architecture & Tools", icon: Cpu },
  ];

  return (
    <section id="skills" className="relative py-28 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
          // Capabilities &amp; Arsenal
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Interactive Skill Matrix
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl text-sm sm:text-base">
          Interactive &amp; draggable tech badges inspired by the playful ecosystem of DevFest.
          Try dragging any badge or filter by domain.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-full glass-panel border-white/5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "bg-emerald-400 text-black font-semibold shadow-[0_0_16px_rgba(16,185,129,0.4)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Draggable Interactive Badge Matrix (DevFest style) */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.name}
            layout
            drag
            dragConstraints={{ left: -15, right: 15, top: -15, bottom: 15 }}
            dragElastic={0.2}
            whileHover={{ scale: 1.05, y: -4 }}
            whileDrag={{ scale: 1.12, zIndex: 50, cursor: "grabbing" }}
            data-cursor="drag"
            data-cursor-text="DRAG"
            className={`cursor-grab select-none p-4 rounded-2xl transition-colors duration-200 ${
              skill.highlight
                ? "bg-gradient-to-br from-surface-100 to-surface-200 border border-emerald-500/30 hover:border-emerald-400 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                : "bg-surface-100/70 border border-white/5 hover:border-white/20"
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {skill.category}
              </span>
              <span
                className={`h-2 w-2 rounded-full ${
                  skill.highlight
                    ? "bg-emerald-400 shadow-[0_0_8px_#10B981]"
                    : "bg-zinc-600"
                }`}
              />
            </div>
            <div className="mt-3 text-base font-semibold text-white tracking-tight">
              {skill.name}
            </div>
            <div className="mt-2 text-[11px] font-mono text-emerald-400/90">
              {skill.level}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
