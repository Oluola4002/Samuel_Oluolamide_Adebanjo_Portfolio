import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import InteractiveSkills from "@/components/InteractiveSkills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import { Terminal, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Infinite Continuous Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. About / Design Philosophy Section */}
      <section id="about" className="relative py-28 px-4 max-w-5xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border-white/10 relative overflow-hidden">
          {/* Subtle accent highlight */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              // Philosophy &amp; Ethos
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Engineering with obsessive attention to craft, fluidity, and system resilience.
            </h2>
            <div className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed space-y-4 font-light">
              <p>
                Inspired by the cutting-edge tactile elegance of <span className="text-white font-medium">Terra Industries</span> and the community-fueled, electric momentum of <span className="text-white font-medium">DevFest Lagos</span>, my approach to software fuses deep architectural rigor with joyful visual precision.
              </p>
              <p>
                Every millisecond of latency eliminated, every spring-damped micro-interaction, and every responsive breakpoint is tuned to create an uncompromising user experience.
              </p>
            </div>

            {/* Core Values / Pillars */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Fluid Performance</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Zero-jank animations, sub-50ms interaction response, and optimized Core Web Vitals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Scalable Architecture</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Modular codebases, clean boundaries, strong type safety, and resilient cloud backends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Tactile Craft</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Fluid custom cursor physics, magnetic surfaces, and micro-interactions that spark delight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projects Showcase (3D Spotlight Cards) */}
      <ProjectsShowcase />

      {/* 5. Interactive Skill Matrix (Draggable badges) */}
      <InteractiveSkills />

      {/* 6. Career Trajectory & Experience */}
      <ExperienceTimeline />

      {/* 7. Contact & Confetti Transmit */}
      <ContactSection />
    </main>
  );
}
