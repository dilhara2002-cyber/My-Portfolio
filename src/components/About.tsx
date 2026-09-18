import { MapPin, Mail, Download, User, Shield, Database } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { personalInfo, aboutContent } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding relative">
      {/* Subtle dot bg */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="About Me"
            title="Who I Am"
            subtitle="An undergraduate passionate about cybersecurity, information systems, and building secure technology solutions."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Profile card — 2 cols */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="glass-card p-6 flex flex-col gap-6">
              {/* Avatar placeholder */}
              <div className="flex flex-col items-center gap-4">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.15))',
                    border: '2px solid rgba(59,130,246,0.25)',
                  }}
                  aria-hidden="true"
                >
                  <User className="w-12 h-12 text-blue-400" strokeWidth={1} />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-white text-lg">{personalInfo.name}</h3>
                  <p className="text-slate-500 text-xs mt-1 font-mono">Cybersecurity & Info Systems</p>
                </div>
              </div>

              {/* Divider */}
              <div className="section-divider" role="separator" />

              {/* Info list */}
              <ul className="flex flex-col gap-3" role="list">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Focus</p>
                    <p className="text-sm text-slate-200">Cybersecurity & InfoSys</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Location</p>
                    <p className="text-sm text-slate-200">{personalInfo.location}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Database className="w-4 h-4 text-purple-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono">Status</p>
                    <p className="text-sm text-emerald-400 font-medium">Open to Opportunities</p>
                  </div>
                </li>
              </ul>

              {/* Divider */}
              <div className="section-divider" role="separator" />

              {/* CV download */}
              <div className="text-center">
                <p className="text-xs text-slate-600 mb-3 font-mono">
                  CV available upon request
                </p>
                <button
                  id="download-cv-btn"
                  className="btn-secondary w-full justify-center"
                  aria-label="Download CV (contact for access)"
                  title="Please contact Dilhara directly to request a copy of her CV"
                  onClick={() => {
                    window.location.href = `mailto:${personalInfo.email}?subject=CV Request&body=Hi Dilhara, I would like to request a copy of your CV.`;
                  }}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download CV
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Bio text — 3 cols */}
          <AnimatedSection direction="right" delay={150} className="lg:col-span-3 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {aboutContent.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key focus areas */}
            <div>
              <h3 className="text-sm font-semibold text-slate-300 mb-4 font-mono uppercase tracking-widest">
                Key Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Cybersecurity',
                  'Network Security',
                  'Information Security',
                  'Secure System Design',
                  'Information Systems',
                  'Database Management',
                  'Problem Solving',
                  'Continuous Learning',
                  'Practical Projects',
                ].map((tag) => (
                  <span key={tag} className="skill-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '2', label: 'Universities', color: 'text-blue-400' },
                { value: 'CS + IS', label: 'Dual Focus', color: 'text-cyan-400' },
                { value: 'LK', label: 'Sri Lanka', color: 'text-purple-400' },
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className="glass-card p-4 text-center"
                >
                  <p className={`text-xl font-bold font-mono ${color}`}>{value}</p>
                  <p className="text-xs text-slate-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
