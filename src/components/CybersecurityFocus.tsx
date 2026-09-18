import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { cyberFocusAreas } from '../data/portfolioData';

export default function CybersecurityFocus() {
  return (
    <section
      id="cyber-focus"
      aria-labelledby="cyber-focus-heading"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 50%, transparent 100%)' }}
    >
      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <AnimatedSection>
          <SectionHeader
            label="Focus Areas"
            title="Cybersecurity Focus"
            subtitle="Areas of cybersecurity that I am actively learning and developing expertise in as part of my academic and personal development."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cyberFocusAreas.map((area, i) => (
            <AnimatedSection key={area.id} delay={i * 60}>
              <div className="glass-card-hover p-5 flex flex-col gap-3 h-full group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-blue-500/20 bg-blue-500/8 group-hover:border-blue-500/40 group-hover:bg-blue-500/15 transition-all duration-300"
                  aria-hidden="true"
                >
                  {area.icon}
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="font-semibold text-white text-sm">{area.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">{area.description}</p>
                </div>
                <div className="flex items-center gap-1.5 mt-auto pt-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400/50 animate-pulse-slow" aria-hidden="true" />
                  <span className="text-xs text-slate-600 font-mono">Area of Interest</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <p className="text-center text-xs text-slate-600 mt-8 font-mono">
            * These represent areas of learning and interest, not professional expertise claims.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
