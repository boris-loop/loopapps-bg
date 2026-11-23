import type { PropsWithChildren } from "react";

import type { NavItem } from "../../types/site";
import { SiteHeader } from "./SiteHeader";

interface PageFrameProps extends PropsWithChildren {
  navigation: NavItem[];
  homeHref?: string;
}

export function PageFrame({ children, navigation, homeHref = "/" }: PageFrameProps) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader navigation={navigation} homeHref={homeHref} />
      {children}
    </>
  );
}
