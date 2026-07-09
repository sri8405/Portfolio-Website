"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Send,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Header } from "@/components/Header";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Section } from "@/components/Section";
import {
  contact,
  currentlyBuilding,
  experiences,
  featuredProjects,
  systemsResearch,
  techGroups,
  engineeringHighlights,
  profileStats
} from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 }
};

// CSS-based Mock Visual Headers for Project Cards
function ParkItSmartVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950/20 flex items-center justify-center font-mono">
      <div className="grid grid-cols-6 gap-1.5 p-3 w-full max-w-[200px]">
        {Array.from({ length: 18 }).map((_, i) => (
          <div 
            key={i} 
            className={`h-2.5 rounded-sm ${
              [1, 2, 4, 7, 11, 14].includes(i) ? "bg-blue-600/40 border border-blue-500/30" : "bg-zinc-800/40 border border-zinc-700/20"
            }`}
          />
        ))}
      </div>
      <div className="absolute top-2 right-3 rounded bg-blue-950/40 border border-blue-900/30 px-1.5 py-0.5 text-[8px] text-blue-400">
        Occupancy: 78% (simulated)
      </div>
    </div>
  );
}

function CravioVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950/20 flex items-center justify-center font-mono text-[9px] text-zinc-500">
      <div className="flex items-center gap-3">
        <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Order Intent</span>
        <span className="text-blue-500">→</span>
        <span className="rounded border border-blue-900 bg-blue-950/30 px-2 py-1 text-blue-400">WebSocket Sync</span>
        <span className="text-blue-500">→</span>
        <span className="rounded border border-zinc-800 bg-zinc-950 px-2 py-1">Agent Tracking</span>
      </div>
    </div>
  );
}

function GuruSevaVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950/20 flex items-center justify-center font-mono text-[9px]">
      <div className="border border-zinc-800 bg-zinc-950/80 p-3 rounded-lg w-full max-w-[240px] shadow-sm">
        <div className="flex justify-between text-zinc-400 border-b border-zinc-900 pb-1.5 mb-1.5 font-semibold text-[8px]">
          <span>TRANSACTION ID</span>
          <span className="text-blue-400">tx_98271</span>
        </div>
        <div className="flex justify-between text-zinc-500 text-[8px] mb-1">
          <span>Razorpay Signature Verification</span>
          <span className="text-green-500">✓ VALID</span>
        </div>
        <div className="flex justify-between text-zinc-500 text-[8px]">
          <span>Atomic DB Lock (Idempotency)</span>
          <span className="text-blue-500">✓ SECURED</span>
        </div>
      </div>
    </div>
  );
}

function TouristVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950/20 flex items-center justify-center font-mono text-[9px] text-zinc-500">
      <div className="grid grid-cols-4 gap-1 w-full max-w-[180px]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="h-5 rounded border border-zinc-800/80 bg-zinc-950 flex items-center justify-center text-[8px]"
          >
            P{i+1}: {(0.3 + (i * 0.08)).toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
}

function PotholeVisual() {
  return (
    <div className="relative h-32 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950/20 flex items-center justify-center font-mono text-[9px]">
      <div className="relative h-20 w-full max-w-[200px] border border-zinc-800 rounded bg-zinc-950/50">
        <div className="absolute top-3 left-4 rounded border border-blue-900 bg-blue-950/20 px-1 py-0.5 text-[8px] text-blue-400 flex items-center gap-1">
          <span>YOLOv8: Pothole</span>
          <span className="text-[7px] text-blue-500">(0.94)</span>
        </div>
        <div className="absolute bottom-4 right-5 rounded border border-zinc-800 bg-zinc-900/30 px-1 py-0.5 text-[7px] text-zinc-500">
          DBSCAN Cluster #1
        </div>
      </div>
    </div>
  );
}

function renderVisual(short: string) {
  switch (short) {
    case "ParkItSmart":
      return <ParkItSmartVisual />;
    case "Cravio":
      return <CravioVisual />;
    case "GuruSeva":
      return <GuruSevaVisual />;
    case "Travel-Tech Recommender":
      return <TouristVisual />;
    case "Pothole Detector":
      return <PotholeVisual />;
    default:
      return null;
  }
}

