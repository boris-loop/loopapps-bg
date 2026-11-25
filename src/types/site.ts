export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  label: string;
  name: string;
  wordmark: {
    src: string;
    width: number;
    height: number;
  };
  tagline: string;
  description: string;
  url: string;
  buttonMark: string;
  benefits: ProductBenefit[];
}

export interface ContactPerson {
  name: string;
  focus: string;
  email: string;
}
