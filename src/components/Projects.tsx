import React from "react";
import { PinContainer } from "./ui/PinContainer";
import { Github, ExternalLink } from "lucide-react";
import {
  FadeUp,
  HoverLift,
  Stagger,
  StaggerItem,
} from "./ui/motion-primitives";

const projectsData = [
  {
    id: 1,
    title: "SIS – Student Placement & Internship Management System",
    description:
      "SuiteCRM-based student information system that lets schools manage students, employers, applications, interviews and internship agreements from a single dashboard, with e-signatures and real-time chat built in.",
    image: "/lovable-uploads/sis-1-dashboard.jpg",
    tags: [
      "PHP",
      "SuiteCRM 7",
      "MySQL",
      "Smarty",
      "JavaScript",
      "jQuery",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "TinyMCE",
    ],
    demoUrl: "https://sis.alphasync.us/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Visly – AI LinkedIn Infographic Generator",
    description:
      "AI-powered SaaS that turns a single-sentence prompt into a polished, on-brand LinkedIn infographic in under 60 seconds — replacing manual Canva and designer workflows with one click.",
    image: "/lovable-uploads/visly.png",
    tags: [
      "React",
      "React Router",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "Lenis",
      "Supabase",
      "Paddle",
      "Hostinger",
    ],
    demoUrl: "https://thevisly.com/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "SmartBook – AI Booking with WhatsApp",
    description:
      "Multi-tenant SaaS that lets service businesses take bookings on WhatsApp and the web with no customer login — replacing missed calls and manual scheduling with one live owner dashboard.",
    image: "/lovable-uploads/smart.png",
    tags: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "OpenAI API",
      "WhatsApp Cloud API",
      "n8n",
      "Next.js",
      "TypeScript",
      "Docker",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/smartbook-ai",
  },
  {
    id: 4,
    title: "Simplify — B2B Dashboard",
    description:
      "MERN-stack dashboard that lets businesses manage inventory, invoices, and team operations from a single interface — replacing scattered spreadsheets with one connected system.",
    image: "/lovable-uploads/Simplify.jpeg",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    demoUrl: "",
    githubUrl: "https://github.com/M-Zeeshan-Hassan/SIMPLIFY",
  },
  {
    id: 5,
    title: "AI Smart Tube",
    description:
      "Analytics tool that compares short vs. long-form YouTube videos using charts and insights, helping creators understand what's working without watching every video end to end.",
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
  // {
  //   id: 5,
  //   title: "Camp & Fire",
  //   description:
  //     "E-commerce storefront for outdoor and camping gear, built with a clean product browsing experience and Material UI components.",
  //   image: "/lovable-uploads/Camp.png",
  //   tags: ["React", "CSS", "JavaScript", "Material UI"],
  //   demoUrl: "https://camp-and-fire.netlify.app/",
  //   githubUrl: "https://github.com/M-Zeeshan-Hassan/Camp-and-Fire",
  // },
  {
    id: 6,
    title: "AI Career Insight",
    description:
      "GPT-4-powered web app that analyzes resumes for job role suggestions, tailored improvement tips, and likely interview questions, and stores past results for the user.",
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
  // {
  //   id: 7,
  //   title: "Tehzeeb Bakers — Web Clone",
  //   description:
  //     "Pixel-accurate front-end clone of the Tehzeeb Bakers website, built from scratch with vanilla HTML, CSS, and JavaScript.",
  //   image: "/lovable-uploads/Tehzeeb.png",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   demoUrl: "https://tehzeeb-bakers.netlify.app/",
  //   githubUrl: "https://github.com/M-Zeeshan-Hassan/Tehzeeb-Bakers-Web-Clone",
  // },
  // {
  //   id: 8,
  //   title: "This Portfolio",
  //   description:
  //     "The site you're on right now — a responsive portfolio built to showcase experience, projects, and technical expertise, with a validated contact form.",
  //   image: "/lovable-uploads/Portfolio.png",
  //   tags: [
  //     "React JS",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Shadcn UI",
  //     "Framer Motion",
  //   ],
  //   demoUrl: "https://mzh-portfolio.netlify.app/",
  //   githubUrl: "https://github.com/M-Zeeshan-Hassan/Portfolio",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <FadeUp>
        <h2 className="section-title mb-8">Projects Showcase</h2>
      </FadeUp>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr">
        {projectsData.map((project) => (
          <StaggerItem key={project.id} className="h-full">
            <HoverLift className="h-full">
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
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default Projects;
