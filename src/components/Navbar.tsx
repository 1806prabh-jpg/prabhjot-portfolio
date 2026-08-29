import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navItems, profile } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Navbar() {
  const ids = navItems.map((n) => n.id);
  const { active, scrolled, progress } = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-brand-border bg-ink-950/85 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between">
          <button
            onClick={() => go('home')}
            className="group flex items-center gap-2.5"
            aria-label="Go to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent text-[#062028] shadow-lg shadow-sky-500/20 transition-transform group-hover:scale-105">
              <Terminal className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-sm font-extrabold tracking-tight">
              Prabhjot<span className="text-gradient">.singh</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'text-brand-text'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button onClick={() => go('contact')} className="btn-primary !py-2 !px-4 text-xs">
              Get in touch
            </button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-brand-border bg-white/5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* scroll progress */}
        <div className="h-0.5 w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-accent2 transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[80%] border-l border-brand-border bg-ink-900 p-6 pt-20 transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'bg-white/5 text-brand-text'
                    : 'text-brand-muted hover:bg-white/5 hover:text-brand-text'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-6 text-xs text-brand-muted">
            <p>{profile.name}</p>
            <p>{profile.role}</p>
          </div>
        </div>
      </div>
    </>
  );
}
