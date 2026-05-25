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
  { label: "Featured Systems", value: "07", detail: "Curated for depth over repository count" },
  { label: "Research Threads", value: "05", detail: "LLMs, smart cities, Linux, ZKPs, audio ML" }
];

export const techGroups: Array<{
  category: string;
  items: Array<{ name: string; icon: IconType; tone: string }>;
}> = [
  {
    category: "AI, ML & Data",
    items: [
      { name: "Python", icon: SiPython, tone: "#4b8bbe" },
      { name: "TensorFlow", icon: SiTensorflow, tone: "#ff8f00" },
      { name: "PyTorch", icon: SiPytorch, tone: "#ee4c2c" },
      { name: "scikit-learn", icon: SiScikitlearn, tone: "#f7931e" },
      { name: "NumPy", icon: SiNumpy, tone: "#4dabcf" },
      { name: "pandas", icon: SiPandas, tone: "#f5f5f5" },
      { name: "Streamlit", icon: SiStreamlit, tone: "#ff4b4b" },
      { name: "Ollama", icon: SiOllama, tone: "#d9f99d" }
    ]
  },
  {
    category: "Product Engineering",
    items: [
      { name: "Next.js", icon: SiNextdotjs, tone: "#f8fafc" },
      { name: "React", icon: SiReact, tone: "#61dafb" },
      { name: "TypeScript", icon: SiTypescript, tone: "#3178c6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, tone: "#38bdf8" },
      { name: "JavaScript", icon: SiJavascript, tone: "#f7df1e" },
      { name: "C++", icon: SiCplusplus, tone: "#659ad2" }
    ]
  },
  {
    category: "Backend, Data & Infra",
    items: [
      { name: "Java", icon: FaJava, tone: "#f89820" },
      { name: "Spring", icon: SiSpring, tone: "#6db33f" },
      { name: "FastAPI", icon: SiFastapi, tone: "#009688" },
      { name: "Flask", icon: SiFlask, tone: "#f5f5f5" },
      { name: "MongoDB", icon: SiMongodb, tone: "#47a248" },
      { name: "PostgreSQL", icon: SiPostgresql, tone: "#4169e1" },
      { name: "Redis", icon: SiRedis, tone: "#dc382d" },
      { name: "Docker", icon: SiDocker, tone: "#2496ed" }
    ]
  },
  {
    category: "Systems & Security",
    items: [
      { name: "Linux", icon: SiLinux, tone: "#f5f5f5" },
      { name: "Buildroot", icon: SiLinux, tone: "#a7ff5c" },
      { name: "Yocto", icon: SiLinux, tone: "#48e2ff" },
      { name: "Git", icon: SiGit, tone: "#f05032" },
      { name: "Circom", icon: FaDatabase, tone: "#c084fc" },
      { name: "AES-GCM", icon: FaDatabase, tone: "#fb7185" }
    ]
  }
];

export const experiences = [
  {
    role: "Product Engineering Intern",
    company: "Loginware Softtech",
    period: "Internship",
    points: [
      "Worked through production-style engineering cycles spanning backend workflows, UI polish, debugging, and technical documentation.",
      "Strengthened practical understanding of how product constraints shape APIs, data models, and user-facing reliability.",
      "Built confidence in reading unfamiliar code, isolating defects, and communicating tradeoffs clearly."
    ],
    tags: ["Product Engineering", "Debugging", "Backend", "Documentation"]
  },
  {
    role: "Smart Parking Systems Builder",
    company: "Latavya Technologies / Independent Build",
    period: "Applied Systems",
    points: [
      "Designed a smart parking platform around slot allocation, vehicle movement, admin visibility, and real-time monitoring.",
      "Modeled the project as urban infrastructure: sensor-ready events, analytics dashboards, routing logic, and scalable API boundaries.",
      "Converted a parking workflow into a smart-city case study with product, architecture, and AI integration layers."
    ],
    tags: ["Smart Cities", "MongoDB", "APIs", "Analytics"]
  },
  {
    role: "Linux Systems Research",
    company: "Buildroot, Yocto, antiX, Zorin OS, Raspberry Pi OS Lite",
    period: "Research Track",
    points: [
      "Explored lightweight Linux distributions, custom images, VirtualBox limitations, and constrained hardware workflows.",
      "Studied boot pipelines, package selection, image generation, and how low-level system choices affect deployment.",
      "Documented failures and tradeoffs as engineering evidence rather than treating them as dead ends."
    ],
    tags: ["Buildroot", "Yocto", "Raspberry Pi", "Virtualization"]
  }
];

export const smartParking = {
  title: "AI-Powered Smart Parking & Urban Traffic Optimization System",
  label: "Flagship Smart-City Platform",
  liveDemo: "https://parkitsmart.vercel.app/",
  github: contact.github,
  summary:
    "A startup-grade smart-city platform concept for real-time parking occupancy, intelligent slot allocation, vehicle flow visibility, and traffic-aware routing.",
  metrics: [
    { label: "Occupancy", value: "78%", tone: "cyan" },
    { label: "Free Slots", value: "124", tone: "acid" },
    { label: "Avg. Routing", value: "42s", tone: "violet" },
    { label: "Sensor Events", value: "18k", tone: "rose" }
  ],
  capabilities: [
    "Smart slot allocation",
    "Parking occupancy management",
    "Vehicle tracking",
    "Urban traffic optimization",
    "IoT-ready sensor event model",
    "Real-time admin monitoring",
    "Automation workflows",
    "AI routing possibilities"
  ],
  subsections: [
    {
      title: "Problem Statement",
      body: "Urban parking fails when drivers, lots, sensors, and administrators operate without a shared real-time state. The system reframes parking as city infrastructure."
    },
    {
      title: "Why Urban Parking Is Difficult",
      body: "Demand spikes, illegal waiting, partial occupancy visibility, and slow manual updates create congestion before a vehicle even reaches the destination."
    },
    {
      title: "Smart Allocation Workflow",
      body: "Vehicle intent enters the platform, availability is filtered by zone and constraints, a slot is reserved, and routing updates continue as occupancy changes."
    },
    {
      title: "System Architecture",
      body: "The architecture separates user apps, admin dashboards, allocation APIs, telemetry ingestion, analytics stores, and future ML services."
    },
    {
      title: "Real-Time Monitoring",
      body: "Operators get live slot grids, occupancy trends, abnormal congestion signals, event streams, and action-oriented zone health summaries."
    },
    {
      title: "AI Integration Possibilities",
      body: "Forecast demand, predict exits, cluster congestion zones, suggest dynamic pricing, and optimize routes based on historical and live traffic patterns."
    },
    {
      title: "Scalability Architecture",
      body: "The design can evolve toward event queues, cached availability reads, partitioned city zones, sensor streams, and read-heavy analytics replicas."
    },
    {
      title: "Technical Challenges",
      body: "The hardest parts are consistency under simultaneous reservations, noisy sensor data, routing freshness, and building admin tools that reveal the right anomalies."
    },
    {
      title: "Future Roadmap",
      body: "Add camera/IoT ingestion, predictive occupancy models, city-level route optimization, operator alerts, and simulation for new parking zones."
    },
    {
      title: "Smart City Integration",
      body: "The parking layer can feed traffic lights, municipal dashboards, EV charging maps, enforcement workflows, and urban planning analytics."
    }
  ]
};

export const featuredProjects = [
  {
    title: "AI-Powered Road Damage Detection & Spatial Analytics System",
    short: "Pothole Detector",
    stack: ["Python", "YOLOv8", "Streamlit", "Folium", "DBSCAN"],
    description:
      "Computer-vision pipeline for detecting road damage, clustering incidents geospatially, and turning raw detections into maintenance intelligence.",
    visuals: ["Detection pipeline", "Clustering workflow", "Interactive map", "Priority scoring"],
    challenges: "Balancing noisy detections, map readability, and useful clustering thresholds for real-world civic workflows.",
    actions: ["GitHub Repo", "Live Demo", "Architecture", "Case Study"]
  },
  {
    title: "Privacy-Focused Budget Compliance System using Zero-Knowledge Proofs",
    short: "cardanorize",
    stack: ["Python", "Redis", "Docker", "AES-GCM", "Circom", "SnarkJS"],
    description:
      "A security-focused system where a user can prove budget compliance without exposing sensitive spending records.",
    visuals: ["Encrypted data flow", "Proof generation", "Verifier service", "Redis-backed state"],
    challenges: "Communicating ZKPs clearly while preserving the seriousness of cryptographic trust boundaries.",
    actions: ["GitHub Repo", "Research Overview", "Technical Deep Dive", "Architecture"]
  },
  {
    title: "AI-Based Audio Classification System",
    short: "Music Genre Classifier",
    stack: ["Python", "Librosa", "SQLite", "Streamlit"],
    description:
      "Audio ML workflow with feature extraction, waveform analysis, dataset organization, model evaluation, and interactive classification UI.",
    visuals: ["Waveforms", "MFCC features", "Model pipeline", "Analytics dashboard"],
    challenges: "Making audio features explainable enough for users to trust why a genre was predicted.",
    actions: ["GitHub Repo", "Live Demo", "Architecture", "Case Study"]
  },
  {
    title: "Experimental Audio Signal Processing System",
    short: "Voice Suppressor",
    stack: ["Python", "DSP", "Audio Processing", "Signal Analysis"],
    description:
      "Experimental pipeline for attenuating vocals and visualizing before/after waveform behavior through signal processing steps.",
    visuals: ["Before waveform", "After waveform", "Filtering stages", "Spectral comparison"],
    challenges: "Working with imperfect separation, artifacts, and the tradeoff between suppression strength and audio quality.",
    actions: ["GitHub Repo", "Architecture", "Experiment Notes"]
  },
  {
    title: "Tourist Recommendation & Itinerary Planner",
    short: "Travel-Tech Recommender",
    stack: ["Python", "Recommendation Systems", "Maps", "Data Analysis"],
    description:
      "Polished travel-tech concept that converts destination data and preferences into recommendations, itinerary flow, and planning analytics.",
    visuals: ["Recommendation logic", "Itinerary generation", "Map flow", "Preference analytics"],
    challenges: "Combining relevance, route practicality, and user intent into a planner that feels useful rather than random.",
    actions: ["GitHub Repo", "Live Demo", "Architecture", "Case Study"]
  }
];

export const currentlyBuilding = [
  {
    title: "Cravio.tech",
    status: "Production-ready MVP",
    progress: 82,
    href: "https://cravio.tech",
    stack: ["Next.js", "Auth", "Database", "Scalable backend"],
    note: "A live product build with authentication, persistent data, and deployment-focused engineering."
  },
  {
    title: "Local LLM Systems",
    status: "Research prototype",
    progress: 58,
    stack: ["Ollama", "RAG", "Low-end hardware"],
    note: "Experiments around private inference, constrained compute, and useful local AI workflows."
  },
  {
    title: "Smart City AI Systems",
    status: "Architecture track",
    progress: 66,
    stack: ["Traffic AI", "IoT", "Analytics"],
    note: "Extending parking intelligence toward city-scale mobility and civic operations."
  },
  {
    title: "Applied AI Experiments",
    status: "Continuous",
    progress: 74,
    stack: ["Vision", "Audio", "Spatial ML"],
    note: "Small research builds that test practical AI patterns before turning them into products."
  }
];

export const systemsResearch = [
  "Buildroot image generation and package selection",
  "Yocto Project research and embedded Linux tradeoffs",
  "antiX and Zorin OS customization experiments",
  "Raspberry Pi OS Lite deployment thinking",
  "VirtualBox limitations, device access issues, and resource constraints",
  "Low-level Linux experimentation as infrastructure learning"
];
