import { useRef } from "react";

import type { NavItem } from "../../types/site";

interface SiteHeaderProps {
  navigation: NavItem[];
  homeHref?: string;
  contactLabel?: string;
}

export function SiteHeader({ navigation, homeHref = "#top", contactLabel = "Contact" }: SiteHeaderProps) {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const contactHref = navigation.find((item) => item.label === "Contact")?.href ?? "/#contact";

  const closeMobileMenu = () => mobileMenu.current?.removeAttribute("open");

  return (
    <header className="site-header sticky top-0 z-20 flex items-center justify-between gap-6 border-b border-line/80 bg-canvas px-[clamp(1.125rem,5vw,4.5rem)] py-2 max-[53.75rem]:static max-[53.75rem]:flex-col max-[53.75rem]:items-start max-[32.5rem]:sticky max-[32.5rem]:flex-row max-[32.5rem]:items-center max-[32.5rem]:px-4 max-[32.5rem]:py-2 max-[32.5rem]:backdrop-blur-xl">
      <a className="inline-flex min-h-11 w-[min(10.5rem,46vw)] items-center no-underline max-[32.5rem]:w-auto" href={homeHref} aria-label="Loop Applications home">
        <img className="block h-auto w-full max-[32.5rem]:hidden" src="/assets/loopapps-wordmark-transparent.webp" width="520" height="260" alt="Loop Applications" />
        <span className="hidden items-center max-[32.5rem]:inline-flex" aria-hidden="true">
          <span className="mobile-brand-mark block h-[1.8125rem] w-[4.75rem] shrink-0" />
        </span>
      </a>

      <nav className="flex items-center gap-[clamp(0.875rem,3vw,1.875rem)] text-[0.9rem] font-bold text-[#34312e] max-[53.75rem]:w-full max-[53.75rem]:justify-between max-[32.5rem]:hidden" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a className="inline-flex min-h-11 min-w-11 items-center justify-center no-underline motion-safe:transition-colors hover:text-red-dark active:text-red" href={item.href} key={item.href}>{item.label}</a>
        ))}
      </nav>

      <a className="ml-auto hidden min-h-11 items-center justify-center rounded-md bg-ink px-3 text-[0.78rem] font-bold text-white no-underline motion-safe:transition motion-safe:duration-200 hover:-translate-y-px hover:bg-red-dark active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none max-[32.5rem]:inline-flex" href={contactHref}>
        {contactLabel}
      </a>

      <details className="mobile-nav group/nav relative hidden max-[32.5rem]:block" ref={mobileMenu}>
        <summary className="grid size-11 cursor-pointer list-none place-content-center gap-1.5" aria-label="Open navigation">
          <span className="block h-[0.09375rem] w-6 bg-ink motion-safe:transition-transform group-open/nav:translate-y-[0.234375rem] group-open/nav:rotate-45" />
          <span className="block h-[0.09375rem] w-6 bg-ink motion-safe:transition-transform group-open/nav:-translate-y-[0.234375rem] group-open/nav:-rotate-45" />
        </summary>
        <nav className="absolute right-0 top-[calc(100%+0.5rem)] grid w-[min(13.75rem,calc(100vw-2rem))] rounded-lg border border-line bg-white p-2 text-[0.95rem] font-bold shadow-[0_1.125rem_3rem_rgba(20,20,20,0.14)]" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a className="inline-flex min-h-11 items-center rounded-md px-3 no-underline motion-safe:transition-colors hover:bg-control-hover hover:text-red-dark active:bg-gallery" href={item.href} key={item.href} onClick={closeMobileMenu}>{item.label}</a>
          ))}
        </nav>
      </details>
    </header>
  );
}
