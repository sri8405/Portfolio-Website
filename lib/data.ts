import {
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNumpy,
  SiOllama,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiSpring,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript
} from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

export const contact = {
  email: "pssriram2005@gmail.com",
  phone: "+91 98807 42348",
  github: "https://github.com/sri8405",
  linkedin: "https://www.linkedin.com/in/sriram-p-s-0b897b233/",
  resume: "/resume.pdf"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" }
];

export const commandItems = [
  { label: "Projects", href: "#projects", hint: "Open flagship systems" },
  { label: "Resume", href: contact.resume, hint: "Download PDF" },
  { label: "Contact", href: "#contact", hint: "Start a conversation" },
  { label: "GitHub", href: contact.github, hint: "github.com/sri8405" },
  { label: "Skills", href: "#skills", hint: "Technical stack" }
];

export const rotatingTitles = [
  "AI & ML Engineer",
  "Full Stack Developer",
  "Systems Enthusiast",
  "Research-Oriented Builder",
  "Product Engineer"
];

export const profileStats = [
  { label: "Engineering Domains", value: "06", detail: "AI, backend, full-stack, systems, security, data" },
  { label: "Featured Systems", value: "05", detail: "Curated for depth over repository count" },
  { label: "Research Threads", value: "04", detail: "MARL activation scheduling, smart cities, embedded Linux" }
];

const accentTone = "#3b82f6";

export const techGroups: Array<{
  category: string;
  items: Array<{ name: string; icon: IconType; tone: string }>;
}> = [
  {
    category: "AI/ML & GenAI",
    items: [
      { name: "Machine Learning", icon: SiTensorflow, tone: accentTone },
      { name: "scikit-learn", icon: SiScikitlearn, tone: accentTone },
      { name: "Model Training & Eval", icon: SiPytorch, tone: accentTone },
      { name: "Feature Engineering", icon: SiNumpy, tone: accentTone },
      { name: "NLP", icon: SiPython, tone: accentTone },
      { name: "LLMs & RAG", icon: SiOllama, tone: accentTone },
      { name: "Agentic AI", icon: SiOllama, tone: accentTone },
      { name: "Multi-Agent Systems", icon: SiPython, tone: accentTone }
    ]
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython, tone: accentTone },
      { name: "Java", icon: FaJava, tone: accentTone },
      { name: "C/C++", icon: SiCplusplus, tone: accentTone },
      { name: "JavaScript", icon: SiJavascript, tone: accentTone },
      { name: "TypeScript", icon: SiTypescript, tone: accentTone },
      { name: "SQL", icon: FaDatabase, tone: accentTone }
    ]
  },
  {
    category: "Data Science & Analytics",
    items: [
      { name: "pandas", icon: SiPandas, tone: accentTone },
      { name: "NumPy", icon: SiNumpy, tone: accentTone },
      { name: "EDA", icon: SiPandas, tone: accentTone },
      { name: "Data Cleaning", icon: SiNumpy, tone: accentTone },
      { name: "Data Preprocessing", icon: SiPandas, tone: accentTone },
      { name: "Data Visualization", icon: SiStreamlit, tone: accentTone }
    ]
  },
  {
    category: "Web & APIs",
    items: [
      { name: "REST APIs", icon: SiFastapi, tone: accentTone },
      { name: "FastAPI", icon: SiFastapi, tone: accentTone },
      { name: "Flask", icon: SiFlask, tone: accentTone },
      { name: "WebSockets", icon: SiNextdotjs, tone: accentTone },
      { name: "Next.js", icon: SiNextdotjs, tone: accentTone },
      { name: "React", icon: SiReact, tone: accentTone },
      { name: "Tailwind CSS", icon: SiTailwindcss, tone: accentTone },
      { name: "JSON", icon: SiJavascript, tone: accentTone }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, tone: accentTone },
      { name: "MongoDB", icon: SiMongodb, tone: accentTone },
      { name: "MySQL", icon: FaDatabase, tone: accentTone },
      { name: "PL/SQL", icon: FaDatabase, tone: accentTone },
      { name: "OracleDB", icon: FaDatabase, tone: accentTone },
      { name: "SQLite", icon: FaDatabase, tone: accentTone },
      { name: "Database Design", icon: FaDatabase, tone: accentTone }
    ]
  },
  {
    category: "Software Engineering & Tools",
    items: [
      { name: "DSA", icon: SiCplusplus, tone: accentTone },
      { name: "OOP", icon: FaJava, tone: accentTone },
      { name: "SOLID Principles", icon: SiTypescript, tone: accentTone },
      { name: "Agile/SDLC", icon: SiGit, tone: accentTone },
      { name: "Debugging", icon: SiLinux, tone: accentTone },
      { name: "Git", icon: SiGit, tone: accentTone },
      { name: "Docker", icon: SiDocker, tone: accentTone },
      { name: "Linux", icon: SiLinux, tone: accentTone },
      { name: "Postman", icon: SiFastapi, tone: accentTone },
      { name: "Streamlit", icon: SiStreamlit, tone: accentTone }
    ]
  }
];

