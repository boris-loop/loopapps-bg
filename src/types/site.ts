export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
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
  imageCredit: ImageCredit;
}

export interface ImageCredit {
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
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
  cases: ProductCase[];
}

export interface ContactPerson {
  name: string;
  focus: string;
  email: string;
}
