"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function MagneticButton({ children, className, variant = "primary", ...props }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  return (
    <motion.a
      {...props}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-white text-ink shadow-glow hover:bg-cyan"
          : "border border-white/12 bg-white/[0.04] text-white backdrop-blur-xl hover:border-cyan/60 hover:text-cyan",
        className
      )}
    >
      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl" />
      </span>
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
