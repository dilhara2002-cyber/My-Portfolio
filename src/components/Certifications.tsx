import { Award, Plus, ExternalLink } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const hasCertifications = certifications.length > 0;

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-padding relative"
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader
            label="Certifications"
            title="Certifications"
            subtitle="Professional certifications and credentials in cybersecurity, networking, and information technology."
          />
        </AnimatedSection>

        {hasCertifications ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.id} delay={i * 100}>
                <div className="glass-card-hover p-5 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0 text-lg">
                      {cert.badge || '🏅'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm leading-snug">{cert.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2 py-1 rounded-lg bg-navy-600/60 text-slate-400 border border-navy-500/30">
                      {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span className="px-2 py-1 rounded-lg bg-navy-600/60 text-slate-500 border border-navy-500/30">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-xs pl-0"
                      aria-label={`Verify ${cert.name} credential`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      Verify Credential
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={100}>
            <div className="max-w-2xl mx-auto">
              {/* Placeholder card */}
              <div className="glass-card p-8 text-center border border-dashed border-navy-500/50">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-400/60" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-slate-300 mb-2">Certifications Coming Soon</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                  Certifications will be added here as they are completed. Actively working towards industry-recognised certifications in cybersecurity.
                </p>
              </div>

              {/* Planned certifications */}
              <div className="mt-8">
                <h3 className="text-sm font-mono font-semibold text-slate-500 uppercase tracking-widest mb-4 text-center">
                  Planned / In Progress
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    'CompTIA Security+',
                    'CompTIA Network+',
                    'Google Cybersecurity Certificate',
                    'Cisco CCNA',
                    'AWS Cloud Practitioner',
                  ].map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-navy-500/50 text-slate-600 text-xs font-mono"
                    >
                      <Plus className="w-3 h-3 text-slate-700" aria-hidden="true" />
                      {cert}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-700 text-center mt-3 font-mono">* Planned targets, not yet completed</p>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
