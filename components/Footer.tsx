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

          <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
            {[
              { 
                name: "LinkedIn", 
                url: "https://www.linkedin.com/in/apnashashank/",
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                )
              },
              { 
                name: "GitHub", 
                url: "https://github.com/apnaShashank",
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                )
              },
              { 
                name: "X", 
                url: "https://x.com/ApnaShashank",
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                )
              },
            ].map((link) => (
              <a 
                key={link.name}
                aria-label={`Visit ${link.name} profile`}
                className="w-12 h-12 flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary transition-all duration-300 hover-target group relative overflow-hidden" 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                  {link.icon}
                </div>
                <span className="material-symbols-outlined text-[8px] absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_outward
                </span>
                <div className="absolute inset-0 bg-primary/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
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
            className="text-[14vw] xl:text-[14rem] font-headline font-black tracking-tighter hover:tracking-[0.05em] leading-[0.75] mb-12 select-none transition-all duration-1000 w-full text-center hover-target cursor-default flex justify-center uppercase animate-shine"
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
