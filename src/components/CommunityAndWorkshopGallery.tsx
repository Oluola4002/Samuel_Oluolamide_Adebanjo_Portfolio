"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const moments = [
  {
    title: "Hesolvesmaths Edhub",
    detail: "Tutor profile for mathematics, physics, and chemistry teaching.",
    image: "/images/hesolvesmaths-tutor-profile.png",
    alt: "Samuel Adebanjo tutor profile for Hesolvesmaths Edhub",
    fit: "contain",
    tone: "bg-sky-900",
  },
  {
    title: "Freshmen Academic Webinar",
    detail: "Guest speaker at the Help Desk Freshmen Academic Webinar, October 2026.",
    image: "/images/freshmen-academic-orientation-2026.jpg",
    alt: "Freshmen Academic Webinar poster featuring Samuel Adebanjo as a speaker",
    fit: "contain",
    tone: "bg-blue-900",
  },
  {
    title: "The Engineering Compass",
    detail: "Speaker at an orientation on academic success and career development, October 2026.",
    image: "/images/engineering-compass-talk-2026.jpg",
    alt: "The Engineering Compass orientation poster featuring Samuel Adebanjo",
    fit: "contain",
    tone: "bg-blue-900",
  },
  {
    title: "Academic Excellence Talk",
    detail: "Invited to share perspectives on academic excellence with aerospace students.",
    image: "/images/academic-excellence-talk-2026.jpg",
    alt: "AESA LASU Academic Excellence Talk poster featuring Samuel Adebanjo",
    fit: "contain",
    tone: "bg-blue-900",
  },
  {
    title: "Aircraft Model Prototyping",
    detail: "Hands-on work with a 3D-printed aircraft model in the engineering lab.",
    image: "/images/aircraft-model-prototyping.jpg",
    alt: "Samuel Adebanjo holding a 3D-printed aircraft model in a lab",
    fit: "cover",
    tone: "bg-space-void",
  },
  {
    title: "Engineering Workshop",
    detail: "A moment from practical workshop and equipment familiarization.",
    image: "/images/engineering-lab-workshop.jpg",
    alt: "Samuel Adebanjo working with equipment in an engineering workshop",
    fit: "cover",
    tone: "bg-space-void",
  },
  {
    title: "Project Demonstration",
    detail: "An engineering prototype prepared for a project demonstration.",
    image: "/images/engineering-project-demonstration.jpg",
    alt: "A student engineering prototype displayed at a project demonstration",
    fit: "cover",
    tone: "bg-space-void",
  },
  {
    title: "SPE LASU Project Event",
    detail: "Presenting during an SPE LASU event and engineering project showcase.",
    image: "/images/spe-lasu-project-event.png",
    alt: "Samuel Adebanjo speaking at an SPE LASU project event",
    fit: "cover",
    tone: "bg-space-void",
  },
  {
    title: "SIWES Technical Presentation",
    detail: "Presenting industrial training work during a technical defense.",
    image: "/images/siwes-technical-presentation.jpg",
    alt: "Samuel Adebanjo presenting his SIWES technical work",
    fit: "cover",
    tone: "bg-space-void",
  },
  {
    title: "SPE NAICE 2026 Paper Presentation",
    detail: "Certificate for authoring and presenting paper SPE-235104-MS.",
    image: "/images/spe-paper-presentation-certificate-2026.png",
    alt: "Certificate of presentation for paper SPE-235104-MS at SPE NAICE 2026",
    fit: "contain",
    tone: "bg-white",
  },
];

export default function CommunityAndWorkshopGallery() {
  return (
    <section className="relative py-24 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          // Selected Moments &amp; Evidence
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          In the Lab, Classroom &amp; Community
        </h2>
        <p className="mt-4 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
          A closer look at engineering practice, research presentations, tutoring, and student outreach.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {moments.map((moment, index) => (
          <motion.figure
            key={moment.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
            className="glass-panel rounded-2xl p-3 border-cyan-500/15 hover:border-cyan-400/40 transition-colors"
          >
            <a
              href={moment.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full image: ${moment.title}`}
              className={`relative block h-60 rounded-xl overflow-hidden ${moment.tone}`}
            >
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className={moment.fit === "contain" ? "object-contain p-1" : "object-cover"}
              />
            </a>
            <figcaption className="px-1 pt-4 pb-2">
              <h3 className="text-sm font-bold text-white">{moment.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                {moment.detail}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
