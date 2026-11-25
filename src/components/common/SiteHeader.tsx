import { useDetailsDismiss } from "../../hooks/useDetailsDismiss";
import type { NavItem } from "../../types/site";
import { NavDisclosure } from "./NavDisclosure";

interface SiteHeaderProps {
  navigation: NavItem[];
  homeHref?: string;
}

export function SiteHeader({ navigation, homeHref = "#top" }: SiteHeaderProps) {
  const { detailsRef, summaryRef, close, onBlur, onKeyDown } =
    useDetailsDismiss();

  return (
    <header className="site-header family-header">
      <div className="family-shell header-inner">
        <a
          className="company-brand"
          href={homeHref}
          aria-label="Loop Applications home"
        >
          <img
            src="/assets/loopapps-wordmark-transparent.webp"
            width="520"
            height="260"
            alt="Loop Applications"
          />
        </a>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigation.map((item) =>
            item.children ? (
              <NavDisclosure item={item} key={item.href} />
            ) : (
              <a
                className={
                  item.href.endsWith("#contact") ? "nav-contact" : undefined
                }
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>
        <details
          className="mobile-nav family-mobile-nav"
          ref={detailsRef}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        >
          <summary ref={summaryRef}>
            Menu <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) =>
              item.children ? (
                <NavDisclosure
                  item={item}
                  mobile
                  onNavigate={close}
                  key={item.href}
                />
              ) : (
                <a
                  className={
                    item.href.endsWith("#contact") ? "nav-contact" : undefined
                  }
                  href={item.href}
                  key={item.href}
                  onClick={close}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </details>
      </div>
    </header>
  );
}
