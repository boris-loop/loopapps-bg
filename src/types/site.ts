export interface NavItem {
  label: string;
  href: string;
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface ProductCase {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
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
  detailUrl: string;
  buttonMark: string;
  benefits: ProductBenefit[];
  cases: ProductCase[];
}

export interface Person {
  name: string;
  role: string;
  email: string;
  linkedInUrl: string;
}
