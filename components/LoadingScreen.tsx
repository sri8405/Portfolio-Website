"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
  "initializing_sriram.exe",
  "boot sequence started",
  "loading developer profile",
  "compiling projects",
  "fetching engineering data",
  "system online",
  "authentication successful",
  "entering workspace",
  "loading neural modules",
  "welcome back, recruiter"
];

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    const timer = window.setInterval(() => {
      currentLine += 1;
      setVisibleLines(currentLine);
      setProgress(Math.min(100, Math.round((currentLine / bootLines.length) * 100)));

      if (currentLine >= bootLines.length) {
        window.clearInterval(timer);
        window.setTimeout(() => setDone(true), 720);
      }
    }, 280);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(72,226,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(143,92,255,.08)_1px,transparent_1px)] bg-[size:54px_54px] opacity-40 animate-gridmove" />
          <div className="relative w-[min(420px,90vw)] text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
              className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-cyan/30 bg-white/[0.05] shadow-glow sm:h-20 sm:w-20"
            >
              <span className="font-display text-xl font-bold text-white">SP</span>
            </motion.div>
            <div className="mx-auto max-w-sm rounded-2xl border border-cyan/15 bg-black/45 p-4 text-left font-mono text-[11px] leading-6 shadow-glow backdrop-blur sm:text-xs">
              {bootLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: visibleLines > index ? 1 : 0, x: visibleLines > index ? 0 : -8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={index === 0 ? "text-cyan" : "text-white/72"}
                >
                  &gt; {line}
                </motion.p>
              ))}
            </div>
            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full bg-gradient-to-r from-cyan to-violet" animate={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 text-sm font-medium text-cyan">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
