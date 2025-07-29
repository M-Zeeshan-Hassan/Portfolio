"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/PinContainer";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: string;
  statusColor?: string;
  statusGlow?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: index * 0.1,
        },
      }}
      viewport={{ once: true, amount: 0.1 }}
      className="h-full"
    >
      <div title={project.title}>
        <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-gray-900/70 border-gray-800 rounded-xl">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl object-cover w-full h-44"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-xl font-semibold text-white">
              {project.title}
            </CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="text-xs bg-gray-800/50 text-blue-300 border-blue-500/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <CardContent className="flex-grow">
            <CardDescription className="text-sm text-gray-400">
              {project.description}
            </CardDescription>
          </CardContent>

          <CardFooter className="flex justify-between gap-4 mt-auto">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10151a] text-white font-medium shadow border hover:text-[#7D6DE2] transition-colors duration-200"
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white font-medium shadow border hover:text-[#7D6DE2] transition-colors duration-200"
              >
                <Github size={18} />
                Source
              </a>
            )}
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
