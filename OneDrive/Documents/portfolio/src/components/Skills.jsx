import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 w-full py-24" id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="mb-16 space-y-4" variants={headerVariants}>
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            A snapshot of the technologies and tools I navigate to build digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Primary Stack */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white font-bold">⦿</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Primary Stack</h3>
                </div>
                <p className="text-zinc-400 text-sm">Full-Stack MERN Architecture</p>
              </div>

              {/* Tech Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">

                {/* React */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 841.9 595.3" fill="none" stroke="currentColor" strokeWidth="40">
                    <ellipse cx="420.9" cy="296.5" rx="165" ry="64" />
                    <ellipse cx="420.9" cy="296.5" rx="165" ry="64" transform="rotate(60 420.9 296.5)" />
                    <ellipse cx="420.9" cy="296.5" rx="165" ry="64" transform="rotate(120 420.9 296.5)" />
                    <circle cx="420.9" cy="296.5" r="35" fill="currentColor" />
                  </svg>
                  <span className="text-xs font-medium text-white">React</span>
                </div>

                {/* Node.js */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 256 288" fill="currentColor">
                    <path d="M128 0l128 74v140l-128 74L0 214V74z" />
                  </svg>
                  <span className="text-xs font-medium text-white">Node.js</span>
                </div>

                {/* Express */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center font-black text-white tracking-widest">
                    ex
                  </div>
                  <span className="text-xs font-medium text-white">Express</span>
                </div>

                {/* MongoDB */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 256 512" fill="currentColor">
                    <path d="M128 0s-64 96-64 192c0 96 64 192 64 320 0-128 64-224 64-320C192 96 128 0 128 0z" />
                  </svg>
                  <span className="text-xs font-medium text-white">MongoDB</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-3">
                {['REST APIs', 'JWT Auth', 'Mongoose Schemas'].map(item => (
                  <div key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2">
                    <span className="text-zinc-600 font-mono text-xs font-bold">//</span>
                    <span className="text-zinc-400 text-xs font-mono">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-2 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">Languages</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-wider font-medium">Core fluency</p>
            </div>

            <div className="space-y-3">
              {[
                { name: 'JavaScript (ES6+)', icon: 'JS' },
                { name: 'C++', icon: 'C++' },
                { name: 'Java', icon: 'JAVA' },
                { name: 'C', icon: 'C' },
                { name: 'HTML5 & CSS3', icon: '</>' },
              ].map(lang => (
                <div key={lang.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-lg text-white font-bold text-xs">
                    {lang.icon}
                  </div>
                  <span className="text-sm text-zinc-400">{lang.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
