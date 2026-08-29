import { contactLinks, profile } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Mail, ArrowUpRight, Heart, FileText, Globe2 } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-glow" />
      <div className="blob pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-sky-500/15" />
      <div className="blob pointer-events-none absolute right-1/4 top-40 h-72 w-72 rounded-full bg-teal-400/10" style={{ animationDelay: '-6s' }} />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Contact"
          icon={Mail}
          title="Let's| connect"
          description="Reach out for internships, collaboration or a quick chat."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* contact cards */}
          <div className="reveal grid gap-4 sm:grid-cols-2">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 text-brand-primary transition-colors group-hover:text-brand-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    {c.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-brand-text">{c.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-accent" />
              </a>
            ))}

            {profile.cvPath && (
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 text-brand-primary transition-colors group-hover:text-brand-accent">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">CV</p>
                  <p className="mt-0.5 truncate text-sm font-medium text-brand-text">View my CV</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-accent" />
              </a>
            )}

            <a
              href={profile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 text-brand-primary transition-colors group-hover:text-brand-accent">
                <Globe2 className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Portfolio</p>
                <p className="mt-0.5 truncate text-sm font-medium text-brand-text">Open my live portfolio</p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-accent" />
            </a>
          </div>

          {/* CTA card */}
          <div className="reveal card relative flex flex-col justify-center overflow-hidden p-7 sm:p-8" style={{ transitionDelay: '120ms' }}>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-primary/15 blur-3xl" />
            <h3 className="font-display text-xl font-bold">Open to internship opportunities</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              I'm a B.Tech AI/ML student actively seeking internships in AI/ML and full-stack
              development. If my profile fits what you're looking for, I'd love to hear from you.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-brand-border py-10">
      <div className="container-x">
        <div className="reveal flex flex-col items-center gap-4 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2"
          >
            <span className="font-display text-sm font-extrabold tracking-tight">
              Prabhjot<span className="text-gradient">.dev</span>
            </span>
          </button>

          <p className="max-w-md text-sm leading-relaxed text-brand-muted">
            Thank you for viewing my portfolio. This was created for my PEL 132 Intermediate
            Communication Skills-II CA1 assignment — a professional presentation of who I am, what
            I'm learning, and where I'm heading.
          </p>

          <div className="flex items-center gap-1.5 text-xs text-brand-muted">
            <span>© {year} {profile.name}</span>
            <span className="text-brand-border">·</span>
            <span className="inline-flex items-center gap-1">
              Built with <Heart className="h-3 w-3 fill-brand-primary text-brand-primary" /> &amp; React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
