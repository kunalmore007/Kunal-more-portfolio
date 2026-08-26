import { useState, useRef, useEffect, ReactNode } from 'react';
import { 
  Terminal as TerminalIcon, 
  X, 
  Maximize2, 
  Minimize2, 
  Copy, 
  Check, 
  Play,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: ReactNode;
  timestamp: string;
}

export function InteractiveTerminal({ isOpen, onClose, onOpenResume }: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'init',
      timestamp: new Date().toLocaleTimeString(),
      output: (
        <div className="space-y-2 text-xs">
          <div className="text-cyan-400 font-bold">
            ⚡ Kunal More Interactive Shell [Version 3.1.0-prod]
          </div>
          <div className="text-slate-400">
            Type <span className="text-amber-300 font-bold">help</span> to view all available commands, or click the quick command chips below.
          </div>
        </div>
      )
    }
  ]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    const lowerCmd = rawCmd.toLowerCase();
    const time = new Date().toLocaleTimeString();

    let resultOutput: ReactNode = null;

    switch (lowerCmd) {
      case 'help':
        resultOutput = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-cyan-300 font-bold mb-1">Available System Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 font-mono">
              <div><span className="text-amber-300 font-bold">bio</span> : Summary & Core Pillars</div>
              <div><span className="text-amber-300 font-bold">experience</span> : All 4 career roles</div>
              <div><span className="text-amber-300 font-bold">hsbc</span> : Enterprise banking role details</div>
              <div><span className="text-amber-300 font-bold">skills</span> : Full technical skill catalog</div>
              <div><span className="text-amber-300 font-bold">education</span> : PICT & MSBTE degrees</div>
              <div><span className="text-amber-300 font-bold">certs</span> : Verified certifications</div>
              <div><span className="text-amber-300 font-bold">resume</span> : Open formatted resume modal</div>
              <div><span className="text-amber-300 font-bold">contact</span> : Email & LinkedIn coordinates</div>
              <div><span className="text-amber-300 font-bold">hire</span> : Quick hire evaluation summary</div>
              <div><span className="text-amber-300 font-bold">clear</span> : Clear console buffer</div>
            </div>
          </div>
        );
        break;

      case 'bio':
      case 'whoami':
      case 'about':
        resultOutput = (
          <div className="space-y-2 text-xs text-slate-300">
            <div className="text-cyan-300 font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</div>
            <p className="leading-relaxed">{PERSONAL_INFO.bioSummary}</p>
            <div className="text-slate-400">
              Location: <span className="text-slate-200">{PERSONAL_INFO.location}</span> | Email: <span className="text-cyan-300">{PERSONAL_INFO.email}</span>
            </div>
          </div>
        );
        break;

      case 'experience':
      case 'exp':
        resultOutput = (
          <div className="space-y-3 text-xs">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-cyan-300 font-bold">
                  <span>{exp.role} @ {exp.organization}</span>
                  <span className="text-slate-400 font-mono text-[10px]">{exp.period}</span>
                </div>
                <div className="text-slate-400 text-[11px]">{exp.location}</div>
                <p className="text-slate-300">{exp.summary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'hsbc':
        resultOutput = (
          <div className="p-2 rounded bg-slate-900 border border-slate-800 space-y-1.5 text-xs text-slate-300">
            <div className="text-blue-400 font-bold">HSBC — Trainee Software Engineer (Marks & Spencer Project)</div>
            <div className="text-slate-400">Pune, Maharashtra • Aug 2021 - Dec 2021</div>
            <p>Spearheaded REST API development for banking features with Java, Spring Boot, Maven, Jenkins, and AWS cloud technologies.</p>
            <div className="text-cyan-300 font-mono text-[11px]">Tech: Java, Spring Boot, AWS, Jenkins, Maven, REST APIs</div>
          </div>
        );
        break;

      case 'skills':
      case 'tech':
        resultOutput = (
          <div className="space-y-2 text-xs">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-cyan-400 font-bold">{cat.title}:</div>
                <div className="flex flex-wrap gap-1 text-slate-300">
                  {cat.skills.map((s, si) => (
                    <span key={si} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px]">
                      {s.name} ({s.level})
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
      case 'edu':
        resultOutput = (
          <div className="space-y-2 text-xs">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800 space-y-0.5">
                <div className="text-cyan-300 font-bold">{edu.institution}</div>
                <div className="text-slate-200">{edu.degree} in {edu.field} ({edu.period})</div>
                <div className="text-slate-400 text-[11px]">{edu.highlight}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        resultOutput = (
          <div className="space-y-1.5 text-xs">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="flex items-center justify-between p-1.5 rounded bg-slate-900 border border-slate-800">
                <span className="text-purple-300 font-semibold">{cert.name}</span>
                <span className="text-slate-400 font-mono text-[10px]">{cert.issuer}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        resultOutput = (
          <div className="space-y-1 text-xs text-slate-300">
            <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 underline">{PERSONAL_INFO.email}</a></div>
            <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{PERSONAL_INFO.linkedin}</a></div>
            <div>Location: <span className="text-emerald-300">{PERSONAL_INFO.location}</span></div>
          </div>
        );
        break;

      case 'resume':
      case 'cv':
        onOpenResume();
        resultOutput = (
          <div className="text-emerald-400 text-xs font-bold">
            ✓ Opened formatted PDF resume viewer modal.
          </div>
        );
        break;

      case 'hire':
      case 'sudo hire-kunal':
        resultOutput = (
          <div className="p-3 rounded bg-emerald-950/40 border border-emerald-500/40 space-y-1.5 text-xs text-emerald-200">
            <div className="font-bold text-emerald-300">🎉 Candidate Match Evaluation: Exceptional!</div>
            <div>• 3+ Years of dual production software engineering & technical instruction</div>
            <div>• Solid Computer Science foundation from PICT Pune</div>
            <div>• Proficient in Java, Spring Boot, Python, SQL, REST APIs, Cryptography</div>
            <div>• Ready to contact: <span className="font-bold underline">{PERSONAL_INFO.email}</span></div>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      default:
        resultOutput = (
          <div className="text-rose-400 text-xs">
            Command not recognized: '<span className="font-bold">{rawCmd}</span>'. Type <span className="text-cyan-300 font-bold">help</span> to view commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        command: rawCmd,
        timestamp: time,
        output: resultOutput
      }
    ]);
    setInputVal('');
  };

  const executeQuick = (cmd: string) => {
    handleCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className={`w-full ${
          isMaximized ? 'h-[92vh] max-w-6xl' : 'max-w-3xl h-[560px]'
        } bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-200`}
      >
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <button 
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity" 
                title="Close"
              />
              <button 
                onClick={() => setIsMaximized(!isMaximized)}
                className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity" 
                title="Toggle Maximize"
              />
              <button 
                onClick={() => setHistory([])}
                className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity" 
                title="Clear"
              />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 ml-2">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>kunal-more@workstation:~</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-rose-400 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Pills Bar */}
        <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono shrink-0">
          <span className="text-slate-500 text-[10px] shrink-0">Quick run:</span>
          {['help', 'bio', 'experience', 'hsbc', 'skills', 'education', 'certs', 'resume', 'hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeQuick(cmd)}
              className="px-2 py-0.5 rounded bg-slate-950 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-colors shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 font-mono text-xs text-slate-200">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400 font-bold">kunal@portfolio:~$</span>
                <span className="text-amber-300 font-bold">{item.command}</span>
                <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4 border-l border-slate-800 py-1">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2 shrink-0"
        >
          <span className="text-cyan-400 font-mono font-bold text-xs">kunal@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type command (e.g. 'skills', 'experience', 'help')..."
            className="flex-1 bg-transparent font-mono text-xs text-slate-100 placeholder-slate-600 focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-cyan-500 text-slate-950 font-bold rounded text-xs font-mono hover:bg-cyan-400 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
