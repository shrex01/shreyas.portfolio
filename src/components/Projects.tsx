import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Taskmaster (Jira Clone)',
      category: 'Full Stack Development',
      description: 'AI-powered interface design tool for creating adaptive user experiences.',
      mediaUrl: 'src/assets/videos/Taskmaster-ScreenRecording.mp4',
      mediaType: 'video',
      tags: ['Next.js', 'Appwrite', 'Typescript', 'TailwindCSS', 'Hono'],
      color: 'purple',
    },
    {
      title: 'Padosi (Apartment Complex Management & Security)',
      category: 'Full Stack Development',
      description: 'A cinematic portfolio experience with immersive 3D effects and smooth animations.',
      mediaUrl: 'src/assets/images/padosi.JPG',
      mediaType: 'image',
      tags: ['React', 'Javascript', 'Supabase'],
      color: 'cyan',
    },
    {
      title: 'Roofers Real Estate',
      category: 'Desktop App Development',
      description: 'Real estate property management software',
      mediaUrl: 'src/assets/images/roofers.png',
      mediaType: 'image',
      tags: ['VB.net', 'MySql'],
      color: 'magenta',
    },
    // {
    //   title: 'AI Chatbot',
    //   category: 'Development',
    //   description: 'Conversational AI assistant with natural language processing capabilities.',
    //   mediaUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    //   mediaType: 'image',
    //   tags: ['Python', 'OpenAI', 'NLP'],
    //   color: 'green',
    // },
  ];

  return (
    <section id="projects" ref={ref} className="relative min-h-screen py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-2 border border-purple-500/30 mb-6"
            whileHover={{ borderColor: 'rgba(168, 85, 247, 0.6)' }}
          >
            <span className="text-purple-500 tracking-widest uppercase text-sm">Selected Works</span>
          </motion.div>
          
          <div className="flex items-end justify-between">
            <h2 className="text-white max-w-2xl">
              Projects that push the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
                boundaries
              </span>
            </h2>
            
            <motion.button
              className="hidden md:block text-white/60 hover:text-white tracking-widest uppercase text-sm group"
              whileHover={{ x: 5 }}
            >
              View All
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-cyan-400/5 blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  );
}
