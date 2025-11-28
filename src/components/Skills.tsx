import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      name: 'React',
      icon: 'src/assets/images/skills/react.png',
      color: 'cyan',
    },
    {
      name: 'Python',
      icon: 'src/assets/images/skills/python.png',
      color: 'purple',
    },
    {
      name: 'Javascript',
      icon: 'src/assets/images/skills/javascript.png',
      color: 'purple',
    },
    {
      name: 'Next.js',
      icon: 'src/assets/images/skills/nextjs.webp',
      color: 'purple',
    },
    {
      name: 'Typescript',
      icon: 'src/assets/images/skills/typescript.png',
      color: 'magenta',
    },
    {
      name: 'HTML',
      icon: 'src/assets/images/skills/html.png',
      color: 'green',
    },
    {
      name: 'CSS',
      icon: 'src/assets/images/skills/css.png',
      color: 'cyan',
    },
    {
      name: 'Git',
      icon: 'src/assets/images/skills/git.png',
      color: 'purple',
    },
    
  ];

  const colorClasses = {
    cyan: {
      text: 'text-cyan-400',
      border: 'group-hover:border-cyan-400/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]',
    },
    purple: {
      text: 'text-purple-500',
      border: 'group-hover:border-purple-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    },
    magenta: {
      text: 'text-fuchsia-500',
      border: 'group-hover:border-fuchsia-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]',
    },
    green: {
      text: 'text-green-400',
      border: 'group-hover:border-green-400/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]',
    },
  };

  return (
    <section id="skills" ref={ref} className="relative py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block px-4 py-2 border border-fuchsia-500/30 mb-4"
            whileHover={{ borderColor: 'rgba(255, 0, 255, 0.6)' }}
          >
            <span className="text-fuchsia-500 tracking-widest uppercase text-sm">Skills & Expertise</span>
          </motion.div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {skills.map((skill, index) => {
            const colors = colorClasses[skill.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={skill.name}
                className={`group relative p-4 border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 flex flex-col items-center justify-center aspect-square ${colors.border} ${colors.glow}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-10 h-10 mb-2 ${colors.text}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {/* {skill.icon} */}
                  <ImageWithFallback
                    src={skill.icon}
                    alt={skill.icon}
                    className="w-full h-full object-cover rounded"
                  />
                </motion.div>

                {/* Name */}
                <span className="text-white text-xs tracking-wide text-center">{skill.name}</span>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/40 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-fuchsia-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
