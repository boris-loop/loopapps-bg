import { StrictMode, type ReactNode } from "react";
import { renderToString } from "react-dom/server";

import App from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProductPage } from "./pages/ProductPage";

const pages: Record<string, ReactNode> = {
  "/": <App />,
  "/privacy": <PrivacyPage />,
  "/products/field-brief": <ProductPage />,
  "/404": <NotFoundPage />,
};

export function renderPage(pathname: string) {
  const page = pages[pathname];

  if (!page) {
    throw new Error(`No pre-rendered page is configured for ${pathname}`);
  }

  return renderToString(<StrictMode>{page}</StrictMode>);
}
