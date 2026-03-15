"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const mouseX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we're hovering over a clickable element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Hide cursor on route change temporarily
  useEffect(() => {
    setIsHovered(false);
  }, [pathname]);

  // Only show on non-touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Scope cursor:none to fine-pointer (mouse) devices only — touch keeps native cursor */}
      <style dangerouslySetInnerHTML={{ __html: '@media (pointer: fine) { body { cursor: none; } }' }} />
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] h-8 w-8 rounded-full border border-[var(--accent-primary)] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "var(--accent-primary)" : "transparent",
          opacity: isHovered ? 0.5 : 1,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <div className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-opacity" style={{ opacity: isHovered ? 0 : 1 }} />
      </motion.div>
    </>
  );
}
