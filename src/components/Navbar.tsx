import { motion } from 'motion/react';
import { useState } from 'react';

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const navItems = ['Home', 'Experience', 'Education', 'Skills', 'Projects', 'GitHub', 'Achievements', 'Contact'];

  const scrollToSection = (item: string) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="tracking-widest text-lg"
          style={{ fontWeight: 700 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white">shreyas.</span>
          <span className="text-cyan-400">portfolio</span>
        </motion.div>

        <div className="flex gap-12">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative text-white/70 hover:text-white transition-colors tracking-wide uppercase text-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -2 }}
            >
              {item}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 to-purple-500"
                  layoutId="navUnderline"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
