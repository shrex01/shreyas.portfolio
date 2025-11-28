import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, Instagram } from 'lucide-react';
import { GlowButton } from './GlowButton';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/shrex01' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/shreyasuday/' },
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/not_shrex.irl/' },
    { icon: Mail, label: 'Email', url: 'mailto:shreyasu123@gmail.com' },
  ];

  return (
    <section id="contact" ref={ref} className="relative min-h-screen py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 border border-green-400/30 mb-6"
              whileHover={{ borderColor: 'rgba(57, 255, 20, 0.6)' }}
            >
              <span className="text-green-400 tracking-widest uppercase text-sm">Get In Touch</span>
            </motion.div>

            <h2 className="text-white mb-8">
              Let's create something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                extraordinary
              </span>
            </h2>

            <p className="text-white/60 mb-12 tracking-wide max-w-lg">
              Have a project in mind? Whether it's a bold new idea or an existing challenge,
              I'm always excited to collaborate on innovative digital experiences.
            </p>

            {/* Social links */}
            <div className="space-y-4">
              <p className="text-white/40 tracking-widest uppercase text-sm mb-6">Connect</p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      className="group flex items-center gap-3 p-4 border border-white/10 hover:border-white/20 bg-white/[0.02] transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, boxShadow: '0 0 30px rgba(57, 255, 20, 0.1)' }}
                    >
                      <Icon className="w-5 h-5 text-green-400" />
                      <span className="text-white/60 group-hover:text-white transition-colors tracking-wide">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="relative"
                  whileTap={{ scale: 0.99 }}
                >
                  <motion.input
                    type="text"
                    placeholder="Name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none transition-all tracking-wide"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      borderColor: focusedField === 'name' ? 'rgba(0, 240, 255, 0.6)' : 'rgba(255, 255, 255, 0.2)',
                    }}
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      className="absolute -inset-1 bg-cyan-400/20 blur-xl -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>

                <motion.div
                  className="relative"
                  whileTap={{ scale: 0.99 }}
                >
                  <motion.input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-purple-500 focus:outline-none transition-all tracking-wide"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      borderColor: focusedField === 'email' ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255, 255, 255, 0.2)',
                    }}
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      className="absolute -inset-1 bg-purple-500/20 blur-xl -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              </div>

              <motion.div
                className="relative"
                whileTap={{ scale: 0.99 }}
              >
                <motion.input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-fuchsia-500 focus:outline-none transition-all tracking-wide"
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    borderColor: focusedField === 'subject' ? 'rgba(255, 0, 255, 0.6)' : 'rgba(255, 255, 255, 0.2)',
                  }}
                />
                {focusedField === 'subject' && (
                  <motion.div
                    className="absolute -inset-1 bg-fuchsia-500/20 blur-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>

              <motion.div
                className="relative"
                whileTap={{ scale: 0.99 }}
              >
                <motion.textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-green-400 focus:outline-none transition-all tracking-wide resize-none"
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    borderColor: focusedField === 'message' ? 'rgba(57, 255, 20, 0.6)' : 'rgba(255, 255, 255, 0.2)',
                  }}
                />
                {focusedField === 'message' && (
                  <motion.div
                    className="absolute -inset-1 bg-green-400/20 blur-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GlowButton variant="green" className="w-full flex items-center justify-center gap-2">
                  Send Message
                  {/* <Send className="w-4 h-4" /> */}
                </GlowButton>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-32 pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/40 tracking-wide text-sm">
              © 2024 Portfolio. Crafted with precision.
            </div>
            
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-white/40 hover:text-white transition-colors text-sm tracking-wide"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.footer>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-green-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-cyan-400/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
