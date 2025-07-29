"use client";

import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { Github, ExternalLink } from "lucide-react";
import { MotionUp } from "./ui/Motion-Up";
import { motion } from "framer-motion"; // ✅ import for animation

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website highlighting professional experience, projects, and technical expertise, complete with a professional contact form with validation.",
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
    title: "AI Smart Tube",
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
    demoUrl: "https://ai-smart-tube.vercel.app/",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/AI-Smart-Tube",
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
    ],
    demoUrl: "http://ai-career-insights.netlify.app/",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/AI-Career-Insight",
  },
  {
    id: 4,
    title: "The Real Weather",
    description: "Weather app with real-time data and forecasts.",
    image: "/lovable-uploads/weather.png",
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
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects Showcase</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr">
        {projectsData.map((project, index) => (
          <MotionUp key={project.id} delay={index * 0.1}>
            {/* ✅ Zoom on hover using motion.div */}
            <motion.div
              className="h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative bg-[#0f0f0f] text-white rounded-2xl p-5 shadow-xl border border-neutral-800 hover:border-purple-500 hover:shadow-purple-500/20 transition-all duration-300 flex flex-col h-full group">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl object-cover w-full h-44 transition-all duration-300 group-hover:blur-sm group-hover:brightness-75"
                />

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#1f1f1f] px-2 py-1 text-xs rounded-md border border-neutral-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Push buttons to bottom */}
                <div className="flex-grow" />

                {/* Buttons */}
                <div className="flex items-center justify-between pt-4 gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10151a] text-white text-sm font-semibold shadow border hover:text-[#7D6DE2] transition-colors"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-semibold shadow border hover:text-[#7D6DE2] transition-colors"
                    >
                      <Github size={18} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </MotionUp>
        ))}
      </div>
    </section>
  );
};

export default Projects;
