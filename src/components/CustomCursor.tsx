"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export type CursorVariant = "default" | "hover" | "project" | "drag" | "text";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);

  // Position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth fluid spring physics for the trailing ring (Terra Industries fluid feel)
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop/fine pointers
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Listen for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, [data-cursor]"
      ) as HTMLElement | null;

      if (interactive) {
        const customType = interactive.getAttribute("data-cursor") as CursorVariant | null;
        const customLabel = interactive.getAttribute("data-cursor-text");

        if (customType) {
          setCursorVariant(customType);
        } else {
          setCursorVariant("hover");
        }

        if (customLabel) {
          setCursorText(customLabel);
        } else {
          setCursorText("");
        }
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Fast, pinpoint center dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-emerald-400"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: cursorVariant === "hover" ? 0 : 6,
          height: cursorVariant === "hover" ? 0 : 6,
          transition: "width 0.2s, height 0.2s",
        }}
      />

      {/* 2. Fluid spring-trailing ring (Terra Industries signature) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full border border-emerald-400/40 backdrop-blur-[2px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:
            cursorVariant === "project"
              ? 84
              : cursorVariant === "drag"
              ? 76
              : cursorVariant === "hover"
              ? 52
              : 34,
          height:
            cursorVariant === "project"
              ? 84
              : cursorVariant === "drag"
              ? 76
              : cursorVariant === "hover"
              ? 52
              : 34,
          backgroundColor:
            cursorVariant === "project"
              ? "rgba(16, 185, 129, 0.9)"
              : cursorVariant === "drag"
              ? "rgba(6, 182, 212, 0.9)"
              : cursorVariant === "hover"
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(16, 185, 129, 0.04)",
          borderColor:
            cursorVariant === "hover" || cursorVariant === "project"
              ? "rgba(0, 245, 155, 0.9)"
              : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-wider uppercase text-black">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
