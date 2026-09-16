export function HeroSection() {
  return (
    <section className="mx-auto grid w-[min(73.75rem,calc(100%_-_2.25rem))] grid-cols-[minmax(0,1.08fr)_minmax(18.75rem,0.72fr)] items-center gap-[clamp(1.75rem,5vw,5.375rem)] py-[clamp(1.625rem,4vw,3.25rem)] pb-[clamp(2.125rem,5vw,3.75rem)] max-[53.75rem]:grid-cols-1 max-[53.75rem]:pt-10 max-[32.5rem]:mx-4 max-[32.5rem]:w-auto max-[32.5rem]:gap-[1.875rem] max-[32.5rem]:pb-12 max-[32.5rem]:pt-[3.875rem]">
      <div className="max-w-[51.25rem] max-[32.5rem]:text-center">
        <h1 id="hero-title" className="mb-6 max-w-[14ch] font-serif text-[clamp(3.25rem,5.5vw,5rem)] font-[450] leading-[0.96] max-[32.5rem]:mx-auto max-[32.5rem]:mb-[1.125rem] max-[32.5rem]:max-w-[12ch] max-[32.5rem]:text-[2.75rem] max-[32.5rem]:leading-none">
          We build products for work that depends on evidence.
        </h1>
        <p className="mb-8 max-w-[62ch] text-[clamp(1.1rem,2vw,1.36rem)] leading-[1.5] text-copy max-[32.5rem]:mx-auto max-[32.5rem]:mb-0 max-[32.5rem]:max-w-[34ch] max-[32.5rem]:text-[1.0625rem] max-[32.5rem]:leading-[1.5] max-[32.5rem]:text-muted">
          Loop Applications builds dependable software products for specialized teams, helping professionals move from evidence to confident decisions.
        </p>
      </div>

      <aside className="flex min-h-[26.875rem] flex-col gap-[1.125rem] self-stretch rounded-panel border border-line bg-white p-[clamp(1.375rem,3vw,2.125rem)] shadow-panel max-[53.75rem]:min-h-0 max-[32.5rem]:gap-4 max-[32.5rem]:border-0 max-[32.5rem]:bg-transparent max-[32.5rem]:p-0 max-[32.5rem]:shadow-none" aria-label="Loop Applications capability snapshot">
        <div className="system-preview relative flex min-h-[14.25rem] flex-col justify-between overflow-hidden rounded-lg bg-[linear-gradient(135deg,rgba(227,6,19,0.14),transparent_42%),linear-gradient(155deg,#202020_0%,#111111_62%,#3a0005_100%)] p-[clamp(1.375rem,4vw,2.125rem)] text-white max-[32.5rem]:min-h-[16.25rem] max-[32.5rem]:rounded-none" aria-hidden="true">
          <p className="relative z-[1] m-0 text-xs font-black uppercase tracking-[0.12em] text-[#ffb0b5]">Loop Applications</p>
          <h2 className="relative z-[1] m-0 max-w-[6.8em] font-serif text-[clamp(2.15rem,4vw,3.4rem)] font-[450] leading-[0.95]">Intelligence systems</h2>
          <span className="relative z-[1] text-[0.86rem] font-extrabold text-[#f0ebe6]">Built for evidence-led teams</span>
        </div>
        <p className="mb-0 max-w-[58ch] text-[0.98rem] leading-[1.55] text-copy max-[32.5rem]:px-1 max-[32.5rem]:text-center max-[32.5rem]:text-base">
          Each product brings structured research, source verification and professional judgment into a clear workflow designed for its domain.
        </p>
        <ul className="mt-auto grid list-none gap-2 p-0 max-[32.5rem]:mt-1">
          {['Research workflow', 'Source-linked analysis', 'Domain-specific publishing'].map((item) => (
            <li className="border-l-4 border-red bg-[#f1f3ef] px-3 py-[0.5625rem] text-[0.84rem] font-extrabold text-[#21322e]" key={item}>{item}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
