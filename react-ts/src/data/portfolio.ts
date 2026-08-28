export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  iconUrl: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
  type: "education" | "experience";
}

export const PROJECTS: Project[] = [
  {
    title: "Tennis 3D Tracking & Analysis",
    description:
      "Advanced computer vision pipeline for real-time 3D ball & player tracking using stereo vision. Computes trajectory curves, court bounces, and velocity metrics with interactive visualization dashboards.",
    tags: [
      "Computer Vision",
      "Stereo Camera",
      "ZED SDK",
      "Streamlit",
      "Python",
    ],
    githubUrl: "https://github.com/TeeGurgler/CDA2-3Da",
    featured: true,
  },
  {
    title: "Container Route Tracking",
    description:
      "Simple fleet analytics tool processing shipping logistics data. Visualizes container routes and plots monitored environmental conditions on interactive maps with geospatial overlays.",
    tags: ["Python", "Pandas", "Matplotlib", "Geospatial"],
    githubUrl: "https://github.com/NotSchebs/Cde1-1Da_Challenge_FHNW",
    featured: true,
  },
  {
    title: "Demographic Data Analysis",
    description:
      "Statistical modeling and demographic projection framework analyzing regional population shifts, economic factors, and generational trends using statistics.",
    tags: ["R", "Statistical Modeling", "Data Visualization", "ggplot2"],
    githubUrl: "https://github.com/TeeGurgler/CDE1-Demografie",
    featured: true,
  },
  {
    title: "My Portfolio",
    description:
      "Performative Web-App with shaders, animated overlays and interactive components. Built with React, TypeScript, Tailwind CSS, and Vite for fast development and optimized production builds.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Shaders"],
    githubUrl: "https://github.com/TeeGurgler/portfoliov2",
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "★ Data Science",
    description:
      "Machine learning, statistical computing, and spatial computer vision.",
    skills: [
      {
        name: "Python",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "R",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
      },
      {
        name: "Pandas",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Streamlit",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
      },
      {
        name: "SQL & PostgreSQL",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    category: "Web & Architecture",
    description:
      "Modern client-side frameworks, typed systems, and robust API design.",
    skills: [
      {
        name: "React",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "FastAPI",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Tailwind CSS",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    category: "Tools & Infrastructure",
    description:
      "Containerization, version control, scientific environments, and tooling.",
    skills: [
      {
        name: "Docker",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Git & GitHub",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },

      {
        name: "Jupyter",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        name: "Linux / Bash",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
    ],
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    period: "2024 – Present",
    title: "BSc Data Science",
    institution: "FHNW Fachhochschule Nordwestschweiz",
    location: "Brugg-Windisch, CH",
    description:
      "Deepening expertise in Machine Learning, Statistical Analysis, Data Engineering pipelines, Linear Algebra, and Distributed Systems.",
    highlights: [
      "Specialization in Computer Vision, Predictive Analytics, and Big Data Technologies",
      "Practical project work in 3D sensor tracking, regression modeling, and full-stack integration",
    ],
    type: "education",
  },
  {
    period: "2023 – 2024",
    title: "Legal Assistant & Data Organisation",
    institution: "Law Firm Internship",
    location: "Basel, CH",
    description:
      "Structured legal document workflows, accelerated research automation, and coordinated client case management with rigorous precision.",
    highlights: [
      "Streamlined digital client filing systems and case documentation databases",
      "Applied structured data techniques to extract insights from extensive legal texts",
    ],
    type: "experience",
  },
  {
    period: "2020 – 2023",
    title: "Commercial Education & Berufsmaturität (BM1)",
    institution: "Economics & Law Focus",
    location: "Basel, CH",
    description:
      "Dual business degree combining foundational economic principles, accounting, contract law, and commercial operations.",
    highlights: [
      "Solid business administration and commercial acumen complementing technical engineering",
      "Graduated with federal commercial diploma and academic baccalaureate (BM1)",
    ],
    type: "education",
  },
];
