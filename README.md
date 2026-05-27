# ASIOS Websites

Static public sites for ASIOS LLC and its applications.

## Production Domains

| Domain | Site root | Hosting target |
| --- | --- | --- |
| `asios.tech` | Repository root | Existing GitHub Pages site |
| `become.asios.tech` | `sites/become/` | Cloudflare Pages project `asios-become` |
| `faro.asios.tech` | `sites/faro/` | Cloudflare Pages project `asios-faro` |

The company site owns canonical portfolio legal documents at `https://asios.tech/privacy.html` and `https://asios.tech/terms.html`. Product-site `/privacy` and `/terms` routes redirect to those documents using Cloudflare Pages `_redirects` rules.

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
npm run deploy:become
npm run deploy:faro
```

The associated Cloudflare Pages custom domains are:

```text
become.asios.tech -> asios-become.pages.dev
faro.asios.tech   -> asios-faro.pages.dev
```

Cloudflare manages DNS and TLS for these subdomains. The root company deployment remains on GitHub Pages during this staged migration.

## Notes

- These sites require no backend. Support contact is handled by email and legal content remains on the company site.
- The root company site still uses `.github/workflows/static.yml` and its `CNAME` file.
