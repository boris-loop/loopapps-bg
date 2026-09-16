# Loop Applications Website

React website for [Loop Applications](https://loopapps.bg), the Sofia-based product company behind Field Brief.

## Stack

- React 19.3 with typed function components
- TypeScript 7 in strict mode
- Tailwind CSS 4 through its Vite plugin
- Vite 8 with the React SWC plugin
- Cloudflare Workers Static Assets through Wrangler

This is a static company site. Its known routes are pre-rendered during the Vite build and hydrated by React in the browser. React Server Components, Actions, `useActionState` and `use` were reviewed for the migration but are intentionally not used: the site has no server component runtime, asynchronous data boundary or mutation workflow that would benefit from them.

## Local Development

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL. To type-check and create the production output:

```bash
npm run check
npm run build
```

The production build is written to `dist/`. Preview that exact output with:

```bash
npm run preview
```

## Structure

```text
.
|-- index.html               # Main Vite entry
|-- privacy.html             # Privacy page entry
|-- products/field-brief.html # Product page entry
|-- 404.html                 # Cloudflare 404 entry
|-- public/                  # Assets copied unchanged into dist
|-- scripts/                 # Build-time static rendering
|-- src/
|   |-- components/
|   |   |-- common/          # Reusable navigation, footer and links
|   |   `-- sections/        # Home-page sections
|   |-- data/                # Typed site content
|   |-- pages/               # Product, privacy and not-found pages
|   |-- styles/              # Tailwind entry and global primitives
|   `-- types/               # Shared TypeScript interfaces
|-- vite.config.ts
`-- wrangler.jsonc
```

## Cloudflare Deployment

The repository remains connected to the existing Cloudflare Worker through Workers Builds. Vite builds the four HTML entries into `dist/`; `wrangler.jsonc` then deploys that directory as static assets. `_headers`, the manifest, sitemap, robots file and all public assets are copied into the same output.

Before this branch is merged, set the Worker under **Settings > Build** to:

```text
Build command: npm run build
Deploy command: npx wrangler deploy
Non-production deploy command: npx wrangler versions upload
Root directory: /
```

The deploy commands are Cloudflare's defaults. The build command is the only required change from the previous no-build setup. Apply it before merging so the first React deployment receives a populated `dist/` directory. Keep the production branch set to `main`; branch builds may remain enabled for preview validation.

`wrangler.jsonc` preserves extensionless HTML routing and serves the built `404.html` for unknown paths. A failed build does not replace the currently deployed Worker, preserving the live version until a successful upload completes.

Local deployment validation:

```bash
npm run build
npx wrangler deploy --dry-run
```

After a preview or production deploy, verify `/`, `/privacy`, an unknown URL, navigation anchors and all six Field Brief case links on both desktop and mobile widths.

## Contact

`boris@loopapps.bg`
