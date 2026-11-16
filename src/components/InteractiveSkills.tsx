"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Terminal, Sparkles, Orbit, Compass, Wrench } from "lucide-react";

interface Skill {
  name: string;
  category: "robotics-uav" | "ai-ml" | "cad-cae" | "aerospace";
  level: string;
  highlight?: boolean;
}

const skillsData: Skill[] = [
  // Robotics & Embedded
  { name: "ROS2 & Gazebo Simulation", category: "robotics-uav", level: "Aurora Robotics", highlight: true },
  { name: "UAV Prototyping & Flight Control", category: "robotics-uav", level: "SkyClerk Lead", highlight: true },
  { name: "Sensor Integration & Telemetry", category: "robotics-uav", level: "Advanced", highlight: true },
  { name: "Arduino & ESP32 Microcontrollers", category: "robotics-uav", level: "Expert", highlight: true },
  { name: "C++ & Embedded Systems", category: "robotics-uav", level: "Advanced" },
  { name: "Wokwi & Proteus Simulation", category: "robotics-uav", level: "Proficient" },

  // AI & Machine Learning
  { name: "Python (NumPy, Pandas, Scikit)", category: "ai-ml", level: "AltSchool Diploma", highlight: true },
  { name: "Deep Learning (NVIDIA Certified)", category: "ai-ml", level: "NVIDIA Certificate", highlight: true },
  { name: "Reinforcement & Adaptive Control", category: "ai-ml", level: "Research Interest", highlight: true },
  { name: "Computer Vision & Multimodal AI", category: "ai-ml", level: "Advanced", highlight: true },
  { name: "Google Gemini & LLM Pipelines", category: "ai-ml", level: "OPay NICA 2026" },
  { name: "MATLAB & Simulink", category: "ai-ml", level: "Advanced" },

  // CAD / CAE & Prototyping
  { name: "Onshape CAD (35 Certifications)", category: "cad-cae", level: "Certified Pro", highlight: true },
  { name: "ANSYS (CFD & Structural Analysis)", category: "cad-cae", level: "SPE Published", highlight: true },
  { name: "SolidWorks & AutoCAD", category: "cad-cae", level: "Advanced" },
  { name: "BambuLab 3D Printing & CNC", category: "cad-cae", level: "Innovia Labs R&D", highlight: true },
  { name: "OpenRocket Modeling", category: "cad-cae", level: "Proficient" },

  // Aerospace & Physics Fundamentals
  { name: "Flight & Rotor Dynamics", category: "aerospace", level: "LASU Valedictorian", highlight: true },
  { name: "Aerodynamics & Propulsion", category: "aerospace", level: "NASRDA / LASU", highlight: true },
  { name: "Orbital Mechanics", category: "aerospace", level: "Space Clubs Lead" },
  { name: "Computational Fluid Dynamics", category: "aerospace", level: "SPE-235078-MS", highlight: true },
];

export default function InteractiveSkills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const categories = [
    { id: "all", label: "Complete Arsenal", icon: Sparkles },
    { id: "robotics-uav", label: "Robotics & UAVs", icon: Cpu },
    { id: "ai-ml", label: "AI & Machine Learning", icon: Terminal },
    { id: "cad-cae", label: "CAD / CAE & 3D Print", icon: Wrench },
    { id: "aerospace", label: "Aerospace Fundamentals", icon: Orbit },
  ];

  return (
    <section id="skills" className="relative py-28 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
          // Technical Capabilities
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Interactive Skill &amp; Tooling Matrix
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl text-sm sm:text-base">
          Interactive &amp; draggable badges spanning robotics, aerospace engineering, deep learning, and digital manufacturing. Try dragging any badge!
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
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                {skill.category.replace("-", " ")}
              </span>
              <span
                className={`h-2 w-2 rounded-full ${
                  skill.highlight
                    ? "bg-emerald-400 shadow-[0_0_8px_#10B981]"
                    : "bg-zinc-600"
                }`}
              />
            </div>
            <div className="mt-3 text-sm sm:text-base font-semibold text-white tracking-tight">
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
