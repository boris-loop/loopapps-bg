# Loop Applications Website

Static website for [Loop Applications](https://loopapps.bg), the Sofia-based product studio behind Field Brief.

## Current site

- Presents Loop Applications EOOD and the company profile.
- Introduces Field Brief as the first public product.
- Mentions Field Brief AI as the private production system behind Field Brief.
- Provides founder and collaborator contact links.
- Includes mobile-friendly metadata, sitemap, robots file, privacy page,
  404 page and Cloudflare headers.

## Run locally

Open `index.html` directly in a browser. The site has no build step or backend.

If the site later needs components, routing, a local dev server or a build pipeline, use Node.js and React as the project stack.

## Structure

```text
.
|-- index.html
|-- 404.html
|-- privacy.html
|-- styles.css
|-- manifest.webmanifest
|-- robots.txt
|-- sitemap.xml
|-- _headers
`-- assets/
    |-- loopapps-wordmark-transparent.webp
    |-- loopapps-wordmark-transparent.png
    |-- og-card.png
    |-- og-card.webp
    `-- icons/
`-- scripts/
    `-- make-transparent-png.mjs
```

## Deployment

The site is served by Cloudflare as a Worker with static assets, connected to this
repository through the Cloudflare GitHub App. Every push to `main` triggers a
Workers Build that deploys the repository root; the build reports back to GitHub as
the `Workers Builds: loopapps-bg` check. There is no build step, no API token and
no CI workflow. Deployments carry the rules in `_headers`.

Two consequences of Workers static-asset routing to keep in mind:

- `.html` extensions are stripped — `/privacy.html` redirects to `/privacy`. Link
  to the extensionless URL to avoid a redirect hop.
- `404.html` is **not** served automatically for unknown paths, unlike Cloudflare
  Pages. Serving it requires a Wrangler config with
  `assets.not_found_handling = "404-page"`.

Everything in the repository root is published, including `README.md` and
`scripts/`. To keep files off the public site, move the site into a subdirectory
and point the asset directory at it.

Verify that the live site matches this branch:

```bash
diff <(curl -s https://loopapps.bg/) index.html && echo "LIVE MATCHES HEAD"
```

## Contact

`boris@loopapps.bg`
