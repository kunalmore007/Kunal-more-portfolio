import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Copy, 
  Check, 
  Terminal as TerminalIcon, 
  Building2, 
  GraduationCap, 
  Award, 
  MapPin, 
  ShieldCheck, 
  Code2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export function Hero({ onOpenResume, onOpenTerminal }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const rotatingRoles = [
    "Computer Science Teacher (Classes XI & XII)",
    "Ex-HSBC Software Engineer (Banking APIs)",
    "Cybersecurity & Cryptography Lead",
    "DSA & Technical Mentorship Faculty",
    "Full-Stack Web & Python Trainer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [rotatingRoles.length]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients & Mesh Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-200">Open to Tech & Educational Opportunities</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 font-mono text-[11px] flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Maharashtra, India
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Kunal More</span>
              </h1>
              
              {/* Dynamic Animated Subtitle */}
              <div className="h-10 sm:h-12 flex items-center">
                <div className="text-lg sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">&gt;</span>
                  <span className="inline-block transition-all duration-300 font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800 text-sm sm:text-lg">
                    {rotatingRoles[roleIndex]}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Intro Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              A dynamic computer science professional with <strong className="text-white font-semibold">03+ years of experience</strong> blending enterprise software engineering at <strong className="text-cyan-300 font-semibold">HSBC</strong> with high-impact secondary & higher education pedagogy at <strong className="text-cyan-300 font-semibold">St. John International School</strong> and <strong className="text-cyan-300 font-semibold">Compufield</strong>.
            </p>

            {/* Key Quick Highlight Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Ex-HSBC (Spring Boot & AWS)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>B.E. Computer Science, PICT Pune</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Cybersecurity Club Lead</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>SQL & Java 8 Certified</span>
              </div>
            </div>

            {/* CTAs & Quick Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                id="hero-explore-exp-btn"
                onClick={() => scrollTo('experience')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center gap-2 group"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-cyan-400/60 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>

              <button
                id="hero-copy-email-btn"
                onClick={copyEmail}
                className="px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-mono transition-all flex items-center gap-2"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-sans font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
                    <span className="sm:hidden">Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 max-w-xl">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left">
                <div className="text-2xl sm:text-3xl font-display font-bold text-cyan-400">03+</div>
                <div className="text-xs text-slate-400 font-medium">Years Experience</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left">
                <div className="text-2xl sm:text-3xl font-display font-bold text-blue-400">350+</div>
                <div className="text-xs text-slate-400 font-medium">Students Mentored</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-left">
                <div className="text-2xl sm:text-3xl font-display font-bold text-purple-400">15+</div>
                <div className="text-xs text-slate-400 font-medium">Tech Skills & Tools</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Console / Visual Profile Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl group">
              
              {/* Window Header / Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">kunal_more_profile.ts</span>
                </div>
                <button
                  id="hero-open-interactive-terminal-btn"
                  onClick={onOpenTerminal}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                >
                  <TerminalIcon className="w-3 h-3" />
                  <span>Launch CLI</span>
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 space-y-3">
                <div className="text-slate-500 italic">// Senior CS Educator & Backend Software Engineer</div>
                <div>
                  <span className="text-purple-400">interface</span> <span className="text-amber-300">SoftwareProfessional</span> {'{'}
                  <div className="pl-4 text-slate-400">
                    name: <span className="text-emerald-300">string</span>;<br />
                    education: <span className="text-emerald-300">string</span>;<br />
                    enterpriseExp: <span className="text-emerald-300">string</span>;<br />
                    currentFocus: <span className="text-emerald-300">string</span>;<br />
                    coreStack: <span className="text-emerald-300">string[]</span>;<br />
                  </div>
                  {'}'}
                </div>

                <div className="pt-1">
                  <span className="text-purple-400">const</span> <span className="text-cyan-300">kunalMore</span>: <span className="text-amber-300">SoftwareProfessional</span> = {'{'}
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-slate-400">name:</span> <span className="text-emerald-300">"Kunal More"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">education:</span> <span className="text-emerald-300">"B.E. Computer Science (PICT Pune)"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">enterpriseExp:</span> <span className="text-emerald-300">"HSBC Software Engineer (Spring Boot / AWS)"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">currentFocus:</span> <span className="text-emerald-300">"CS Teacher & Cyber Security Club Faculty Lead"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">coreStack:</span> [
                      <div className="pl-4 grid grid-cols-2 gap-x-2 text-cyan-200">
                        <span>"Java 8 / Spring Boot",</span>
                        <span>"Python & Data Analysis",</span>
                        <span>"MySQL & Relational DB",</span>
                        <span>"DSA & Problem Solving",</span>
                        <span>"REST APIs & Jenkins",</span>
                        <span>"Cybersecurity & Cryptography"</span>
                      </div>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">passion:</span> <span className="text-amber-300">() =&gt; "Building robust software & mentoring the next generation of engineers"</span>
                    </div>
                  </div>
                  {'};'}
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    Available for collaborations
                  </span>
                  <a 
                    href={PERSONAL_INFO.linkedin}
                    target="_blank" 
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>linkedin/in/kunalpmore</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

              {/* Bottom Quick Bar inside card */}
              <div className="px-5 py-3 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between">
                <button
                  id="hero-jump-to-skills-btn"
                  onClick={() => scrollTo('skills')}
                  className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inspect Tech Stack</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
                <button
                  id="hero-jump-to-lab-btn"
                  onClick={() => scrollTo('lab')}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Try CS Labs</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
