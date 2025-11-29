import { motion, useScroll, useTransform } from 'motion/react';
import { GlowButton } from './GlowButton';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import resumePDF from '../assets/docs/ShreyasResume.pdf';
import profileImage from '../assets/images/profile-headshot.png';
export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-8"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-12 lg:pt-0">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Glitch text effect container */}
            <div className="relative mb-8">
              <motion.div
                className="tracking-tight mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                <motion.div
                  className="block text-white uppercase"
                  style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.03em' }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  SHREYAS
                </motion.div>
                <motion.div
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 uppercase"
                  style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.03em' }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  UDAY
                </motion.div>
              </motion.div>

              {/* Animated accent line */}
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent lg:mx-0 mx-auto"
                style={{ width: '60%' }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>

            <motion.p
              className="text-white/60 max-w-2xl mb-8 tracking-wide lg:mx-0 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
               Hi! I'm Shreyas. A Frontend Developer with hands-on experience through building high-performance, scalable, and responsive web solutions. 
            </motion.p>

            {/* Location */}
            <motion.div
              className="flex items-center gap-2 text-white/40 mb-8 lg:justify-start justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <MapPin className="w-4 h-4" />
              <span className="tracking-wide text-sm">Bengaluru, India</span>
            </motion.div>

            <motion.div
              className="flex gap-6 lg:justify-start justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <GlowButton variant="cyan" onClick={scrollToProjects}>
                View Work
              </GlowButton>
              <motion.a
                href={resumePDF}
                download
                className="px-8 py-4 border border-white/20 text-white hover:border-white/40 transition-all tracking-wider uppercase"
                whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
              </motion.a>
              <motion.button
                className="px-8 py-4 border border-white/20 text-white hover:border-white/40 transition-all tracking-wider uppercase"
                whileHover={{ scale: 1.05, borderColor: 'rgba(0, 240, 255, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Right side - Profile photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative w-80 h-123 lg:w-80 lg:h-123">
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500 opacity-50 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Profile image container */}
              <motion.div
                className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              {/* Corner accents */}
              {/* <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-purple-500" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-fuchsia-500" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-green-400" /> */}
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
