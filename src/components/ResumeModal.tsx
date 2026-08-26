import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code2,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between no-print shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-display font-bold text-white">
              Official Resume Document
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              Verified LinkedIn Extract
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 font-sans space-y-8 print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black/30">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white print:text-black">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base sm:text-lg font-medium text-cyan-400 print:text-blue-700 mt-1">
                  Computer Science Teacher & Software Engineer
                </p>
                <div className="text-xs text-slate-400 print:text-gray-600 mt-1">
                  Pune Division / Palghar / Mumbai, Maharashtra, India
                </div>
              </div>

              {/* Contact coordinates */}
              <div className="space-y-1 text-xs font-mono text-slate-300 print:text-gray-800 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    linkedin.com/in/{PERSONAL_INFO.linkedinUsername}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                  <span>Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {PERSONAL_INFO.bioSummary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1">
              Experience
            </h2>

            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-white print:text-black">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-semibold text-cyan-400 print:text-blue-800">
                        {exp.organization} • <span className="text-slate-400 print:text-gray-600 font-normal">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-gray-700">
                      {exp.period} ({exp.duration})
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="pl-1">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1">
              Education
            </h2>

            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="text-sm font-bold text-white print:text-black">
                      {edu.institution}
                    </div>
                    <div className="text-xs font-mono text-slate-400 print:text-gray-700">
                      {edu.period}
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 print:text-gray-800">
                    {edu.degree} in {edu.field}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Top Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1">
                Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-300 print:text-gray-800">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.id} className="flex items-start gap-1.5">
                    <span className="text-cyan-400 print:text-black">•</span>
                    <div>
                      <strong className="text-slate-100 print:text-black">{cert.name}</strong>
                      <span className="text-slate-400 print:text-gray-600"> ({cert.issuer})</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-black border-b border-slate-800 print:border-black/20 pb-1">
                Top Skills & Technologies
              </h2>
              <div className="text-xs text-slate-300 print:text-gray-800 space-y-1.5 leading-relaxed">
                <div><strong>Languages:</strong> Java 8, Python, C/C++, JavaScript, PHP, SQL</div>
                <div><strong>Frameworks & APIs:</strong> Spring Boot, REST APIs, XAMPP Stack, Express</div>
                <div><strong>DevOps & Tools:</strong> AWS Cloud, Jenkins, Maven, Git, Linux</div>
                <div><strong>Specialties:</strong> Cryptography & Encryption, DSA, CBSE Curriculum, MySQL</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
