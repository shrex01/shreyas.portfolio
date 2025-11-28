import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlays */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 240, 255, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 80% 30%, rgba(255, 0, 255, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-cyan-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.8)',
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Glitch lines */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
        animate={{
          scaleX: [0, 1, 0],
          x: ['-100%', '0%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
        animate={{
          scaleX: [0, 1, 0],
          x: ['100%', '0%', '-100%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 7,
          ease: 'easeInOut',
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
