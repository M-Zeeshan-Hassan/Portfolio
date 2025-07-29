import React, { useState } from "react";
import { motion } from "framer-motion";
import GlowingEffectDemo from "./ui/glowing-effect-demo";
import { PinContainer } from "./ui/PinContainer";
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website highlighting professional experience, projects, and technical expertise, complete with a professional contact form with validation..",
    image: "/lovable-uploads/Portfolio.png",
    tags: [
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "Shadcn UI",
      "Framer Motion",
      "React Router",
      "React Query",
    ],
    demoUrl: "https://mzh-portfolio.netlify.app/",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/Portfolio",
  },

  {
    id: 2,
    title: "SmartTube AI",
    description:
      "Compares short vs long videos on YouTube using charts and insights to help creators improve content.",
    image: "/lovable-uploads/s-tube.png",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "React Query",
      "React Router",
      "Framer Motion",
      "Recharts",
    ],
    demoUrl: "https://smart-ai-tube.vercel.app/",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/Smart-AI-Tube",
  },
  {
    id: 3,
    title: "AI Career Insight",
    description:
      "AI-powered web app analyzes resumes (GPT-4) for job role suggestions, improvement tips, and interview questions, storing past results.",
    image: "/lovable-uploads/career.png",
    tags: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "React Dropzone",
      "OpenAI API",
      // "Node.js",
      // "Express.js",
      // "PDF Parse",
      // "Multer",
      // "Mammoth",
      // "Supabase (PostgreSQL)",
    ],
    demoUrl: "http://ai-career-insights.netlify.app/",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/AI-Career-Insight",
  },
  {
    id: 4,
    title: "Weather Forecast",
    description: "Weather app with real-time data and forecasts.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "CSS", "JavaScript", "OpenWeatherMap API"],
    demoUrl: "https://the-real-weather.netlify.app/",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/Weather-App",
  },
  {
    id: 5,
    title: "Camp & Fire",
    description: "Event management platform with admin dashboard.",
    image: "/lovable-uploads/Camp.png",
    tags: ["React", "CSS", "JavaScript", "Material UI"],
    demoUrl: "https://camp-and-fire.netlify.app/",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/Camp-and-Fire",
  },

  {
    id: 6,
    title: "Tehzeeb Baker's Web Clone",
    description:
      "A front-end web clone of Tehzeeb Bakers, built with HTML, CSS, and JavaScript.",
    image: "/lovable-uploads/Tehzeeb.png",
    tags: ["Html", "CSS", "JavaScript"],
    demoUrl: "https://tehzeeb-bakers.netlify.app/",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/Tehzeeb-Bakers-Web-Clone",
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <PinContainer
            key={project.id}
            title={project.title}
            containerClassName="w-full h-full"
          >
            <div
              className="relative bg-[#0f0f0f] text-white rounded-2xl p-5 shadow-xl border border-neutral-800 hover:border-purple-500 hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-between h-full group"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`rounded-xl object-cover w-full h-44 transition-all duration-300 ${
                    hoveredId === project.id ? "blur-sm brightness-75" : ""
                  }`}
                />
                {/* Overlay buttons on hover */}
                {hoveredId === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#10151a] text-white font-semibold shadow-lg border border-transparent hover:text-[#7D6DE2] transition-colors duration-200"
                        style={{ transition: "color 0.2s" }}
                      >
                        <ExternalLink
                          size={20}
                          stroke="currentColor"
                          color="#fff"
                          style={{ transition: "color 0.2s" }}
                        />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-800 text-white font-semibold shadow-lg border border-transparent hover:text-[#7D6DE2] transition-colors duration-200"
                        style={{ transition: "color 0.2s" }}
                      >
                        <Github
                          size={20}
                          stroke="currentColor"
                          color="#fff"
                          style={{ transition: "color 0.2s" }}
                        />
                        Source
                      </a>
                    )}
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#1f1f1f] px-2 py-1 text-xs rounded-md border border-neutral-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>

      {/* <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div> */}
    </section>
  );
};

export default Projects;
