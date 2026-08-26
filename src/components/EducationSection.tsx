import { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export function EducationSection() {
  const [activeCertCategory, setActiveCertCategory] = useState<string>('all');

  const certCategories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'database', label: 'SQL & Databases' },
    { id: 'programming', label: 'Java & Programming' },
    { id: 'problem-solving', label: 'Problem Solving & DSA' },
    { id: 'pedagogy', label: 'Teaching & Training' },
  ];

  const filteredCerts = CERTIFICATIONS.filter((cert) => {
    if (activeCertCategory === 'all') return true;
    return cert.category === activeCertCategory;
  });

  return (
    <section id="education" className="py-20 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education & Verified Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal Computer Science engineering degrees from prestigious institutions in Maharashtra paired with verified industry credentials.
          </p>
        </div>

        {/* Education Degree Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-cyan-400 font-mono text-xs font-semibold">
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.institution}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    {edu.degree} in <span className="text-cyan-400">{edu.field}</span>
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/70 border-l-2 border-cyan-400 text-xs text-slate-300 font-medium italic">
                  {edu.highlight}
                </div>

                <div className="space-y-2 pt-2">
                  {edu.description.map((desc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Verified Degree Record</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-400" />
                <span>Verified Certifications & Accreditations</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Industry-recognized assessments validating expertise in SQL, Java 8, and Problem Solving.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
              {certCategories.map((cat) => (
                <button
                  key={cat.id}
                  id={`cert-filter-${cat.id}-btn`}
                  onClick={() => setActiveCertCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCertCategory === cat.id
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                className="bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-xl p-5 backdrop-blur-sm transition-all group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800 uppercase">
                      {cert.category}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.name}
                    </h4>
                    <div className="text-xs text-cyan-400/90 font-mono mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400">
                    Topics covered:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
