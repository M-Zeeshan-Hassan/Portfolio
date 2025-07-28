import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FloatingParticlesProps {
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
  floatRange?: number;
  rotationSpeed?: number;
}

export const FloatingParticles = (props: FloatingParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const particleCount = props.particleCount || 30;
  const rangeY = props.rangeY || 100;
  const baseSpeed = props.baseSpeed || 0.3;
  const rangeSpeed = props.rangeSpeed || 0.8;
  const baseRadius = props.baseRadius || 2;
  const rangeRadius = props.rangeRadius || 6;
  const baseHue = props.baseHue || 180;
  const backgroundColor = props.backgroundColor || "#0a0a23";
  const floatRange = props.floatRange || 50;
  const rotationSpeed = props.rotationSpeed || 0.02;
  let particles: any[] = [];

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
        initParticles(canvas);
        draw(canvas, ctx);
      }
    }
  };

  const initParticles = (canvas: HTMLCanvasElement) => {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = rand(baseRadius, baseRadius + rangeRadius);
      const x = rand(radius, canvas.width - radius);
      const y = rand(radius, canvas.height - radius);
      const speed = rand(baseSpeed, baseSpeed + rangeSpeed);
      const hue = baseHue + rand(-40, 40);
      const alpha = rand(0.4, 0.9);
      const floatOffset = rand(0, Math.PI * 2);
      particles.push({
        x,
        y,
        radius,
        speed,
        hue,
        alpha,
        floatOffset,
        rotation: 0,
        originalX: x,
        originalY: y,
      });
    }
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw and animate particles
    for (let particle of particles) {
      // Update rotation
      particle.rotation += rotationSpeed;
      
      // Floating motion
      const time = Date.now() * 0.001;
      particle.x = particle.originalX + Math.sin(time + particle.floatOffset) * floatRange;
      particle.y = particle.originalY + Math.cos(time + particle.floatOffset) * floatRange * 0.5;

      // Keep particles within bounds
      particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
      particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));

      // Draw particle with rotation
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      // Create gradient for each particle
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.radius);
      gradient.addColorStop(0, `hsla(${particle.hue}, 90%, 70%, ${particle.alpha})`);
      gradient.addColorStop(0.7, `hsla(${particle.hue}, 80%, 50%, ${particle.alpha * 0.7})`);
      gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 30%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.shadowColor = `hsla(${particle.hue}, 80%, 60%, 0.6)`;
      ctx.shadowBlur = 15;
      
      // Draw diamond shape
      ctx.beginPath();
      ctx.moveTo(0, -particle.radius);
      ctx.lineTo(particle.radius * 0.7, 0);
      ctx.lineTo(0, particle.radius);
      ctx.lineTo(-particle.radius * 0.7, 0);
      ctx.closePath();
      ctx.fill();
      
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
        initParticles(canvas);
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