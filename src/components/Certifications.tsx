import React, { useState } from "react";
import { motion } from "framer-motion";

const certificatesData = [
  {
    id: 1,
    title: " Programming with JavaScript",
    issuer: "Meta (Coursera)",
    issueDate: "June 2024",
    certificateUrl: "https://coursera.org/verify/H9N6JXRCYXGS",
    image: "/lovable-uploads/Programming_JS.png",
    skills: ["JavaScript"],
  },
  {
    id: 2,
    title: "SQL and Relational Databases 101",
    issuer: "IBM (Cognitive Class)",
    issueDate: "May 2024",
    certificateUrl:
      "https://courses.cognitiveclass.ai/certificates/1d60651ef8b340ad8d25b2e5c938842d",
    image: "/lovable-uploads/sql.png",

    skills: ["SQL", "Relational Databases"],
  },

  {
    id: 3,
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    issueDate: "July 2023",
    certificateUrl: "https://coursera.org/verify/Z2JW4BLKWYDS",
    image: "/lovable-uploads/meta-frontend-cert.png",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 4,
    title: "Introduction to Cybersecurity Tools & Cyber Attacks",
    issuer: "IBM (Coursera)",
    issueDate: "March 2023",
    certificateUrl: "https://coursera.org/verify/248LFDUUK5ZW",
    image: "/lovable-uploads/cyber.png",

    skills: ["Linux"],
  },

  {
    id: 5,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy",
    issueDate: "Sep 2022",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-7e31782e-37ae-4b8c-9c83-4ebc272eff94",
    image: "/lovable-uploads/Python.png",
    skills: ["Python"],
  },

  // Add more certificates as needed
];

const Certifications = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="certifications" className="section-container relative">
      <h2 className="section-title mb-8">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setActiveId(cert.id)}
            className="cursor-pointer bg-[#0f0f0f] text-white rounded-2xl p-5 shadow-xl border border-neutral-800 hover:border-purple-500 hover:shadow-purple-500/20 transition-transform duration-300 transform hover:scale-105 flex flex-col justify-between h-full"
          >
            <div>
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-xl object-cover w-full h-44"
              />
              {/* Animated SVG underline */}
              <motion.svg
                width="100%"
                height="6"
                viewBox="0 0 300 6"
                className="mt-2"
              >
                <motion.path
                  d="M0 3 Q150 6 300 3"
                  stroke="#a855f7"
                  strokeWidth="3"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: activeId === cert.id ? 1 : 0 }}
                  transition={{ duration: 1, type: "tween" }}
                />
              </motion.svg>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                <span className="font-medium text-purple-400">
                  {cert.issuer}
                </span>{" "}
                &middot; {cert.issueDate}
              </p>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2 mb-3">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#1f1f1f] px-2 py-1 text-xs rounded-md border border-neutral-700 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-end items-center">
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:underline"
                >
                  View Certificate ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
