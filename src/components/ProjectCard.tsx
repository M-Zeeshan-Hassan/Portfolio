// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { PinContainer } from "@/components/ui/PinContainer";
// import { Github, ExternalLink } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// export interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   demoUrl?: string;
//   githubUrl?: string;
//   status?: string;
//   statusColor?: string;
//   statusGlow?: string;
// }

// interface ProjectCardProps {
//   project: Project;
//   index: number;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         transition: {
//           type: "spring",
//           bounce: 0.4,
//           duration: 0.8,
//           delay: index * 0.1,
//         },
//       }}
//       viewport={{ once: true, amount: 0.1 }}
//       className="h-full"
//     >
//       <PinContainer title={project.title}>
//         <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-gray-900/70 border-gray-800 rounded-xl relative">
//           <div
//             className="relative group"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className={`rounded-xl object-cover w-full h-44 transition-all duration-300 ${
//                 hovered ? "blur-sm brightness-75" : ""
//               }`}
//             />
//             {/* Overlay buttons on hover */}
//             {hovered && (
//               <div className="absolute inset-0 flex items-center justify-center gap-4">
//                 {project.demoUrl && (
//                   <a
//                     href={project.demoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#10151a] text-white font-semibold shadow-lg border border-transparent hover:text-[#7D6DE2] transition-colors duration-200"
//                     style={{ transition: "color 0.2s" }}
//                   >
//                     <ExternalLink
//                       size={20}
//                       color="#fff"
//                       style={{ transition: "color 0.2s" }}
//                       className="group-hover:text-[#7D6DE2]"
//                     />
//                     Demo
//                   </a>
//                 )}
//                 {project.githubUrl && (
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-800 text-white font-semibold shadow-lg border border-transparent hover:text-[#7D6DE2] transition-colors duration-200"
//                     style={{ transition: "color 0.2s" }}
//                   >
//                     <Github
//                       size={20}
//                       color="#fff"
//                       style={{ transition: "color 0.2s" }}
//                       className="group-hover:text-[#7D6DE2]"
//                     />
//                     Source
//                   </a>
//                 )}
//               </div>
//             )}
//           </div>

//           <CardHeader>
//             <CardTitle className="text-xl font-semibold text-white">
//               {project.title}
//             </CardTitle>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {project.tags.map((tag, i) => (
//                 <Badge
//                   key={i}
//                   variant="outline"
//                   className="text-xs bg-gray-800/50 text-blue-300 border-blue-500/20"
//                 >
//                   {tag}
//                 </Badge>
//               ))}
//             </div>
//           </CardHeader>

//           <CardContent className="flex-grow">
//             <CardDescription className="text-sm text-gray-400">
//               {project.description}
//             </CardDescription>
//           </CardContent>
//         </Card>
//       </PinContainer>
//     </motion.div>
//   );
// };

// export default ProjectCard;
