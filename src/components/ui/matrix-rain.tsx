import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MatrixRainProps {
  children?: any;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
  columnCount?: number;
  characterSet?: string;
  fontSize?: number;
  trailLength?: number;
}

export const MatrixRain = (props: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const particleCount = props.particleCount || 50;
  const rangeY = props.rangeY || 100;
  const baseSpeed = props.baseSpeed || 1;
  const rangeSpeed = props.rangeSpeed || 2;
  const baseRadius = props.baseRadius || 10;
  const rangeRadius = props.rangeRadius || 20;
  const baseHue = props.baseHue || 120;
  const backgroundColor = props.backgroundColor || "#0a0a23";
  const columnCount = props.columnCount || 50;
  const characterSet = props.characterSet || "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const fontSize = props.fontSize || 14;
  const trailLength = props.trailLength || 20;
  let columns: any[] = [];

  // Utility functions
  const rand = (min: number, max: number): number =>
    Math.random() * (max - min) + min;

  const setup = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas);
        initColumns(canvas);
        draw(canvas, ctx);
      }
    }
  };

  const initColumns = (canvas: HTMLCanvasElement) => {
    columns = [];
    const columnWidth = canvas.width / columnCount;
    
    for (let i = 0; i < columnCount; i++) {
      const x = i * columnWidth + columnWidth / 2;
      const speed = rand(baseSpeed, baseSpeed + rangeSpeed);
      const hue = baseHue + rand(-20, 20);
      const trail = [];
      
      // Initialize trail
      for (let j = 0; j < trailLength; j++) {
        trail.push({
          y: -j * fontSize,
          char: characterSet[Math.floor(Math.random() * characterSet.length)],
          alpha: 1 - (j / trailLength),
        });
      }
      
      columns.push({
        x,
        speed,
        hue,
        trail,
        nextChar: characterSet[Math.floor(Math.random() * characterSet.length)],
      });
    }
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw and animate matrix rain
    for (let column of columns) {
      // Update trail positions
      for (let i = column.trail.length - 1; i > 0; i--) {
        column.trail[i].y = column.trail[i - 1].y;
        column.trail[i].char = column.trail[i - 1].char;
        column.trail[i].alpha = column.trail[i - 1].alpha;
      }
      
      // Update first trail element
      column.trail[0].y += column.speed;
      column.trail[0].char = column.nextChar;
      column.trail[0].alpha = 1;
      
      // Generate new character
      if (Math.random() < 0.1) {
        column.nextChar = characterSet[Math.floor(Math.random() * characterSet.length)];
      }
      
      // Reset column if it goes off screen
      if (column.trail[0].y > canvas.height + fontSize) {
        column.trail[0].y = -fontSize;
        column.trail[0].char = characterSet[Math.floor(Math.random() * characterSet.length)];
      }

      // Draw trail
      ctx.save();
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';
      
      for (let i = 0; i < column.trail.length; i++) {
        const trail = column.trail[i];
        if (trail.y >= -fontSize && trail.y <= canvas.height) {
          // Create gradient effect
          const gradient = ctx.createLinearGradient(
            column.x - fontSize/2, trail.y - fontSize/2,
            column.x + fontSize/2, trail.y + fontSize/2
          );
          gradient.addColorStop(0, `hsla(${column.hue}, 100%, 70%, ${trail.alpha})`);
          gradient.addColorStop(1, `hsla(${column.hue}, 100%, 50%, ${trail.alpha * 0.7})`);
          
          ctx.fillStyle = gradient;
          ctx.shadowColor = `hsla(${column.hue}, 100%, 60%, ${trail.alpha * 0.8})`;
          ctx.shadowBlur = 10;
          ctx.fillText(trail.char, column.x, trail.y);
        }
      }
      
      ctx.restore();
    }

    window.requestAnimationFrame(() => draw(canvas, ctx));
  };

  const resize = (canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  };

  useEffect(() => {
    setup();
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        resize(canvas);
        initColumns(canvas);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
}; 