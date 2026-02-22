import { Project, Experience } from "./types";

export const projects: Project[] = [
    {
      title: "Presence-Tracker",
      description: "A lightweight extension to track office presence, remote work, and leave days.",
      tags: ["TypeScript", "React", "Chrome Extension"],
      link: "https://presence-tracker-delta.vercel.app",
      github: "https://github.com/akhilrasineni/Presence-Tracker",
      image: "https://picsum.photos/seed/presence-tracker/800/600"
    },
    {
      title: "RasineniFX",
      description: "A professional-grade dashboard for tracking real-time global exchange rates, featuring live conversions, historical trends, and market insights powered by Gemini.",
      tags: ["TypeScript", "React", "Gemini API", "Tailwind"],
      link: "https://rasineni-fx.vercel.app",
      github: "https://github.com/akhilrasineni/RasineniFX",
      image: "https://picsum.photos/seed/rasinenifx/800/600"
    },
    {
      title: "Rasineni's Learning Companion",
      description: "An advanced AI-powered educational ecosystem designed to empower students through interactive voice sessions, visual concept generation, personalized quizzes, and AI-driven video explanations.",
      tags: ["TypeScript", "React", "Gemini API", "AI/ML"],
      link: "https://rasineni-s-learning-companion.vercel.app",
      github: "https://github.com/akhilrasineni/Rasineni-s-Learning-Companion",
      image: "https://picsum.photos/seed/learning-companion/800/600"
    }
  ];

  export const experiences: Experience[] = [
    {
      company: "Accenture",
      role: "Custom Software Engineering Sr Analyst",
      period: "02/2022 — Present",
      description: [
        "Developed scalable, efficient, and well-tested applications using C# and .NET technologies across multiple enterprise projects.",
        "Integrated third-party services and internal components to enhance system functionality and performance.",
        "Collaborated with cross-functional teams to gather requirements and contribute to solution design and development planning.",
        "Led system testing and validation activities to ensure reliability, usability, and quality releases.",
        "Leveraged GitHub Copilot for assisting code generation, refactoring, and unit test creation to improve development productivity and code quality.",
        "Designed and implemented RESTful APIs using ASP.NET Core to support scalable and maintainable enterprise solutions."
      ]
    },
    {
      company: "Web Synergies",
      role: "Software Engineer",
      period: "07/2019 — 11/2022",
      description: [
        "Collaborated with cross-functional team members to identify, troubleshoot, and resolve software defects.",
        "Ensured improved system stability and performance.",
        "Designed, developed, and enhanced application features based on evolving business and technical requirements.",
        "Performed regular testing, maintenance, and performance tuning to ensure reliability, functionality, and optimization of software products.",
        "Evaluated existing applications and recommended enhancements to improve efficiency, scalability, and overall user experience.",
        "Actively engaged with the PMO team through regular discussions to understand new requirements, manage change requests, and provide consistent updates on project progress and delivery milestones."
      ]
    },
    {
      company: "SPECIAL SOFTWARE India Pvt. Ltd",
      role: "Developer",
      period: "07/2018 — 11/2020",
      description: [
        "Participated in requirement gathering, project architecture design, and development of design prototypes to support solution planning.",
        "Developed RESTful services to handle CRUD operations and enable efficient communication with the database.",
        "Performed unit and integration testing along with debugging, to ensure application stability and quality.",
        "Tested and maintained software products to ensure strong functionality, reliability, and performance optimization.",
        "Analyzed existing applications and recommended improvements to enhance efficiency and usability.",
        "Coordinated with team members to manage change requests, prioritize tasks, and support timely delivery."
      ]
    }
  ];