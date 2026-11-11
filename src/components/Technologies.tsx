import React from "react";
import { Sparkles } from "lucide-react";
import {
  FadeUp,
  HoverLift,
  Stagger,
  StaggerItem,
} from "@/components/ui/motion-primitives";

type TechItem = {
  name: string;
  icon: string;
  docs: string;
  iconClassName?: string;
};

const techGroups: { label: string; items: TechItem[] }[] = [
  {
    label: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        docs: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        docs: "https://www.typescriptlang.org/docs/",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
        docs: "https://www.w3schools.com/sql/",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        docs: "https://docs.python.org/3/",
      },
    ],
  },
  {
    label: "Frontend",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        docs: "https://react.dev/",
      },
      {
        name: "Tailwind CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        docs: "https://tailwindcss.com/docs",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        docs: "https://redux.js.org/",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        docs: "https://getbootstrap.com/",
      },
      {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        docs: "https://mui.com/",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        docs: "https://nextjs.org/docs",
      },
    ],
  },
  {
    label: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        docs: "https://nodejs.org/en/docs",
      },
      {
        name: "Express.js",
        icon: "/icons/express.svg",
        docs: "https://expressjs.com/",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        docs: "https://fastapi.tiangolo.com/",
      },
      {
        name: "REST",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original-wordmark.svg",
        docs: "https://restfulapi.net/",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        docs: "https://firebase.google.com/docs",
      },
    ],
  },
  {
    label: "Database",
    items: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        docs: "https://www.mongodb.com/docs/",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        docs: "https://dev.mysql.com/doc/",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        docs: "https://www.postgresql.org/docs/",
      },
    ],
  },
  {
    label: " AI & Automation",
    items: [
      {
        name: "n8n",
        icon: "/icons/n8n.svg",
        docs: "https://docs.n8n.io/",
      },
      {
        name: "Make.com",
        icon: "/icons/make.svg",
        docs: "https://www.make.com/en/help",
      },
      {
        name: "Zapier",
        icon: "/icons/zapier.svg",
        docs: "https://zapier.com/help",
      },
      {
        name: "OpenAI API",
        icon: "/icons/openai.png", // no reliable OpenAI brand SVG available — falls back to the Sparkles icon below
        docs: "https://platform.openai.com/docs",
      },
      {
        name: "Vapi",
        icon: "/icons/vapi.svg", // no logo file yet — renders the Sparkles icon
        docs: "https://docs.vapi.ai/",
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        docs: "https://git-scm.com/doc",
      },
      {
        name: "Docker",
        icon: "/icons/docker.png",
        docs: "https://docs.docker.com/",
      },
      {
        name: "Vercel",
        icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
        docs: "https://vercel.com/docs",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        docs: "https://learning.postman.com/docs/",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        docs: "https://docs.aws.amazon.com/",
        iconClassName: "invert hue-rotate-180", // lightens the dark "aws" lettering for the black tile, keeps the orange
      },
    ],
  },
];

const Technologies = () => {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>(
    {},
  );

  const handleImageError = (techName: string) => {
    setImageErrors((prev) => ({ ...prev, [techName]: true }));
  };

  return (
    <section id="technologies" className="section-container">
      <FadeUp className="text-center mb-16">
        <h2 className="section-title">Technology Toolkit</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Tech That Helps Me Build, Learn & Evolve
        </p>
      </FadeUp>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-12">
        {techGroups.map((group) => (
          <div key={group.label} className="flex flex-col items-center h-full">
            <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {group.label}
            </h3>
            <Stagger className="grid grid-cols-2 gap-6">
              {group.items.map((tech) => (
                <StaggerItem key={tech.name}>
                  <HoverLift>
                    <a
                      href={tech.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center group no-underline"
                    >
                      <div className="relative p-2 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.08)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                        {!tech.icon ? (
                          <Sparkles className="w-8 h-8 relative z-10 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300" />
                        ) : !imageErrors[tech.name] ? (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className={`w-10 h-10 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 ${tech.iconClassName ?? ""}`}
                            onError={() => handleImageError(tech.name)}
                          />
                        ) : (
                          <div className="w-10 h-10 flex items-center justify-center border-2 border-blue-500/40 rounded-lg bg-black/30 text-blue-400 font-bold text-lg z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300">
                            {tech.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <span className="mt-1 text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-center">
                        {tech.name}
                      </span>
                    </a>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
