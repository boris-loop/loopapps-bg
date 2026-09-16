import "@fontsource-variable/newsreader/wght.css";
import "@fontsource-variable/source-sans-3/wght.css";
import { mountApp } from "./mountApp";
import { PrivacyPage } from "./pages/PrivacyPage";
import "./styles/index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("React root element was not found");
}

mountApp(root, <PrivacyPage />);
