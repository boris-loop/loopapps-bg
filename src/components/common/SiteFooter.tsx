export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-[min(73.75rem,calc(100%_-_2.25rem))] items-center justify-between gap-[1.125rem] pb-[1.875rem] text-[0.86rem] leading-relaxed text-[#626b79] max-[53.75rem]:flex-col max-[53.75rem]:items-start max-[32.5rem]:mx-4 max-[32.5rem]:w-auto">
      <p className="m-0">
        © 2026 Loop Applications EOOD · Sofia, Bulgaria · UIC 207745874 ·{" "}
        <a className="inline-flex min-h-11 items-center text-inherit no-underline motion-safe:transition-colors hover:text-red-dark hover:underline active:text-red" href="/privacy">Privacy</a>
      </p>
    </footer>
  );
}
