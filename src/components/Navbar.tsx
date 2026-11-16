"use client";

import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav
        className={`flex items-center justify-between gap-6 rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "glass-pill shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-emerald-500/20"
            : "bg-surface-50/50 backdrop-blur-md border border-white/5"
        } max-w-4xl w-full`}
      >
        {/* Brand / Logo */}
        <MagneticButton strength={15}>
          <a
            href="#"
            className="flex items-center gap-2 group text-sm font-semibold tracking-wider uppercase text-white"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_#10B981]" />
            <span className="font-mono text-zinc-100 group-hover:text-emerald-400 transition-colors">
              Samuel O. Adebanjo
            </span>
          </a>
        </MagneticButton>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <MagneticButton strength={20}>
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-400 transition-all hover:scale-105 hover:shadow-[0_0_16px_rgba(16,185,129,0.25)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </MagneticButton>
      </nav>
    </header>
  );
}
