'use client';

import { motion, Variants } from 'framer-motion';

export default function NarrativeSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <section id="about" className="py-40 bg-surface-container-low px-8 md:px-20 overflow-hidden">
      <motion.div 
        className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="md:col-span-5">
          <h2 className="text-5xl md:text-7xl font-headline italic leading-none">
            The Technical{' '}
            <span className="not-italic text-primary">Auteur</span>
          </h2>
        </motion.div>
        
        <div className="md:col-span-7 space-y-24">
          <motion.div variants={itemVariants} className="space-y-6">
            <span className="font-label text-[10px] tracking-widest text-primary uppercase">
              Philosophy / 01
            </span>
            <p className="text-xl font-body font-light text-on-surface-variant leading-relaxed">
              Code is not just logic; it is a medium for curation. I treat every project as a digital installation where typography, performance, and interaction converge to tell a specific story.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-12">
            <span className="font-label text-[10px] tracking-widest text-primary uppercase">
              Core Stack / 02
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary"></span>
                  <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Frontend</p>
                </div>
                <p className="text-xl font-headline italic leading-relaxed">
                  React.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Context API, Redux Toolkit
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary"></span>
                  <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Backend</p>
                </div>
                <p className="text-xl font-headline italic leading-relaxed">
                  Node.js, Express.js, REST APIs, JWT, OAuth, GenAI APIs
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary"></span>
                  <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Database</p>
                </div>
                <p className="text-xl font-headline italic leading-relaxed">
                  MongoDB, Mongoose, Aggregation, Indexing, localStorage
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary"></span>
                  <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Tools</p>
                </div>
                <p className="text-xl font-headline italic leading-relaxed">
                  Git, GitHub, Postman, Vercel, Canva, n8n
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-6">
            <span className="font-label text-[10px] tracking-widest text-primary uppercase">
              Mindset / 03
            </span>
            <ul className="grid md:grid-cols-2 gap-6 font-body text-sm tracking-wide text-on-surface-variant">
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-crosshair">
                <span className="w-1.5 h-1.5 bg-primary"></span> PERFORMANCE ARCHITECTURE
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-crosshair">
                <span className="w-1.5 h-1.5 bg-primary"></span> KINETIC INTERFACES
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-crosshair">
                <span className="w-1.5 h-1.5 bg-primary"></span> SCALABLE SYSTEMS
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors cursor-crosshair">
                <span className="w-1.5 h-1.5 bg-primary"></span> INTENTIONAL UI
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
