import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, AlertCircle, X } from 'lucide-react';
import { useInquiry } from './InquiryContext';

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'message', string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUEST_OPTIONS = [
  'Project details',
  'Source code',
  'Project demonstration',
  'Collaboration',
  'Similar project',
  'Project discussion',
  'Other',
] as const;

export function InquiryModals() {
  const { modal, close, openRequest } = useInquiry();

  if (!modal) return null;
  const { target } = modal;

  return (
    <ModalShell onClose={close}>
      {modal.mode === 'detail' ? (
        <DetailContent
          target={target}
          onRequest={() => openRequest(target)}
        />
      ) : (
        <RequestForm target={target} onClose={close} />
      )}
    </ModalShell>
  );
}

function ModalShell({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease]" onClick={onClose} />
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-brand-border bg-ink-800 shadow-2xl animate-[modalIn_0.3s_cubic-bezier(0.22,1,0.36,1)]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-lg border border-brand-border bg-white/5 text-brand-muted transition-colors hover:text-brand-text"
          aria-label="Close"
        >
          <X className="h-4.5 w-4.5" />
        </button>
        {children}
      </div>
    </div>
  );
}

function DetailContent({
  target,
  onRequest,
}: {
  target: ReturnType<typeof useInquiry>['modal'] extends null ? never : NonNullable<ReturnType<typeof useInquiry>['modal']>['target'];
  onRequest: () => void;
}) {
  return (
    <div className="p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-primary/10 blur-3xl" />

      <span className="eyebrow">
        {target.type === 'Project' ? 'Project Details' : target.type === 'Internship Certificate' ? 'Internship Details' : 'Certificate Details'}
      </span>

      <h3 className="mt-4 font-display text-xl font-bold leading-snug">{target.title}</h3>

      <dl className="mt-5 space-y-3.5">
        {target.issuer && (
          <Row label="Organization" value={target.issuer} />
        )}
        {target.date && (
          <Row label="Duration / Date" value={target.date} />
        )}
        {target.focus && (
          <Row label="Focus" value={target.focus} />
        )}
        {target.description && (
          <Row label="Description" value={target.description} />
        )}
      </dl>

      <div className="mt-7 border-t border-brand-border pt-5">
        <p className="text-sm text-brand-muted">
          {target.type === 'Project'
            ? `Interested in this project? Send a request and I'll get back to you.`
            : `Want to know more? Request details and I'll get back to you.`}
        </p>
        <button onClick={onRequest} className="btn-primary mt-4 w-full">
          <Send className="h-4 w-4" /> Request Details
        </button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs font-semibold uppercase tracking-wider text-brand-muted">{label}</dt>
      <dd className="text-sm leading-relaxed text-brand-text">{value}</dd>
    </div>
  );
}

function RequestForm({
  target,
  onClose,
}: {
  target: ReturnType<typeof useInquiry>['modal'] extends null ? never : NonNullable<ReturnType<typeof useInquiry>['modal']>['target'];
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const validate = (): boolean => {
    const e: Errors = {};
    if (!name.trim()) e.name = 'Full name is required';
    if (!email.trim()) e.email = 'Email address is required';
    else if (!EMAIL_RE.test(email.trim())) e.email = 'Please enter a valid email address';
    if (!phone.trim()) e.phone = 'Phone number is required';
    if (!message.trim()) e.message = 'Please tell me what you would like to know or request';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setServerError('');
    if (!validate()) return;

    setStatus('submitting');
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(`${supabaseUrl}/functions/v1/submit-inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorName: name.trim(),
          visitorEmail: email.trim(),
          visitorPhone: phone.trim(),
          company: company.trim() || undefined,
          itemTitle: target.title,
          itemType: target.type,
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setServerError((err as Error).message || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-accent/15 text-brand-accent">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-5 font-display text-lg font-bold">Request sent!</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          Thank you for your request! Your message has been received. I'll get back to you soon.
        </p>
        <button onClick={onClose} className="btn-ghost mt-6 w-full">
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
      <span className="eyebrow">Send a Request</span>
      <h3 className="mt-4 font-display text-lg font-bold leading-snug">{target.title}</h3>

      <div className="mt-3 rounded-lg border border-brand-border bg-white/[0.03] p-3">
        <p className="text-xs text-brand-muted">
          <span className="font-semibold text-brand-text">Selected Item:</span> {target.title}
        </p>
        <p className="mt-1 text-xs text-brand-muted">
          <span className="font-semibold text-brand-text">Type:</span> {target.type}
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <Field label="Full Name" required error={errors.name}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Your full name"
            autoComplete="name"
          />
        </Field>

        <Field label="Email Address" required error={errors.email}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>

        <Field label="Phone Number" required error={errors.phone}>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
            placeholder="+91 ..."
            autoComplete="tel"
          />
        </Field>

        <Field label="Company / Organization" error={undefined}>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="form-input"
            placeholder="Optional"
            autoComplete="organization"
          />
        </Field>

        <Field label="What would you like to know/request?" required error={errors.message}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="form-input resize-none"
            placeholder="Tell me what you're interested in..."
          />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {REQUEST_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setMessage(opt)}
                className="chip text-xs"
              >
                {opt}
              </button>
            ))}
          </div>
        </Field>
      </div>

      {status === 'error' && serverError && (
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary mt-6 w-full disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
        ) : (
          <><Send className="h-4 w-4" /> Submit Request</>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-brand-text">
        {label} {required && <span className="text-brand-primary">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
