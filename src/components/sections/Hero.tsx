import { ArrowDown, FolderGit2, MapPin, FileText } from 'lucide-react';
import { profile, heroStats, marqueeWords } from '@/data/portfolio';
import { DeveloperCodeCard } from '@/components/DeveloperCodeCard';

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 grid-glow" />
      <div className="blob pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-500/20" />
      <div className="blob pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-teal-400/15" style={{ animationDelay: '-5s' }} />
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-60" />

      <div className="container-x relative grid items-center gap-10 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-24">
        {/* left: text */}
        <div className="reveal">
          <span className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent" />
            </span>
            Available for internships
          </span>

          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="block">Prabhjot</span>
            <span className="text-gradient">Singh</span>
          </h1>

          <p className="mt-3 font-mono text-lg font-semibold text-brand-primary sm:text-xl">
            B.Tech AI/ML Student
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-brand-muted">
            <MapPin className="h-4 w-4 text-brand-accent" />
            {profile.location}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              <FolderGit2 className="h-4 w-4" /> View My Projects
            </button>
            {profile.cvPath && (
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FileText className="h-4 w-4" /> View CV
              </a>
            )}
          </div>

          {/* stats */}
          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="card p-3.5">
                <s.icon className="h-5 w-5 text-brand-accent" />
                <dt className="mt-2 font-display text-base font-bold leading-tight">{s.value}</dt>
                <dd className="text-[11px] leading-tight text-brand-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right: developer code card */}
        <div className="reveal relative mx-auto w-full max-w-xl lg:max-w-none" style={{ transitionDelay: '120ms' }}>
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-primary/25 via-transparent to-brand-accent/20 blur-2xl" />
          <DeveloperCodeCard className="relative" />
        </div>
      </div>

      {/* tech marquee */}
      <div className="relative border-y border-brand-border bg-white/[0.02] py-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="marquee flex shrink-0 items-center gap-8 pr-8">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className="flex items-center gap-3 font-mono text-sm font-medium text-brand-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x flex justify-center py-8">
        <button
          onClick={() => scrollTo('about')}
          className="group flex flex-col items-center gap-1 text-brand-muted transition-colors hover:text-brand-text"
          aria-label="Scroll to about"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
