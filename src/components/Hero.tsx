import { ArrowRight, Mail, ChevronDown, Shield, Lock, Wifi } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import NetworkBackground from './ui/NetworkBackground';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050c1a 0%, #0a0f1e 50%, #0d1427 100%)' }}
    >
      {/* Animated network background */}
      <NetworkBackground />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" aria-hidden="true" />

      <div className="section-container relative z-10 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <div className="flex flex-col gap-6 animate-fade-in-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide border border-blue-500/25 text-blue-400 bg-blue-500/8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" aria-hidden="true" />
              Open to Opportunities
            </div>

            {/* Main heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                Dilhara{' '}
                <span className="gradient-text">De Silva</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-slate-400 font-medium leading-relaxed">
                Cybersecurity Undergraduate
                <span className="mx-2 text-blue-500/60">|</span>
                Information Systems Undergraduate
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base text-slate-400 leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="hero-view-projects-btn"
                onClick={() => scrollTo('projects')}
                className="btn-primary"
                aria-label="View my projects"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
                aria-label="Contact me"
              >
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs text-slate-600 font-mono tracking-wider uppercase">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-navy-500/50 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/8 transition-all duration-200 focus-ring"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-navy-500/50 text-slate-400 hover:text-white hover:border-slate-500/40 hover:bg-white/5 transition-all duration-200 focus-ring"
                  aria-label="GitHub profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-navy-500/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/8 transition-all duration-200 focus-ring"
                  aria-label="Send email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Security visual */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <SecurityVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="text-xs text-slate-600 font-mono">scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-600" aria-hidden="true" />
      </div>
    </section>
  );
}

function SecurityVisual() {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full border border-blue-500/15 animate-spin-slow"
        style={{
          background: 'conic-gradient(from 0deg, transparent 75%, rgba(59,130,246,0.15) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Middle ring */}
      <div
        className="absolute inset-8 rounded-full border border-cyan-500/20"
        style={{ animation: 'spin 12s linear infinite reverse' }}
        aria-hidden="true"
      />

      {/* Inner glow */}
      <div
        className="absolute inset-16 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.06) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Centre shield */}
      <div className="relative z-10 flex flex-col items-center gap-4 animate-float">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.1))',
            border: '1px solid rgba(59,130,246,0.3)',
            boxShadow: '0 0 30px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
          aria-hidden="true"
        >
          <Shield className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <p className="text-sm font-mono text-blue-400/70 tracking-wider">SECURE</p>
          <p className="text-xs text-slate-600 font-mono mt-0.5">Cyber ∙ Systems ∙ Tech</p>
        </div>
      </div>

      {/* Orbiting icons */}
      {[
        { Icon: Lock, color: 'text-cyan-400', delay: '0s', top: '10%', left: '50%' },
        { Icon: Wifi, color: 'text-blue-400', delay: '1s', top: '50%', right: '8%' },
        { Icon: Shield, color: 'text-blue-300', delay: '2s', bottom: '10%', left: '50%' },
      ].map(({ Icon, color, delay, ...pos }, i) => (
        <div
          key={i}
          className={`absolute w-9 h-9 rounded-xl flex items-center justify-center ${color} animate-float`}
          style={{
            ...pos,
            animationDelay: delay,
            background: 'rgba(13,20,39,0.8)',
            border: '1px solid rgba(59,130,246,0.2)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            transform: 'translate(-50%, -50%)',
          }}
          aria-hidden="true"
        >
          <Icon className="w-4 h-4" strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
}
