import { skillGroups } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { Cpu } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          icon={Cpu}
          title="What I work| with"
          description="Categorised by area — no inflated proficiency scores, just the tools I genuinely use."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="reveal card group p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-primary/40"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-accent/10 text-brand-primary transition-colors group-hover:text-brand-accent">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold">{group.category}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* note card */}
          <div className="reveal card flex flex-col justify-center gap-2 p-6 sm:col-span-2 lg:col-span-1" style={{ transitionDelay: `${skillGroups.length * 70}ms` }}>
            <h3 className="font-display text-base font-bold text-brand-accent">Always learning</h3>
            <p className="text-sm leading-relaxed text-brand-muted">
              I'm a student actively building these skills through coursework, projects and
              internships. I prefer showing real work over scoring myself with percentages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
