"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Trophy,
  UserRound,
  Zap
} from "lucide-react";
import { Header } from "@/components/Header";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MagneticButton } from "@/components/MagneticButton";
import { Section } from "@/components/Section";
import { achievements, experiences, profileStats, projects, rotatingTitles, techGroups } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 }
};

const contact = {
  email: "pssriram2005@gmail.com",
  phone: "+91 98807 42348",
  github: "https://github.com/sri8405",
  linkedin: "https://www.linkedin.com/in/sriram-p-s-0b897b233/"
};

function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((value) => (value + 1) % rotatingTitles.length), 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative mt-1 inline-flex min-h-8 min-w-[210px] overflow-hidden align-bottom text-cyan sm:mt-0 sm:min-w-[280px]">
      <motion.span
        key={rotatingTitles[index]}
        initial={{ y: 24, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        exit={{ y: -24, opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="absolute left-0"
      >
        {rotatingTitles[index]}
      </motion.span>
    </span>
  );
}

function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -18, y: 40 }}
      animate={{ opacity: 1, rotateY: 0, y: 0 }}
      transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
      whileHover={{ rotateX: 4, rotateY: -6, scale: 1.025 }}
      className="group relative mx-auto aspect-[4/5] w-full max-w-[300px] rounded-[2rem] border border-white/12 bg-gradient-to-b from-white/12 to-white/[0.035] p-2 shadow-violet backdrop-blur-2xl sm:max-w-[380px] sm:p-3"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute -inset-1 rounded-[2.1rem] bg-gradient-to-br from-cyan/35 via-white/8 to-violet/35 opacity-70 blur-2xl" />
      <div className="scanline relative h-full overflow-hidden rounded-[1.55rem] bg-[radial-gradient(ellipse_at_top,rgba(72,226,255,.28),transparent_48%),linear-gradient(145deg,#111827,#050507_64%)]">
        <Image
          src="/profile.jpeg"
          alt="Sriram PS"
          fill
          priority
          sizes="(max-width: 768px) 86vw, 380px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(72,226,255,.08),transparent_42%),linear-gradient(to_top,rgba(5,5,7,.55),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.14),transparent)] opacity-35" />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/38 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-cyan sm:text-xs sm:tracking-[0.24em]">AI/ML Engineer</p>
          <p className="mt-1 font-display text-lg font-semibold text-white">Sriram PS</p>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center gap-10 px-5 pb-24 sm:px-8 sm:pb-16 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="relative z-10">
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.08] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            <Sparkles size={14} /> Open to Opportunities
          </motion.div>
          <motion.h1 variants={fadeUp} className="max-w-5xl font-display text-5xl font-semibold leading-[0.94] tracking-tight text-white sm:text-8xl lg:text-9xl">
            Sriram PS
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/82 sm:mt-6 sm:text-2xl sm:leading-normal">
            Software Engineer & AI/ML Developer building scalable systems, intelligent products, and polished full-stack experiences.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 flex flex-col font-display text-lg text-white/64 sm:block sm:text-2xl">
            Currently shipping as a <RotatingTitle />
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
            <MagneticButton href="#projects" className="w-full sm:w-auto">View Projects</MagneticButton>
            <MagneticButton href="/resume.pdf" variant="ghost" className="w-full sm:w-auto">
              <span className="inline-flex items-center gap-2"><Download size={16} /> Download Resume</span>
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost" className="w-full sm:w-auto">Contact Me</MagneticButton>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
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
  const snippets = ["build: scalable APIs", "model: recommendation logic", "ship: clean product flows", "debug: systems under pressure"];
  return (
    <Section id="about" eyebrow="About" title="Engineering mindset, product taste, AI curiosity.">
      <div className="grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass overflow-x-auto rounded-3xl p-5 sm:p-8">
          <div className="mb-8 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="min-w-[520px] space-y-4 font-mono text-sm text-white/76 sm:min-w-0">
            <p><span className="text-cyan">const</span> engineer = &#123;</p>
            <p className="pl-5">degree: <span className="text-acid">&quot;AI & ML Undergraduate&quot;</span>,</p>
            <p className="pl-5">focus: <span className="text-acid">&quot;Backend systems + scalable apps&quot;</span>,</p>
            <p className="pl-5">mindset: <span className="text-acid">&quot;Solve clearly. Ship thoughtfully.&quot;</span>,</p>
            <p className="pl-5">impact: <span className="text-acid">&quot;Real-world engineering through internships and projects&quot;</span></p>
            <p>&#125;;</p>
          </div>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {snippets.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass group rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan/30 hover:shadow-glow sm:p-6"
            >
              <Code2 className="mb-8 text-cyan" />
              <p className="font-display text-xl font-semibold text-white">{item}</p>
              <p className="mt-3 text-sm leading-6 text-white/58">
                I approach software as a system of tradeoffs: reliability, latency, developer clarity, and user value all matter.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Profile() {
  return (
    <Section id="profile" eyebrow="Engineer Profile" title="A compact dashboard of signal.">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="glass rounded-3xl p-5 sm:p-7 lg:col-span-1">
          <div className="flex items-center gap-3 text-cyan"><UserRound /><span className="font-semibold">Sriram PS</span></div>
          <div className="mt-8 space-y-5 text-sm text-white/70">
            <p className="flex items-center gap-3"><MapPin size={17} /> Bangalore, Karnataka, India</p>
            <p className="flex items-center gap-3"><GraduationCap size={17} /> Nitte Meenakshi Institute of Technology</p>
            <p className="flex items-center gap-3"><Cpu size={17} /> Artificial Intelligence & Machine Learning</p>
          </div>
          <div className="mt-8 rounded-full border border-acid/20 bg-acid/10 px-4 py-2 text-center text-sm font-semibold text-acid">Open to Opportunities</div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {profileStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="glass rounded-3xl p-5 sm:p-7"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">{stat.label}</p>
              <p className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">{stat.value}</p>
            </motion.div>
          ))}
          {["Experience: Latavya Technologies + Loginware Softtech", "Leadership: Treasurer, UI/UX Club", "Hackathons: Cardano Asia Finalist + Tech Trail Winner", "Skills: backend, AI/ML, full-stack systems"].map((line) => (
            <div key={line} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm text-white/68">
              {line}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TechStack() {
  return (
    <Section id="stack" eyebrow="Tech Stack" title="A futuristic engineering control panel.">
      <div className="grid gap-5 lg:grid-cols-2">
        {techGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.05 }}
            className="glass rounded-3xl p-5 sm:p-6"
          >
            <h3 className="mb-5 font-display text-2xl font-semibold text-white">{group.category}</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/24 p-4"
                >
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

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internships across product systems and embedded Linux.">
      <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan before:via-white/20 before:to-violet md:before:left-1/2">
        {experiences.map((item, index) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative md:w-[calc(50%-2rem)] ${index % 2 ? "md:ml-auto" : ""} pl-12 md:pl-0`}
          >
            <span className="absolute left-2 top-6 h-5 w-5 rounded-full border border-cyan bg-ink shadow-glow md:left-auto md:right-[-2.65rem]" />
            {index % 2 === 1 && <span className="absolute top-6 hidden h-5 w-5 rounded-full border border-violet bg-ink shadow-violet md:left-[-2.65rem] md:block" />}
            <div className="glass rounded-3xl p-5 transition hover:border-cyan/30 hover:shadow-glow sm:p-6">
              <BriefcaseBusiness className="mb-4 text-cyan" />
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{item.role}</h3>
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

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Product-style showcases with engineering depth.">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass group flex min-h-[470px] flex-col overflow-hidden rounded-3xl sm:min-h-[520px]"
          >
            <div className="relative h-36 overflow-hidden border-b border-white/10 bg-black/40 sm:h-44">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(72,226,255,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:28px_28px] transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-x-5 top-8 rounded-2xl border border-white/12 bg-white/[0.06] p-4 shadow-glow backdrop-blur sm:inset-x-8 sm:top-10">
                <div className="mb-3 h-2 w-20 rounded-full bg-cyan/60" />
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-white/18" />
                  <div className="h-2 w-2/3 rounded-full bg-white/12" />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-cyan">{tech}</span>)}
              </div>
              <div className="mt-5 grid gap-2 text-sm text-white/58">
                {project.features.map((feature) => <p key={feature}>+ {feature}</p>)}
              </div>
              <div className="mt-auto grid gap-3 pt-6 sm:flex">
                <a href={contact.github} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/72 transition hover:border-cyan/50 hover:text-cyan"><Github size={16} /> GitHub</a>
                <a href={project.liveDemo ?? "#"} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-cyan">Live Demo <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Signals of initiative and momentum.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="glass rounded-3xl p-6">
            {index % 2 ? <Trophy className="text-violet" /> : <Award className="text-cyan" />}
            <p className="mt-10 font-display text-4xl font-semibold text-white">{item.value}x</p>
            <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-white/52">{item.metric}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Terminal() {
  const commands: Record<string, string[]> = {
    whoami: ["Sriram PS", "Software Engineer & AI/ML Developer", "Bangalore, Karnataka, India"],
    skills: ["Java, Python, C++, JavaScript", "Spring, FastAPI, Flask, MongoDB, PostgreSQL", "NumPy, pandas, scikit-learn"],
    projects: projects.map((project) => project.title),
    experience: experiences.map((exp) => `${exp.role} - ${exp.company}`),
    contact: [`Email: ${contact.email}`, `Phone: ${contact.phone}`, `GitHub: ${contact.github}`, `LinkedIn: ${contact.linkedin}`],
    education: ["Nitte Meenakshi Institute of Technology", "Artificial Intelligence & Machine Learning", "CGPA: 8.5"]
  };
  const [input, setInput] = useState("whoami");
  const output = commands[input.toLowerCase()] ?? ["Command not found. Try whoami, skills, projects, experience, contact, education."];

  return (
    <Section id="terminal" eyebrow="Interactive Terminal" title="Ask the portfolio directly.">
      <div className="terminal-glow scanline relative overflow-hidden rounded-3xl border border-cyan/15 bg-black/78 p-4 font-mono sm:p-5">
        <div className="mb-6 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="space-y-2 break-words text-xs sm:text-sm">
          <p className="text-white/45">Supported commands: whoami, skills, projects, experience, contact, education</p>
          <label className="flex flex-wrap items-center gap-2 text-cyan">
            <span>sriram@portfolio:~$</span>
            <input value={input} onChange={(event) => setInput(event.target.value)} className="min-w-0 flex-1 bg-transparent text-white outline-none" aria-label="Terminal command" />
            <span className="h-5 w-2 animate-pulse bg-cyan" />
          </label>
          <div className="break-all pt-4 text-white/76">
            {output.map((line) => <p key={line}>{line}</p>)}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Amazing.">
      <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
        <div className="glass rounded-3xl p-5 sm:p-7">
          <Zap className="mb-8 text-cyan" />
          <p className="text-base leading-7 text-white/78 sm:text-xl sm:leading-8">
            I am open to software engineering internships, AI startup roles, backend systems work, and ambitious product teams.
          </p>
          <div className="mt-8 space-y-3">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all text-white/70 transition hover:text-cyan"><Mail size={18} className="shrink-0" /> {contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-white/70 transition hover:text-cyan"><Phone size={18} className="shrink-0" /> {contact.phone}</a>
            <a href={contact.github} className="flex items-center gap-3 text-white/70 transition hover:text-cyan"><Github size={18} /> GitHub</a>
            <a href={contact.linkedin} className="flex items-center gap-3 text-white/70 transition hover:text-cyan"><Linkedin size={18} /> LinkedIn</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" className="rounded-2xl border border-white/10 bg-black/28 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-cyan/50" />
            <input required type="email" placeholder="Email" className="rounded-2xl border border-white/10 bg-black/28 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-cyan/50" />
          </div>
          <textarea required placeholder="Message" rows={6} className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-black/28 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-cyan/50" />
          <button className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet font-semibold text-ink shadow-glow transition hover:scale-[1.01] sm:w-auto sm:px-7">
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
        <p className="text-sm text-white/52">Built with Next.js & Tailwind CSS</p>
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
      <Profile />
      <TechStack />
      <Experience />
      <Projects />
      <Achievements />
      <Terminal />
      <Contact />
      <Footer />
    </main>
  );
}
