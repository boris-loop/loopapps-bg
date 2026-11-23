import { useEffect } from "react";

import { SiteFooter } from "./components/common/SiteFooter";
import { PageFrame } from "./components/common/PageFrame";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProductSection } from "./components/sections/ProductSection";
import { mainNavigation } from "./data/site";

export default function App() {
  useEffect(() => {
    let targetId: string;

    try {
      targetId = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      // A malformed URL fragment should not prevent the page from mounting.
      return;
    }

    if (!targetId) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <PageFrame navigation={mainNavigation} homeHref="#top" contactLabel="Contact">
      <main id="main">
        <HeroSection />
        <ProductSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
