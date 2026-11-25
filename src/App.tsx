import { SiteFooter } from "./components/common/SiteFooter";
import { PageFrame } from "./components/common/PageFrame";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProductSection } from "./components/sections/ProductSection";
import { mainNavigation } from "./data/site";
import { scrollToInitialHash } from "./scrollToInitialHash";

export default function App() {
  return (
    <PageFrame navigation={mainNavigation} homeHref="#top">
      <main id="main" ref={scrollToInitialHash}>
        <HeroSection />
        <ProductSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </PageFrame>
  );
}
