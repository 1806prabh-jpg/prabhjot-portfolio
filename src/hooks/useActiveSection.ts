import { useEffect, useState } from 'react';

/**
 * Tracks the currently active section id for nav highlighting,
 * and reports scroll progress + whether the page is scrolled.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '');
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, top / height) : 0);

      const offset = window.innerHeight * 0.35;
      let current = ids[0] ?? '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);

  return { active, scrolled, progress };
}
