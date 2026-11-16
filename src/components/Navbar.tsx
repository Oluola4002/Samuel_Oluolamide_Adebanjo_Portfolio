"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, Sparkles, Rocket } from "lucide-react";

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
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav
        className={`flex items-center justify-between gap-4 rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? "glass-pill shadow-[0_8px_32px_rgba(0,0,0,0.6)] border-emerald-500/20"
            : "bg-surface-50/70 backdrop-blur-md border border-white/10"
        } max-w-5xl w-full`}
      >
        {/* Brand / Logo with AeroAstro Emblem */}
        <MagneticButton strength={15}>
          <a
            href="#"
            className="flex items-center gap-2.5 group text-sm font-semibold tracking-wider text-white"
          >
            <div className="relative h-8 w-8 rounded-full overflow-hidden bg-black/60 border border-emerald-500/30 flex items-center justify-center p-0.5 group-hover:border-emerald-400 transition-colors shadow-[0_0_12px_rgba(16,185,129,0.3)]">
              <Image
                src="/images/aeroastro-intelligence.png"
                alt="AeroAstro Intelligence Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                Samuel O. Adebanjo
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                Aero-Astro Intelligence
              </span>
            </div>
          </a>
        </MagneticButton>

        {/* Links */}
        <div className="hidden md:flex items-center gap-5">
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
        <div className="flex items-center gap-2">
          <MagneticButton strength={15}>
            <a
              href="mailto:samueloluola.a@gmail.com"
              className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1.5 text-xs font-medium tracking-wide text-emerald-400 transition-all hover:scale-105 hover:shadow-[0_0_16px_rgba(16,185,129,0.25)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Get In Touch</span>
              <span className="sm:hidden">Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>
        </div>
      </nav>
    </header>
  );
}
