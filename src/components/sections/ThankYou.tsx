import { profile } from '@/data/portfolio';
import { ArrowUp, Sparkles } from 'lucide-react';
import { DeveloperCodeCard } from '@/components/DeveloperCodeCard';

export function ThankYou() {
  const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="thank-you" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-glow" />
      <div className="blob pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-sky-500/15" />
      <div className="blob pointer-events-none absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-teal-400/10" style={{ animationDelay: '-6s' }} />
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-40" />

      <div className="container-x relative">
        <div className="reveal grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* message */}
          <div className="text-center lg:text-left">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" /> Thank You
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              <span className="block">Thank you for taking the time</span>
              <span className="block">to explore my portfolio.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-muted sm:text-xl">
              Let's connect, collaborate, and build something meaningful together.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <button onClick={backToTop} className="btn-primary">
                <ArrowUp className="h-4 w-4" /> Back to Top
              </button>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                Get in touch
              </a>
            </div>
          </div>

          {/* developer code card */}
          <div className="reveal relative mx-auto w-full max-w-xl lg:max-w-none" style={{ transitionDelay: '120ms' }}>
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-primary/25 via-transparent to-brand-accent/25 blur-3xl" />
            <DeveloperCodeCard className="relative" />
          </div>
        </div>
      </div>
    </section>
  );
}
