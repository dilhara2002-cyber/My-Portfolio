import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { careerGoalsContent } from '../data/portfolioData';

export default function CareerGoals() {
  return (
    <section
      id="career-goals"
      aria-labelledby="career-goals-heading"
      className="section-padding relative"
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader
            label="Career Goals"
            title="Career Goals"
            subtitle={careerGoalsContent.headline}
          />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Bio content */}
          <AnimatedSection direction="left">
            <div className="flex flex-col gap-5">
              {careerGoalsContent.body.map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Goals list */}
          <AnimatedSection direction="right" delay={150}>
            <div className="glass-card p-6 flex flex-col gap-4">
              <h3 className="font-semibold text-white text-sm font-mono uppercase tracking-widest mb-2">
                Goals & Aspirations
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {careerGoalsContent.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div
                      className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-base group-hover:border-blue-500/40 group-hover:bg-blue-500/15 transition-all duration-200"
                      aria-hidden="true"
                    >
                      {goal.icon}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed pt-1">{goal.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
