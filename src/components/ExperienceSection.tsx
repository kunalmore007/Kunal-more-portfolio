import { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export function ExperienceSection() {
  const [filter, setFilter] = useState<'all' | 'industry' | 'teaching'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER TRAJECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Work Experience & Impact
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A track record spanning enterprise banking software engineering at HSBC to leading CS departments and programming institutes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              id="exp-filter-all-btn"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Roles ({EXPERIENCES.length})
            </button>
            <button
              id="exp-filter-teaching-btn"
              onClick={() => setFilter('teaching')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'teaching'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Teaching & Mentorship ({EXPERIENCES.filter(e => e.category === 'teaching').length})
            </button>
            <button
              id="exp-filter-industry-btn"
              onClick={() => setFilter('industry')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === 'industry'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Enterprise Engineering ({EXPERIENCES.filter(e => e.category === 'industry').length})
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {filteredExperiences.map((exp: ExperienceItem, idx: number) => {
            const isExpanded = expandedId === exp.id || true; // Default expanded for great rich readability
            
            return (
              <div 
                key={exp.id}
                id={`experience-card-${exp.id}`}
                className={`relative rounded-2xl border transition-all ${
                  exp.current 
                    ? 'bg-slate-900/80 border-cyan-500/40 shadow-lg shadow-cyan-950/20' 
                    : 'bg-slate-900/40 hover:bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
                } p-6 sm:p-8 backdrop-blur-sm group`}
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-slate-800/70">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
                          exp.current
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                            : exp.category === 'industry'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                            : 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                        }`}>
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 font-medium">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Building2 className="w-4 h-4" />
                        <strong className="font-semibold">{exp.organization}</strong>
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Period & Duration */}
                  <div className="flex lg:flex-col items-center lg:items-end justify-between gap-1 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-200 font-mono bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-slate-400 text-[11px] font-mono">
                      Duration: {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Summary Quote */}
                <div className="pt-4 pb-3">
                  <p className="text-slate-300 text-sm italic bg-slate-950/40 p-3 rounded-lg border-l-2 border-cyan-400">
                    "{exp.summary}"
                  </p>
                </div>

                {/* Bullets List */}
                <div className="space-y-2.5 py-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used Chips */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Skills applied:</span>
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 text-xs font-mono transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
