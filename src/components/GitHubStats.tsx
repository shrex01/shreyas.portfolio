import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, GitCommit, GitPullRequest, Star, GitFork, Activity } from 'lucide-react';
import { GitHubCalendar } from "react-github-calendar";
export function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      label: 'Total Contributions',
      value: '1,247',
      icon: Activity,
      color: 'cyan',
      change: '+12% this month',
    },
    {
      label: 'Commits',
      value: '892',
      icon: GitCommit,
      color: 'purple',
      change: '+8% this month',
    },
    {
      label: 'Pull Requests',
      value: '156',
      icon: GitPullRequest,
      color: 'magenta',
      change: '+15% this month',
    },
    {
      label: 'Stars Received',
      value: '2.4K',
      icon: Star,
      color: 'green',
      change: '+23% this month',
    },
    {
      label: 'Repositories',
      value: '67',
      icon: GitFork,
      color: 'cyan',
      change: '+3 this month',
    },
    {
      label: 'Followers',
      value: '428',
      icon: Github,
      color: 'purple',
      change: '+18% this month',
    },
  ];

  const colorClasses = {
    cyan: {
      text: 'text-cyan-400',
      border: 'border-cyan-400/30',
      glow: 'group-hover:shadow-[0_0_40px_rgba(0,240,255,0.3)]',
      bg: 'bg-cyan-400/5',
    },
    purple: {
      text: 'text-purple-500',
      border: 'border-purple-500/30',
      glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]',
      bg: 'bg-purple-500/5',
    },
    magenta: {
      text: 'text-fuchsia-500',
      border: 'border-fuchsia-500/30',
      glow: 'group-hover:shadow-[0_0_40px_rgba(255,0,255,0.3)]',
      bg: 'bg-fuchsia-500/5',
    },
    green: {
      text: 'text-green-400',
      border: 'border-green-400/30',
      glow: 'group-hover:shadow-[0_0_40px_rgba(57,255,20,0.3)]',
      bg: 'bg-green-400/5',
    },
  };

  const activityData = [
    { day: 'Mon', commits: 12 },
    { day: 'Tue', commits: 18 },
    { day: 'Wed', commits: 25 },
    { day: 'Thu', commits: 15 },
    { day: 'Fri', commits: 22 },
    { day: 'Sat', commits: 8 },
    { day: 'Sun', commits: 5 },
  ];

  const maxCommits = Math.max(...activityData.map((d) => d.commits));

  return (
    <section id="github" ref={ref} className="relative py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-2 border border-cyan-400/30 mb-6"
            whileHover={{ borderColor: 'rgba(0, 240, 255, 0.6)' }}
          >
            <span className="text-cyan-400 tracking-widest uppercase text-sm">GitHub Activity</span>
          </motion.div>
          <h2 className="text-white max-w-3xl mx-auto mb-4">
            shrex01{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Contributions
            </span>
          </h2>
          <p className="text-white/60 tracking-wide max-w-2xl mx-auto">
            Actively contributing to the developer community with consistent commits and meaningful contributions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = colorClasses[stat.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={stat.label}
                className={`group relative p-6 border ${colors.border} bg-white/[0.02] backdrop-blur-sm transition-all duration-500 ${colors.glow}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-10 h-10 mb-4 ${colors.text}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-full h-full" />
                </motion.div>

                <div className={`text-3xl mb-1 ${colors.text}`} style={{ fontWeight: 700 }}>
                  {stat.value}
                </div>

                <div className="text-white/60 text-xs tracking-wide mb-2">{stat.label}</div>

                <div className={`text-xs ${colors.text}`}>{stat.change}</div>

                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/40 transition-colors" />

                <motion.div
                  className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity -z-10`}
                />
              </motion.div>
            );
          })}
        </div> */}

        {/* Activity Chart */}
        <motion.a
              href="https://github.com/shrex01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <GitHubCalendar
                username="shrex01"
                blockSize={18}
                blockMargin={3}
                color="#22c55e"
                fontSize={16}
              />
              <span className="text-sm tracking-wider">View Profile</span>
            </motion.a>
      </div>

      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-cyan-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-1/2 h-1/3 bg-purple-500/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
