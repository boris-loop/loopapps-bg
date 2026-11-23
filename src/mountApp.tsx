import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/source-sans-3/wght.css";
import { StrictMode, type ReactNode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./styles/index.css";

export function mountApp(children: ReactNode) {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("React root element was not found");
  }

  const app = <StrictMode>{children}</StrictMode>;

  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
    return;
  }

  createRoot(root).render(app);
}
