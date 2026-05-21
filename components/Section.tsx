"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative overflow-hidden py-16 sm:py-24 lg:py-32", className)}>
      <div className="orbit-mark right-[-18rem] top-8 hidden lg:block" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 max-w-3xl"
          >
            {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan sm:text-sm sm:tracking-[0.28em]">{eyebrow}</p>}
            {title && <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
