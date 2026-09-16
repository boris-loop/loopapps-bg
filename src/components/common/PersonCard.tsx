import type { Person } from "../../types/site";
import { LinkedInLink } from "./LinkedInLink";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <article className="flex min-h-[13.75rem] flex-col justify-between rounded-panel border border-line bg-white p-[clamp(1.375rem,3.6vw,2.125rem)] motion-safe:transition-[border-color,box-shadow] motion-safe:duration-200 hover:border-control-strong hover:shadow-card">
      <div>
        <h3 className="mb-2.5 text-[clamp(1.5rem,2.2vw,2rem)] font-bold leading-[1.08]">{person.name}</h3>
        <p className="mb-0 max-w-[42ch] text-[1.02rem] leading-[1.5] text-muted">{person.role}</p>
      </div>
      <div className="mt-7 flex flex-wrap gap-x-[1.125rem] gap-y-3 font-extrabold max-[32.5rem]:grid">
        <a
          className="inline-flex min-h-11 items-center text-red-dark motion-safe:transition-colors hover:text-red active:text-ink max-[32.5rem]:w-full"
          href={`mailto:${person.email}`}
        >
          {person.email}
        </a>
        <LinkedInLink className="min-h-11 max-[32.5rem]:w-full" href={person.linkedInUrl} />
      </div>
    </article>
  );
}
