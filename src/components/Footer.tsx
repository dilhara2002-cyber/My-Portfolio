import { Mail, Shield, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="relative border-t border-navy-500/30"
      style={{ background: 'linear-gradient(to bottom, #0a0f1e, #050c1a)' }}
    >
      <div className="section-divider" role="separator" />

      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Dilhara De Silva</p>
                <p className="text-xs text-slate-600 font-mono">Cybersecurity & Info Systems</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Cybersecurity Undergraduate | Information Systems Undergraduate — passionate about building secure and innovative technology solutions.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3" role="list" aria-label="Social links">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-navy-500/50 text-slate-500 hover:text-white hover:border-slate-500/50 hover:bg-white/5 transition-all duration-200 focus-ring"
                aria-label="GitHub profile"
                role="listitem"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-navy-500/50 text-slate-500 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/8 transition-all duration-200 focus-ring"
                aria-label="LinkedIn profile"
                role="listitem"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-navy-500/50 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/8 transition-all duration-200 focus-ring"
                aria-label="Send email"
                role="listitem"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href} role="listitem">
                  <button
                    onClick={() => scrollTo(link.href.replace('#', ''))}
                    className="text-sm text-slate-500 hover:text-blue-400 transition-colors text-left w-full focus-ring rounded"
                    aria-label={`Go to ${link.label} section`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact quick */}
          <div>
            <p className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-2"
                  aria-label={`Email ${personalInfo.email}`}
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="text-sm text-slate-500 hover:text-blue-400 transition-colors flex items-center gap-2"
                  aria-label={`Call ${personalInfo.phone}`}
                >
                  <span className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 text-xs" aria-hidden="true">📞</span>
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-sm text-slate-600 flex items-center gap-2">
                <span aria-hidden="true">📍</span>
                {personalInfo.location}
              </li>
            </ul>

            <div className="mt-5 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-emerald-500/20 bg-emerald-500/8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" aria-hidden="true" />
              <span className="text-xs text-emerald-400 font-mono">Open to Opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" role="separator" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-700 font-mono">
            © {year} Dilhara De Silva. All rights reserved.
          </p>
          <p className="text-xs text-slate-700 font-mono flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-blue-500/60" aria-hidden="true" /> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
