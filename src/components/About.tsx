import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/motion-primitives";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: "education" | "experience" | "award";
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "May 2026 – October 2026",
    title: "Full Stack Developer, Eleven Developers",
    description: `• Automating repetitive workflows to eliminate busywork and help businesses run on autopilot.
• Building smart AI voice agents and chatbots that handle customer conversations naturally and efficiently.`,
    type: "experience",
  },
  {
    id: 2,
    year: "August 2025 – March 2026",
    title: "Associate Software Engineer, Techietribe",
    description: `• Create and maintain React applications that work well on any device and run smoothly without slowing down.
• Collaborate with design and engineering teams to ensure the successful delivery of projects from concept to completion.`,
    type: "experience",
  },
  {
    id: 3,
    year: "June – July 2025",
    title: "React JS Intern, Techietribe",
    description: `• Built reusable, responsive React components that made interfaces feel smooth and intuitive to use.
• Worked closely with cross-functional teams via Git/GitHub, integrating third-party APIs while keeping the codebase clean through regular refactoring.`,
    type: "experience",
  },
  {
    id: 4,
    year: "September 2024 – January 2025",
    title: "Web Developer, Softnerd Technologies",
    description: `• Developed and maintained client websites, setting up clean, efficient databases using SQL Server and MySQL to organize and secure their data.
• Handled these projects end-to-end, writing the REST APIs needed to connect the websites to the SQL backend for smooth, lag-free performance.`,
    type: "experience",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <FadeUp>
        <h2 className="section-title">About Me</h2>
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <FadeUp className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-center text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                What I Do
              </h3>
              <p className="text-muted-foreground mb-4">
                I’m a{" "}
                <span className="font-semibold text-blue-400">
                  Full-Stack Software Engineer
                </span>{" "}
                who builds AI-powered products and automations that take
                repetitive work off a team’s plate.
              </p>
              <p className="text-muted-foreground mb-4">
                On the development side, I build responsive apps with{" "}
                <span className="font-semibold text-blue-400">
                  React, TypeScript, and Next.js,
                </span>{" "}
                and backends with{" "}
                <span className="font-semibold text-blue-400">
                  Python (FastAPI), Node.js,
                </span>{" "}
                and databases like{" "}
                <span className="font-semibold text-blue-400">
                  PostgreSQL, MySQL, and MongoDB.
                </span>{" "}
                I’ve shipped{" "}
                <span className="font-semibold text-blue-400">Visly,</span> an
                AI SaaS used by 50+ LinkedIn creators, and{" "}
                <span className="font-semibold text-blue-400">SmartBook,</span>{" "}
                a multi-tenant booking platform with a WhatsApp AI agent.
              </p>
              <p className="text-muted-foreground mb-4">
                On the automation side, I use{" "}
                <span className="font-semibold text-blue-400">
                  n8n, Make, OpenAI, and Vapi
                </span>{" "}
                to connect forms, calendars, and inboxes, and to build AI voice
                agents that handle enquiries and appointment bookings.
              </p>
              <p className="text-muted-foreground">
                Before choosing tools, I start with the problem: what takes too
                much time and where information gets lost. Through{" "}
                <span className="font-semibold text-blue-400">
                  Eleven Developers,
                </span>{" "}
                I help businesses turn that into practical systems that are
                simple to maintain.
              </p>
            </CardContent>
          </Card>
        </FadeUp>

        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>

            <Stagger className="space-y-16">
              {timelineData.map((item) => (
                <StaggerItem
                  key={item.id}
                  className="relative pl-16 flex items-start group"
                >
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === "education" ? (
                      <GraduationIcon />
                    ) : item.type === "experience" ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6 space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        {item.title}
                      </h3>
                      <ul className="space-y-1 text-muted-foreground">
                        {item.description.split("\n").map((line, i) => (
                          <li key={i} className="flex gap-2">
                            <span aria-hidden="true">•</span>
                            <span>{line.replace(/^•\s*/, "")}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const GraduationIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21"
    />
  </svg>
);

const AwardIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default About;
