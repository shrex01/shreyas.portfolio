import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GitHubStats } from './components/GitHubStats';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      {/* Animated background layer */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <GitHubStats />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}