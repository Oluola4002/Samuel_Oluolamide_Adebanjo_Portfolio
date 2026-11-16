"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface Project {
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  metrics: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "OmniFlow Cloud Platform",
    category: "Full-Stack & Cloud Architecture",
    tagline: "Autonomous distributed task orchestrator with real-time telemetry",
    description:
      "Engineered an enterprise-grade cloud management system with sub-10ms event streams, real-time node analytics, and zero-downtime microservice deployments.",
    tags: ["Next.js 14", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "Tailwind"],
    githubUrl: "https://github.com/samuel-adebanjo",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "10k+ concurrent events / 99.99% uptime",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Aura Creative Studio",
    category: "Creative Dev & WebGL",
    tagline: "Immersive 3D audio-visual web experience with fluid interactions",
    description:
      "A high-fidelity digital portal featuring custom GLSL shaders, spring-based cursor tracking, and procedural audio synthesis designed for creative agencies.",
    tags: ["React", "Three.js", "Framer Motion", "GLSL", "Web Audio API"],
    githubUrl: "https://github.com/samuel-adebanjo",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "60 FPS rendering / Awwwards Nominee style",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Apex FinTech Engine",
    category: "High-Frequency Payments",
    tagline: "Multi-currency settlement and liquidity aggregation dashboard",
    description:
      "Developed a resilient financial telemetry engine handling cross-border payments, dynamic exchange rates, automated reconciliation, and biometric 2FA authentication.",
    tags: ["Next.js", "Node.js", "Redis", "Prisma", "Tailwind", "Stripe API"],
    githubUrl: "https://github.com/samuel-adebanjo",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "$2M+ simulated transactions processed",
    accent: "from-amber-500/20 to-rose-500/10",
  },
  {
    title: "DevSync Collaborative IDE",
    category: "Realtime Collaboration",
    tagline: "Browser-based pair-programming workspace with CRDT sync",
    description:
      "Real-time code editor featuring operational transform conflict resolution, voice channels, sandboxed terminal runner, and syntax tree linting.",
    tags: ["TypeScript", "WebSockets", "Monaco Editor", "Yjs", "WebRTC"],
    githubUrl: "https://github.com/samuel-adebanjo",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "< 20ms cursor sync latency across clients",
    accent: "from-violet-500/20 to-purple-500/10",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking (Terra Industries 3D card physics)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    damping: 20,
    stiffness: 250,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    damping: 20,
    stiffness: 250,
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
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
      data-cursor-text="EXPLORE"
      className="relative group rounded-3xl bg-surface-100/90 border border-white/10 p-8 sm:p-10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-colors hover:border-emerald-500/40"
    >
      {/* Dynamic Cursor Spotlight inside Card (Terra Industries signature lighting) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.12), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Header Row */}
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
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-colors"
                title="Open Live Deployment"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-zinc-300">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Footer Area: Metrics & Tags */}
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
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
            // Featured Deployments
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Selected Works
          </h2>
        </div>
        <p className="text-zinc-400 max-w-md text-sm sm:text-base">
          Interactive creations built with precision, 60fps animations, scalable architectures, and seamless user experiences.
        </p>
      </div>

      {/* Grid of 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