export const experiences = [
  {
    role: "Project Intern",
    company: "Latavya Technologies / Bangalore Traffic Police",
    period: "Apr 2025 – Mar 2026",
    points: [
      "Built a full-stack Smart Parking Management application for the Bangalore Traffic Police.",
      "Designed MongoDB schemas and REST APIs for parking records, vehicle logs, and dynamic availability updates.",
      "Worked in an Agile team with structured debugging, Git-based version control, and shipped production-ready features end-to-end."
    ],
    tags: ["Smart City", "MongoDB", "REST APIs", "Agile", "Version Control"]
  },
  {
    role: "Embedded Linux Development Intern",
    company: "Loginware Softtech Pvt. Ltd.",
    period: "Aug 2024 – Sep 2024",
    points: [
      "Configured embedded Linux system configurations using Buildroot and cross-compilation toolchains.",
      "Automated build and test workflows to debug low-level systems issues and improve overall system stability."
    ],
    tags: ["Embedded Linux", "Buildroot", "Cross-Compilation", "Automation", "Debugging"]
  }
];

export interface ProjectType {
  title: string;
  short: string;
  status: string;
  statusType: "live" | "prototype" | "learning";
  stack: string[];
  description: string;
  badge?: string;
  highlight: string;
  decision: string;
  challenges: string;
  github?: string;
  live?: string;
}

export const featuredProjects: ProjectType[] = [
  {
    title: "ParkItSmart - AI-Powered Smart Parking & Urban Traffic Optimization Platform",
    short: "ParkItSmart",
    status: "Live Deployed System",
    statusType: "live",
    badge: "Flagship Project",
    stack: ["MongoDB", "REST APIs", "Node.js", "Express.js", "Agile", "Git"],
    description: "A production-grade smart-city platform designed for real-time parking occupancy, intelligent slot allocation, vehicle flow tracking, and reporting. Built during my internship at Latavya Technologies for the Bangalore Traffic Police, replacing manual paper-based processes with an automated digital system.",
    highlight: "Automated real-time slot allocation, vehicle entry tracking, and live admin reporting dashboards.",
    decision: "Chose MongoDB's flexible schema over a relational database to accommodate frequently changing vehicle log and slot status data fields during active feature iteration and feedback cycles with the client.",
    challenges: "Replaced manual paper-based processes by designing high-availability REST endpoints that handle simultaneous occupancy updates without state drift.",
    github: "https://github.com/sri8405/parking-mngmt-sys",
    live: "https://parkitsmart.vercel.app/"
  },
  {
    title: "Cravio - Food Delivery & Real-Time Tracking Platform",
    short: "Cravio",
    status: "MVP Live",
    statusType: "live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "REST APIs", "Node.js"],
    description: "A full-stack food delivery and real-time order tracking platform that establishes low-latency bidirectional connections between restaurants, delivery agents, and customers.",
    highlight: "Uses WebSockets for instant, event-driven order tracking and state changes across restaurant and client dashboards.",
    decision: "Used WebSockets instead of HTTP polling for order-status updates to cut database queries, latency, and server load by over 80% during high concurrent volume.",
    challenges: "Synchronized multiple state actors (delivery partner coordinates, restaurant prep queues, customer dashboards) with a unified event loop.",
    github: "https://github.com/sri8405/cravio_fe",
    live: "https://cravio.tech/"
  },
  {
    title: "GuruSeva - Temple Donation & Seva Management System",
    short: "GuruSeva",
    status: "MVP Live",
    statusType: "live",
    badge: "Payments & Systems Engineering",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth.js", "Razorpay API"],
    description: "A full-stack temple donation and seva (ritual booking) management platform featuring production-grade payment logic, automatic transaction recovery, and role-based administration.",
    highlight: "Handles server-side signature verification, payment idempotency, and automated recovery loops to guarantee transaction consistency.",
    decision: "Built idempotent payment handling with atomic MongoDB operations specifically to prevent double-charges from Razorpay webhook retries and concurrent donation requests — a failure mode simple donation forms usually miss.",
    challenges: "Engineered automatic transaction recovery and signature verification to handle Razorpay webhook delivery failures and transaction drop-offs.",
    github: "", // Omitted since no public repo is available
    live: "https://guru-seva.me"
  },
  {
    title: "Tourist Place Recommendation System",
    short: "Travel-Tech Recommender",
    status: "Learning Project",
    statusType: "learning",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    description: "An ML recommendation system generating personalized destination suggestions and itinerary structures from user preferences and location metadata.",
    highlight: "Applies exploratory data analysis, systematic data preprocessing, and user behavior matching.",
    decision: "Prioritized feature engineering over model complexity, since preference data quality had a bigger impact on recommendation relevance than the algorithm choice.",
    challenges: "Processed sparse and irregular user preference feedback, normalizing dataset feature inputs to avoid recommendation bias.",
    github: "https://github.com/sri8405/tourist-places-project"
  },
  {
    title: "AI-Powered Road Damage Detection & Spatial Analytics System",
    short: "Pothole Detector",
    status: "Working Prototype",
    statusType: "prototype",
    stack: ["Python", "YOLOv8", "Streamlit", "Folium", "DBSCAN"],
    description: "A computer-vision system that detects potholes from road imagery, clusters detections geospatially, and overlays them on interactive maps to isolate maintenance priority zones.",
    highlight: "Deploys a custom YOLOv8 model combined with DBSCAN density clustering to group sparse potholes into actionable maintenance zones.",
    decision: "Used DBSCAN over simple distance thresholds to cluster pothole detections, since it handles irregular road-damage density better than fixed-radius grouping.",
    challenges: "Managed false positives from varying road lighting conditions and filtered overlapping bounding box coordinates using NMS thresholds.",
    github: "https://github.com/sri8405/Pothole-detector"
  }
];

