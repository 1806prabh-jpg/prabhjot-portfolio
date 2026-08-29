import type { LucideIcon } from 'lucide-react';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, icon: Icon, align = 'left' }: Props) {
  return (
    <div className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {eyebrow}
      </span>
      <h2 className="section-title mt-4">
        {title.split('|').map((part, i) =>
          i === 1 ? (
            <span key={i} className="text-gradient"> {part}</span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-brand-muted">{description}</p>
      )}
    </div>
  );
}
