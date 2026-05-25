"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Binary,
  BrainCircuit,
  BriefcaseBusiness,
  Car,
  Check,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  LockKeyhole,
  Mail,
  Map,
  Network,
  RadioTower,
  Route,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MagneticButton } from "@/components/MagneticButton";
import { Section } from "@/components/Section";
import {
  contact,
  currentlyBuilding,
  experiences,
  featuredProjects,
  profileStats,
  rotatingTitles,
  smartParking,
  systemsResearch,
  techGroups
} from "@/lib/data";

type ProjectAction = [label: string, href: string, Icon: LucideIcon];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 }
};

function TerminalHero() {
  const [lineCount, setLineCount] = useState(1);
  const lines = [
    ["> whoami", "Sriram PS"],
    ["> role", "AI & ML Engineer | Full Stack Developer | Systems Enthusiast"],
    ["> currently_building", "Smart City AI Systems | Local LLM Infrastructure | Cravio.tech"],
    ["> mission", "Building intelligent systems that solve real-world problems"]
  ];

  useEffect(() => {
    const timer = window.setInterval(() => setLineCount((value) => Math.min(lines.length, value + 1)), 760);
    return () => window.clearInterval(timer);
  }, [lines.length]);

  return (
    <div className="terminal-glow scanline relative overflow-hidden rounded-3xl border border-cyan/15 bg-black/72 p-4 font-mono sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.24em] text-cyan">portfolio kernel</span>
      </div>
      <div className="space-y-5 text-sm sm:text-base">
        {lines.slice(0, lineCount).map(([command, output]) => (
          <div key={command}>
            <p className="text-cyan">{command}</p>
            <p className="mt-1 break-words text-white/82">{output}</p>
          </div>
        ))}
        <span className="inline-block h-5 w-2 animate-pulse bg-cyan" />
      </div>
    </div>
  );
}

