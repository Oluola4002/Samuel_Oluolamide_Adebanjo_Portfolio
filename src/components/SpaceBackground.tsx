"use client";

import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    // Star particle model
    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      twinkleSpeed: number;
      color: string;
    }

    let stars: Star[] = [];
    const colors = [
      "rgba(255, 255, 255, ",
      "rgba(56, 189, 248, ",   // sky blue
      "rgba(0, 229, 255, ",    // electric cyan
      "rgba(147, 197, 253, ",  // soft blue
    ];

    const initStars = () => {
      stars = [];
      const count = Math.floor((width * height) / 3800); // responsive density
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.4,
          alpha: Math.random(),
          speed: Math.random() * 0.15 + 0.05,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initStars();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render cosmic stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Gentle cosmic drift upward (giving rocket ascent feel)
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Twinkle
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.1) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color + Math.max(0.1, Math.min(1, star.alpha)) + ")";
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = "#00E5FF";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* 1. Deep Space Cosmic Nebula Gradients */}
      <div className="absolute -top-40 -left-40 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-blue-700/20 via-sky-600/10 to-transparent blur-[160px]" />
      <div className="absolute top-1/3 -right-60 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-cyan-600/15 via-blue-900/20 to-transparent blur-[160px]" />
      <div className="absolute -bottom-40 left-1/4 w-[1000px] h-[700px] rounded-full bg-gradient-to-t from-blue-950/40 via-indigo-950/20 to-transparent blur-[180px]" />

      {/* Subtle Rocket Thrust Orange/Red Ember Nebula at bottom center */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-gradient-to-t from-red-600/10 via-orange-500/5 to-transparent blur-[120px]" />

      {/* 2. Rocketry Orbital Trajectory Geometry (AeroAstro signature) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbitalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Major orbital flight ellipses */}
        <ellipse
          cx="50%"
          cy="45%"
          rx="650"
          ry="280"
          fill="none"
          stroke="url(#orbitalGrad)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          transform="rotate(-15 600 400)"
        />
        <ellipse
          cx="50%"
          cy="50%"
          rx="850"
          ry="380"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1"
          strokeDasharray="4 8"
          transform="rotate(18 600 450)"
        />

        {/* Coordinate telemetry grid lines */}
        <circle cx="50%" cy="45%" r="4" fill="#00E5FF" />
      </svg>

      {/* 3. Celestial Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* 4. Subtle Aerospace HUD / Coordinate Grid Overlay */}
      <div className="absolute inset-0 bg-space-grid opacity-[0.04]" />
    </div>
  );
}
