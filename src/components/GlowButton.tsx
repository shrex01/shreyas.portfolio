import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  variant?: 'cyan' | 'magenta' | 'purple' | 'green';
  onClick?: () => void;
  className?: string;
}

export function GlowButton({ children, variant = 'cyan', onClick, className = '' }: GlowButtonProps) {
  const variants = {
    cyan: {
      bg: 'bg-cyan-400',
      glow: 'shadow-[0_0_30px_rgba(0,240,255,0.5)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(0,240,255,0.8)]',
      text: 'text-black',
    },
    magenta: {
      bg: 'bg-fuchsia-500',
      glow: 'shadow-[0_0_30px_rgba(255,0,255,0.5)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(255,0,255,0.8)]',
      text: 'text-black',
    },
    purple: {
      bg: 'bg-purple-500',
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.5)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]',
      text: 'text-white',
    },
    green: {
      bg: 'bg-green-400',
      glow: 'shadow-[0_0_30px_rgba(57,255,20,0.5)]',
      hoverGlow: 'hover:shadow-[0_0_50px_rgba(57,255,20,0.8)]',
      text: 'text-black',
    },
  };

  const style = variants[variant];

  return (
    <motion.button
      onClick={onClick}
      className={`px-8 py-4 ${style.bg} ${style.text} ${style.glow} ${style.hoverGlow} transition-all duration-300 relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 tracking-wider uppercase">{children}</span>
    </motion.button>
  );
}
