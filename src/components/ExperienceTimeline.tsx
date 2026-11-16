"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, Award } from "lucide-react";

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
    role: "Data Science & Generative AI Intern",
    company: "FlexiSAF Edusoft Limited",
    period: "Sept 2026 — Present",
    location: "Remote",
    description:
      "Selected for FlexiSAF's competitive Internship Program (FIP) focusing on data science workflows, generative AI pipelines, and enterprise automation.",
    achievements: [
      "Built structured data science workflows and generative AI model integrations.",
      "Achieved first-month milestone requirements with distinction.",
    ],
  },
  {
    role: "Undergraduate Researcher & Team Lead (SkyClerk Drone)",
    company: "Lagos State University (Supervisor: Engr. Joseph Olofinkua)",
    period: "Oct 2025 — Sept 2026",
    location: "Lagos, Nigeria",
    description:
      "Spearheaded the research and end-to-end autonomous mission architecture for SkyClerk, an autonomous delivery UAV for secure asset transport.",
    achievements: [
      "Designed full autonomous flight flow: loading, takeoff, waypoint navigation, landing, and return-to-base.",
      "Integrated telemetry, real-time perception sensors, and custom web mission dashboard.",
      "Engineered 3D-printed modular cargo bay with custom servo release mechanisms.",
    ],
  },
  {
    role: "Deep Tech R&D Engineering Intern (UAVs & Robotics)",
    company: "Innovia Labs (Supervisors: Durojaiye Philips & Isaac Nagu)",
    period: "Apr 2025 — Sept 2025",
    location: "Nigeria",
    description:
      "Prototyped next-generation unmanned aerial vehicles, researched autonomous flight logic, and conducted rapid prototyping.",
    achievements: [
      "Performed advanced CAD modelling in Onshape and CAM operations on CNC machinery and BambuLab 3D printers.",
      "Developed IoT embedded integrations with Wazilab hardware for drone telemetry.",
    ],
  },
  {
    role: "Facilities & Infrastructure Lead (LASU Aircraft Maintenance Lab)",
    company: "Lagos State University",
    period: "Mar 2026 — May 2026",
    location: "Lagos, Nigeria",
    description:
      "Designed a complete 360 m² aircraft maintenance hangar featuring 15 m clear-span and 4.5 m clearance in Onshape.",
    achievements: [
      "Planned specialized zones for avionics clean rooms, propulsion test cells, and paved hardstands.",
      "Coordinated 5 leads to integrate tooling, NCAA aviation compliance, and HSE protocols.",
    ],
  },
  {
    role: "Space Propulsion & Rocketry Research Intern",
    company: "NASRDA Centre for Space Transport & Propulsion (CSTP)",
    period: "Sep 2024 — Nov 2024",
    location: "Epe, Nigeria",
    description:
      "Underwent rigorous technical training across 7 specialized departments covering space propulsion, combustion engines, and rocket aerodynamics.",
    achievements: [
      "Researched solid/liquid rocket propulsion mechanics and missile trajectory dynamics.",
      "Drafted comprehensive technical evaluations presented to senior NASRDA researchers.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-28 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
          // Research &amp; Industry Track
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Experience &amp; Leadership
        </h2>
        <p className="mt-4 text-zinc-400 max-w-lg text-sm sm:text-base">
          Hands-on aerospace engineering, autonomous drone R&amp;D, space propulsion training, and generative AI research.
        </p>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
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