function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -14 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: 0.25, duration: 0.9, ease: "easeOut" }}
      whileHover={{ scale: 1.025, rotateX: 3, rotateY: -5 }}
      className="group relative mx-auto aspect-[4/5] w-full max-w-[310px] rounded-[2rem] border border-white/12 bg-gradient-to-b from-white/12 to-white/[0.03] p-2 shadow-violet backdrop-blur-2xl sm:max-w-[390px] sm:p-3"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute -inset-1 rounded-[2.15rem] bg-[conic-gradient(from_180deg,rgba(72,226,255,.6),rgba(167,255,92,.26),rgba(143,92,255,.58),rgba(72,226,255,.6))] opacity-70 blur-2xl" />
      <div className="scanline relative h-full overflow-hidden rounded-[1.55rem] bg-black">
        <Image src="/profile.jpeg" alt="Sriram PS" fill priority sizes="(max-width: 768px) 86vw, 390px" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.78),transparent_54%)]" />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/42 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan">AI / ML / Systems</p>
          <p className="mt-1 font-display text-xl font-semibold text-white">Sriram PS</p>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center gap-10 px-5 pb-24 sm:px-8 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="relative z-10">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.08] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan">
            <Sparkles size={14} /> Intelligent Systems Portfolio
          </motion.div>
          <motion.h1 variants={fadeUp} className="max-w-5xl font-display text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Sriram PS
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-3xl text-base leading-7 text-white/78 sm:text-xl sm:leading-9">
            AI/ML engineer and systems-minded full-stack developer building smart-city platforms, privacy-preserving systems, local AI experiments, and polished product experiences.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
            {rotatingTitles.map((title) => (
              <span key={title} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/64">{title}</span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8">
            <TerminalHero />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href={contact.resume} variant="ghost"><span className="inline-flex items-center gap-2"><Download size={16} /> Download Resume</span></MagneticButton>
            <MagneticButton href="#contact" variant="ghost">Contact Me</MagneticButton>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
            {[
              { icon: Github, href: contact.github, label: "GitHub" },
              { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${contact.email}`, label: "Email" }
            ].map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-cyan/60 hover:text-cyan hover:shadow-glow">
                <item.icon size={19} />
              </a>
            ))}
          </motion.div>
        </motion.div>
        <HeroPortrait />
      </div>
      <a href="#about" className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/46 sm:flex">
        Scroll
        <span className="grid h-10 w-6 place-items-center rounded-full border border-white/15">
          <ArrowDown className="animate-bounce text-cyan" size={14} />
        </span>
      </a>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Engineering Signal" title="Not a repository list. A portfolio of intelligent systems thinking.">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass rounded-3xl p-6 sm:p-8">
          <TerminalSquare className="mb-8 text-cyan" />
          <p className="text-lg leading-8 text-white/78">
            I build with the mindset that software is a system of tradeoffs: data freshness, latency, reliability, privacy, UI clarity, deployment constraints, and user trust all matter.
          </p>
          <div className="mt-8 grid gap-3">
            {["AI/ML pipelines that become usable products", "Backend architecture with scalable API boundaries", "Research curiosity across Linux, LLMs, ZKPs, audio, and mobility", "Frontend craft that makes engineering depth legible"].map((item) => (
              <p key={item} className="flex items-start gap-3 text-sm text-white/64"><Check size={16} className="mt-1 shrink-0 text-acid" /> {item}</p>
            ))}
          </div>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-3">
          {profileStats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass rounded-3xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">{stat.label}</p>
              <p className="mt-5 font-display text-5xl font-semibold text-white">{stat.value}</p>
              <p className="mt-4 text-sm leading-6 text-white/56">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Stack" title="A practical toolchain for AI products, backend systems, and research prototypes.">
      <div className="grid gap-5 lg:grid-cols-2">
        {techGroups.map((group, groupIndex) => (
          <motion.div key={group.category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: groupIndex * 0.05 }} className="glass rounded-3xl p-5 sm:p-6">
            <h3 className="mb-5 font-display text-2xl font-semibold text-white">{group.category}</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {group.items.map((tech) => (
                <motion.div key={tech.name} whileHover={{ y: -5, scale: 1.03 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/24 p-4">
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: `radial-gradient(circle at top, ${tech.tone}33, transparent 62%)` }} />
                  <tech.icon className="relative mb-4 text-3xl" style={{ color: tech.tone }} />
                  <p className="relative text-sm font-semibold text-white">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ParkingSlots() {
  return (
    <div className="grid grid-cols-6 gap-2">
      {Array.from({ length: 36 }).map((_, index) => {
        const occupied = [1, 2, 4, 7, 11, 12, 14, 18, 21, 23, 25, 30, 31, 34].includes(index);
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.015 }}
            className={`grid aspect-[1.25] place-items-center rounded-lg border text-[10px] font-semibold ${
              occupied ? "border-violet/40 bg-violet/18 text-violet" : "border-cyan/35 bg-cyan/10 text-cyan"
            }`}
          >
            {occupied ? <Car size={13} /> : index + 1}
          </motion.div>
        );
      })}
    </div>
  );
}

function SmartParkingShowcase() {
  return (
    <Section id="projects" eyebrow={smartParking.label} title={smartParking.title} className="pt-10">
      <div className="glass overflow-hidden rounded-[2rem]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_.95fr]">
          <div className="p-5 sm:p-8 lg:p-10">
            <p className="max-w-3xl text-lg leading-8 text-white/76">{smartParking.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              {smartParking.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">{metric.label}</p>
                  <p className="mt-2 font-display text-3xl font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {smartParking.capabilities.map((capability) => (
                <span key={capability} className="rounded-full border border-cyan/15 bg-cyan/[0.06] px-3 py-1.5 text-xs text-cyan">{capability}</span>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              {([
                ["GitHub Repo", smartParking.github, Github],
                ["Live Demo", smartParking.liveDemo, ExternalLink],
                ["Architecture", "#architecture", Network],
                ["Case Study", "#case-study", ArrowUpRight]
              ] satisfies ProjectAction[]).map(([label, href, Icon]) => (
                <a key={label} href={href} className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-white/74 transition hover:border-cyan/50 hover:text-cyan">
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>
          </div>
          <div className="relative border-t border-white/10 bg-black/26 p-5 sm:p-8 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-radial-grid bg-[length:28px_28px] opacity-20" />
            <div className="relative space-y-4">
              <div className="rounded-2xl border border-cyan/15 bg-black/54 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-cyan">live occupancy</span>
                  <Activity size={16} className="text-acid" />
                </div>
                <ParkingSlots />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/44 p-4">
                  <div className="mb-5 flex items-center gap-2 text-cyan"><Route size={17} /> Smart routing</div>
                  <div className="relative h-28 overflow-hidden rounded-xl bg-[linear-gradient(135deg,rgba(72,226,255,.12),rgba(143,92,255,.08))]">
                    <motion.div animate={{ x: ["0%", "72%", "10%"], y: ["60%", "20%", "10%"] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute left-3 top-3 h-3 w-3 rounded-full bg-acid shadow-glow" />
                    <div className="absolute left-6 top-16 h-px w-36 rotate-[-24deg] bg-gradient-to-r from-cyan to-transparent" />
                    <div className="absolute right-5 top-5 rounded-lg border border-violet/30 bg-violet/15 px-2 py-1 text-[10px] text-violet">B2</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/44 p-4">
                  <div className="mb-5 flex items-center gap-2 text-cyan"><Map size={17} /> Heatmap</div>
                  <div className="grid h-28 grid-cols-5 gap-1">
                    {Array.from({ length: 25 }).map((_, index) => (
                      <span key={index} className="rounded" style={{ background: `rgba(${index % 4 === 0 ? "167,255,92" : index % 3 === 0 ? "143,92,255" : "72,226,255"},${0.12 + (index % 5) * 0.08})` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="case-study" className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {smartParking.subsections.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="glass rounded-3xl p-5 transition hover:border-cyan/30 hover:shadow-glow">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-cyan">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">{item.body}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Architecture() {
  const nodes = [
    { icon: Car, label: "Driver App", detail: "Intent, booking, route" },
    { icon: RadioTower, label: "IoT Events", detail: "Sensors, cameras, gates" },
    { icon: Server, label: "Allocation API", detail: "Consistency and rules" },
    { icon: Database, label: "Data Layer", detail: "Availability and history" },
    { icon: BrainCircuit, label: "AI Services", detail: "Forecasting and optimization" },
    { icon: Activity, label: "Admin Analytics", detail: "Monitoring and actions" }
  ];

  return (
    <Section id="architecture" eyebrow="System Architecture" title="How the flagship project scales from app workflow to urban platform.">
      <div className="glass overflow-hidden rounded-3xl p-5 sm:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          {nodes.map((node, index) => (
            <motion.div key={node.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="relative rounded-2xl border border-white/10 bg-black/28 p-5">
              <node.icon className="mb-8 text-cyan" />
              <h3 className="font-display text-xl font-semibold text-white">{node.label}</h3>
              <p className="mt-2 text-sm text-white/56">{node.detail}</p>
              {index < nodes.length - 1 && <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-cyan to-transparent md:block" />}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SecondaryProjects() {
  return (
    <Section id="featured-projects" eyebrow="Secondary Featured Projects" title="Applied AI, cryptography, audio ML, and recommendation systems with product framing.">
      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass group overflow-hidden rounded-3xl">
            <div className="border-b border-white/10 bg-black/26 p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan/20 bg-cyan/[0.07] px-3 py-1 text-xs text-cyan">{project.short}</span>
                {project.short === "cardanorize" ? <LockKeyhole className="text-violet" /> : <BrainCircuit className="text-cyan" />}
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{project.description}</p>
            </div>
            <div className="p-5">
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/62">{tech}</span>)}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.visuals.map((visual) => (
                  <div key={visual} className="rounded-2xl border border-white/10 bg-black/24 p-4 text-sm text-white/64">
                    <Workflow className="mb-4 text-cyan" size={18} /> {visual}
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-white/58">
                Challenge: {project.challenges}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.actions.map((action) => <a key={action} href={contact.github} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/62 transition hover:border-cyan/50 hover:text-cyan">{action}</a>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function CurrentlyBuilding() {
  return (
    <Section id="building" eyebrow="Currently Building" title="Active product and research threads.">
      <div className="grid gap-5 lg:grid-cols-4">
        {currentlyBuilding.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass rounded-3xl p-5">
            <div className="mb-6 flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
              {item.href && <a href={item.href} aria-label={`${item.title} live demo`} className="text-cyan"><ArrowUpRight size={18} /></a>}
            </div>
            <span className="rounded-full border border-acid/20 bg-acid/10 px-3 py-1 text-xs text-acid">{item.status}</span>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.progress}%` }} viewport={{ once: true }} className="h-full rounded-full bg-gradient-to-r from-cyan to-acid" />
            </div>
            <p className="mt-5 text-sm leading-6 text-white/58">{item.note}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => <span key={tech} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/55">{tech}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="A timeline of product work, smart-city systems, and Linux research.">
      <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan before:via-white/20 before:to-violet md:before:left-1/2">
        {experiences.map((item, index) => (
          <motion.article key={item.role} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`relative md:w-[calc(50%-2rem)] ${index % 2 ? "md:ml-auto" : ""} pl-12 md:pl-0`}>
            <span className="absolute left-2 top-6 h-5 w-5 rounded-full border border-cyan bg-ink shadow-glow md:left-auto md:right-[-2.65rem]" />
            {index % 2 === 1 && <span className="absolute top-6 hidden h-5 w-5 rounded-full border border-violet bg-ink shadow-violet md:left-[-2.65rem] md:block" />}
            <div className="glass rounded-3xl p-5 transition hover:border-cyan/30 hover:shadow-glow sm:p-6">
              <BriefcaseBusiness className="mb-4 text-cyan" />
              <p className="text-xs uppercase tracking-[0.2em] text-white/42">{item.period}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">{item.role}</h3>
              <p className="mt-1 text-cyan">{item.company}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/64">
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/58">{tag}</span>)}
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
    <Section id="research" eyebrow="Systems Engineering & Research" title="Operating systems exploration as engineering practice.">
      <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <Cpu className="mb-8 text-cyan" />
          <p className="text-lg leading-8 text-white/76">
            This section turns Linux customization and OS experiments into a research story: constraints, failures, boot flows, virtualization edges, and infrastructure intuition.
          </p>
          <div className="mt-8 grid gap-3">
            {systemsResearch.map((item) => <p key={item} className="flex gap-3 text-sm text-white/62"><Binary size={16} className="mt-1 shrink-0 text-acid" /> {item}</p>)}
          </div>
        </div>
        <div className="glass rounded-3xl p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {["Buildroot", "Yocto Project", "antiX", "Zorin OS", "Raspberry Pi OS Lite", "VirtualBox"].map((name, index) => (
              <motion.div key={name} whileHover={{ y: -5 }} className="rounded-2xl border border-white/10 bg-black/26 p-5">
                <ShieldCheck className={index % 2 ? "mb-8 text-violet" : "mb-8 text-cyan"} />
                <h3 className="font-display text-xl font-semibold text-white">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">Explored through setup friction, constraints, debugging, and deployment thinking.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build intelligent systems that survive contact with reality.">
      <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
        <div className="glass rounded-3xl p-5 sm:p-7">
          <Zap className="mb-8 text-cyan" />
          <p className="text-base leading-7 text-white/78 sm:text-xl sm:leading-8">
            Open to AI/ML engineering internships, backend roles, research-driven product teams, and startup builds where thoughtful systems matter.
          </p>
          <div className="mt-8 space-y-3">
            <button onClick={copyEmail} className="flex items-center gap-3 break-all text-left text-white/70 transition hover:text-cyan"><Copy size={18} className="shrink-0" /> {copied ? "Email copied" : contact.email}</button>
            <a href={contact.github} className="flex items-center gap-3 text-white/70 transition hover:text-cyan"><Github size={18} /> GitHub</a>
            <a href={contact.linkedin} className="flex items-center gap-3 text-white/70 transition hover:text-cyan"><Linkedin size={18} /> LinkedIn</a>
            <a href={contact.resume} className="flex items-center gap-3 text-white/70 transition hover:text-cyan"><Download size={18} /> Resume</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" className="rounded-2xl border border-white/10 bg-black/28 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-cyan/50" />
            <input required type="email" placeholder="Email" className="rounded-2xl border border-white/10 bg-black/28 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-cyan/50" />
          </div>
          <textarea required placeholder="Message" rows={6} className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-black/28 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-cyan/50" />
          <button className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan to-acid font-semibold text-ink shadow-glow transition hover:scale-[1.01] sm:w-auto sm:px-7">
            Send Message <Send size={17} />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display font-semibold text-white">Sriram PS</p>
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-cyan to-transparent" />
        <p className="text-sm text-white/52">Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative z-10">
      <LoadingScreen />
      <Header />
      <Hero />
      <About />
      <Skills />
      <SmartParkingShowcase />
      <Architecture />
      <SecondaryProjects />
      <CurrentlyBuilding />
      <Experience />
      <Research />
      <Contact />
      <Footer />
    </main>
  );
}
