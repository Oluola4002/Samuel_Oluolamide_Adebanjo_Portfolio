"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
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
  image?: string;
  images?: string[];
  imageAlt?: string;
}

const projects: Project[] = [
  {
    title: "SkyClerk Autonomous Delivery Drone",
    category: "Aerial Robotics & UAV Systems",
    tagline: "End-to-end autonomous UAV for secure document & physical asset transport",
    description:
      "Team lead and researcher at Lagos State University. Designed complete autonomous flight flow (loading, takeoff, waypoint navigation, landing, offloading, return-to-base). Built telemetry dashboard, 3D-printed cargo bay, and flight controller integration.",
    tags: ["ROS2", "UAV Autonomy", "ESP32", "CAD / Onshape", "Telemetry", "Full-Stack Dashboard"],
    githubUrl: "https://github.com/Oluola4002",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "100% Autonomous Mission Profile / 3D-Printed Airframe",
    image: "/images/skyclerk-logo.jpg",
    imageAlt: "SkyClerk Autonomous Delivery Drone 3D Official Quadcopter Branding",
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
    image: "/images/aeroagropay-ui.png",
    imageAlt: "AeroAgroPay Precision Agriculture Platform UI",
  },
  {
    title: "Roboimọtótó Autonomous Voice-Controlled Robot",
    category: "Voice-Controlled Mobile Robotics & HRI",
    tagline: "Robotic car-mounted patrol bin with voice-actuated servo lid",
    description:
      "Engineered mobile patrol robotic car equipped with a servo-controlled lid actuated by direct voice commands ('Open' / 'Close') and ultrasonic sensors for obstacle avoidance and human-robot interaction.",
    tags: ["Speech Recognition", "Robotics", "Arduino / C++", "Ultrasonic Sensors", "HRI"],
    githubUrl: "https://github.com/Oluola4002",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "Voice-Actuated Real-Time HRI / Ultrasonic Obstacle Avoidance",
    image: "/images/roboimototo-robot.jpg",
    imageAlt: "Roboimọtótó Autonomous Voice-Controlled Mobile Smart Bin Physical Hardware",
  },
  {
    title: "LASU Aircraft Maintenance Lab (360m² Hangar)",
    category: "Aerospace Infrastructure & CAD/CAM",
    tagline: "Designed in Onshape with 15m clear-span & specialized avionics clean rooms",
    description:
      "Facilities & Infrastructure Lead. Modeled an entire 360m² aircraft hangar featuring 15 m clear-span, 4.5 m clearance, paved hardstands, propulsion test cells, NCAA aviation compliance, and A3 manufacturing blueprints.",
    tags: ["Onshape CAD", "Aero Infrastructure", "NCAA Compliance", "A3 Blueprints", "CAM Prototyping"],
    githubUrl: "https://github.com/Oluola4002",
    liveUrl: "https://samueloluolamideadebanjo.com",
    metrics: "360 m² Facility / 15m Clear-Span / A3 Engineering Drawings",
    images: ["/images/hangar-3d-model.png", "/images/hangar-cad-blueprint.png"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    damping: 20,
    stiffness: 250,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
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
      className="relative group rounded-3xl bg-space-navy/85 border border-cyan-500/20 p-7 sm:p-9 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.7)] transition-colors hover:border-cyan-400/50 flex flex-col justify-between"
    >
      {/* Dynamic Cursor Spotlight inside Card */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 229, 255, 0.12), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            // 0{index + 1} &bull; {project.category}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="View GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors"
              title="Explore Details"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <h3 className="mt-4 text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-300">
          {project.tagline}
        </p>

        {/* Single Featured Project Image */}
        {project.image && (
          <div className="mt-5 relative h-44 sm:h-52 rounded-2xl overflow-hidden border border-cyan-500/25 bg-black/70 shadow-lg">
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              fill
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Dual Embedded CAD Renders / Blueprints */}
        {project.images && project.images.length > 0 && (
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="relative h-36 rounded-xl overflow-hidden border border-cyan-500/25 bg-black/60 shadow-md">
              <Image
                src={project.images[0]}
                alt="3D CAD Model in Onshape"
                fill
                className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-1 left-2 text-[9px] font-mono text-cyan-300 bg-black/75 px-1.5 py-0.5 rounded">
                Onshape 3D
              </span>
            </div>
            <div className="relative h-36 rounded-xl overflow-hidden border border-cyan-500/25 bg-white shadow-md">
              <Image
                src={project.images[1]}
                alt="A3 Engineering Drawing Blueprint"
                fill
                className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-1 right-2 text-[9px] font-mono text-black bg-white/90 border border-black/20 px-1.5 py-0.5 rounded">
                A3 Blueprint
              </span>
            </div>
          </div>
        )}

        <p className="mt-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 mt-6 pt-5 border-t border-blue-900/40">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/90 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{project.metrics}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-blue-950/50 text-cyan-200 border border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
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
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 block">
            // Engineering Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Robotics, CAD &amp; Autonomous Systems
          </h2>
        </div>
        <p className="text-slate-300 max-w-md text-sm sm:text-base">
          Physical cyber-systems, aerial UAVs, 360m² CAD hangar facilities, and deep-tech prototypes engineered for real-world reliability.
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
