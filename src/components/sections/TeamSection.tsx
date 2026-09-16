import { people } from "../../data/site";
import { PersonCard } from "../common/PersonCard";

export function TeamSection() {
  return (
    <section className="section-shell scroll-mt-24" id="team" aria-labelledby="team-title">
      <div className="mb-7 flex items-end justify-between gap-7 max-[53.75rem]:block">
        <h2 className="mb-0 max-w-[18ch] font-serif text-[clamp(2.4rem,4vw,4.1rem)] font-[450] leading-[0.98]" id="team-title">The people inside the loop.</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 max-[53.75rem]:grid-cols-1">
        {people.map((person) => (
          <PersonCard person={person} key={person.email} />
        ))}
      </div>
    </section>
  );
}
