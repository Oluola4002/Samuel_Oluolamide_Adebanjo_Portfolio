import Hero from "@/components/Hero";
import AeroAstroFeature from "@/components/AeroAstroFeature";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import InteractiveSkills from "@/components/InteractiveSkills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import { Award, GraduationCap, Compass, Cpu, Radio, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const honors = [
    { title: "Overall Best Graduating Student", place: "LASU Class of 2026 (4.97/5.00 CGPA)" },
    { title: "Top 100 African Future Leaders", place: "Class of 2026 Cohort" },
    { title: "ASME Christopher L. Hoffmann Memorial Scholarship", place: "$2,500 International Merit Stipend" },
    { title: "AltSchool Africa Data Science Scholar", place: "Professional Diploma Cohort" },
    { title: "Scholar of the Year (NUESA)", place: "Faculty of Engineering" },
    { title: "OPay Scholarship Winner", place: "Top 20 in LASU & Only Engineering Student" },
  ];

  return (
    <main className="relative flex flex-col min-h-screen">
      {/* 1. Hero with Portrait & CGPA Badge */}
      <Hero />

      {/* 2. Infinite Continuous Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Core Philosophy & Academic Honors */}
      <section id="about" className="relative py-28 px-4 max-w-6xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              // Academic Distinction &amp; Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Pushing the boundaries of robotic perception, adaptive control, and autonomous aerospace systems.
            </h2>
            <div className="mt-6 text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4 font-light">
              <p>
                Graduated with <span className="text-white font-medium">First-Class Honours (CGPA 4.97/5.00)</span> from Lagos State University, finishing as the Best Student of the 2026 Graduating Class across the entire university, holding the highest CGPA in the history of the Department of Aerospace Engineering, and joint record holder for the highest in the Faculty of Engineering.
              </p>
              <p>
                Seeking to bring this foundation in mechatronics, autonomous UAV design, telemetry, and machine learning into graduate research focused on <span className="text-emerald-400 font-medium">robotic perception, adaptive control, and human-robot interaction</span>.
              </p>
            </div>

            {/* Honors & Recognitions Grid */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm font-mono uppercase tracking-wider text-white">
                  Key Honors &amp; Awards
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {honors.map((h) => (
                  <div
                    key={h.title}
                    className="p-4 rounded-xl bg-surface-100/90 border border-white/5 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">{h.title}</h4>
                        <p className="text-[11px] font-mono text-zinc-400 mt-1">{h.place}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Aero-Astro Intelligence Pioneering Research Feature */}
      <AeroAstroFeature />

      {/* 5. Projects Showcase (SkyClerk Drone, AeroAgroPay, Roboimọtótó) */}
      <ProjectsShowcase />

      {/* 6. Interactive Skill Matrix (ROS2, UAVs, Python, CAD) */}
      <InteractiveSkills />

      {/* 7. Research & Industry Experience */}
      <ExperienceTimeline />

      {/* 8. Contact & Confetti Transmit */}
      <ContactSection />
    </main>
  );
}
