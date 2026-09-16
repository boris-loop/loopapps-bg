import { useEffect } from "react";

import { SiteFooter } from "./components/common/SiteFooter";
import { SiteHeader } from "./components/common/SiteHeader";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProductSection } from "./components/sections/ProductSection";
import { TeamSection } from "./components/sections/TeamSection";
import { mainNavigation } from "./data/site";

export default function App() {
  useEffect(() => {
    const targetId = decodeURIComponent(window.location.hash.slice(1));

    if (!targetId) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView();
    });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader navigation={mainNavigation} />
      <main id="main">
        <HeroSection />
        <ProductSection />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
