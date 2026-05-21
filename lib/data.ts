import {
  SiBootstrap,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiScikitlearn,
  SiSpring,
  SiTailwindcss,
  SiVscodium
} from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

export const navItems = ["About", "Profile", "Stack", "Experience", "Projects", "Contact"];

export const rotatingTitles = [
  "Full Stack Developer",
  "Backend Engineer",
  "AI Enthusiast",
  "Problem Solver",
  "System Designer"
];

export const profileStats = [
  { label: "CGPA", value: "8.5" },
  { label: "Projects", value: "03+" },
  { label: "Hackathons", value: "04+" },
  { label: "Certifications", value: "Java" }
];

export const techGroups: Array<{
  category: string;
  items: Array<{ name: string; icon: IconType; tone: string }>;
}> = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: FaJava, tone: "#f89820" },
      { name: "Python", icon: SiPython, tone: "#4b8bbe" },
      { name: "C++", icon: SiCplusplus, tone: "#659ad2" },
      { name: "JavaScript", icon: SiJavascript, tone: "#f7df1e" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, tone: "#e34f26" },
      { name: "CSS3", icon: SiCss, tone: "#1572b6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, tone: "#38bdf8" },
      { name: "Bootstrap", icon: SiBootstrap, tone: "#7952b3" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Spring", icon: SiSpring, tone: "#6db33f" },
      { name: "FastAPI", icon: SiFastapi, tone: "#009688" },
      { name: "Flask", icon: SiFlask, tone: "#f5f5f5" },
      { name: "J2EE", icon: FaJava, tone: "#ff6b35" },
      { name: "Servlets", icon: FaJava, tone: "#ff9f1c" },
      { name: "JSP", icon: FaJava, tone: "#ffd166" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, tone: "#47a248" },
      { name: "PostgreSQL", icon: SiPostgresql, tone: "#4169e1" },
      { name: "OracleDB", icon: FaDatabase, tone: "#f80000" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, tone: "#f05032" },
      { name: "Docker", icon: SiDocker, tone: "#2496ed" },
      { name: "Linux", icon: SiLinux, tone: "#f5f5f5" },
      { name: "Postman", icon: SiPostman, tone: "#ff6c37" },
      { name: "VS Code", icon: SiVscodium, tone: "#007acc" }
    ]
  },
  {
    category: "AI/ML",
    items: [
      { name: "NumPy", icon: SiNumpy, tone: "#4dabcf" },
      { name: "pandas", icon: SiPandas, tone: "#f5f5f5" },
      { name: "scikit-learn", icon: SiScikitlearn, tone: "#f7931e" }
    ]
  }
];

export const experiences = [
  {
    role: "Smart Parking Management System Intern",
    company: "Latavya Technologies",
    points: [
      "Designed real-time parking management workflows across allocation, vehicle tracking, and monitoring.",
      "Built REST API flows with MongoDB integration and backend architecture considerations.",
      "Collaborated in Agile cycles across backend logic and frontend workflow polish."
    ],
    tags: ["REST APIs", "MongoDB", "Backend", "Agile"]
  },
  {
    role: "Embedded Linux Development Intern",
    company: "Loginware Softtech",
    points: [
      "Worked with Buildroot, cross-compilation, and embedded Linux system customization.",
      "Explored kernel-level configuration, optimization, and low-level debugging workflows.",
      "Improved system understanding across boot pipelines and constrained environments."
    ],
    tags: ["Buildroot", "Kernel", "Linux", "Debugging"]
  }
];

export const projects = [
  {
    title: "Smart Parking Management System",
    description: "A full-stack management system for allocation, vehicle flow, and operational monitoring.",
    stack: ["MongoDB", "REST APIs", "Full-stack"],
    features: ["Real-time allocation", "Vehicle management", "Monitoring system", "Scalable workflows"],
    liveDemo: "https://parkitsmart.vercel.app/"
  },
  {
    title: "Food Delivery & Tracking System",
    description: "A scalable Java platform for ordering, dispatch, and real-time delivery visibility.",
    stack: ["Java", "Spring", "Servlets", "JSP", "OracleDB", "WebSockets"],
    features: ["MVC architecture", "REST APIs", "Real-time tracking", "Microservices", "Caching", "Pub/Sub"]
  },
  {
    title: "Tourist Place Recommendation System",
    description: "A Python ML recommender that turns user context and destination data into personalized suggestions.",
    stack: ["Python", "pandas", "NumPy", "scikit-learn"],
    features: ["Recommendation engine", "Feature engineering", "Data preprocessing", "EDA"]
  }
];

export const achievements = [
  { title: "Cardano Hackathon Asia Finalist", metric: "Finalist", value: 1 },
  { title: "Treasurer - UI/UX Club", metric: "Leadership", value: 1 },
  { title: "Tech Trail Hackathon Winner", metric: "Winner", value: 1 },
  { title: "Java Certifications", metric: "Certified", value: 2 }
];
