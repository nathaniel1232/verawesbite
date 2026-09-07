/**
 * Prefix a /public path with the deployment's basePath.
 *
 * WHY THIS EXISTS: next/link and next/image normally apply basePath for you —
 * but `images.unoptimized` (mandatory for `output: 'export'`) bypasses the
 * image loader, so <Image src="/x.png"> ships as literally "/x.png". On a
 * GitHub *project* page served from /<repo>/, that resolves to the domain root
 * and 404s. Metadata icons and Open Graph URLs have the same hole.
 *
 * So: every /public reference in this project goes through asset(). Verified by
 * building with NEXT_PUBLIC_BASE_PATH set and grepping the output — links were
 * prefixed, images were not.
 */
import { BASE_PATH } from './site'

export function asset(path: string): string {
  return `${BASE_PATH}${path}`
}
