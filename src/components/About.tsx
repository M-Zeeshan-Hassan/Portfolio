import React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
    year: "June – July, 2025",
    title: "React Developer Intern, TechieTribe",
    description: `• Build reusable, efficient, and responsive components using React.js and JavaScript (ES6+).
• Consume RESTful APIs to fetch and manage dynamic data in the application.
• Implement client-side routing using libraries like React Router.
• Use Git & GitHub for source control, code reviews, and collaboration.`,
    type: "experience",
  },
  {
    id: 2,
    year: "January – April , 2024",
    title: "Web Developer, Freelance Work",
    description: `• Developed and maintained websites using JavaScript and SQL Server.  
• Worked on backend integration with REST APIs to ensure smooth data communication.  
• Enhanced existing website features for better functionality and user experience.`,
    type: "experience",
  },
  // {
  //   id: 3,
  //   year: "2022 - 2025",
  //   title:
  //     "Advanced Diploma in Computer Programming & Analysis, George Brown College",
  //   description:
  //     "Focused on full stack development, AI, cloud computing, and mobile app development. Built multiple academic and personal projects using modern technologies.",
  //   type: "education",
  // },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Who I Am
              </h3>
              <p className="text-muted-foreground mb-4">
                I'm a{" "}
                <span className="font-semibold text-blue-400">
                  Final Year IT Student | Web Developer
                </span>{" "}
                passionate about building dynamic, user-focused web applications with clean, maintainable code.
              </p>
              <p className="text-muted-foreground mb-4">
                With hands-on experience in both{" "}
                <span className="font-semibold text-blue-400">
                  frontend and backend development
                </span>
                , I specialize in creating responsive UIs with React.js and integrating them seamlessly with RESTful APIs using SQL Server.
              </p>
              <p className="text-muted-foreground">
                Currently, I'm learning backend using {" "}
                <span className="font-semibold text-blue-400">Node.js </span>
                and {" "}
                <span className="font-semibold text-blue-400">Express.js</span>
                {" "}
               to understand how servers and databases work together in full-stack applications.
              </p>
              {/* <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Certifications
              </h3> */}
              {/* <div className="flex flex-col gap-4">
                <a
                  href="https://www.coursera.org/account/accomplishments/specialization/LI5Q0UI157UD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="Google Data Analytics"
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="font-semibold text-blue-400">
                      Google Data Analytics Professional Certificate
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Data Analytics Focus
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.credly.com/badges/6366a28e-790a-4f83-9825-308fd4b1ed07/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition"
                >
                  <img
                    src="https://www.google.com/imgres?q=ibm%20logo%20svg&imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Ffree-ibm-logo-icon-download-in-svg-png-gif-file-formats--brand-company-brands-pack-logos-icons-2284974.png&imgrefurl=https%3A%2F%2Ficonscout.com%2Ffree-icon%2Fibm-2752157_2284974&docid=LhVFGlKx0-DrXM&tbnid=yEIptWpnccv7WM&vet=12ahUKEwiDv_eH3LeOAxXflIkEHe-TEnYQM3oECG8QAA..i&w=256&h=256&hcb=2&ved=2ahUKEwiDv_eH3LeOAxXflIkEHe-TEnYQM3oECG8QAA"
                    alt="IBM Data Science"
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="font-semibold text-blue-400">
                      IBM Data Science Professional Certificate
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Data Science Focus
                    </div>
                  </div>
                </a>
              </div> */}
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>

            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div
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
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
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
