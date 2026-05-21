"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 30 });
  const springY = useSpring(y, { stiffness: 260, damping: 30 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setVisible(true);
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
      document.documentElement.style.setProperty("--spotlight-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${event.clientY}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-20 hidden bg-[radial-gradient(circle_420px_at_var(--spotlight-x)_var(--spotlight-y),rgba(72,226,255,.08),transparent_70%)] lg:block" />
      <motion.div
        style={{ x: springX, y: springY }}
        className={`pointer-events-none fixed z-50 hidden h-9 w-9 rounded-full border border-cyan/50 mix-blend-screen transition-opacity lg:block ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
