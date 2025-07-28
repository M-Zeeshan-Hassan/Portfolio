import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface WaveFieldProps {
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
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
}

export const WaveField = (props: WaveFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const particleCount = props.particleCount || 40;
  const rangeY = props.rangeY || 100;
  const baseSpeed = props.baseSpeed || 0.4;
  const rangeSpeed = props.rangeSpeed || 1.0;
  const baseRadius = props.baseRadius || 3;
  const rangeRadius = props.rangeRadius || 8;
  const baseHue = props.baseHue || 200;
  const backgroundColor = props.backgroundColor || "#0a0a23";
  const waveAmplitude = props.waveAmplitude || 30;
  const waveFrequency = props.waveFrequency || 0.02;
  const waveSpeed = props.waveSpeed || 0.005;
  let waves: any[] = [];

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
        initWaves(canvas);
        draw(canvas, ctx);
      }
    }
  };

  const initWaves = (canvas: HTMLCanvasElement) => {
    waves = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = rand(baseRadius, baseRadius + rangeRadius);
      const x = rand(radius, canvas.width - radius);
      const y = rand(radius, canvas.height - radius);
      const speed = rand(baseSpeed, baseSpeed + rangeSpeed);
      const hue = baseHue + rand(-50, 50);
      const alpha = rand(0.3, 0.8);
      const phase = rand(0, Math.PI * 2);
      waves.push({
        x,
        y,
        radius,
        speed,
        hue,
        alpha,
        phase,
        originalX: x,
        originalY: y,
        waveOffset: rand(0, Math.PI * 2),
      });
    }
  };

  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const time = Date.now() * waveSpeed;

    // Draw and animate waves
    for (let wave of waves) {
      // Calculate wave motion
      const waveX = Math.sin(time + wave.waveOffset) * waveAmplitude;
      const waveY = Math.cos(time * 0.7 + wave.phase) * waveAmplitude * 0.5;
      
      wave.x = wave.originalX + waveX;
      wave.y = wave.originalY + waveY;

      // Keep waves within bounds
      wave.x = Math.max(wave.radius, Math.min(canvas.width - wave.radius, wave.x));
      wave.y = Math.max(wave.radius, Math.min(canvas.height - wave.radius, wave.y));

      // Draw wave particle
      ctx.save();
      
      // Create gradient for wave effect
      const gradient = ctx.createRadialGradient(wave.x, wave.y, 0, wave.x, wave.y, wave.radius * 2);
      gradient.addColorStop(0, `hsla(${wave.hue}, 85%, 65%, ${wave.alpha})`);
      gradient.addColorStop(0.5, `hsla(${wave.hue}, 75%, 45%, ${wave.alpha * 0.6})`);
      gradient.addColorStop(1, `hsla(${wave.hue}, 65%, 25%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.shadowColor = `hsla(${wave.hue}, 80%, 60%, 0.4)`;
      ctx.shadowBlur = 25;
      
      // Draw wave circle with ripple effect
      ctx.beginPath();
      ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw outer ripple
      ctx.globalAlpha = wave.alpha * 0.3;
      ctx.beginPath();
      ctx.arc(wave.x, wave.y, wave.radius * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${wave.hue}, 70%, 50%, ${wave.alpha * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
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
        initWaves(canvas);
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