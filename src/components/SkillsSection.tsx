import { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cloud, 
  Database, 
  Search, 
  Sparkles, 
  Check, 
  ExternalLink,
  Info,
  SlidersHorizontal
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillItem } from '../types';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categoryIcons = {
    Code: Code2,
    Layers: Layers,
    Cloud: Cloud,
    Database: Database
  };

  const allSkills = SKILL_CATEGORIES.flatMap(cat => cat.skills);

  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    const matchingSkills = cat.skills.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.contexts.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || selectedCategory === cat.id;
      return matchesSearch && matchesCategory;
    });
    return { ...cat, skills: matchingSkills };
  }).filter(cat => cat.skills.length > 0);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'Advanced':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      default:
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Skills, Frameworks & Core Domains
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A comprehensive technical stack honed through enterprise software development, system architecture, and rigorous academic instruction.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill or context (e.g. Java, HSBC)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-2 border-b border-slate-800/80">
          <button
            id="skill-cat-all-btn"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            All Disciplines ({allSkills.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`skill-cat-${cat.id}-btn`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-10">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.iconName as keyof typeof categoryIcons] || Code2;
            
            return (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {category.skills.map((skill, sIdx) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    
                    return (
                      <div
                        key={sIdx}
                        id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        onClick={() => setSelectedSkill(isSelected ? null : skill)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                          isSelected
                            ? 'bg-slate-900 border-cyan-400 shadow-md shadow-cyan-950/40'
                            : 'bg-slate-900/50 hover:bg-slate-900/90 border-slate-800/80 hover:border-slate-700'
                        } flex flex-col justify-between space-y-3 group`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="font-semibold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                            {skill.highlight && (
                              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" title="Core Specialty" />
                            )}
                            <span>{skill.name}</span>
                          </div>
                          
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Context Footprint */}
                        <div className="space-y-1.5 pt-1 border-t border-slate-800/60 text-xs">
                          <div className="text-[11px] text-slate-400 flex items-center gap-1">
                            <span>Experience footprint:</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {skill.contexts.map((ctx, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono"
                              >
                                {ctx}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Inspector Box if clicked */}
        {selectedSkill && (
          <div className="mt-8 p-5 bg-gradient-to-r from-slate-900 to-slate-950 border border-cyan-500/40 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400">SELECTED SKILL:</span>
                <span className="font-bold text-white text-base">{selectedSkill.name}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getLevelColor(selectedSkill.level)}`}>
                  {selectedSkill.level}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Applied extensively in: {selectedSkill.contexts.join(' • ')}
              </p>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono"
            >
              Close Inspector
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
