import { BookOpen, ChevronRight, Calendar } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { education } from '../data/portfolioData';

const colorMap = {
  blue: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    dot: 'bg-blue-500',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
    glow: 'hover:border-blue-500/40 hover:shadow-glow-blue',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
  cyan: {
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    dot: 'bg-cyan-500',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
    glow: 'hover:border-cyan-500/40 hover:shadow-glow-cyan',
    statusColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
  purple: {
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    dot: 'bg-purple-500',
    badge: 'bg-purple-500/15 text-purple-300 border-purple-500/20',
    glow: 'hover:border-purple-500/40',
    statusColor: 'text-slate-400 bg-slate-400/10 border-slate-400/20',
  },
};

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(13,20,39,0.4) 100%)' }}
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader
            label="Education"
            title="Academic Background"
            subtitle="Pursuing a dual undergraduate focus across two leading Sri Lankan universities, building deep expertise in both cybersecurity and information systems."
          />
        </AnimatedSection>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(59,130,246,0.4), rgba(6,182,212,0.3), rgba(168,85,247,0.3), transparent)' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {education.map((edu, idx) => {
              const colors = colorMap[edu.color];
              return (
                <AnimatedSection key={edu.id} direction="left" delay={idx * 120}>
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex flex-col items-center flex-shrink-0 pt-6" aria-hidden="true">
                      <div className={`w-3 h-3 rounded-full ${colors.dot} shadow-lg border-2 border-navy-900 relative z-10`} />
                    </div>

                    {/* Card */}
                    <div className={`flex-1 glass-card-hover p-6 border ${colors.border} ${colors.glow} transition-all duration-300`}>
                      {/* Header row */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0 border ${colors.border} text-xl`}
                          aria-hidden="true">
                          {edu.logo}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${colors.badge}`}>
                              {edu.shortName}
                            </span>
                            <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${colors.statusColor}`}>
                              {edu.status}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-white leading-snug">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-slate-500 mt-0.5">{edu.institution}</p>
                          {edu.period && (
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <Calendar className={`w-3.5 h-3.5 ${colors.text}`} aria-hidden="true" />
                              <span className={`text-xs font-mono ${colors.text} opacity-80`}>{edu.period}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {edu.description}
                      </p>

                      {/* Topics */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className={`w-3.5 h-3.5 ${colors.text}`} aria-hidden="true" />
                          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Key Areas</span>
                        </div>
                        <ul className="flex flex-wrap gap-2" role="list">
                          {edu.topics.map((topic) => (
                            <li key={topic}>
                              <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border ${colors.badge} font-mono`}>
                                <ChevronRight className="w-3 h-3" aria-hidden="true" />
                                {topic}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
