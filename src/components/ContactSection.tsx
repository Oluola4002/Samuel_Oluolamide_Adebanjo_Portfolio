"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import MagneticButton from "./MagneticButton";
import {
  Copy,
  Check,
  Mail,
  Send,
  Github,
  Linkedin,
  Phone,
  ArrowUpRight,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const emailAddress = "samueloluola.a@gmail.com";
  const phoneNumber = "+234 704 4765 385";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#10B981", "#00F59B", "#06B6D4", "#F59E0B"],
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
    });
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 max-w-6xl mx-auto">
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 glass-panel rounded-3xl p-8 sm:p-14 border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Direct Hook */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 block">
              // Direct Inquiries &amp; Collaborations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Let&apos;s build the future of autonomous systems.
            </h2>
            <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              Seeking graduate research opportunities (Robotics, Autonomous Systems, AI &amp; Perception), engineering roles, and collaborative deep-tech initiatives.
            </p>

            {/* Direct Email Pill with Confetti */}
            <div className="mt-8 space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Direct Contact:
              </span>
              <div className="flex flex-wrap gap-3">
                <MagneticButton strength={20}>
                  <button
                    onClick={handleCopyEmail}
                    data-cursor="hover"
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-surface-200/90 border border-emerald-500/30 hover:border-emerald-400 text-white font-mono text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] group"
                  >
                    <Mail className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
                    <span>{emailAddress}</span>
                    {copied ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-zinc-400 group-hover:text-emerald-400">
                        <Copy className="w-4 h-4" />
                        <span className="text-[11px]">Copy</span>
                      </span>
                    )}
                  </button>
                </MagneticButton>

                <MagneticButton strength={20}>
                  <a
                    href="tel:+2347044765385"
                    className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-surface-200/90 border border-white/10 hover:border-white/30 text-white font-mono text-xs sm:text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{phoneNumber}</span>
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Academic & Social Profiles */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {[
                { name: "GitHub", href: "https://github.com/Oluola4002", icon: Github },
                { name: "LinkedIn", href: "https://linkedin.com/in/samuel-adebanjo", icon: Linkedin },
                { name: "Google Scholar", href: "https://scholar.google.com", icon: BookOpen },
                { name: "ResearchGate", href: "https://researchgate.net", icon: BookOpen },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <MagneticButton key={s.name} strength={15}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/5 hover:border-white/20 text-zinc-400 hover:text-white text-xs font-mono transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{s.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  </MagneticButton>
                );
              })}
            </div>
          </div>

          {/* Right Column: Fast Contact Form */}
          <div className="bg-surface-100/90 rounded-2xl p-6 sm:p-8 border border-white/5">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Send a Message</span>
            </h3>

            {formSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center"
              >
                <div className="h-10 w-10 mx-auto rounded-full bg-emerald-400 text-black flex items-center justify-center font-bold mb-3">
                  ✓
                </div>
                <h4 className="text-white font-bold">Message Transmitted!</h4>
                <p className="text-zinc-400 text-xs mt-1">
                  Thank you for reaching out. I will respond to your inquiry promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Prof. John Doe / Recruiter"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-200 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="researcher@university.edu"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-200 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">
                    Subject &amp; Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Discuss graduate research, engineering collaboration, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-200 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                </div>

                <MagneticButton strength={15} className="w-full">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 font-semibold text-black text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
        <div>
          &copy; {new Date().getFullYear()} Samuel Oluolamide Adebanjo. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
          <span>samueloluolamideadebanjo.com &bull; Aero-Astro Intelligence</span>
        </div>
      </footer>
    </section>
  );
}
