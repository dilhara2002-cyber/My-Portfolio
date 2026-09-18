import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { additionalWork } from '../data/portfolioData';

export default function AdditionalWork() {
  return (
    <section
      id="additional-work"
      aria-labelledby="additional-work-heading"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, rgba(13,20,39,0.3) 0%, transparent 100%)' }}
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader
            label="Additional Work"
            title="Additional Technical Work"
            subtitle="Research, infrastructure work, and technical writing alongside core cybersecurity projects."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {additionalWork.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 120}>
              <div className="glass-card-hover p-6 flex flex-col gap-4 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-blue-500/20 bg-blue-500/8"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                <ul className="flex flex-col gap-2 flex-1" role="list">
                  {item.items.map((point) => (
                    <li
                      key={point}
                      className="text-xs text-slate-400 leading-relaxed flex gap-2"
                    >
                      <span className="text-blue-500/60 mt-0.5 flex-shrink-0" aria-hidden="true">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
