'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const text = "SHASHANK";

  const containerVariants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    initial: { color: "rgba(255, 255, 255, 0.03)" },
    hover: { color: "rgba(232, 96, 46, 0.5)", transition: { duration: 0.2 } }
  };

  return (
    <footer className="bg-surface-container-lowest pt-32 pb-12 px-8 md:px-20 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-24">
          
          <div className="w-full md:w-1/2">
            <h3 className="text-4xl md:text-6xl font-headline font-light leading-tight mb-8">
              Let&apos;s build something <br/> <span className="italic text-primary">extraordinary.</span>
            </h3>
            <a 
              href="mailto:shashank8808108802@gmail.com" 
              className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] hover:text-primary transition-colors hover-target group"
            >
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500">
                <span className="material-symbols-outlined text-lg group-hover:rotate-45 transition-transform duration-500">
                  arrow_forward
                </span>
              </div>
              GET IN TOUCH
            </a>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <span className="font-label text-[10px] tracking-widest text-zinc-600 mb-2">CONNECT</span>
            {[
              { name: "LINKEDIN", url: "https://www.linkedin.com/in/apnashashank/" },
              { name: "GITHUB", url: "https://github.com/apnaShashank" },
              { name: "X (TWITTER)", url: "https://x.com/ApnaShashank" },
            ].map((link) => (
              <a 
                key={link.name}
                aria-label={`Visit ${link.name} profile`}
                className="font-label text-xs md:text-sm font-bold tracking-[0.2em] text-zinc-400 hover:text-primary transition-all duration-300 hover-target group flex items-center justify-start md:justify-end gap-2 w-full" 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-block group-hover:-translate-x-2 transition-transform duration-300">
                  {link.name}
                </span>
                <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:-translate-x-2 transition-all duration-300">
                  arrow_outward
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Giant Footer Text */}
        <div className="border-t border-zinc-800 pt-12 flex flex-col items-center">
          <motion.h1 
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
            className="text-[17vw] xl:text-[14rem] font-headline font-black tracking-tighter hover:tracking-[0.05em] leading-[0.75] mb-12 select-none transition-all duration-1000 w-full text-center hover-target cursor-default flex justify-center uppercase"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={childVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-zinc-500 text-[10px] font-label tracking-[0.2em] font-bold">
            <p>© 2026 SHASHANK GUPTA</p>
            <p className="mt-4 md:mt-0 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              DESIGNED & DEVELOPED WITH PASSION
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
