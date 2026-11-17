"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Mic, Sparkles, Trophy } from "lucide-react";

export default function HonorsGallery() {
  return (
    <section id="honors" className="relative py-28 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 block flex items-center justify-center gap-1.5">
          <Trophy className="w-3.5 h-3.5 text-cyan-400" />
          <span>// Verified Distinctions &amp; Honors</span>
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Academic Excellence &amp; Accolades
        </h2>
        <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base">
          Best Student of the 2026 Graduating Class, Faculty of Engineering and University overall, with a historic CGPA of 4.97/5.00.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Card 1: Physical Trophies Shelf (Takes 7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border-cyan-500/20 flex flex-col justify-between group overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-400/30">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Physical Trophies &amp; Plaques</span>
              </span>
              <span className="text-xs font-mono text-slate-400">LASU 2026</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              Collection of Excellence Awards
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Including the prestigious <strong className="text-white">LASU Best Graduating Student</strong> (Faculty of Engineering), <strong className="text-white">NSE Certificate of Excellence</strong>, <strong className="text-white">Sunbeth Excellence Partnership Program (SEPP)</strong>, and <strong className="text-white">NUESA Scholar of the Year</strong>.
            </p>
          </div>

          <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.8)]">
            <Image
              src="/images/awards-trophies.jpg"
              alt="Adebanjo Samuel Oluolamide - Award of Excellence trophies, Best Graduating Student"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Column 2: Dignitaries Photo + Speaking Event (Takes 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Convocation with University Executives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-panel rounded-3xl p-6 border-cyan-500/20 flex flex-col justify-between group overflow-hidden h-full"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Convocation Ceremony &bull; LASU</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3">
                Celebrated by University Leadership
              </h4>
            </div>

            <div className="relative h-52 sm:h-60 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src="/images/convocation-dignitaries.jpg"
                alt="Samuel Oluolamide Adebanjo with Lagos State University Executives on Stage"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Speaking Session Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="glass-panel rounded-3xl p-6 border-cyan-500/20 flex flex-col justify-between group overflow-hidden"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                <Mic className="w-3.5 h-3.5 text-cyan-400" />
                <span>Invited Keynote Speaker</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">Oct 2026</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative h-24 w-20 shrink-0 rounded-xl overflow-hidden border border-white/15">
                <Image
                  src="/images/speaking-beyond-the-niche.jpg"
                  alt="Beyond The Niche Speaker - Samuel Olu-olamide Adebanjo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  Beyond The Niche: Courage, Sacrifice &amp; Legacy
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Featured guest speaker sharing technical insights on building resilient aerospace careers and impactful engineering initiatives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
