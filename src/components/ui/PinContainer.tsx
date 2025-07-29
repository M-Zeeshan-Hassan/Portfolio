"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("group relative cursor-pointer", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        e.preventDefault();
        window.open("" + href, "_blank");
      }}
    >
      <motion.div
        style={{ perspective: "1000px" }}
        className={cn("w-full h-full", className)}
      >
        <motion.div
          animate={{
            rotateX: isHovered ? 8 : 0,
            scale: isHovered ? 0.98 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="transition-transform duration-300 rounded-xl w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>

      {/* Optional floating label on hover */}
      <PinPerspective title={title} href={href} />
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
      <a
        href={href}
        target="_blank"
        className="bg-zinc-900 text-white text-xs font-semibold py-1 px-3 rounded-full ring-1 ring-white/10 shadow-md"
      >
        {title}
      </a>
    </motion.div>
  );
};
