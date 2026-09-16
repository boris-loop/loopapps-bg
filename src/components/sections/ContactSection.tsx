import { LinkedInLink } from "../common/LinkedInLink";

export function ContactSection() {
  return (
    <div className="mx-auto mb-[clamp(2.125rem,6vw,4.375rem)] w-[min(73.75rem,calc(100%_-_2.25rem))] border-t border-line pt-[clamp(3rem,6vw,4.5rem)] max-[32.5rem]:mx-4 max-[32.5rem]:w-auto">
      <section className="contact-layout w-full scroll-mt-24 items-center gap-x-[clamp(2rem,5vw,4.5rem)] gap-y-4 rounded-panel bg-contact px-[clamp(1.875rem,5vw,3.625rem)] py-[clamp(1.5rem,3vw,2.5rem)] text-white max-[32.5rem]:p-[1.375rem]" id="contact" aria-labelledby="contact-title">
        <h2 className="section-label [grid-area:title] mb-0 text-[clamp(1.5rem,2vw,2rem)] text-contact-accent" id="contact-title">Contact</h2>
        <p className="[grid-area:copy] mb-0 max-w-[62ch] text-[1.1rem] leading-[1.55] text-contact-muted">For product enquiries, potential collaborations or conversations about intelligent systems for evidence-led work, get in touch.</p>
        <div className="flex w-auto items-center justify-end gap-5 [grid-area:actions] max-[53.75rem]:mt-3 max-[53.75rem]:flex-col max-[53.75rem]:items-start">
          <a className="inline-flex min-h-11 items-center whitespace-nowrap font-extrabold text-contact-accent motion-safe:transition-colors hover:text-white active:text-contact-muted" href="mailto:boris@loopapps.bg">boris@loopapps.bg</a>
          <LinkedInLink className="min-h-11 border-white bg-white max-[32.5rem]:min-h-[3.125rem] max-[32.5rem]:w-full" href="https://www.linkedin.com/company/loopapplications/" />
        </div>
      </section>
    </div>
  );
}
