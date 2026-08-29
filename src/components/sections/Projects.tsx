import { projects } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';
import { useInquiry, type InquiryTarget } from '@/components/InquiryContext';
import { FolderGit2, Github, ExternalLink, Cpu, ChevronRight } from 'lucide-react';

function ProjectVisual({ icon: Icon, accent, title }: { icon: typeof Cpu; accent: string; title: string }) {
  return (
    <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${accent}`}>
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-40" />
      {/* decorative orbit rings */}
      <div className="absolute h-28 w-28 rounded-full border border-white/10" />
      <div className="absolute h-40 w-40 rounded-full border border-white/5" />
      <div className="absolute h-56 w-56 rounded-full border border-white/5" />

      {/* floating tech chips */}
      <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-[10px] text-brand-accent backdrop-blur-sm">
        &lt;/&gt;
      </span>
      <span className="absolute right-4 top-6 rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-[10px] text-brand-primary backdrop-blur-sm">
        AI
      </span>
      <span className="absolute bottom-4 right-6 rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-[10px] text-brand-accent2 backdrop-blur-sm">
        v1.0
      </span>

      <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-ink-950/60 text-brand-accent backdrop-blur-sm float-slow">
        <Icon className="h-8 w-8" />
      </div>
      <span className="sr-only">{title}</span>
    </div>
  );
}

export function Projects() {
  const { openDetail } = useInquiry();

  const handleClick = (p: typeof projects[number]) => {
    const target: InquiryTarget = {
      title: p.title,
      type: 'Project',
      description: p.description,
    };
    openDetail(target);
  };

  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          icon={FolderGit2}
          title="Things I've| built"
          description="Academic and personal projects from my CV — click any card to request details."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal card group flex cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-sky-950/40"
              style={{ transitionDelay: `${i * 90}ms` }}
              onClick={() => handleClick(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleClick(p);
                }
              }}
            >
              <ProjectVisual icon={p.icon} accent={p.accent} title={p.title} />

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-bold leading-snug">{p.title}</h3>
                  <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-brand-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip text-xs">{t}</span>
                  ))}
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                  {p.description}
                </p>

                <div className="mt-5 border-t border-brand-border pt-4">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-colors hover:text-brand-accent"
                    >
                      <Github className="h-4 w-4" /> View on GitHub
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-muted">
                      <Github className="h-4 w-4" /> Click to request details
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
