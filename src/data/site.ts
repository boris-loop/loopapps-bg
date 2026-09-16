import type { NavItem, Person, Product, ProductBenefit, ProductCase } from "../types/site";

export const mainNavigation: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const innerPageNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

export const productPageNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Field Brief", href: "https://fieldbrief.news/" },
  { label: "Contact", href: "/#contact" },
];

export const productBenefits: ProductBenefit[] = [
  { title: "Campaign sequence", description: "See every public move in order and in context." },
  { title: "Source-linked evidence", description: "Trace the claims back to primary, trade and event sources." },
  { title: "Practitioner judgment", description: "Take away lessons shaped for real campaign planning." },
];

export const productCases: ProductCase[] = [
  { title: "Slate Auto", href: "https://fieldbrief.news/#case-slate-auto", image: "/assets/fieldbrief-slate-auto.webp", imageAlt: "Yellow Slate Auto electric SUV on a black background", width: 1200, height: 577 },
  { title: "Audi Haus", href: "https://fieldbrief.news/#case-audi-haus", image: "/assets/fieldbrief-audi-haus.webp", imageAlt: "Audi vehicles displayed inside the Audi Haus of Progress", width: 1200, height: 768 },
  { title: "Ford F-150 Lightning", href: "https://fieldbrief.news/#case-ford-f150-lightning", image: "/assets/fieldbrief-ford-lightning.webp", imageAlt: "Rear view of a Ford F-150 Lightning pickup at an auto show", width: 1200, height: 690 },
  { title: "Ram HEMI Comeback", href: "https://fieldbrief.news/#case-ram-hemi-comeback", image: "/assets/fieldbrief-ram-hemi.webp", imageAlt: "White Ram pickup driving on a dirt road", width: 384, height: 256 },
  { title: "Volkswagen Voltswagen", href: "https://fieldbrief.news/#case-volkswagen-voltswagen", image: "/assets/fieldbrief-volkswagen.webp", imageAlt: "White Volkswagen ID.4 electric SUV", width: 384, height: 216 },
  { title: "Genesis Magma Racing", href: "https://fieldbrief.news/#case-genesis-magma-racing", image: "/assets/fieldbrief-genesis-le-mans.webp", imageAlt: "Genesis Magma Racing prototype race car on track", width: 1200, height: 675 },
];

export const featuredProduct: Product = {
  id: "field-brief",
  label: "Our products",
  name: "Field Brief",
  wordmark: {
    src: "/assets/fieldbrief-wordmark.svg",
    width: 748,
    height: 152,
  },
  tagline: "Campaign intelligence built for people who do PR for a living.",
  description:
    "Source-linked case studies explaining how notable automotive PR campaigns actually worked. Each report combines primary evidence with practitioner judgment to reveal the mechanics behind the campaign.",
  url: "https://fieldbrief.news/",
  detailUrl: "/products/field-brief",
  buttonMark: "/assets/fieldbrief-mark.svg",
  benefits: productBenefits,
  cases: productCases,
};

export const people: Person[] = [
  { name: "Boris Borisov", role: "Founder", email: "boris@loopapps.bg", linkedInUrl: "https://www.linkedin.com/in/boris-borisov-7b206038/" },
  { name: "Khaleel Al Smadi", role: "Principal Collaborator, Field Brief", email: "khaleel@loopapps.bg", linkedInUrl: "https://www.linkedin.com/in/khaleel-al-smadi-29abb2241/" },
];
