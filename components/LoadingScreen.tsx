"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 400; // 400ms loading time
    const interval = 20;
    const step = 100 / (duration / interval);
    
    const timer = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          window.clearInterval(timer);
          window.setTimeout(() => setDone(true), 100);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#09090B] select-none"
          onClick={() => setDone(true)}
        >
          <div className="w-[min(280px,80vw)] text-center">
            <h1 className="font-display text-lg font-medium tracking-[0.2em] text-white uppercase">
              SRIRAM PS
            </h1>
            <p className="mt-1 font-mono text-[9px] tracking-wider text-zinc-500 uppercase">
              Systems & AI Portfolio
            </p>
            <div className="mt-6 h-[2px] w-full bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all ease-out duration-100" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <p className="mt-3 font-mono text-[10px] text-zinc-400">{Math.round(progress)}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
