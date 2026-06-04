export const SITE = {
  name: "Shilpa Rajesh Lingadal",
  role: "Software Engineer",
  tagline: "Building scalable systems & high-throughput backends",
  description:
    "Software engineer with industry experience at Amazon Robotics and Infor, specializing in distributed systems, Java backends, and cloud-native infrastructure. Currently pursuing an MS in Software Engineering Systems at Northeastern University.",
  email: "lingadal.s@northeastern.edu",
  github: "https://github.com/shilpalingadal",
  linkedin: "https://linkedin.com/in/shilpalingadal",
  twitter: "",
  location: "Boston, MA",
  openToWork: true,
} as const;

export const SKILLS = [
  { category: "Languages",    items: ["Java", "Python", "TypeScript", "JavaScript", "Golang", "C#", "SQL", "C++"] },
  { category: "Frontend",     items: ["React", "Angular", "Flutter", "HTML", "CSS"] },
  { category: "Backend",      items: ["Spring Boot", "REST APIs", "Microservices", "GraphQL", "Kafka", "RabbitMQ"] },
  { category: "Databases",    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Hibernate", "JPA", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS (Lambda, DynamoDB)", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "Packer"] },
  { category: "ML & AI",      items: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Data Mining"] },
] as const;

export const PROJECTS = [
  {
    title: "MeetingMind — AI Meeting Notes Tracker",
    description:
      "AI-powered service that turns audio/video recordings or transcripts into structured summaries, action items, decisions, and follow-up email drafts — with real-time processing updates via WebSockets.",
    longDescription:
      "Async processing pipeline: OpenAI Whisper transcribes audio, Groq LLaMA 3.3 70B extracts structured insights, WebSocket pushes live status to the browser. No polling needed.",
    tech: ["Java", "Spring Boot", "OpenAI Whisper", "Groq LLaMA 3", "WebSockets", "PostgreSQL", "React"],
    metrics: [
      { label: "Transcription", value: "~1s/min" },
      { label: "AI Summarization", value: "3–5s" },
      { label: "WebSocket Latency", value: "<100ms" },
    ],
    github: "https://github.com/shilpalingadal/MeetingMind",
    demo: "https://github.com/shilpalingadal/MeetingMind",
    featured: true,
    color: "from-violet-500 to-indigo-600",
    status: "Project",
  },
  {
    title: "SmartURL — AI-Powered URL Shortener",
    description:
      "End-to-end ML pipeline for URL classification: curated a 549K-sample dataset, trained dual models (Random Forest 87.97%, Neural Network 85.47%), and built a Redis-first serving layer at sub-10ms latency.",
    longDescription:
      "Covers dataset curation, model evaluation, and production ML pipeline deployment with Scikit-learn, Pandas, and NumPy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Redis"],
    metrics: [
      { label: "Training Samples", value: "549K" },
      { label: "RF Accuracy", value: "87.97%" },
      { label: "Cache Latency", value: "<10ms" },
    ],
    github: "https://github.com/shilpalingadal",
    demo: "https://github.com/shilpalingadal",
    featured: true,
    color: "from-cyan-500 to-blue-600",
    status: "Project",
  },
  {
    title: "AI-Powered Adaptive Rate Limiter",
    description:
      "Distributed rate limiting service on Linux achieving 200+ RPS at sub-7ms p99 latency. Redis-backed shared state, three rate limiting algorithms, and a real-time anomaly detection layer using Isolation Forest.",
    longDescription:
      "Demonstrates production-grade low-latency system design with real-time anomaly detection.",
    tech: ["Python", "Redis", "Linux", "Isolation Forest", "Distributed Systems"],
    metrics: [
      { label: "Throughput", value: "200+ RPS" },
      { label: "p99 Latency", value: "<7ms" },
      { label: "Algorithms", value: "3" },
    ],
    github: "https://github.com/shilpalingadal",
    demo: "https://github.com/shilpalingadal",
    featured: true,
    color: "from-emerald-500 to-teal-600",
    status: "Project",
  },
];

export const EXPERIENCE = [
  {
    company: "Amazon Robotics",
    role: "Software Development Engineer Co-op",
    period: "Aug 2025 — Dec 2025",
    bullets: [
      "Validated a new robotics fulfillment architecture at 158,000 units/day with under 8% work gaps by designing a multi-agent simulation engine in Java modeling drive traffic and mission types.",
      "Built a configurable data mining framework processing large-scale autonomous system logs to extract labeled/unlabeled performance metrics, drive behavior patterns, and congestion signals.",
      "Decoupled Java simulation from Python analytics clients by architecting a distributed messaging layer using RabbitMQ, enabling reliable async message delivery across teams.",
    ],
    skills: ["Java", "Python", "RabbitMQ", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    company: "Infor",
    role: "Software Engineer",
    period: "Oct 2022 — Jul 2024",
    bullets: [
      "Increased enterprise client engagement by 30% by leading agile development of multi-modal shipment tracking features improving real-time supply chain visibility across the NTV platform.",
      "Reduced API response times by 60% (from 5s to under 2s) by reengineering RESTful data retrieval logic and optimizing query execution in Java with Hibernate and JPA.",
      "Reduced system latency by 25% by applying targeted backend optimizations to enterprise-scale logistics microservices.",
    ],
    skills: ["Java", "Hibernate", "JPA", "REST APIs", "Microservices", "PostgreSQL"],
  },
  {
    company: "Infor",
    role: "Software Engineer, Associate",
    period: "Apr 2022 — Sep 2022",
    bullets: [
      "Improved database query performance and stability by implementing query tuning, indexing strategies, and schema migrations across production systems.",
      "Delivered defect-free client deployments by conducting structured integration testing across Java, Hibernate, JPA, and front-end framework layers.",
      "Reduced code complexity by 30% by refactoring legacy service modules to enforce cleaner object-oriented design boundaries.",
    ],
    skills: ["Java", "Hibernate", "JPA", "SQL", "Integration Testing"],
  },
];

export const EDUCATION = [
  {
    school: "Northeastern University",
    degree: "Master of Science in Software Engineering Systems",
    period: "Sep 2024 — Dec 2026 (Expected)",
    gpa: "3.85 / 4.0",
    location: "Boston, MA",
    courses: [
      "Object Oriented Design (Java)",
      "Program Structure and Algorithms",
      "Advanced Cloud Computing",
      "Web Design and User Experience",
      "Data Management and Data Design",
      "User Experience Design and Testing",
    ],
  },
  {
    school: "Dr. Ambedkar Institute of Technology, VTU",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "Sep 2018 — Aug 2022",
    gpa: "",
    location: "India",
    courses: [],
  },
];