export const currentlyBuilding = [
  {
    title: "Cravio.tech",
    status: "MVP Live",
    progress: 85,
    href: "https://cravio.tech",
    stack: ["Next.js", "WebSockets", "Node.js", "Tailwind CSS"],
    note: "A live product build with authentication, persistent data, and low-latency tracking."
  },
  {
    title: "Local LLM Systems",
    status: "Research prototype",
    progress: 58,
    stack: ["Ollama", "RAG", "Constrained hardware"],
    note: "Experiments around private inference, constrained compute, and local AI workflows."
  },
  {
    title: "Smart City AI Systems",
    status: "Architecture track",
    progress: 66,
    stack: ["Traffic AI", "IoT", "MongoDB"],
    note: "Extending smart parking infrastructure telemetry toward city-scale municipal operations."
  }
];

export const systemsResearch = [
  "Buildroot image generation and custom cross-compilation",
  "Yocto Project workflows and embedded Linux customization",
  "antiX and Zorin OS low-spec system configuration",
  "Raspberry Pi OS Lite deployment and headless execution",
  "VirtualBox hardware pass-through and host-guest networking",
  "Low-level Linux kernel parameters and bootloader troubleshooting"
];

export interface HighlightType {
  title: string;
  metric?: string;
  detail: string;
  category: string;
}

export const engineeringHighlights: HighlightType[] = [
  {
    category: "Hackathon Award",
    title: "Cardano Hackathon Asia 2025 Grand Finalist",
    metric: "Top 0.5%",
    detail: "Ranked as a Grand Finalist out of 5,500+ competing engineering teams globally."
  },
  {
    category: "Full Stack Internship",
    title: "Bangalore Traffic Police Smart Parking System",
    metric: "Municipal Deployment",
    detail: "Shipped core allocation and telemetry APIs replacing manual, paper-based tracking."
  },
  {
    category: "Real-Time Systems",
    title: "Cravio Real-Time Tracking Engine",
    metric: "WebSocket Sync",
    detail: "Designed WebSocket-based bidirectional tracking between restaurants, agents, and clients."
  },
  {
    category: "Backend Systems",
    title: "GuruSeva Webhook payment verification",
    metric: "Idempotent Payments",
    detail: "Mitigated double-charging race conditions under webhook signature retry loops."
  },
  {
    category: "Research Publish",
    title: "Dependency-Aware MARL Activation Scheduling",
    metric: "Target: ERCICAM 2026",
    detail: "Proposed Directed Graph activation rules to stabilize policy convergence in MARL."
  }
];
