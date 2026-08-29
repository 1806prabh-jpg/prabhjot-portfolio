import { strengths, valueProps, careerGoal, goals } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Zap, Target, HandHeart, Flag } from 'lucide-react';

export function Strengths() {
  return (
    <section id="strengths" className="relative py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Strengths"
          icon={Zap}
          title="My strengths|"
          description="What I bring to a team or project, grounded in my CV."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <div
              key={s.title}
              className="reveal card group p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-primary/40"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 text-brand-primary transition-colors group-hover:text-brand-accent">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-display text-sm font-bold">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Goals() {
  return (
    <section id="goals" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-30" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Goals"
          icon={Flag}
          title="My goals|"
          description="Realistic objectives for where I am as a B.Tech AI/ML student."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {goals.map((g, i) => (
            <div
              key={g.title}
              className="reveal card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-primary/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-primary/10 blur-3xl" />
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 text-brand-primary transition-colors group-hover:text-brand-accent">
                  <g.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold leading-snug">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{g.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareerGoal() {
  return (
    <section id="career-goal" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-30" />
      <div className="container-x relative">
        <div className="reveal relative overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-brand-surface via-brand-surface2 to-brand-surface p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="eyebrow">
              <Target className="h-3.5 w-3.5" /> Career Goal
            </span>
            <h2 className="section-title mt-4">Where I'm| heading</h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-brand-text">
              {careerGoal.short}
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              {careerGoal.long}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValueProposition() {
  return (
    <section id="value" className="relative py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Value Proposition"
          icon={HandHeart}
          title="What I| contribute"
          description="The value I can offer an organisation as a student developer."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v, i) => (
            <div
              key={v.title}
              className="reveal card group p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-accent/40"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-accent/15 to-brand-accent2/10 text-brand-accent transition-colors group-hover:text-brand-accent2">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-display text-sm font-bold">{v.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
