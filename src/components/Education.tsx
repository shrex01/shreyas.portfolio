import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import srmLogo from '../assets/images/education/srm.jpg';
import brindavanLogo from '../assets/images/education/brindavan.jpg';
export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      college: 'SRM Institute of Science and Technology',
      program: 'Master of Computer Applications',
      specialization: 'Human-Computer Interaction',
      fromDate: 'Aug 2023',
      toDate: 'Aug 2025',
      icon: srmLogo,
      color: 'cyan',
    },
    {
      college: 'Brindavan Group of Institutions',
      program: 'Bachelor of Computer Applications',
      specialization: 'Software Engineering',
      fromDate: 'Aug 2019',
      toDate: 'Sep 2022',
      icon: brindavanLogo,
      color: 'purple',
    },
  ];

  const colorClasses = {
    cyan: {
      text: 'text-cyan-400',
      border: 'border-cyan-400/30',
      glow: 'shadow-[0_0_40px_rgba(0,240,255,0.3)]',
    },
    purple: {
      text: 'text-purple-500',
      border: 'border-purple-500/30',
      glow: 'shadow-[0_0_40px_rgba(168,85,247,0.3)]',
    },
  };

  return (
    <section id="education" ref={ref} className="relative min-h-screen py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-2 border border-purple-500/30 mb-6"
            whileHover={{ borderColor: 'rgba(168, 85, 247, 0.6)' }}
          >
            <span className="text-purple-500 tracking-widest uppercase text-sm">Education</span>
          </motion.div>
          <h2 className="text-white max-w-3xl">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              Journey
            </span>
          </h2>
        </motion.div>

        {/* Education cards */}
        <div className="space-y-6">
          {education.map((edu, index) => {
            const colors = colorClasses[edu.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={edu.college}
                className={`group relative overflow-hidden border ${colors.border} bg-white/[0.02] backdrop-blur-sm hover:${colors.glow} transition-all duration-500`}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex flex-col md:flex-row gap-4 p-6">
                  {/* College icon/image */}
                  <motion.div
                    className="relative w-20 h-20 flex-shrink-0"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20" />
                    <div className="relative w-full h-full rounded-lg overflow-hidden p-2">
                      <ImageWithFallback
                        src={edu.icon}
                        alt={edu.college}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 ${colors.text} opacity-20 blur-xl -z-10`} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Dates */}
                    <motion.div
                      className="flex items-center gap-2 mb-2"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <Calendar className={`w-4 h-4 ${colors.text}`} />
                      <span className={`tracking-widest text-xs ${colors.text}`}>
                        {edu.fromDate} - {edu.toDate}
                      </span>
                    </motion.div>

                    {/* College name */}
                    <h3 className="text-white mb-1.5 text-lg group-hover:text-cyan-400 transition-colors">
                      {edu.college}
                    </h3>

                    {/* Program */}
                    <div className="flex items-start gap-2">
                      <GraduationCap className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <div>
                        <p className="text-white/80 text-sm mb-0.5">{edu.program}</p>
                        <p className="text-white/50 text-xs tracking-wide">
                          Specialization: {edu.specialization}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/10 group-hover:border-white/30 transition-colors" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-white/10 group-hover:border-white/30 transition-colors" />
                </div>

                {/* Animated accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 ${colors.text} opacity-0 group-hover:opacity-100`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />

                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-1/2 h-1/3 bg-cyan-400/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
