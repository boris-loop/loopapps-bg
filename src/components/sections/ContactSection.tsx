import { contacts } from "../../data/site";
import { LinkedInLink } from "../common/LinkedInLink";

export function ContactSection() {
  return (
    <div className="mx-auto mb-[clamp(2.125rem,6vw,4.375rem)] w-[min(73.75rem,calc(100%_-_2.25rem))] border-t border-line pt-[clamp(3rem,6vw,4.5rem)] max-[32.5rem]:mx-4 max-[32.5rem]:w-auto">
      <section className="w-full scroll-mt-24 rounded-panel bg-contact px-[clamp(1.875rem,5vw,3.625rem)] py-[clamp(2rem,4vw,3.5rem)] text-white max-[32.5rem]:p-[1.375rem]" id="contact" aria-labelledby="contact-title">
        <h2 className="mb-[clamp(2rem,4vw,3rem)] font-serif text-[clamp(2.4rem,4vw,4.1rem)] font-[450] leading-[0.98]" id="contact-title">People inside the loop</h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-7 max-[53.75rem]:grid-cols-1">
          {contacts.map((person) => (
            <div className="max-[53.75rem]:not-first:border-t max-[53.75rem]:not-first:border-white/20 max-[53.75rem]:not-first:pt-7" key={person.email}>
              <h3 className="mb-5 text-[1.05rem] font-bold leading-[1.5] text-contact-muted">{person.focus}</h3>
              <p className="mb-3 text-[1.75rem] font-bold leading-tight">{person.name}</p>
              <a className="inline-flex min-h-11 items-center break-all text-[1.1rem] font-bold text-contact-accent underline-offset-4 motion-safe:transition-colors hover:text-white hover:underline active:text-contact-muted" href={`mailto:${person.email}`}>{person.email}</a>
            </div>
          ))}
          <div className="max-[53.75rem]:border-t max-[53.75rem]:border-white/20 max-[53.75rem]:pt-7">
            <h3 className="mb-5 text-[1.05rem] font-bold leading-[1.5] text-contact-muted">Follow us</h3>
            <LinkedInLink className="min-h-11 border-white bg-white" href="https://www.linkedin.com/company/loopapplications/" />
          </div>
        </div>
      </section>
    </div>
  );
}
