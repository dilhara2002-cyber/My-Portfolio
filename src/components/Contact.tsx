import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons';
import AnimatedSection from './ui/AnimatedSection';
import SectionHeader from './ui/SectionHeader';
import { personalInfo } from '../data/portfolioData';
import type { ContactForm } from '../types/github';

const initialForm: ContactForm = { name: '', email: '', subject: '', message: '' };
type FormErrors = Partial<Record<keyof ContactForm, string>>;

function validate(form: ContactForm): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
  if (!form.subject.trim()) errors.subject = 'Please enter a subject.';
  if (!form.message.trim()) errors.message = 'Please enter your message.';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof ContactForm, boolean>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: validate({ ...form, [name]: value })[name as keyof ContactForm] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(form)[name as keyof ContactForm] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Open mailto as a fallback (no backend configured)
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailto, '_blank');
    setSubmitted(true);
    setForm(initialForm);
    setTouched({});
    setTimeout(() => setSubmitted(false), 6000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, display: personalInfo.email },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}`, display: personalInfo.phone },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'dilhara-de-silva', href: personalInfo.linkedin, display: 'linkedin.com/in/dilhara-de-silva' },
    { icon: GithubIcon, label: 'GitHub', value: personalInfo.githubUsername, href: personalInfo.github, display: `github.com/${personalInfo.githubUsername}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: undefined, display: personalInfo.location },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(13,20,39,0.4) 100%)' }}
    >
      <div className="section-container">
        <AnimatedSection>
          <SectionHeader
            label="Contact"
            title="Let's Connect"
            subtitle="Interested in discussing cybersecurity, technology, projects, or opportunities? Feel free to get in touch."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info — 2 cols */}
          <AnimatedSection direction="left" className="lg:col-span-2 flex flex-col gap-4">
            <div className="glass-card p-6 flex flex-col gap-5">
              <h3 className="text-sm font-mono font-semibold text-slate-400 uppercase tracking-widest">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-4" role="list">
                {contactInfo.map(({ icon: Icon, label, href, display }) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-400" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-600 font-mono">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm text-slate-300 hover:text-blue-400 transition-colors break-all"
                          aria-label={`${label}: ${display}`}
                        >
                          {display}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-300">{display}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability notice */}
            <div className="glass-card p-4 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" aria-hidden="true" />
                <span className="text-xs font-semibold text-emerald-400">Available for Opportunities</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Open to cybersecurity internships, IT opportunities, and networking with professionals in the industry.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact form — 3 cols */}
          <AnimatedSection direction="right" delay={150} className="lg:col-span-3">
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-semibold text-white mb-6">Send a Message</h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/25 bg-emerald-500/8 flex items-start gap-3" role="alert">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-emerald-300 font-medium">Message prepared!</p>
                    <p className="text-xs text-emerald-400/70 mt-0.5">
                      Your email client should have opened. If not, please email directly at {personalInfo.email}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="flex flex-col gap-4">
                  {/* Name & Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs text-slate-500 font-mono mb-1.5">
                        Name <span className="text-blue-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-field ${errors.name ? 'border-red-500/50 focus:border-red-500/70' : ''}`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-red-400 mt-1 flex items-center gap-1" role="alert">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs text-slate-500 font-mono mb-1.5">
                        Email <span className="text-blue-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-field ${errors.email ? 'border-red-500/50 focus:border-red-500/70' : ''}`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-400 mt-1 flex items-center gap-1" role="alert">
                          <AlertCircle className="w-3 h-3" aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs text-slate-500 font-mono mb-1.5">
                      Subject <span className="text-blue-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What is this regarding?"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field ${errors.subject ? 'border-red-500/50 focus:border-red-500/70' : ''}`}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-xs text-red-400 mt-1 flex items-center gap-1" role="alert">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs text-slate-500 font-mono mb-1.5">
                      Message <span className="text-blue-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Your message here..."
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`input-field resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500/70' : ''}`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-400 mt-1 flex items-center gap-1" role="alert">
                        <AlertCircle className="w-3 h-3" aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Notice */}
                  <p className="text-xs text-slate-600 font-mono">
                    * This form opens your email client. No backend is configured.
                  </p>

                  {/* Submit */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="btn-primary w-full justify-center mt-2"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
