import type { PropsWithChildren } from "react";

import type { NavItem } from "../../types/site";
import { SiteHeader } from "./SiteHeader";

interface PageFrameProps extends PropsWithChildren {
  navigation: NavItem[];
  homeHref?: string;
  contactLabel?: string;
}

export function PageFrame({ children, navigation, homeHref = "/", contactLabel = "Contact us" }: PageFrameProps) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader navigation={navigation} homeHref={homeHref} contactLabel={contactLabel} />
      {children}
    </>
  );
}
