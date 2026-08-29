export function DeveloperCodeCard({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-brand-border bg-[#101827]/95 shadow-2xl shadow-sky-950/40 ${className}`}
      role="img"
      aria-label="Developer profile code card for Prabhjot Singh"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(56,189,248,0.13),transparent_34%),radial-gradient(circle_at_20%_85%,rgba(94,234,212,0.08),transparent_32%)]" />

      <div className="relative flex items-center justify-between border-b border-brand-border px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-xs font-medium text-brand-muted sm:text-sm">developer_profile.py</span>
      </div>

      <div className="relative p-5 font-mono text-[10px] leading-[1.85] sm:p-6 sm:text-xs md:text-sm">
        <div className="whitespace-nowrap text-slate-400"># Student Profile &amp; Focus Areas</div>
        <div className="mt-1">
          <span className="text-fuchsia-300">class</span>{' '}
          <span className="text-cyan-300">DeveloperProfile</span>:
        </div>
        <div className="pl-4 sm:pl-5">
          <span className="text-fuchsia-300">def</span>{' '}
          <span className="text-cyan-300">__init__</span>(<span className="text-white">self</span>):
        </div>
        <div className="pl-8 sm:pl-10">
          <span className="text-white">self.name</span> = <span className="text-emerald-300">&quot;Prabhjot Singh&quot;</span>
        </div>
        <div className="pl-8 sm:pl-10">
          <span className="text-white">self.degree</span> = <span className="text-emerald-300">&quot;B.Tech CSE - AI &amp; ML&quot;</span>
        </div>
        <div className="pl-8 sm:pl-10">
          <span className="text-white">self.university</span> = <span className="text-emerald-300">&quot;Lovely Professional University&quot;</span>
        </div>
        <div className="pl-8 sm:pl-10">
          <span className="text-white">self.target_roles</span> = [
        </div>
        <div className="pl-12 sm:pl-14 text-emerald-300">&quot;Software Developer&quot;,</div>
        <div className="pl-12 sm:pl-14 text-emerald-300">&quot;AI-ML Engineer&quot;</div>
        <div className="pl-8 sm:pl-10">]</div>
        <div className="pl-8 sm:pl-10">
          <span className="text-white">self.mindset</span> = <span className="text-emerald-300">&quot;Continuous Learning &amp; Problem Solving&quot;</span>
        </div>
      </div>

      <div className="relative flex flex-wrap gap-2 border-t border-brand-border p-4 sm:p-5">
        {['Python', 'C++', 'AI & ML', 'DSA', 'Streamlit', 'NLP'].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1.5 text-[10px] font-semibold text-brand-text sm:text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
