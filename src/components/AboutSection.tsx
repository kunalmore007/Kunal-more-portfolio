import { 
  Server, 
  GraduationCap, 
  ShieldCheck, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Briefcase, 
  Award,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenTerminal: () => void;
}

export function AboutSection({ onOpenTerminal }: AboutSectionProps) {
  const pillarIcons = {
    Server: Server,
    GraduationCap: GraduationCap,
    ShieldCheck: ShieldCheck,
    Code2: Code2
  };

  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEER & EDUCATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Bridging Production Engineering & CS Pedagogy
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            With a Computer Science engineering foundation from Pune Institute of Computer Technology (PICT) and enterprise banking experience at HSBC, I bring real-world software architecture into computer science education.
          </p>
        </div>

        {/* Narrative & Profile Overview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Narrative Box */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-5 backdrop-blur-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-white flex items-center gap-2">
                <span>About My Journey</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.bioSummary}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether implementing scalable REST APIs for Marks & Spencer’s banking systems at <strong className="text-cyan-300">HSBC</strong>, or training CBSE students and engineering undergraduates in <strong className="text-cyan-300">Data Structures, Algorithms, Python, and Cryptography</strong>, my goal is always deep conceptual clarity and practical excellence.
              </p>
            </div>

            {/* Quick Badges in Narrative */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hands-on Code Laboratory Instruction</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Enterprise Spring Boot & AWS Experience</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Certified in Advanced SQL & Java 8</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Active Cyber Security Club Faculty Lead</span>
              </div>
            </div>
          </div>

          {/* Right Highlights & Snapshot */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                // Quick Snapshot
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start justify-between py-2 border-b border-slate-800/70">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span>Current Role</span>
                  </span>
                  <span className="text-right text-slate-200 font-medium">CS Teacher @ St. John Intl</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/70">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span>Alma Mater</span>
                  </span>
                  <span className="text-right text-slate-200 font-medium">PICT Pune (B.E. CS)</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/70">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span>Industry Track</span>
                  </span>
                  <span className="text-right text-slate-200 font-medium">Ex-HSBC (Banking Tech)</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/70">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Base Location</span>
                  </span>
                  <span className="text-right text-slate-200 font-medium">Palghar / Pune / Mumbai, IN</span>
                </div>
              </div>
            </div>

            <button
              id="about-open-terminal-btn"
              onClick={onOpenTerminal}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 text-xs font-mono text-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Run <code className="text-cyan-300 font-bold">whoami</code> in Terminal</span>
            </button>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Core Pillars of Expertise
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              The four foundational areas where I deliver maximum value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {PERSONAL_INFO.pillars.map((pillar, index) => {
              const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons] || Code2;
              return (
                <div 
                  key={index}
                  className="bg-slate-900/40 hover:bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 rounded-xl p-5 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-display font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
