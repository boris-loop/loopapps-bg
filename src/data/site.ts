import type { NavItem, Person, Product, ProductBenefit, ProductCase } from "../types/site";

const productsNavigation: NavItem[] = [
  { label: "Field Brief", href: "#field-brief" },
  { label: "CopyProof", href: "#copyproof-title" },
  { label: "CarWashGuide", href: "#carwashguide-title" },
  { label: "Room for MRI", href: "#room-for-mri-title" },
];

export const mainNavigation: NavItem[] = [
  { label: "Products", href: "#products", children: productsNavigation },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const innerPageNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/#products",
    children: productsNavigation.map((item) => ({ ...item, href: "/" + item.href })),
  },
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

// Case photos are the Wikimedia Commons images fieldbrief.news uses, cleared for commercial use.
// CC BY-SA 4.0 only allows that with the credit shown next to the photo.
const ccBySa4 = "https://creativecommons.org/licenses/by-sa/4.0/";

export const productCases: ProductCase[] = [
  { title: "Slate Auto", href: "https://fieldbrief.news/#case-slate-auto", image: "/assets/fieldbrief-slate-auto.webp", imageAlt: "Slate Auto pickup on public display in Seattle", width: 1200, height: 577, imageCredit: { author: "SounderBruce", license: "CC BY-SA 4.0", licenseUrl: ccBySa4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Slate_Truck_demonstration_in_Seattle_-_01.jpg" } },
  { title: "Audi Haus", href: "https://fieldbrief.news/#case-audi-haus", image: "/assets/fieldbrief-audi-haus.webp", imageAlt: "Audi A6 e-tron parked on a paved lot", width: 1200, height: 768, imageCredit: { author: "Alexander Migl", license: "CC BY-SA 4.0", licenseUrl: ccBySa4, sourceUrl: "https://commons.wikimedia.org/wiki/File:Audi_A6_e-tron_DSC_2835.jpg" } },
  { title: "Ford F-150 Lightning", href: "https://fieldbrief.news/#case-ford-f150-lightning", image: "/assets/fieldbrief-ford-lightning.webp", imageAlt: "Blue Ford F-150 Lightning parked outside a dealership", width: 1200, height: 690, imageCredit: { author: "Elise240SX", license: "CC BY-SA 4.0", licenseUrl: ccBySa4, sourceUrl: "https://commons.wikimedia.org/wiki/File:2022_Ford_F-150_Lightning_Lariat_in_Atlas_Blue_Metallic,_Front_Right,_08-06-2022.jpg" } },
  { title: "Ram HEMI Comeback", href: "https://fieldbrief.news/#case-ram-hemi-comeback", image: "/assets/fieldbrief-ram-hemi.webp", imageAlt: "White 2026 Ram 1500 Limited outside a dealership", width: 1200, height: 675, imageCredit: { author: "Elise240SX", license: "CC BY-SA 4.0", licenseUrl: ccBySa4, sourceUrl: "https://commons.wikimedia.org/wiki/File:2026_RAM_1500_Limited_in_Ivory_Tri-Coat_Pearl,_front_right,_2026-06-14.jpg" } },
  { title: "Volkswagen Voltswagen", href: "https://fieldbrief.news/#case-volkswagen-voltswagen", image: "/assets/fieldbrief-volkswagen.webp", imageAlt: "White Volkswagen ID.4 parked in a lot", width: 1200, height: 675, imageCredit: { author: "MercurySable99", license: "CC BY-SA 4.0", licenseUrl: ccBySa4, sourceUrl: "https://commons.wikimedia.org/wiki/File:2023_Volkswagen_ID.4_Pro_S,_front_left,_08-03-2024.jpg" } },
  { title: "Genesis Magma Racing", href: "https://fieldbrief.news/#case-genesis-magma-racing", image: "/assets/fieldbrief-genesis-le-mans.webp", imageAlt: "Genesis GMR-001 Hypercar on track", width: 1200, height: 675, imageCredit: { author: "MarcelX42", license: "CC BY-SA 4.0", licenseUrl: ccBySa4, sourceUrl: "https://commons.wikimedia.org/wiki/File:2026_6_Hours_of_Spa-Francorchamps_Genesis_Magma_Racing_Genesis_GMR-001_No.17_(DSC07053).jpg" } },
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
  { name: "Boris Borisov", role: "Founder", focus: "Product, access and partnerships", email: "boris@loopapps.bg", linkedInUrl: "https://www.linkedin.com/in/boris-borisov-7b206038/" },
  { name: "Khaleel Al Smadi", role: "Principal Collaborator, Field Brief", focus: "Editorial and campaign suggestions", email: "khaleel@loopapps.bg", linkedInUrl: "https://www.linkedin.com/in/khaleel-al-smadi-29abb2241/" },
];
