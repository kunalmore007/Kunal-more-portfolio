import { useEffect, useState } from "react";
import { 
  X, 
  Printer, 
  Mail, 
  Linkedin, 
  MapPin, 
  CheckCircle2,
  Info
} from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [showPrintHint, setShowPrintHint] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = "Kunal_More_Resume";
    
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.title = originalTitle;
      }, 1000);
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto resume-modal-overlay">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto resume-modal-card">
        
        {/* Modal Top Bar (Hidden in Print) */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 no-print shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-display font-bold text-white">
              Official Resume Document
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <CheckCircle2 className="w-3 h-3 text-cyan-400" />
              Verified Credentials
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
              A4 Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPrintHint(!showPrintHint)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              title="Print & PDF Tips"
            >
              <Info className="w-4 h-4" />
            </button>
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Helpful Tip Notice for clean PDF saving */}
        {showPrintHint && (
          <div className="bg-cyan-950/40 border-b border-cyan-500/20 px-5 py-2.5 text-[11px] text-cyan-200 flex items-start justify-between gap-2 no-print">
            <div>
              <strong>PDF Tip:</strong> In the print preview, select <strong>"Save as PDF"</strong> under Destination. In <em>More settings</em>, enable <strong>"Background graphics"</strong> for best visuals.
            </div>
            <button 
              onClick={() => setShowPrintHint(false)}
              className="text-cyan-400 hover:text-white text-xs px-1"
            >
              ✕
            </button>
          </div>
        )}

        {/* Printable Resume Canvas */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 font-sans space-y-7 print:bg-white print:text-slate-900 print:p-0 print:space-y-6 resume-modal-content">
          
          {/* Header */}
          <header className="border-b border-slate-800 pb-5 print:border-slate-300 print:pb-4 resume-header">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white print:text-black tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-cyan-400 print:text-sky-800 mt-1">
                  Computer Science Teacher & Software Engineer
                </p>
                <div className="text-xs text-slate-400 print:text-slate-600 mt-0.5">
                  Ex-HSBC Software Engineer • CBSE XI-XII CS Pedagogue • B.E. Computer Engineering (PICT Pune)
                </div>
              </div>

              {/* Contact coordinates */}
              <div className="space-y-1 text-xs font-mono text-slate-300 print:text-slate-800 sm:text-right print:space-y-0.5">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-slate-700 shrink-0" />
                  <a href={"mailto:" + PERSONAL_INFO.email} className="hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400 print:text-slate-700 shrink-0" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    linkedin.com/in/{PERSONAL_INFO.linkedinUsername}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-slate-700 shrink-0" />
                  <span>Palghar • Pune • Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="space-y-2 resume-section-item">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800 print:border-slate-300 pb-1 resume-section-title">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-300 print:text-slate-800 leading-relaxed text-justify">
              {PERSONAL_INFO.bioSummary}
            </p>
          </section>

          {/* Work Experience */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800 print:border-slate-300 pb-1 resume-section-title">
              Professional Experience
            </h2>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5 resume-section-item">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-semibold text-cyan-400 print:text-sky-800">
                        {exp.organization} • <span className="text-slate-400 print:text-slate-600 font-normal">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-slate-700 shrink-0">
                      {exp.period} ({exp.duration})
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="pt-1 text-[11px] text-slate-400 print:text-slate-600 font-mono">
                      <span className="font-semibold text-slate-300 print:text-slate-800">Tech & Skills:</span> {exp.skills.join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800 print:border-slate-300 pb-1 resume-section-title">
              Education & Academic Background
            </h2>

            <div className="space-y-2.5">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-0.5 resume-section-item">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <div className="text-sm font-bold text-white print:text-black">
                      {edu.institution}
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-slate-700 shrink-0">
                      {edu.period}
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 print:text-slate-800 flex items-center justify-between">
                    <span>{edu.degree} in {edu.field}</span>
                    {edu.highlight && (
                      <span className="font-mono text-cyan-400 print:text-slate-700 text-[11px] font-medium">
                        {edu.highlight}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Core Technical Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
            <section className="space-y-2 resume-section-item">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800 print:border-slate-300 pb-1 resume-section-title">
                Verified Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-300 print:text-slate-800">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.id} className="flex items-start gap-1.5">
                    <span className="text-cyan-400 print:text-sky-800 font-bold">•</span>
                    <div>
                      <strong className="text-slate-100 print:text-black">{cert.name}</strong>
                      <span className="text-slate-400 print:text-slate-600 text-[11px]"> ({cert.issuer})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2 resume-section-item">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-slate-900 border-b border-slate-800 print:border-slate-300 pb-1 resume-section-title">
                Technical Matrix & Core Domains
              </h2>
              <div className="text-xs text-slate-300 print:text-slate-800 space-y-1.5 leading-relaxed">
                <div>
                  <strong className="text-slate-200 print:text-black">Languages:</strong> Java 8, Python, C/C++, JavaScript, PHP, SQL
                </div>
                <div>
                  <strong className="text-slate-200 print:text-black">Backend & APIs:</strong> Spring Boot, REST APIs, Microservices, XAMPP
                </div>
                <div>
                  <strong className="text-slate-200 print:text-black">DevOps & Cloud:</strong> AWS Cloud, Jenkins, Maven, Git, Linux
                </div>
                <div>
                  <strong className="text-slate-200 print:text-black">CS Specialities:</strong> Cryptography & Encryption, Data Structures, CBSE Curriculum
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
