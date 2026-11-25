import type { ContactPerson, NavItem } from "../types/site";

const productsNavigation: NavItem[] = [
  { label: "Field Brief", href: "#field-brief" },
  { label: "CopyProof", href: "#copyproof-title" },
  { label: "CarWashGuide", href: "#carwashguide-title" },
  { label: "Room for MRI", href: "#room-for-mri-title" },
];

export const mainNavigation: NavItem[] = [
  { label: "Our products", href: "#products", children: productsNavigation },
  { label: "Get in touch", href: "#contact" },
];

export const innerPageNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Our products",
    href: "/#products",
    children: productsNavigation.map((item) => ({
      ...item,
      href: "/" + item.href,
    })),
  },
  { label: "Get in touch", href: "/#contact" },
];

export const contacts: ContactPerson[] = [
  {
    name: "Boris",
    focus: "Product, access and partnerships",
    email: "boris@loopapps.bg",
  },
  { name: "Khaleel", focus: "Editorial", email: "khaleel@loopapps.bg" },
];
