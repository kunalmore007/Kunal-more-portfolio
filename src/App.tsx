import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { InteractiveLab } from './components/InteractiveLab';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { Terminal, FileText } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Top Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenTerminal={() => setIsTerminalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenTerminal={() => setIsTerminalOpen(true)} 
        />
        
        <AboutSection 
          onOpenTerminal={() => setIsTerminalOpen(true)} 
        />
        
        <ExperienceSection />
        
        <SkillsSection />
        
        <InteractiveLab />
        
        <EducationSection />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenTerminal={() => setIsTerminalOpen(true)} 
      />

      {/* Interactive Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <InteractiveTerminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }} 
      />

      {/* Floating Quick Action Widget */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 no-print">
        <button
          id="floating-terminal-btn"
          onClick={() => setIsTerminalOpen(true)}
          className="p-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 shadow-xl shadow-black/60 hover:scale-105 transition-all backdrop-blur-md"
          title="Launch Interactive CLI Terminal"
        >
          <Terminal className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
