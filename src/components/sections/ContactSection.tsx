import { contacts } from "../../data/site";
import { LinkedInLink } from "../common/LinkedInLink";

export function ContactSection() {
  return (
    <section
      className="family-contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="family-shell">
        <div className="contact-intro">
          <p className="eyebrow">People inside the loop</p>
          <h2 id="contact-title">
            Let’s <em>talk.</em>
          </h2>
          <p>Product questions, editorial ideas or partnerships.</p>
        </div>
        <div className="contact-people">
          {contacts.map((person) => (
            <div className="contact-person" key={person.email}>
              <p>{person.focus}</p>
              <h3>{person.name}</h3>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </div>
          ))}
          <div className="contact-follow">
            <p>Follow our work</p>
            <LinkedInLink href="https://www.linkedin.com/company/loopapplications/" />
          </div>
        </div>
      </div>
    </section>
  );
}
