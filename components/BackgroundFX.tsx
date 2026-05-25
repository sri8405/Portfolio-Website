"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  twinkle: number;
  drift: number;
};

export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let rafId = 0;
    const stars: Star[] = Array.from({ length: 118 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.15 + 0.25,
      alpha: Math.random() * 0.48 + 0.12,
      twinkle: Math.random() * 0.018 + 0.004,
      drift: Math.random() * 0.08 + 0.02
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const draw = () => {
      frame += 1;
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star, index) => {
        const x = ((star.x * width + frame * star.drift) % (width + 24)) - 12;
        const y = star.y * height + Math.sin(frame * 0.002 + index) * 3;
        const pulse = Math.sin(frame * star.twinkle + index) * 0.18;
        ctx.beginPath();
        ctx.arc(x, y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = index % 9 === 0 ? `rgba(72,226,255,${star.alpha + pulse})` : `rgba(255,255,255,${star.alpha + pulse})`;
        ctx.fill();
      });

      const centerX = width * 0.74;
      const centerY = height * 0.34;
      const orbitScale = Math.min(width, height) * 0.28;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(frame * 0.00055);
      [0.72, 1, 1.32].forEach((scale, index) => {
        ctx.beginPath();
        ctx.ellipse(0, 0, orbitScale * scale, orbitScale * scale * 0.34, -0.26, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(72,226,255,${0.06 - index * 0.012})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const planetAngle = frame * 0.003;
      const planetX = Math.cos(planetAngle) * orbitScale;
      const planetY = Math.sin(planetAngle) * orbitScale * 0.34;
      const glow = ctx.createRadialGradient(planetX, planetY, 0, planetX, planetY, 18);
      glow.addColorStop(0, "rgba(143,92,255,0.42)");
      glow.addColorStop(1, "rgba(143,92,255,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(planetX, planetY, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.68)";
      ctx.beginPath();
      ctx.arc(planetX, planetY, 1.7, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      rafId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(34,51,84,.48),transparent_48%),linear-gradient(180deg,#03040a_0%,#06070d_48%,#020207_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />
      {["Python", "Docker", "TensorFlow", "Git", "React", "Ollama", "Next.js"].map((tech, index) => (
        <div
          key={tech}
          className="absolute hidden rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 shadow-glow lg:block"
          style={{
            left: `${7 + index * 12}%`,
            top: `${18 + (index % 3) * 22}%`,
            animation: `drift ${5 + index * 0.7}s ease-in-out infinite`
          }}
        >
          {tech}
        </div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,.18)_56%,rgba(0,0,0,.62)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(72,226,255,.05),transparent_28%,rgba(143,92,255,.04)_76%,transparent)]" />
    </div>
  );
}
