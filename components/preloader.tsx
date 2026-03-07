"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Simulate loading progress
    const duration = 2000; // 2 seconds minimum loading screen
    const interval = 20;
    const step = 100 / (duration / interval);
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += step;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 400); // Small pause at 100%
      }
      setProgress(Math.floor(currentProgress));
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
        >
          {/* Noise overlay */}
          <div className="noise absolute inset-0 opacity-20 bg-repeat" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Spinning/pulsing element */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="mb-8 h-12 w-12 rounded-full border-t-2 border-r-2 border-[var(--accent-primary)] shadow-[0_0_15px_var(--glow)]"
            />
            
            {/* Loading text with scramble effect feel */}
            <div className="font-mono text-sm tracking-widest text-[#a1a1aa] mb-2">
              INITIATING_SEQUENCE
            </div>
            
            {/* Progress counter */}
            <div className="font-mono text-4xl font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              {progress.toString().padStart(3, "0")}%
            </div>
            
            {/* Progress bar */}
            <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10 glass">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)]"
                style={{ width: `${progress}%` }}
                layoutId="progressIndicator"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
