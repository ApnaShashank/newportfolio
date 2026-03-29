'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function CTASection() {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <>
      <section className="py-60 px-8 md:px-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="text-[14vw] font-headline font-black text-white whitespace-nowrap tracking-[0.2em]">CREATIVE</span>
        </div>
        <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
          <motion.button 
            layoutId="profile-image"
            onClick={() => setIsImageExpanded(true)}
            aria-label="Expand professional portrait"
            className="w-40 h-40 rounded-full overflow-hidden mb-12 grayscale hover:grayscale-0 transition-all duration-700 ring-1 ring-primary/20 ring-offset-4 ring-offset-background group hover-target cursor-pointer relative"
          >
            <Image
              fill
              sizes="(max-width: 768px) 160px, 160px"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Professional portrait of a creative professional"
              src="https://ik.imagekit.io/DEMOPROJECT/ChatGPT%20Image%20Mar%2029,%202026,%2002_27_29%20PM.png"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center mix-blend-overlay">
              <span className="material-symbols-outlined text-white text-3xl">zoom_out_map</span>
            </div>
          </motion.button>
          
          <blockquote className="text-3xl md:text-5xl font-headline font-light max-w-4xl leading-tight mb-20">
            &quot;I believe in the beauty of{' '}
            <span className="text-primary italic">broken grids</span> and the efficiency of{' '}
            <span className="underline decoration-primary/50 underline-offset-8">clean code</span>.&quot;
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
            <a 
              href="mailto:shashank8808108802@gmail.com?subject=Hire%20Me%20Inquiry"
              className="bg-primary text-on-primary-container px-12 py-5 font-bold tracking-[0.2em] sharp-border text-sm hover:scale-105 hover:bg-white transition-all duration-300 hover-target cursor-pointer w-full sm:w-auto text-center"
            >
              HIRE ME
            </a>
            <a 
              href="https://ik.imagekit.io/DEMOPROJECT/Shashank_Gupta_Resume%20(5).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 border border-outline-variant/30 px-10 py-5 font-bold tracking-[0.2em] sharp-border text-sm text-on-surface hover:border-primary hover:text-primary transition-all duration-300 hover-target w-full sm:w-auto"
            >
              DOWNLOAD RESUME
              <span className="material-symbols-outlined text-lg group-hover:-translate-y-1 transition-transform">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-xl px-8"
            onClick={() => setIsImageExpanded(false)}
          >
            <motion.div 
              layoutId="profile-image"
              className="relative w-full max-w-2xl aspect-4/5 md:aspect-square overflow-hidden rounded-xl shadow-2xl cursor-zoom-out"
            >
              <Image
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                alt="Professional portrait of a creative professional"
                src="https://ik.imagekit.io/DEMOPROJECT/ChatGPT%20Image%20Mar%2029,%202026,%2002_27_29%20PM.png"
              />
              <button 
                title="Close expanded portrait"
                aria-label="Close expanded portrait"
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full cursor-pointer hover:bg-black transition-colors" 
                onClick={(e) => { e.stopPropagation(); setIsImageExpanded(false); }}
              >
                <span className="material-symbols-outlined text-white">close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
