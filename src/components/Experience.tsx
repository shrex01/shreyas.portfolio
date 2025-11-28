import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timeline = [
    { year: 'Nov 2023', yearEnd: 'Present', title: 'Associate Software Developer -SDE1', company: 'SCLEN.AI ( formerly Caliper Business Solutions pvt ltd )' },
    { year: 'Jun 2023', yearEnd: 'Oct 2023', title: 'Web developer Intern', company: 'SCLEN.AI ( formerly Caliper Business Solutions pvt ltd )' },
  ];

  return (
    <section id="experience" ref={ref} className="relative py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 border border-cyan-400/30 mb-6"
              whileHover={{ borderColor: 'rgba(0, 240, 255, 0.6)' }}
            >
              <span className="text-cyan-400 tracking-widest uppercase text-sm">Experience</span>
            </motion.div>
            <h2 className="text-white mb-6">
              Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Journey
              </span>
            </h2>
            <p className="text-white/60 tracking-wide max-w-xl">
              Crafting innovative digital experiences across various industries and technologies.
              Passionate about pushing the boundaries of web development and design.
            </p>
          </motion.div>

          {/* Right side - Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative pl-12 pb-16 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-0 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-cyan-400"
                  style={{ boxShadow: '0 0 20px rgba(0, 240, 255, 0.8)' }}
                  whileHover={{ scale: 1.5 }}
                />

                <div className="flex items-baseline gap-6 mb-2">
                  <span className="text-cyan-400 tracking-widest text-sm">{item.year} - {item.yearEnd}</span>
                  <h4 className="text-white">{item.title}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-white/40" />
                  <p className="text-white/40 tracking-wide">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-cyan-400/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
