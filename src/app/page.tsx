"use client";

import Hero from "@/components/Hero";
import AeroAstroFeature from "@/components/AeroAstroFeature";
import HonorsGallery from "@/components/HonorsGallery";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import InteractiveSkills from "@/components/InteractiveSkills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import LeadershipSection from "@/components/LeadershipSection";
import CommunityAndWorkshopGallery from "@/components/CommunityAndWorkshopGallery";
import ContactSection from "@/components/ContactSection";
import { Award, GraduationCap, Compass, Cpu, Radio, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const honors = [
    { title: "Overall Best Graduating Student", place: "LASU Class of 2026 (4.97/5.00 CGPA)" },
    { title: "Top 100 African Future Leaders", place: "Class of 2026 Cohort" },
    { title: "ASME Christopher L. Hoffmann Memorial Scholarship", place: "$2,500 International Merit Stipend" },
    { title: "AltSchool Africa Data Science Scholar", place: "Professional Diploma Cohort" },
    { title: "Scholar of the Year (NUESA & AESA)", place: "Faculty of Engineering" },
    { title: "OPay Scholarship Winner", place: "Top 20 in LASU & Only Engineering Student" },
    { title: "Graduate Member (GMNSE)", place: "Nigerian Society of Engineers" },
    { title: "P-COREN — Pupil Member of COREN", place: "Council for the Regulation of Engineering in Nigeria" },
  ];

  return (
    <main className="relative flex flex-col min-h-screen">
      {/* 1. Hero with Dual Portrait Toggle (Convocation Regalia + Technologist) & CGPA Stamp */}
      <Hero />

      {/* 2. Infinite Continuous Cosmic Rocketry Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Verified Honors & Accolades Gallery (Trophies + Dignitaries + Speaking) */}
      <HonorsGallery />

      {/* 4. Core Vision & Academic Honors Grid */}
      <section id="about" className="relative py-20 px-4 max-w-6xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 block">
              // Academic Distinction &amp; Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Pushing the boundaries of robotic perception, adaptive control, and autonomous aerospace systems.
            </h2>
            <div className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-light">
              <p>
                Graduated with <span className="text-white font-medium">First-Class Honours (CGPA 4.97/5.00)</span> from Lagos State University, finishing as the Best Student of the 2026 Graduating Class across the entire university, holding the highest CGPA in the history of the Department of Aerospace Engineering, and joint record holder for the highest in the Faculty of Engineering.
              </p>
              <p>
                Seeking to bring this foundation in mechatronics, autonomous UAV design, telemetry, and machine learning into graduate research focused on <span className="text-cyan-400 font-medium">robotic perception, adaptive control, and human-robot interaction</span>.
              </p>
              <p>
                Professionally registered as a <span className="text-white font-medium">Graduate Member of the Nigerian Society of Engineers (GMNSE)</span> and a <span className="text-white font-medium">Pupil Member of COREN (P-COREN)</span> — the statutory body for engineering regulation in Nigeria.
              </p>
            </div>

            {/* Honors & Recognitions Grid */}
            <div className="mt-10 pt-8 border-t border-blue-900/40">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-sm font-mono uppercase tracking-wider text-white">
                  Key Honors &amp; Awards
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {honors.map((h) => (
                  <div
                    key={h.title}
                    className="p-4 rounded-xl bg-space-navy/70 border border-cyan-500/15 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">{h.title}</h4>
                        <p className="text-[11px] font-mono text-slate-400 mt-1">{h.place}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Aero-Astro Intelligence Pioneering Research Feature */}
      <AeroAstroFeature />

      {/* 6. Projects Showcase (LASU Hangar CAD Blueprints, SkyClerk Drone, AeroAgroPay) */}
      <ProjectsShowcase />

      {/* 7. Interactive Skill Matrix (ROS2, UAVs, Python, CAD) */}
      <InteractiveSkills />

      {/* 8. Research & Industry Experience (FlexiSAF, NSE Field Engineering, NASRDA) */}
      <ExperienceTimeline />

      {/* 9. Leadership, Teaching & Service */}
      <LeadershipSection />

      {/* 10. Research, Teaching & Engineering Media */}
      <CommunityAndWorkshopGallery />

      {/* 11. Contact & Confetti Transmit */}
      <ContactSection />
    </main>
  );
}
