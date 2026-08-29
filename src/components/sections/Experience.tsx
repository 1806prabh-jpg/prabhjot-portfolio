import { internships } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-30" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Experience"
          icon={Briefcase}
          title="Internships|"
          description="Hands-on virtual internship experience from my CV."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {internships.map((job, i) => (
            <article
              key={`${job.role}-${job.org}`}
              className="reveal card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-primary/40 sm:p-7"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-primary/10 blur-2xl transition-opacity group-hover:opacity-80" />

              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 text-brand-primary">
                  <job.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-brand-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-accent" />
              </div>

              <h3 className="mt-4 font-display text-lg font-bold leading-snug">{job.role}</h3>
              <p className="mt-0.5 text-sm font-semibold text-brand-primary">{job.org}</p>

              <div className="mt-2 flex items-center gap-2 text-xs font-medium text-brand-muted">
                <Calendar className="h-3.5 w-3.5" />
                {job.period}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                {job.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="chip text-xs">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
