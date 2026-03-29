'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" as const } }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 pt-32 relative overflow-hidden bg-background">
      {/* Interactive Abstract Orange Blur */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[130px] rounded-full pointer-events-none"
        animate={{
          x: typeof window !== 'undefined' ? (mousePosition.x - window.innerWidth / 2) * 0.3 : 0,
          y: typeof window !== 'undefined' ? (mousePosition.y - window.innerHeight / 2) * 0.3 - 200 : -200,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 40 }}
      />
      
      <motion.div 
        className="max-w-[1440px] mx-auto w-full relative z-10"
        style={{ y: y1, opacity }}
      >
        <motion.span 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-label text-primary/80 tracking-[0.4em] uppercase text-xs mb-8 block"
        >
          Creative Developer & Digital Architect
        </motion.span>

        <motion.h1 
          className="text-[17vw] sm:text-[12vw] lg:text-[8.5vw] font-headline font-extrabold leading-[0.85] tracking-tighter flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline gap-2 sm:gap-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden"><motion.span variants={itemVariants} className="block">SHASHANK</motion.span></div>
          <div className="overflow-hidden"><motion.span variants={itemVariants} className="text-surface-container-highest italic font-light block mix-blend-difference hover:text-primary transition-colors duration-500 hover-target">GUPTA</motion.span></div>
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-20 mt-20 items-end">
          <div className="max-w-xl">
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl md:text-3xl font-headline font-light leading-snug text-on-surface-variant overflow-hidden"
            >
              Turning ideas into <span className="italic">high-performance digital products</span>. Focused on <span className="text-primary italic">scalability and user experience</span> to deliver <span className="text-primary">impactful solutions</span>.
            </motion.p>
          </div>
          <div className="flex justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              role="button"
              aria-label="Scroll down to About section"
              className="relative w-32 h-32 flex items-center justify-center border border-outline-variant/20 rounded-full group cursor-pointer hover:border-primary/40 transition-colors font-label"
              onClick={() => {
                const aboutSection = document.getElementById('narrative');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="material-symbols-outlined text-primary group-hover:translate-y-2 transition-transform duration-500">
                arrow_downward
              </span>
              <div className="absolute inset-0 border-t border-primary rounded-full animate-[spin_10s_linear_infinite]"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
