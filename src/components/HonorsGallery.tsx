"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Sparkles, Trophy } from "lucide-react";

const featuredRecognitions = [
  {
    title: "Africa Future Leaders Award 2026",
    detail: "Selected among the Top 100 Africa Future Leaders.",
    image: "/images/africa-future-leaders-2026.jpg",
    alt: "Africa Future Leaders Award 2026 selection poster for Samuel Adebanjo",
    label: "Top 100 recognition",
  },
  {
    title: "ASME Foundation Scholarship",
    detail: "Scholarship awardee for the 2026–27 academic year.",
    image: "/images/asme-scholarship-awardee-2026.png",
    alt: "ASME Foundation 2026–27 Scholarship Awardee badge for Samuel Adebanjo",
    label: "2026–27 scholarship",
  },
  {
    title: "World Space Week Article Writing Contest",
    detail: "Participation recognition from Space Club LASU, 2025.",
    image: "/images/Article_Writing.png",
    alt: "Certificate of participation in the World Space Week 2025 Article Writing Contest",
    label: "Space education",
  },
  {
    title: "AESA Article Writing Competition",
    detail: "Third-place winner, Aerospace Engineering Students' Association LASU.",
    image: "/images/aesa-article-writing-third-place-2025.jpg",
    alt: "Certificate recognizing Samuel Adebanjo as third-place winner in the AESA Article Writing Competition",
    label: "3rd place",
  },
  {
    title: "AstroVate Virtual Hackathon",
    detail: "Certificate recognizing active participation in the space science hackathon.",
    image: "/images/Astrovate_Hackathon.png",
    alt: "Certificate of active participation in the AstroVate Virtual Hackathon",
    label: "Space technology",
  },
  {
    title: "Employability and Digital Skills Training",
    detail: "Certificate of participation from Jobs Initiative Lagos, completed 6 December 2025.",
    image: "/images/jil-employability-digital-skills-certificate.jpeg",
    alt: "Jobs Initiative Lagos certificate for completing Employability and Digital Skills Training",
    label: "Professional development",
  },
  {
    title: "Foundations in Stress Analysis of Structures",
    detail: "Completed the ANSYS Learning Track on 30 March 2025.",
    image: "/images/ansys-stress-analysis-certificate.png",
    alt: "ANSYS Learning Track certificate for Foundations in Stress Analysis of Structures",
    label: "ANSYS Learning Track",
  },
];

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

        </div>
      </div>

      <div className="mt-14">
        <div className="mb-6 text-center sm:text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            // Selected Recognition
          </span>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
            Awards, Scholarships &amp; Contributions
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredRecognitions.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-panel rounded-2xl p-4 border-cyan-500/15 hover:border-cyan-400/40 transition-colors"
            >
              <div className="relative h-52 rounded-xl overflow-hidden bg-white/95 border border-white/10">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-contain p-1"
                />
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-cyan-950/50 border border-cyan-400/20 px-2.5 py-1 text-[10px] font-mono text-cyan-300">
                <Sparkles className="w-3 h-3" />
                {item.label}
              </span>
              <h4 className="mt-3 text-sm font-bold text-white">{item.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
