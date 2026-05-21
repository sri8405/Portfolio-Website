"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems } from "@/lib/data";

export function Header() {
  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed left-0 right-0 top-3 z-40 mx-auto w-[min(1120px,calc(100%-20px))] sm:top-4"
      >
        <nav className="glass flex h-14 items-center justify-between rounded-full px-3 sm:px-4">
          <a href="#hero" className="font-display text-xs font-semibold tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.22em]">
            SRIRAM.PS
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-3 py-2 text-xs font-medium text-white/62 transition hover:bg-white/[0.08] hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <a aria-label="GitHub" href="https://github.com/sri8405" className="rounded-full p-2 text-white/68 transition hover:bg-white/10 hover:text-cyan">
              <Github size={17} />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/sriram-p-s-0b897b233/" className="rounded-full p-2 text-white/68 transition hover:bg-white/10 hover:text-cyan">
              <Linkedin size={17} />
            </a>
            <a aria-label="Email" href="mailto:pssriram2005@gmail.com" className="rounded-full p-2 text-white/68 transition hover:bg-white/10 hover:text-cyan">
              <Mail size={17} />
            </a>
          </div>
        </nav>
      </motion.header>
      <nav className="fixed bottom-3 left-1/2 z-40 flex w-[calc(100%-20px)] -translate-x-1/2 gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/58 p-1 backdrop-blur-xl md:hidden">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="shrink-0 rounded-full px-3 py-2 text-[11px] font-medium text-white/68">
            {item}
          </a>
        ))}
      </nav>
    </>
  );
}
