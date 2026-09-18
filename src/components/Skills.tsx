import { useState } from 'react';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { skillCategories } from '../data/portfolioData';

const categoryColors: Record<string, { active: string; bar: string }> = {
  blue:   { active: 'bg-blue-500/15 text-blue-300 border-blue-500/30',    bar: 'bg-gradient-to-r from-blue-600 to-blue-400' },
  cyan:   { active: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',    bar: 'bg-gradient-to-r from-cyan-600 to-cyan-400' },
  purple: { active: 'bg-purple-500/15 text-purple-300 border-purple-500/30', bar: 'bg-gradient-to-r from-purple-600 to-purple-400' },
  green:  { active: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', bar: 'bg-gradient-to-r from-emerald-600 to-emerald-400' },
};

// Summary tags shown in the "All Technologies" cloud
const allTags = [
  // Security
  'Penetration Testing', 'Vulnerability Assessment', 'Web Application Security',
  'Network Security', 'Security Risk Assessment', 'Traffic Analysis',
  'TLS/SSL Assessment', 'Reverse Engineering',
  // Tools
  'Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'OpenSSL', 'x64dbg', 'cURL',
  // Web Security
  'SQL Injection', 'Stored XSS', 'Path Traversal', 'Insecure File Upload', 'OWASP Top 10',
  // Systems
  'Kali Linux', 'Ubuntu', 'Windows', 'VMware', 'TCP/IP', 'DNS', 'DHCP', 'Bash',
  // Dev
  'Python', 'PHP', 'HTML/CSS', 'JavaScript', 'TypeScript', 'SQL', 'Git/GitHub',
  // Frameworks
  'OCTAVE Allegro', 'ISO/IEC 27005', 'NIST SP 800-30',
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const currentCategory = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];
  const colors = categoryColors[currentCategory.color];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, rgba(13,20,39,0.4) 0%, transparent 100%)' }}
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader
            label="Technical Skills"
            title="Skills & Expertise"
            subtitle="Technical skills developed through academic study, hands-on security labs, real-world projects, and independent learning."
          />
        </AnimatedSection>

        <div className="flex flex-col gap-8">
          {/* Category tabs */}
          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Skill categories">
              {skillCategories.map((cat) => {
                const isActive = cat.id === activeCategory;
                const c = categoryColors[cat.color];
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    id={`skills-tab-${cat.id}`}
                    aria-selected={isActive}
                    aria-controls={`skills-panel-${cat.id}`}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                      isActive
                        ? c.active
                        : 'text-slate-500 border-navy-500/30 bg-transparent hover:text-slate-300 hover:border-slate-600/40'
                    }`}
                  >
                    <span aria-hidden="true">{cat.icon}</span>
                    <span className="hidden sm:inline">{cat.title}</span>
                    <span className="sm:hidden">{cat.icon}</span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Skills panel */}
          <AnimatedSection delay={200}>
            <div
              role="tabpanel"
              id={`skills-panel-${currentCategory.id}`}
              aria-labelledby={`skills-tab-${currentCategory.id}`}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.active} border`}>
                  <span className="text-lg" aria-hidden="true">{currentCategory.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">{currentCategory.title}</h3>
                  <p className="text-xs text-slate-500 font-mono">{currentCategory.skills.length} skills</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {currentCategory.skills.map((skill, i) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-600 font-mono">{skill.level}%</span>
                    </div>
                    <div
                      className="h-1.5 bg-navy-600/60 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name}: ${skill.level}%`}
                    >
                      <div
                        className={`h-full rounded-full ${colors.bar} transition-all duration-700`}
                        style={{ width: `${skill.level}%`, transitionDelay: `${i * 55}ms` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 font-mono mt-6 pt-4 border-t border-navy-500/30">
                * Skill levels reflect academic study, lab experience, and practical project work as an undergraduate.
              </p>
            </div>
          </AnimatedSection>

          {/* All technologies cloud */}
          <AnimatedSection delay={300}>
            <div className="text-center">
              <p className="text-xs text-slate-600 font-mono mb-4 uppercase tracking-widest">
                All Technologies & Tools
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {allTags.map((tag) => (
                  <span key={tag} className="skill-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
