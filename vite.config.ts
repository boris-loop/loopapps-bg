import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  build: isSsrBuild
    ? {
        copyPublicDir: false,
        outDir: "dist/server",
      }
    : {
        outDir: "dist",
        rollupOptions: {
          input: {
            main: fileURLToPath(new URL("./index.html", import.meta.url)),
            privacy: fileURLToPath(new URL("./privacy.html", import.meta.url)),
            product: fileURLToPath(new URL("./products/field-brief.html", import.meta.url)),
            notFound: fileURLToPath(new URL("./404.html", import.meta.url)),
          },
        },
      },
}));
