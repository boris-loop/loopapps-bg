import { PageFrame } from "../components/common/PageFrame";
import { innerPageNavigation } from "../data/site";

export function NotFoundPage() {
  return (
    <PageFrame navigation={innerPageNavigation}>
      <main className="mx-auto w-[min(55rem,calc(100%_-_2.25rem))] py-[clamp(4rem,10vw,7.375rem)]" id="main">
        <p className="section-label">404</p>
        <h1 className="mb-6 max-w-[12ch] font-serif text-[clamp(3.25rem,7vw,5.8rem)] font-[450] leading-[0.96]">Page not found.</h1>
        <p className="max-w-[60ch] text-[1.08rem] leading-[1.6] text-[#3f3b37]">The page may have moved, or the address may be incorrect.</p>
        <a className="inline-flex min-h-[2.875rem] min-w-11 items-center justify-center rounded-[0.1875rem] border border-ink bg-ink px-[1.125rem] py-3 font-extrabold text-white no-underline transition hover:-translate-y-px hover:border-red-dark hover:bg-red-dark" href="/">Go to loopapps.bg</a>
      </main>
    </PageFrame>
  );
}
