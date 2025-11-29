import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import HackerRankCertification from '../assets/images/certificates/hackerRankfrontendReact.png';
import NamasteJsCertification from '../assets/images/certificates/namastejavascript.jpg';
import JspidersReactJsCertification from '../assets/images/certificates/jspidersReact.jpg';
import JspidersJavaFullstackCertification from '../assets/images/certificates/jspidersJavafullstack.jpg';
import NiCTCertification from '../assets/images/certificates/Nict.jpg';
export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certificates = [
    {
      title: 'Frontend Developer (React)',
      issuer: 'HackerRank Certification',
      date: '2025',
      imageUrl: HackerRankCertification,
      color: 'cyan',
    },
    {
      title: 'Namaste JavaScript',
      issuer: 'NamasteDev.com',
      date: '2024',
      imageUrl: NamasteJsCertification,
      color: 'purple',
    },
    {
      title: 'Jspiders React Certification',
      issuer: 'Jspiders Institute Bengaluru',
      date: '2023',
      imageUrl: JspidersReactJsCertification,
      color: 'magenta',
    },
    {
      title: 'Jspiders Java Fullstack Certification',
      issuer: 'Jspiders Institute Bengaluru',
      date: '2023',
      imageUrl: JspidersJavaFullstackCertification,
      color: 'green',
    },
    {
      title: 'Post Graduation Diploma in Advance Programming Language',
      issuer: 'NICT Computer Education pvt ltd',
      date: '2019',
      imageUrl: NiCTCertification,
      color: 'green',
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
    magenta: {
      text: 'text-fuchsia-500',
      border: 'border-fuchsia-500/30',
      glow: 'shadow-[0_0_40px_rgba(255,0,255,0.3)]',
    },
    green: {
      text: 'text-green-400',
      border: 'border-green-400/30',
      glow: 'shadow-[0_0_40px_rgba(57,255,20,0.3)]',
    },
  };

  return (
    <section id="achievements" ref={ref} className="relative py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-2 border border-green-400/30 mb-6"
            whileHover={{ borderColor: 'rgba(57, 255, 20, 0.6)' }}
          >
            <span className="text-green-400 tracking-widest uppercase text-sm">Achievements & Badges</span>
          </motion.div>
          <h2 className="text-white max-w-3xl mx-auto">
            Recognized for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              excellence
            </span>
          </h2>
        </motion.div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => {
            const colors = colorClasses[cert.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={cert.title}
                className={`group relative overflow-hidden border border-white/10 bg-black hover:border-white/20 transition-all duration-500`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Certificate image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                  {/* Badge */}
                  <motion.div
                    className={`absolute top-3 right-3 p-1.5 bg-black/50 backdrop-blur-md border ${colors.border}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Award className={`w-5 h-5 ${colors.text}`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-4 bg-black">
                  <h4 className="text-white mb-2 text-sm group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-white/50 text-xs tracking-wide">{cert.issuer}</p>
                    <span className={`text-xs tracking-widest uppercase ${colors.text}`}>{cert.date}</span>
                  </div>

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl -z-10 ${colors.glow} transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-green-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-1/2 h-1/3 bg-cyan-400/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
