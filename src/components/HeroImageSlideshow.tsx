"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Orbit } from "lucide-react";

const personalSlides = [
  {
    src: "/images/graduation-portrait.jpg",
    alt: "Samuel Oluolamide Adebanjo - First-Class Aerospace Engineering Valedictorian Regalia",
    caption: "Valedictorian Convocation",
    badge: "4.97 / 5.00 CGPA",
  },
  {
    src: "/images/samuel-traditional-blue.jpg",
    alt: "Samuel Oluolamide Adebanjo - Blue Traditional Attire",
    caption: "Aerospace Technologist",
    badge: "Top 100 Leader",
  },
  {
    src: "/images/samuel-studio-waistcoat.jpg",
    alt: "Samuel Oluolamide Adebanjo - Studio Portrait",
    caption: "Aero-Astro Researcher",
    badge: "ASME Scholar",
  },
  {
    src: "/images/field-engineering.jpg",
    alt: "Samuel Oluolamide Adebanjo - Field Engineering & NSE Hard Hat",
    caption: "Field Engineering Operations",
    badge: "NSE Excellence",
  },
  {
    src: "/images/samuel-headshot-blue.jpg",
    alt: "Samuel Oluolamide Adebanjo - Professional Headshot",
    caption: "Robotics & AI Pioneer",
    badge: "SkyClerk Lead",
  },
];

export default function HeroImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slideshow every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % personalSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + personalSlides.length) % personalSlides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % personalSlides.length);
  };

  const currentSlide = personalSlides[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative group shrink-0 select-none"
    >
      {/* Ambient Celestial Blue & Flare Ring */}
      <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-sky-300 opacity-70 blur-xl group-hover:opacity-100 transition duration-500" />

      {/* Main Slideshow Frame */}
      <div className="relative h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-3xl overflow-hidden border-2 border-cyan-400/60 bg-space-navy shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.src}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt}
              fill
              sizes="(max-width: 768px) 288px, 320px"
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient edge shading for UI overlay legibility */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

        {/* Bottom Caption Pill */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-20">
          <span className="text-[11px] font-mono font-medium text-cyan-200 bg-black/65 px-2.5 py-1 rounded-full border border-cyan-400/30 backdrop-blur-md">
            {currentSlide.caption}
          </span>
          <span className="text-[10px] font-mono text-slate-300 bg-black/65 px-2 py-0.5 rounded-full border border-white/10">
            {currentIndex + 1} / {personalSlides.length}
          </span>
        </div>

        {/* Left & Right Arrow Navigation Controls */}
        <button
          onClick={handlePrev}
          aria-label="Previous Photo"
          data-cursor="hover"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
        >
          <ChevronLeft className="w-4 h-4 text-cyan-300" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Photo"
          data-cursor="hover"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 hover:border-cyan-400 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg"
        >
          <ChevronRight className="w-4 h-4 text-cyan-300" />
        </button>

        {/* Slideshow Progress Dots */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          {personalSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-5 bg-cyan-400 shadow-[0_0_8px_#00E5FF]"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Orbiting Telemetry Badge Stamp */}
      <div className="absolute -bottom-3 -right-3 z-30 px-3.5 py-1.5 rounded-full bg-space-dark/95 border border-cyan-400/80 text-[11px] font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center gap-1.5 backdrop-blur-md">
        <Orbit className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
        <span className="font-bold">{currentSlide.badge}</span>
      </div>
    </div>
  );
}
