// import React, { useEffect } from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';

// const CustomScrollbar = () => {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   useEffect(() => {
//     // Add smooth scrolling behavior
//     document.documentElement.style.scrollBehavior = 'smooth';

//     // Custom scrollbar styles
//     const style = document.createElement('style');
//     style.textContent = `
//       ::-webkit-scrollbar {
//         width: 6px;
//       }
//       ::-webkit-scrollbar-track {
//         background: rgba(255, 255, 255, 0.05);
//       }
//       ::-webkit-scrollbar-thumb {
//         background: rgba(255, 255, 255, 0.2);
//         border-radius: 3px;
//         transition: all 0.3s ease;
//       }
//       ::-webkit-scrollbar-thumb:hover {
//         background: rgba(255, 255, 255, 0.3);
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//       document.documentElement.style.scrollBehavior = '';
//     };
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[60]"
//       style={{ scaleX }}
//     />
//   );
// };

// export default CustomScrollbar;

// After applying the Lenis effect for smooth  scrolling Progress Bar

import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Custom scrollbar styles
    const style = document.createElement("style");
    style.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0f172a; /* dark slate */
      }
      ::-webkit-scrollbar-thumb {
        background: #64748b; /* slate-500 */
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #94a3b8; /* slate-400 */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Top scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[999]"
        style={{ scaleX }}
      />
    </>
  );
};

export default CustomScrollbar;
