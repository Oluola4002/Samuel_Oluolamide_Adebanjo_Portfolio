"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, GraduationCap, Users } from "lucide-react";

const cvUrl = "https://drive.google.com/drive/folders/13o7v3xu0DfpiNPivOy7-YPSjqdmDfFAv?usp=sharing";

const roles = [
  {
    role: "Project Lead",
    organization: "Inspire The Student Initiative",
    period: "Oct 2025 – Present",
    description:
      "Organizes webinars, tutorials, and shared academic resources, with programs designed to support more than 50 students.",
    icon: Users,
  },
  {
    role: "Academic Director",
    organization: "SPE Lagos State University",
    period: "Oct 2025 – Jul 2026",
    description:
      "Coordinated academic webinars, coursework tutorials, and preparation for SPE Petrobowl competitions, including a friendly campus competition.",
    icon: BookOpen,
  },
  {
    role: "Tutor & Coordinator",
    organization: "Bunday Tutorial",
    period: "May 2025 – Present",
    description:
      "Tutors and coordinates about 20 first-year students across foundational engineering courses.",
    icon: GraduationCap,
  },
  {
    role: "Mathematics & Science Instructor",
    organization: "Hesolvesmaths Edhub",
    period: "Jan 2025 – Present",
    description:
      "Teaches mathematics, physics, chemistry, and science to international Year 4–10 and GCSE learners through a virtual tutorial platform.",
    icon: BookOpen,
  },
  {
    role: "Learning & Development Coordinator",
    organization: "Space Club LASU",
    period: "Dec 2023 – Nov 2025",
    description:
      "Organized aerospace and space-systems workshops, curated research resources, and supported member learning and development.",
    icon: Users,
  },
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="relative py-28 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          // Leadership, Teaching &amp; Service
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Building People Alongside Projects
        </h2>
        <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
          Academic leadership, peer tutoring, and science education have been a steady part of my engineering journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {roles.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.organization}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="glass-panel rounded-2xl p-6 border-cyan-500/15 hover:border-cyan-400/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-xl bg-cyan-400/10 border border-cyan-400/20 p-3 text-cyan-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-[11px] text-right font-mono text-slate-400">
                  {item.period}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-300">
                {item.organization}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition-colors hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white"
        >
          <span>See the full CV</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
