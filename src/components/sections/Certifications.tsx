import { certifications, achievements } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { useInquiry, type InquiryTarget } from '@/components/InquiryContext';
import { Award, BadgeCheck, Target, Briefcase, ChevronRight } from 'lucide-react';

export function Certifications() {
  const { openDetail } = useInquiry();

  const handleClick = (c: typeof certifications[number]) => {
    const target: InquiryTarget = {
      title: c.title,
      type: c.kind === 'internship' ? 'Internship Certificate' : 'Certificate',
      issuer: c.issuer,
      date: c.date,
      focus: c.focus,
    };
    openDetail(target);
  };

  return (
    <section id="certifications" className="relative py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Certifications"
          icon={BadgeCheck}
          title="Certifications|"
          description="Verified online certifications and internship completions — click any card for details."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <button
              key={`${c.title}-${c.issuer}`}
              onClick={() => handleClick(c)}
              className="reveal card group relative w-full cursor-pointer overflow-hidden p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-accent/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-accent/10 blur-2xl" />

              <div className="flex items-start justify-between">
                {c.kind === 'internship' ? (
                  <Briefcase className="h-7 w-7 text-brand-primary" />
                ) : (
                  <BadgeCheck className="h-7 w-7 text-brand-accent" />
                )}
                <ChevronRight className="h-4 w-4 text-brand-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </div>

              <h3 className="mt-3 font-display text-base font-bold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm font-medium text-brand-primary">{c.issuer}</p>
              <p className="mt-3 font-mono text-xs text-brand-muted">{c.date}</p>

              {c.kind === 'internship' && (
                <span className="mt-3 inline-block rounded-full bg-brand-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                  Internship
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-30" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Achievements"
          icon={Award}
          title="Achievements|"
          description="Problem-solving practice, measured in problems solved."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <div
              key={a.label}
              className="reveal card group relative flex items-center gap-5 overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-brand-primary/10 blur-3xl" />
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 text-brand-primary">
                <a.icon className="h-7 w-7" />
              </span>
              <div>
                <div className="font-display text-4xl font-extrabold leading-none text-gradient">
                  {a.value}
                </div>
                <p className="mt-1.5 text-sm font-medium text-brand-muted">{a.label}</p>
              </div>
              <Target className="ml-auto hidden h-6 w-6 text-brand-muted opacity-0 transition-opacity group-hover:opacity-100 sm:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
