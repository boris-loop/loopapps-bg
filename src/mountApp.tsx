import { StrictMode, type ReactNode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

export function mountApp(root: HTMLElement, children: ReactNode) {
  const app = <StrictMode>{children}</StrictMode>;

  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
    return;
  }

  createRoot(root).render(app);
}
