"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

interface Project {
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  metrics: string;
}

const projects: Project[] = [
  {
    title: "SkyClerk Autonomous Delivery Drone",
    category: "Aerial Robotics & UAV Systems",
    tagline: "End-to-end autonomous UAV for secure document & physical asset transport",
    description:
      "Team lead and researcher at Lagos State University. Designed the complete mission flow (loading, takeoff, waypoint navigation, landing, offloading, return-to-base). Built telemetry dashboard, 3D-printed cargo bay, and flight controller integration.",
    tags: ["ROS2", "UAV Autonomy", "ESP32", "CAD / Onshape", "Telemetry", "Full-Stack Dashboard"],
    githubUrl: "https://github.com/Oluola4002",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "100% Autonomous Mission Profile / 3D-Printed Airframe",
  },
  {
    title: "AeroAgroPay — OPay NICA 2026",
    category: "Decentralized Drone Agritech & AI",
    tagline: "Pay-as-you-go drone precision spraying with Google Gemini AI",
    description:
      "Team Lead for OPay NICA 2026 submission. Cyber-physical drone architecture (ESP32, PWM motor control, solenoid sprayers) paired with Google Gemini-powered NDVI crop-yield scanning to generate alternative credit scoring for unbanked Nigerian smallholder farmers.",
    tags: ["Google Gemini AI", "ESP32", "Computer Vision / NDVI", "OPay USSD", "AgriTech"],
    githubUrl: "https://github.com/Oluola4002",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "OPay NICA 2026 Finalist Project / Gemini AI Pipeline",
  },
  {
    title: "Roboimọtótó & Smart Autonomous Systems",
    category: "Voice-Controlled Mobile Robotics",
    tagline: "Voice-actuated autonomous mobile patrol sanitation robot",
    description:
      "Robotic vehicle patrol platform equipped with a servo-controlled lid actuated by direct voice commands ('Open' / 'Close') and obstacle-avoidance ultrasonic sensors, demonstrating multimodal human-robot interaction.",
    tags: ["Speech Recognition", "Robotics", "Arduino / C++", "Ultrasonic Sensors", "HRI"],
    githubUrl: "https://github.com/Oluola4002",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "Voice-Actuated Real-Time HRI / Ultrasonic Obstacle Avoidance",
  },
  {
    title: "Hybrid CFD-ML Real-Time Pipeline Leak Detector",
    category: "Computational Physics & Machine Learning",
    tagline: "High-fidelity fluid dynamics combined with predictive neural networks",
    description:
      "Coupled ANSYS Computational Fluid Dynamics (CFD) with predictive machine learning algorithms to model pressurized pipeline transients and pinpoint microscopic leaks in sub-second latency.",
    tags: ["ANSYS Fluent", "Python", "Machine Learning", "CFD", "Predictive Analytics"],
    githubUrl: "https://github.com/Oluola4002",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "Peer-Reviewed (SPE-235078-MS) / NAICE 2026",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    damping: 20,
    stiffness: 250,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    damping: 20,
    stiffness: 250,
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      data-cursor="project"
      data-cursor-text="INSPECT"
      className="relative group rounded-3xl bg-surface-100/90 border border-white/10 p-7 sm:p-10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-colors hover:border-emerald-500/40"
    >
      {/* Dynamic Cursor Spotlight inside Card (Terra Industries signature) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.12), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              // 0{index + 1} &bull; {project.category}
            </span>
            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                title="View GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                title="Explore Details"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-zinc-300">
            {project.tagline}
          </p>

          <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/90 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.metrics}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative py-28 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
            // Engineering Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Robotics, AI &amp; Autonomous Systems
          </h2>
        </div>
        <p className="text-zinc-400 max-w-md text-sm sm:text-base">
          Physical cyber-systems, aerial UAVs, machine perception pipelines, and deep-tech prototypes engineered for real-world reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
