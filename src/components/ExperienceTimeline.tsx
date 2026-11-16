"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    role: "Senior Software Engineer / Lead Developer",
    company: "Tech Innovations & Digital Labs",
    period: "2023 — Present",
    location: "Lagos & Remote",
    description:
      "Spearheading frontend architecture and distributed systems across multi-platform client applications, mentoring junior engineers, and driving performance optimizations.",
    achievements: [
      "Engineered micro-frontend modules reducing page bundle size by 42%.",
      "Streamlined CI/CD automation pipelines cutting build times down by 35%.",
      "Architected real-time WebSocket dashboard handling 20,000+ daily active users.",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Enterprise Solutions & Digital Ecosystems",
    period: "2021 — 2023",
    location: "Remote / Hybrid",
    description:
      "Developed client-facing web applications, integrated payment gateways, and built scalable RESTful & GraphQL microservices with high reliability.",
    achievements: [
      "Built resilient transactional engines with PostgreSQL and Redis caching.",
      "Collaborated with cross-functional product design teams in rapid agile sprints.",
      "Achieved 99.9% uptime across production service deployments.",
    ],
  },
  {
    role: "Frontend & Creative Developer",
    company: "Studio Digital & Web Foundry",
    period: "2019 — 2021",
    location: "Lagos, Nigeria",
    description:
      "Crafted bespoke digital marketing experiences, interactive branding portals, and responsive design systems with micro-animations.",
    achievements: [
      "Delivered 15+ bespoke client portals with high interactive polish.",
      "Optimized Core Web Vitals to score 98+ on Google Lighthouse across all projects.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-28 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
          // Career Trajectory
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Work Experience
        </h2>
        <p className="mt-4 text-zinc-400 max-w-lg text-sm sm:text-base">
          Proven track record of architecting, deploying, and scaling mission-critical web applications.
        </p>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 sm:pl-12 group"
          >
            {/* Timeline node */}
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-surface-100 border-2 border-emerald-400 group-hover:scale-125 group-hover:bg-emerald-400 transition-all shadow-[0_0_12px_rgba(16,185,129,0.5)]" />

            {/* Content Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {exp.role}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium text-emerald-400 mb-4">
                <span>{exp.company}</span>
                <span className="text-zinc-600">&bull;</span>
                <span className="flex items-center gap-1 text-zinc-400 text-xs font-mono">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
