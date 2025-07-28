// import { cn } from "@/lib/utils";
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// interface VortexProps {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
//   particleCount?: number;
//   rangeY?: number;
//   baseHue?: number;
//   baseSpeed?: number;
//   rangeSpeed?: number;
//   baseRadius?: number;
//   rangeRadius?: number;
//   backgroundColor?: string;
// }

// export const Vortex = (props: VortexProps) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const containerRef = useRef(null);
//   const particleCount = props.particleCount || 50;
//   const rangeY = props.rangeY || 100;
//   const baseSpeed = props.baseSpeed || 0.5;
//   const rangeSpeed = props.rangeSpeed || 1.5;
//   const baseRadius = props.baseRadius || 10;
//   const rangeRadius = props.rangeRadius || 20;
//   const baseHue = props.baseHue || 220;
//   const backgroundColor = props.backgroundColor || "#0a0a23";
//   interface Bubble {
//     x: number;
//     y: number;
//     radius: number;
//     speed: number;
//     hue: number;
//     alpha: number;
//     dx: number;
//     dy: number;
//   }
//   const bubblesRef = useRef<Bubble[]>([]);

//   // Utility functions
//   const rand = (min: number, max: number): number =>
//     Math.random() * (max - min) + min;

//   const initBubbles = React.useCallback(
//     (canvas: HTMLCanvasElement) => {
//       bubblesRef.current = [];
//       for (let i = 0; i < particleCount; i++) {
//         const radius = rand(baseRadius, baseRadius + rangeRadius);
//         const x = rand(radius, canvas.width - radius);
//         const y = rand(radius, canvas.height - radius);
//         const speed = rand(baseSpeed, baseSpeed + rangeSpeed);
//         const hue = baseHue + rand(-60, 60);
//         const alpha = rand(0.3, 0.7);
//         bubblesRef.current.push({
//           x,
//           y,
//           radius,
//           speed,
//           hue,
//           alpha,
//           dx: rand(-1, 1),
//           dy: rand(-1, 1),
//         });
//       }
//     },
//     [particleCount, baseRadius, rangeRadius, baseSpeed, rangeSpeed, baseHue]
//   );

//   const draw = React.useCallback(
//     (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = backgroundColor;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw and animate bubbles
//       for (const bubble of bubblesRef.current) {
//         // Move
//         bubble.x += bubble.dx * bubble.speed;
//         bubble.y += bubble.dy * bubble.speed;

//         // Bounce off edges
//         if (
//           bubble.x - bubble.radius < 0 ||
//           bubble.x + bubble.radius > canvas.width
//         ) {
//           bubble.dx *= -1;
//         }
//         if (
//           bubble.y - bubble.radius < 0 ||
//           bubble.y + bubble.radius > canvas.height
//         ) {
//           bubble.dy *= -1;
//         }

//         // Draw bubble
//         ctx.save();
//         ctx.beginPath();
//         ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fillStyle = `hsla(${bubble.hue}, 80%, 60%, ${bubble.alpha})`;
//         ctx.shadowColor = `hsla(${bubble.hue}, 80%, 60%, 0.5)`;
//         ctx.shadowBlur = 20;
//         ctx.fill();
//         ctx.restore();
//       }

//       window.requestAnimationFrame(() => draw(canvas, ctx));
//     },
//     [backgroundColor]
//   );

//   const setup = React.useCallback(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (canvas && container) {
//       const ctx = canvas.getContext("2d");
//       if (ctx) {
//         resize(canvas);
//         initBubbles(canvas);
//         draw(canvas, ctx);
//       }
//     }
//   }, [initBubbles, draw]);

//   const resize = (canvas: HTMLCanvasElement) => {
//     const { innerWidth, innerHeight } = window;
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;
//   };

//   useEffect(() => {
//     setup();
//     const handleResize = () => {
//       const canvas = canvasRef.current;
//       if (canvas) {
//         resize(canvas);
//         initBubbles(canvas);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [setup, initBubbles]);

//   return (
//     <div className={cn("relative h-full w-full", props.containerClassName)}>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         ref={containerRef}
//         className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
//       >
//         <canvas ref={canvasRef}></canvas>
//       </motion.div>

//       <div className={cn("relative z-10", props.className)}>
//         {props.children}
//       </div>
//     </div>
//   );
// };
