import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  tags: string[];
  color: string;
  index: number;
}

export function ProjectCard({ title, category, description, mediaUrl, mediaType, tags, color, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-pointer"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{ transform: 'translateZ(-20px)' }}
      />

      {/* Card */}
      <div className="relative border border-white/10 bg-black overflow-hidden">
        {/* Media - Image or Video */}
        <div className="relative h-52 overflow-hidden">
          {mediaType === 'video' ? (
            <motion.video
              src={mediaUrl}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            <motion.img
              src={mediaUrl}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Category badge */}
          <motion.div
            className="absolute top-3 left-3 px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            
          </motion.div>

          {/* Hover arrow */}
          <motion.div
            className="absolute top-3 right-3 w-8 h-8 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1, rotate: 45 }}
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>
        {/* Content */}
        <div className="relative p-4">
          <h4 className="text-white mb-1 group-hover:text-cyan-400 transition-colors">{title}</h4>
          <p className="text-white/50 text-xs tracking-wide line-clamp-2 mb-3">{description}</p>

        <span className="text-cyan-400 text-xs tracking-widest uppercase">{category}</span>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 text-xs text-white/40 border border-white/10 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
