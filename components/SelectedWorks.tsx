'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function SelectedWorks() {
  const slideFromLeft: Variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } }
  };

  const slideFromRight: Variants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } }
  };

  const projects = [
    {
      id: 1,
      title: "Brick Negotiate",
      category: "AI Negotiation / Game Dev / 2024",
      url: "https://brick-negotiate.vercel.app/",
      variant: slideFromLeft,
      imageSide: "right"
    },
    {
      id: 2,
      title: "SkillBarters",
      category: "Marketplace / Blockchain / 2025",
      url: "https://skillbarters.vercel.app/",
      variant: slideFromRight,
      imageSide: "left"
    },
    {
      id: 3,
      title: "NEWVEBSITE",
      category: "SaaS / Creative Tools / 2025",
      url: "https://newvebsite.vercel.app/",
      variant: slideFromLeft,
      imageSide: "right"
    }
  ];

  return (
    <section id="work" className="py-40 bg-background overflow-hidden relative">
      <div className="max-w-[1440px] px-8 md:px-20 mx-auto space-y-40 md:space-y-60">
        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[12vw] font-headline font-extrabold tracking-tighter leading-none text-surface-container-highest uppercase pointer-events-none mb-20"
        >
          Selected Works
        </motion.h2>

        {projects.map((project) => (
          <motion.div 
            key={project.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={project.variant}
            onClick={() => window.open(project.url, '_blank')}
            className="flex flex-col md:block relative group cursor-pointer hover-target"
          >
            {/* Text Overlay (Now responsive) */}
            <div className={`
              w-full md:w-auto mb-8 md:mb-0
              md:absolute md:top-1/2 md:-translate-y-1/2 
              ${project.imageSide === 'right' ? 'md:left-0' : 'md:right-0 md:text-right'} 
              mix-blend-difference z-20 pointer-events-none px-0
            `}>
              <h3 className="text-5xl md:text-8xl font-headline font-bold italic text-primary pointer-events-auto">
                {project.title}
              </h3>
              <span className="font-label text-xs md:text-sm tracking-[0.3em] text-on-surface-variant block mt-4 uppercase">
                {project.category}
              </span>
            </div>

            {/* Website Preview Container */}
            <div className={`${project.imageSide === 'right' ? 'md:ml-auto' : 'md:mr-auto'} w-full md:w-[65%] aspect-video overflow-hidden bg-surface-container relative ring-1 ring-outline-variant/10 group-hover:ring-primary/40 transition-all duration-700`}>
              {/* Scaled Desktop Preview Wrapper - Forced Desktop Resolution */}
              <div 
                className="absolute top-0 left-0 w-[1280px] h-[720px] origin-top-left pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-1000"
                style={{ 
                  transform: `scale(calc((100vw - 64px) / 1280))` ,
                  // On Desktop (md+), the container width is roughly 65% of (100vw - 160px)
                  '--desktop-scale': `calc((min(1440px, 100vw) - 160px) * 0.65 / 1280)`
                } as any}
              >
                {/* Responsive Scale Adjustment for Desktop */}
                <style jsx>{`
                  @media (min-width: 768px) {
                    div { transform: scale(var(--desktop-scale)) !important; }
                  }
                `}</style>
                <iframe
                  src={project.url}
                  className="w-full h-full border-none shadow-2xl"
                  title={project.title}
                  loading="lazy"
                />
              </div>

              {/* Hover Arrow Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center mix-blend-overlay z-30">
                <span className="material-symbols-outlined text-white text-6xl">arrow_outward</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
