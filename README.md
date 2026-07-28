# Vera — website

Marketing site and legal pages for the Vera iOS app. Next.js (App Router),
statically exported, deployed to GitHub Pages by Actions.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/privacy/` | **Privacy Policy** — the URL submitted to App Store Connect, and linked from the app's paywall |
| `/terms/` | **Terms of Service** — the EULA URL for App Store Connect, and linked from the app's paywall |
| `/support/` | **Support** — the Support URL submitted to App Store Connect |
| `/contact/` | Contact |

## Deployment

GitHub Pages, via `.github/workflows/deploy.yml` on every push to `main`.

Set repo **Settings → Pages → Source: GitHub Actions**. Not "Deploy from a
branch" — there is no committed HTML for a branch deploy to serve.

## basePath — read this before changing any path

Project pages are served from `https://<user>.github.io/<repo>/`, so the export
needs that prefix baked in. CI passes it as `NEXT_PUBLIC_BASE_PATH`.

`next/link` applies basePath automatically. **`next/image` does not**, because
`images.unoptimized` (mandatory for `output: 'export'`) bypasses the loader — so
`<Image src="/x.png">` ships as literally `/x.png` and 404s under a subpath.
Metadata icons and Open Graph URLs have the same hole.

Every `/public` reference therefore goes through `asset()` in `lib/asset.ts`.
**If you add an image, wrap its path in `asset()`.** To verify:

```bash
NEXT_PUBLIC_BASE_PATH=/yourrepo npm run build && grep -o 'src="/[^"]*"' out/index.html
```

Every hit should carry the prefix. Anything bare is a 404 waiting to happen —
this is the exact bug that made the old privacy-policy link dead.

## Moving to a custom domain

Drop the `NEXT_PUBLIC_BASE_PATH` env line from the workflow, add a `CNAME` file
in `public/`, and set `NEXT_PUBLIC_SITE_URL` to the new origin so Open Graph
image URLs stay absolute and correct.

## Before the app goes live

`app/page.tsx` shows a non-clickable "Coming soon to the App Store" badge. Once
approved, replace that `<span className="appstore">` with a real link to
`https://apps.apple.com/app/id<YOUR_APP_ID>` — a comment marks the spot.

## Images

- `public/shots/` — real app screenshots, downscaled from `tools/appstore_raw/`.
  Only Vera's own **fictional demo products** appear (Crunchland, Nordby,
  Morning Co.). Never ship a real brand's packaging in Vera's marketing.
- `public/photos/` — lifestyle stills. The bars shown are invented brands
  (NORR, TRAIL BAR), not real products.

## Keeping it honest

The copy makes specific factual claims that must keep matching the shipping app.
These were verified against the source on 2026-07-28:

- **Vera is subscription-only.** `ContentView.swift:34` renders
  `PaywallView(locked: true)` as the entire app for any non-subscriber, and that
  paywall has no close button and `interactiveDismissDisabled`. There is **no
  free tier**. The site must never imply otherwise — an earlier version of this
  site claimed "Scanning is free. Always." and it was simply false.
- **Free trials depend on eligibility**, which Apple determines per user from
  the product's introductory offer (`PurchaseManager.swift`). Never state a
  fixed trial length on the site — the app reads the real one from StoreKit.
- The privacy policy lists every service the app contacts and what is sent.

If the paywall or the app's networking changes, update these pages in the same
commit. A privacy policy or pricing page that doesn't match the build turns a
routine App Review into a rejection.