function Hero() {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div 
          initial="hidden" 
          animate="show" 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } }
          }} 
          className="relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-blue-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Available for AI/ML internships — Grand Finalist, Cardano Hackathon Asia 2025</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-display text-5xl font-bold leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
            Sriram PS
          </motion.h1>
          
          <motion.p variants={fadeUp} className="mt-4 text-lg font-semibold tracking-wide text-blue-500 uppercase sm:text-xl">
            AI/ML Engineer & Systems Builder
          </motion.p>
          
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I build production-quality systems, spanning machine learning models, low-latency backends, and robust full-stack applications. Focused on performance, scalability, and technical clarity.
          </motion.p>
          
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a 
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 hover:scale-[1.01]"
            >
              <Download size={15} /> Download Resume
            </a>
            <a 
              href="#contact" 
              className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 text-sm font-semibold text-zinc-300 transition hover:border-zinc-700 hover:text-white hover:scale-[1.01]"
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            {[
              { icon: Github, href: contact.github, label: "GitHub" },
              { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${contact.email}`, label: "Email" }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label} 
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition hover:border-blue-500/50 hover:text-blue-500"
              >
                <item.icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center lg:justify-end w-full lg:pt-16"
        >
          <div className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-md">
            <Image 
              src="/profile.jpeg" 
              alt="Sriram PS" 
              fill 
              priority 
              sizes="(max-width: 768px) 280px, 320px" 
              className="object-cover grayscale hover:grayscale-0 transition duration-300" 
            />
          </div>
        </motion.div>
      </div>
      
      {/* Highlights Grid directly in Hero section */}
      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-6">
          Engineering Highlights
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {engineeringHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              className="glass rounded-xl p-5 border border-zinc-800/40 hover:border-zinc-700/60"
            >
              <span className="text-[9px] font-semibold uppercase tracking-wider text-blue-500">
                {highlight.category}
              </span>
              <p className="mt-2 font-display text-base font-semibold text-white tracking-tight leading-snug">
                {highlight.title}
              </p>
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                {highlight.detail}
              </p>
              {highlight.metric && (
                <div className="mt-4 inline-flex rounded bg-blue-950/40 border border-blue-900/30 px-2 py-0.5 text-[9px] font-semibold font-mono text-blue-400">
                  {highlight.metric}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Stack" title="A professional toolkit for systems, data, and machine learning.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((group, groupIndex) => (
          <motion.div 
            key={group.category} 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.3, delay: groupIndex * 0.05 }} 
            className="glass rounded-xl p-5 border border-zinc-800/40"
          >
            <h3 className="mb-4 font-display text-base font-semibold text-white tracking-tight border-b border-zinc-850 pb-2">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <div 
                  key={tech.name} 
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-800/40 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-900/50"
                >
                  <tech.icon size={13} className="text-blue-500" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Systems" title="Applied AI, backend structures, and systems case studies.">
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
            className="glass group flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/40"
          >
            {/* Typographic Mock Visual Header */}
            {renderVisual(project.short)}
            
            <div className="p-5 sm:p-6 border-b border-zinc-850">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    project.statusType === "live" ? "bg-blue-500 animate-pulse" :
                    project.statusType === "prototype" ? "bg-yellow-500" : "bg-zinc-500"
                  }`} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                    {project.status}
                  </span>
                </div>
                {project.badge && (
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-blue-400">
                    {project.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight text-white leading-snug">
                {project.title}
              </h3>
              <p className="mt-3 text-xs leading-5 text-zinc-400">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-grow flex-col gap-4 p-5 sm:p-6">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-md border border-zinc-800/60 bg-zinc-900/30 px-2 py-0.5 text-[10px] text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="rounded-lg border border-blue-500/10 bg-blue-500/[0.01] p-3 text-xs leading-5 text-zinc-400">
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-blue-500">Challenges Solved</p>
                {project.challenges}
              </div>
              
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/10 p-3 text-xs leading-5 text-zinc-400">
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-zinc-300">Engineering Tradeoff</p>
                {project.decision}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/40 px-3.5 text-xs font-semibold text-zinc-300 transition hover:border-blue-500/50 hover:text-blue-500 hover:scale-[1.01]"
                  >
                    <Github size={13} /> GitHub Repo
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/40 px-3.5 text-xs font-semibold text-zinc-300 transition hover:border-blue-500/50 hover:text-blue-500 hover:scale-[1.01]"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Timeline" title="Engineering Internship History.">
      <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-zinc-800 md:before:left-1/2">
        {experiences.map((item, index) => (
          <motion.article 
            key={item.role} 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className={`relative md:w-[calc(50%-2rem)] ${index % 2 ? "md:ml-auto" : ""} pl-12 md:pl-0`}
          >
            <span className="absolute left-2 top-6 h-4 w-4 rounded-full border border-blue-500 bg-zinc-950 md:left-auto md:right-[-2.45rem]" />
            {index % 2 === 1 && <span className="absolute top-6 hidden h-4 w-4 rounded-full border border-blue-500 bg-zinc-950 md:left-[-2.45rem] md:block" />}
            <div className="glass rounded-xl p-5 sm:p-6 hover:border-zinc-700/60">
              <BriefcaseBusiness className="mb-3 text-blue-500 animate-none" size={20} />
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">{item.period}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.role}</h3>
              <p className="text-xs text-blue-500">{item.company}</p>
              <ul className="mt-4 space-y-2 text-xs leading-5 text-zinc-400">
                {item.points.map((point) => <li key={point} className="list-disc ml-3">{point}</li>)}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => <span key={tag} className="rounded-md border border-zinc-800 bg-zinc-900/30 px-2 py-0.5 text-[9px] text-zinc-500">{tag}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Research() {
  return (
    <Section id="research" eyebrow="Systems Engineering & Research" title="Machine learning theory and low-spec operating systems.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="glass flex flex-col justify-between rounded-xl p-5 sm:p-6 border border-zinc-800/40">
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-2.5 py-0.5 font-mono text-[10px] text-blue-400">
                MARL Research Paper
              </span>
              <span className="rounded-full border border-zinc-800 bg-zinc-900/40 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-zinc-400">
                Target: ERCICAM 2026
              </span>
            </div>
            <h3 className="font-display text-xl font-bold tracking-tight text-white">
              Dependency-Aware Activation Scheduling in Multi-Agent Reinforcement Learning (MARL)
            </h3>
            <p className="mt-2 font-mono text-[9px] font-semibold uppercase tracking-wider text-blue-500">
              Status: Final Year Research Project
            </p>
            
            <div className="mt-5 space-y-3.5 text-xs leading-5 text-zinc-400">
              <p>
                <strong>What MARL is:</strong> Multi-Agent Reinforcement Learning (MARL) enables independent autonomous agents to learn optimal policies through trial-and-error interactions in a shared environment.
              </p>
              <p>
                <strong>The Coordination Bottleneck:</strong> Coordinating multiple agents is difficult due to environmental non-stationarity: when all agents update their policies simultaneously, the transition dynamics shift unpredictably, causing policy oscillations and training instability.
              </p>
              <p>
                <strong>Our Solution:</strong> We introduce dependency-aware activation scheduling, which models agent interdependencies as a directed graph. Instead of concurrent updates, agents are scheduled sequentially based on their causal coupling weight.
              </p>
              <p>
                <strong>Efficiency & Convergence:</strong> Sequential scheduling reduces training updates and policy conflict, stabilizing the learning path and accelerating convergence compared to standard simultaneous update models.
              </p>
            </div>
          </div>
        </div>

        <div className="glass flex flex-col justify-between rounded-xl p-5 sm:p-6 border border-zinc-800/40">
          <div>
            <Cpu className="mb-5 text-blue-500" size={20} />
            <h3 className="font-display text-lg font-semibold tracking-tight text-white mb-3">
              Systems Engineering & Custom OS Research
            </h3>
            <p className="text-xs leading-5 text-zinc-400 mb-5">
              Investigating lightweight Linux kernel boot configurations, custom image builds for embedded targets, and virtualization hypervisor constraints.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: "Buildroot", detail: "Custom image configs and compilation toolchains." },
                { name: "Yocto Project", detail: "Embedded Linux distribution recipes and dependency layers." },
                { name: "antiX OS", detail: "Lightweight kernel configurations for resource-constrained x86 targets." },
                { name: "Zorin OS Lite", detail: "UI configurations and desktop environment resource tuning." },
                { name: "Raspberry Pi OS Lite", detail: "Headless automation scripts and minimal deployment workflows." },
                { name: "VirtualBox Hypervisor", detail: "Host-guest networking, hardware pass-through, and virtual disk testing." }
              ].map((item, index) => (
                <div key={item.name} className="rounded-lg border border-zinc-800/40 bg-zinc-900/10 p-3.5">
                  <ShieldCheck className="mb-3 text-blue-500" size={16} />
                  <h4 className="font-display text-xs font-semibold text-white">{item.name}</h4>
                  <p className="mt-1 text-[10px] leading-4 text-zinc-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Engineering Signal" title="A portfolio of intelligent systems thinking.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="glass rounded-xl p-6 sm:p-8"
        >
          <p className="text-base leading-7 text-zinc-300">
            I build with the mindset that software is a system of tradeoffs: data freshness, latency, reliability, privacy, UI clarity, deployment constraints, and user trust all matter.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              "AI/ML pipelines that become usable products", 
              "Backend architecture with scalable API boundaries", 
              "Research curiosity across Linux, LLMs, and MARL theory", 
              "Frontend craft that makes engineering depth legible"
            ].map((item) => (
              <p key={item} className="flex items-start gap-2 text-xs text-zinc-400">
                <Check size={14} className="mt-0.5 shrink-0 text-blue-500" /> {item}
              </p>
            ))}
          </div>
        </motion.div>
        
        <div className="grid gap-4 sm:grid-cols-3">
          {profileStats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.05 }} 
              className="glass rounded-xl p-5 border border-zinc-800/40"
            >
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">{stat.label}</p>
              <p className="mt-3 font-display text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-xs leading-5 text-zinc-500">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const handleEmailClick = () => {
    navigator.clipboard.writeText("pssriram2005@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s Build Something Meaningful">
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* LEFT PANEL */}
        <div className="glass flex flex-col justify-between rounded-xl p-6 sm:p-8 lg:col-span-7 border border-zinc-800/40">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white mb-4">
              Let&apos;s Build Something Meaningful
            </h3>
            <p className="text-sm leading-6 text-zinc-400 mb-6">
              I&apos;m actively seeking Software Engineering, AI/ML, Backend Engineering, and Research opportunities. Whether it&apos;s an internship, full-time role, startup idea, or open-source collaboration, I&apos;d love to connect.
            </p>
            
            <div className="mb-6">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-500 mb-2.5">Open To</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Software Engineering",
                  "AI/ML",
                  "Backend Development",
                  "Research",
                  "Open Source"
                ].map((badge) => (
                  <span 
                    key={badge} 
                    className="rounded-md border border-zinc-800 bg-zinc-900/30 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 border-t border-zinc-850 pt-6 mt-4">
            <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/10 p-4">
              <Mail size={16} className="text-blue-500 shrink-0" />
              <div className="text-left overflow-hidden">
                <p className="text-[9px] uppercase text-zinc-500 tracking-wider">Email</p>
                <a href={`mailto:${contact.email}`} className="text-xs font-mono text-zinc-300 hover:text-blue-500 break-all transition-colors duration-200">
                  {contact.email}
                </a>
              </div>
            </div>
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/10 p-4 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/30"
            >
              <Download size={16} className="text-blue-500 shrink-0" />
              <div className="text-left">
                <p className="text-[9px] uppercase text-zinc-500 tracking-wider">Resume</p>
                <p className="font-semibold text-xs text-zinc-300">Download Resume</p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="glass flex flex-col justify-between rounded-xl p-6 sm:p-8 lg:col-span-5 border border-zinc-800/40 bg-gradient-to-b from-white/[0.01] to-transparent">
          <div>
            <Zap className="mb-5 text-blue-500" size={20} />
            <h3 className="font-display text-xl font-bold tracking-tight text-white mb-2">
              Let&apos;s Connect
            </h3>
            <p className="text-xs leading-5 text-zinc-400 mb-6">
              Interested in working together, discussing an opportunity, or collaborating on an exciting project? Feel free to reach out.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:pssriram2005@gmail.com?subject=Opportunity%20for%20Sriram%20PS&body=Hi%20Sriram,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0A%0ABest%20regards,"
              onClick={handleEmailClick}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:scale-[1.01]"
            >
              <Mail size={14} /> {copied ? "Email Copied!" : "Email Me"}
            </a>
            
            <div className="flex justify-center gap-3 pt-3 border-t border-zinc-850">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-blue-500 hover:bg-blue-500/[0.02]"
              >
                <Github size={15} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-blue-500 hover:bg-blue-500/[0.02]"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/30 text-zinc-400 transition-all duration-200 hover:border-blue-500/50 hover:text-blue-500 hover:bg-blue-500/[0.02]"
              >
                <Download size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-zinc-850 px-5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display font-medium text-white text-sm">Sriram PS</p>
        <p className="text-xs text-zinc-500">Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative z-10 bg-ink">
      <LoadingScreen />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
