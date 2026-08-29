import { education } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-30" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Academic Background"
          icon={GraduationCap}
          title="Education|"
          description="My academic timeline, from school to university."
        />

        <ol className="mt-12 space-y-6">
          {education.map((e, i) => (
            <li
              key={`${e.school}-${e.period}`}
              className="reveal relative grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-8"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* period */}
              <div className="font-mono text-sm font-semibold text-brand-primary sm:text-right">
                {e.period}
              </div>

              {/* card with timeline dot */}
              <div className="relative pl-7 sm:pl-8">
                {/* line */}
                {i < education.length - 1 && (
                  <span className="absolute left-2 top-7 bottom-[-24px] w-px bg-gradient-to-b from-brand-primary/50 to-transparent sm:left-[7px]" />
                )}
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center sm:left-[-2px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-accent ring-4 ring-brand-accent/15" />
                </span>

                <div className="card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold leading-snug">{e.school}</h3>
                      <p className="mt-1 text-sm font-medium text-brand-muted">{e.degree}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
                        e.status === 'Ongoing'
                          ? 'bg-brand-primary/15 text-brand-primary'
                          : 'bg-brand-accent/15 text-brand-accent'
                      }`}
                    >
                      {e.status}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
