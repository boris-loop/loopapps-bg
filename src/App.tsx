import { SiteFooter } from "./components/common/SiteFooter";
import { SiteHeader } from "./components/common/SiteHeader";
import { ContactSection } from "./components/sections/ContactSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProductSection } from "./components/sections/ProductSection";
import { TeamSection } from "./components/sections/TeamSection";
import { mainNavigation } from "./data/site";

export default function App() {
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
