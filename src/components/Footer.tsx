import { 
  ArrowUp, 
  Mail, 
  Linkedin, 
  Terminal, 
  FileText, 
  Code2, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export function Footer({ onOpenResume, onOpenTerminal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                  KM
                </div>
              </div>
              <span className="font-display font-bold text-slate-100 text-base">
                Kunal More
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Computer Science Teacher, Ex-HSBC Software Engineer, and Technical Mentor dedicated to engineering excellence and deep technical pedagogy.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-blue-400 border border-slate-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenTerminal}
                className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                title="Terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-slate-200 font-bold uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-cyan-300 transition-colors">
                  About & Core Pillars
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('experience')} className="hover:text-cyan-300 transition-colors">
                  Career Experience (HSBC & St. John)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('skills')} className="hover:text-cyan-300 transition-colors">
                  Technical Stack & Domains
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('lab')} className="hover:text-cyan-300 transition-colors">
                  Interactive CS Lab & Demos
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('education')} className="hover:text-cyan-300 transition-colors">
                  Education & Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Key Resources */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-slate-200 font-bold uppercase tracking-wider text-xs">
              Interactive Resources
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenResume}
                className="w-full p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left flex items-center justify-between text-slate-200 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Print-Ready PDF Resume</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                onClick={onOpenTerminal}
                className="w-full p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-left flex items-center justify-between text-slate-200 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Launch Interactive CLI Shell</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">v3.1</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div>
            © {new Date().getFullYear()} Kunal More. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Palghar • Pune • Mumbai, Maharashtra
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-mono">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
