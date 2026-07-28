# Vera — website

The public site for the Vera iOS app. Three static pages, no build step, no dependencies.

| Page | Purpose |
|---|---|
| `index.html` | Landing page |
| `privacy.html` | **Privacy Policy** — the URL submitted to App Store Connect, and linked from the app's paywall |
| `terms.html` | **Terms of Service** — the EULA URL for App Store Connect, and linked from the app's paywall |
| `support.html` | **Support** — the Support URL submitted to App Store Connect |
| `contact.html` | Contact / who to write to |

Governing law in `terms.html` is **Norwegian law**, and the operator is named as
Nathaniel Fiskå, sole trader, Norway. If that ever changes, section 1 and section
14 both need updating.

## Hosting

Served by GitHub Pages from the `main` branch, root folder.
Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.

All internal links are **relative** (`privacy.html`, not `/privacy.html`) so the site
works from a project-pages subpath as well as from a custom domain. Don't change them
to absolute paths without a custom domain in place — under `/<repo>/` an absolute
path resolves to the domain root and 404s.

## Two links that must stay alive

App Review opens both of these, and the app links to the privacy policy from its
paywall. If either 404s, the app gets rejected.

- Privacy Policy → also hardcoded in the app at `optimal tracker/DesignSystem.swift`
  (`AppBrand.privacyPolicyURL`). Change one, change the other.
- Terms of Service → likewise `AppBrand.termsURL`. That constant currently points
  at Apple's standard EULA; once this site is live it should point at
  `terms.html`, which incorporates Apple's EULA by reference.
- Support

## Before the app goes live

`index.html` currently shows a non-clickable "Coming soon to the App Store" badge.
Once the app is approved, replace that `<span class="appstore soon">` with a real
link to `https://apps.apple.com/app/id<YOUR_APP_ID>` — there's a comment marking
the exact spot.

## Keeping it honest

The copy makes specific factual claims that must keep matching the shipping app:

- Scanning, scores and the ingredient breakdown are **free with no scan limit**.
- Pro gates **cleaner alternatives** and the **Clean Score trend chart**.
- The privacy policy lists every service the app contacts and what is sent to each.

If the paywall or the app's networking changes, update these pages in the same
commit. A privacy policy that doesn't match the build is the kind of thing that
turns a routine App Review into a rejection.
