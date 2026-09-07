# Deploying, and moving to optimallyapp.com

The site is a Next.js static export published to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`. There is no committed
HTML — repo **Settings → Pages → Source** must be **GitHub Actions**.

```bash
npm ci
npm run dev                     # http://localhost:3000

# exactly what CI builds:
NEXT_PUBLIC_BASE_PATH=/verawesbite \
NEXT_PUBLIC_SITE_URL=https://nathaniel1232.github.io npm run build
npx serve out                   # or: python3 -m http.server -d out
```

## The one thing that can break App Review

`AppBrand` in the iOS app points at

```
https://nathaniel1232.github.io/verawesbite/privacy/
https://nathaniel1232.github.io/verawesbite/terms/
https://nathaniel1232.github.io/verawesbite/support/
```

**App Review opens these and rejects under 5.1.1 if they 404.** That has already
happened once on this app. Everything below is ordered so they never go down.

## Moving to optimallyapp.com — in this order

**Do not commit a `CNAME` file and do not blank `NEXT_PUBLIC_BASE_PATH` yet.**
Either one makes GitHub serve the site at a domain that does not resolve, and
`nathaniel1232.github.io/verawesbite/*` starts redirecting there — taking the
three links above with it.

**1. DNS at the registrar.** Apex `optimallyapp.com` → four A records:

```
185.199.108.153   185.199.109.153   185.199.110.153   185.199.111.153
```

and, if the registrar supports it, the matching AAAA records:

```
2606:50c0:8000::153   2606:50c0:8001::153
2606:50c0:8002::153   2606:50c0:8003::153
```

Then `www` → CNAME `nathaniel1232.github.io`. Wait until
`dig +short optimallyapp.com` returns those A records.

**2. Settings → Pages → Custom domain** → `optimallyapp.com` → Save. GitHub
writes the `CNAME` file itself and runs a DNS check. Let the check go green.

**3. Tick "Enforce HTTPS"** once the certificate is issued — up to an hour.

**4. Only now**, in `.github/workflows/deploy.yml`:

```yaml
NEXT_PUBLIC_BASE_PATH: ''
NEXT_PUBLIC_SITE_URL: https://optimallyapp.com
```

Push. GitHub then 301s `nathaniel1232.github.io/verawesbite/*` to
`optimallyapp.com/*`, so the app's existing links keep resolving through the
redirect and nothing has to ship in the app to keep them alive.

**5. Later, in the next app build** (optional, tidiness): point
`AppBrand.privacyPolicyURL` / `termsURL` / `supportURL` at the new domain.
There is no hurry — the redirect is permanent — but a direct link is one less
thing between App Review and the page.

**6. Check after the switch**, because a 404 here is a rejection:

```bash
for p in "" privacy/ terms/ support/ studio/ robots.txt sitemap.xml; do
  printf '%-14s ' "$p"; curl -s -o /dev/null -w '%{http_code}\n' "https://optimallyapp.com/$p"
done
```

## Rolling it back

Clear the custom domain in Settings → Pages, put
`NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}` back, push. The
github.io URLs return immediately.

## /studio/

`public/studio/` is the clip studio — plain HTML, copied verbatim out of the
app project's `website/` folder along with `clip-engine.js`, `satoshi.css` and
`demo/`. Next copies `public/` to the output root untouched, so it needs no
build step and every path inside it is relative, which is why it survives the
basePath switch without edits.

It is behind a password that is checked in the browser, so it is obfuscation
rather than security — `robots.txt` keeps it out of search, which is most of
what actually protects it. **When the engine changes in the app project, copy
it across again**; there is no build step tying the two together.
