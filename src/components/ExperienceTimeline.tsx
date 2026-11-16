"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  image?: string;
  imageAlt?: string;
}

const experiences: Experience[] = [
  {
    role: "Data Science & Generative AI Intern",
    company: "FlexiSAF Edusoft Limited",
    period: "Sept 2026 — Dec 2026",
    location: "Remote",
    description:
      "Selected for FlexiSAF's competitive Internship Program (FIP) focusing on data science workflows, generative AI pipelines, and enterprise automation.",
    achievements: [
      "Built structured data science workflows and generative AI model integrations.",
      "Achieved first-month milestone requirements with distinction.",
    ],
    image: "/images/flexisaf-internship.jpg",
    imageAlt: "Samuel Adebanjo Selected for FlexiSAF Internship Program Cohort",
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
    role: "Field Engineering & NSE Epe Branch Leader",
    company: "Nigerian Society of Engineers (NSE) & Industry Labs",
    period: "2024 — Present",
    location: "Epe, Lagos, Nigeria",
    description:
      "Active on-site field engineering, mechanical operations, tooling compliance, and student mentorship under the Nigerian Society of Engineers.",
    achievements: [
      "Honored with the NSE Epe Branch Certificate of Excellence as Overall Best Engineering Student.",
      "Conducted on-site technical evaluations in full PPE and safety compliance.",
    ],
    image: "/images/field-engineering.jpg",
    imageAlt: "Samuel Adebanjo in Hard Hat and Safety Vest - NSE Field Engineering",
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
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 block">
          // Research &amp; Industry Track
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Experience &amp; Leadership
        </h2>
        <p className="mt-4 text-slate-300 max-w-lg text-sm sm:text-base">
          Aerospace engineering, autonomous drone R&amp;D, space propulsion training, and generative AI research.
        </p>
      </div>

      <div className="relative border-l border-blue-900/40 ml-4 sm:ml-8 space-y-12">
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
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-space-void border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_14px_rgba(0,229,255,0.6)]" />

            {/* Content Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {exp.role}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-400/20 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium text-cyan-400 mb-4">
                <span>{exp.company}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>

              {/* Photo preview if available */}
              {exp.image && (
                <div className="my-4 flex flex-col sm:flex-row items-center gap-4 p-3 rounded-xl bg-space-void/80 border border-cyan-500/20">
                  <div className="relative h-32 w-32 shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-md">
                    <Image
                      src={exp.image}
                      alt={exp.imageAlt || exp.role}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Verified milestone attachment &bull; {exp.imageAlt}
                  </p>
                </div>
              )}

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
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
