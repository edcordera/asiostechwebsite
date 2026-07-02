# ASIOS Websites

Static public sites for ASIOS LLC and its applications.

## Production Domains

| Domain | Site root | Hosting target |
| --- | --- | --- |
| `asios.tech` | Repository root | Cloudflare Pages project `asios-tech`, served through Worker `asios-tech-router` |
| `become.asios.tech` | `sites/become/` | Cloudflare Pages project `asios-become` |
| `faro.asios.tech` | `sites/faro/` | Cloudflare Pages project `asios-faro` |

The company site owns canonical portfolio legal and support pages at `https://asios.tech/privacy.html`, `https://asios.tech/terms.html`, and `https://asios.tech/support.html`. Product-site `/privacy`, `/terms`, and `/support` routes redirect to those documents using Cloudflare Pages `_redirects` rules.

## Layout

```text
index.html, privacy.html, terms.html, feedback.html  Company site
sites/become/                                        Become product site
sites/faro/                                          Faro product site
```

Every product directory is a standalone static deployment root. New products should follow the same structure: `sites/<product>/index.html`, local assets and styles, `_headers`, and `_redirects` to applicable legal pages.

## Deploy

Install dependencies and authenticate Wrangler once:

```sh
npm install
npm run cloudflare:whoami
```

Deploy application sites independently:

```sh
npm run deploy:asios:router
npm run deploy:become
npm run deploy:faro
```

The root company site is deployed to Cloudflare Pages project `asios-tech` from a clean bundle containing the root HTML files, `css/`, and `assets/`. The `asios-tech-router` Worker is routed on `asios.tech/*` and `www.asios.tech/*` and serves the Pages deployment while preserving existing `.html` legal/support URLs.

The associated Cloudflare Pages custom domains are:

```text
asios.tech        -> asios-tech-router -> asios-tech.pages.dev
www.asios.tech    -> asios-tech-router -> asios-tech.pages.dev
become.asios.tech -> asios-become.pages.dev
faro.asios.tech   -> asios-faro.pages.dev
```

Cloudflare manages DNS and TLS for these domains. The previous GitHub Pages workflow is no longer the active production path for `asios.tech`.

## Notes

- These sites require no backend. Support contact is handled by email and legal content remains on the company site.
- The legacy `.github/workflows/static.yml` and `CNAME` file remain in the repository but are not the live `asios.tech` deployment path while the Cloudflare Worker route is active.
