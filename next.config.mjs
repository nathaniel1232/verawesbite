/**
 * Static export, because GitHub Pages serves files and cannot run a Node
 * server. `next build` writes a fully static site to ./out.
 *
 * basePath matters on GitHub *project* pages, where the site is served from
 * https://<user>.github.io/<repo>/ rather than the domain root. Set it in CI to
 * "/<repo>"; leave it empty for a custom domain or a user/organisation page.
 * next/link and next/image both prefix it automatically — which is exactly why
 * every internal link and image in this project goes through them rather than
 * through a bare <a href="/..."> or <img src="/...">, both of which would
 * resolve to the domain root and 404.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: {
    // Required for `output: 'export'` — there is no server to optimise on.
    unoptimized: true,
  },
}
