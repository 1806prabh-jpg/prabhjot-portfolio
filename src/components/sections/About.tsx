import { aboutHighlights, profile } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { UserRound } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          icon={UserRound}
          title="Who I am|"
          description="A brief, honest introduction based on my CV."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="reveal card p-6 sm:p-7">
            <p className="text-base leading-relaxed text-brand-muted sm:text-lg">
              I'm <span className="font-semibold text-brand-text">{profile.name}</span>, a{' '}
              <span className="font-semibold text-brand-text">B.Tech AI/ML student</span> at
              Lovely Professional University with a strong interest in{' '}
              <span className="font-semibold text-brand-primary">artificial intelligence</span>,{' '}
              <span className="font-semibold text-brand-primary">machine learning</span> and
              modern <span className="font-semibold text-brand-accent">web development</span>.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              I enjoy turning concepts from coursework into working tools — whether that's an
              AI-powered resume analyzer, a spam classifier, or a full-stack web app. My focus is on{' '}
              <span className="font-semibold text-brand-text">practical solutions</span>,{' '}
              <span className="font-semibold text-brand-text">problem-solving</span> and
              continuously learning new skills.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              I'm early in my journey — my experience so far is two virtual internships and several
              academic projects. I'm realistic about where I am and committed to growing from here.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((h, i) => (
              <div
                key={h.label}
                className="reveal card group p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 text-brand-primary transition-colors group-hover:text-brand-accent">
                  <h.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display text-base font-bold">{h.label}</h3>
                <p className="mt-1 text-sm leading-snug text-brand-muted">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
