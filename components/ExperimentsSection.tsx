'use client';

import { motion, Variants } from 'framer-motion';

export default function ExperimentsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="experiments" className="py-40 bg-surface-container-lowest px-8 md:px-20 overflow-hidden">
      <motion.div 
        className="max-w-[1440px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-headline italic mb-20 text-center">
          Experiments in{' '}
          <span className="text-primary">Logic & Aesthetics</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {/* Exp 1 */}
          <motion.div variants={itemVariants} className="aspect-square bg-surface-container p-12 flex flex-col justify-between hover:bg-surface-container-high transition-colors group hover-target cursor-crosshair">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-500">
              deployed_code
            </span>
            <div className="space-y-4">
              <h4 className="text-2xl font-headline italic group-hover:text-primary transition-colors duration-500">
                Neural Layouts
              </h4>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                Generative Grid Logic
              </p>
            </div>
          </motion.div>
          {/* Exp 2 */}
          <motion.div variants={itemVariants} className="aspect-square bg-surface-container p-12 flex flex-col justify-between hover:bg-surface-container-high transition-colors group hover-target cursor-crosshair">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-500">
              motion_mode
            </span>
            <div className="space-y-4">
              <h4 className="text-2xl font-headline italic group-hover:text-primary transition-colors duration-500">
                Kinetic Type
              </h4>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                Variable Font Physics
              </p>
            </div>
          </motion.div>
          {/* Exp 3 */}
          <motion.div variants={itemVariants} className="aspect-square bg-surface-container p-12 flex flex-col justify-between hover:bg-surface-container-high transition-colors group hover-target cursor-crosshair">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant group-hover:text-primary transition-colors duration-500">
              filter_vintage
            </span>
            <div className="space-y-4">
              <h4 className="text-2xl font-headline italic group-hover:text-primary transition-colors duration-500">
                Grain Shaders
              </h4>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest">
                WebGL Texturing
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
