"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export default function MagneticButton({ 
  children, 
  className = "", 
  strength = 30,
  onClick 
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = node.getBoundingClientRect();
      
      // Calculate center of the button
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Distance from center
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      // Move element towards cursor based on strength
      x.set((distanceX / width) * strength);
      y.set((distanceY / height) * strength);
    };

    const handleMouseLeave = () => {
      // Reset position with a spring animation
      controls.start({
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }
      });
    };

    const handleMouseEnter = () => {
      controls.stop();
    };

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);
    node.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
      node.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [strength, x, y, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      style={{ x, y }}
      className={`inline-block ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
