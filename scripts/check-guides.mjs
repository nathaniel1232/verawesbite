import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { createRequire } from 'node:module'
import ts from 'typescript'

// Validate content relationships and the actual exported pages, including mirror builds.
const require = createRequire(import.meta.url)
const temporary = fs.mkdtempSync(
  path.join(os.tmpdir(), 'optimally-guide-check-'),
)
try {
  for (const name of [
    'guides',
    'guide-topics',
    'guides-approaches',
    'guides-foods',
    'guides-scanning',
    'guides-legacy',
  ]) {
    const source = fs.readFileSync(`lib/${name}.ts`, 'utf8')
    const compiled = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    })
    fs.writeFileSync(path.join(temporary, `${name}.js`), compiled.outputText)
  }
  const { GUIDES } = require(path.join(temporary, 'guides.js'))
  const slugs = new Set(GUIDES.map((guide) => guide.slug))
  assert.equal(slugs.size, GUIDES.length, 'Guide slugs must be unique')
  for (const field of ['title', 'heading', 'description'])
    assert.equal(
      new Set(GUIDES.map((guide) => guide[field])).size,
      GUIDES.length,
      `${field} must be unique`,
    )
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '')
  const root = path.resolve('out')
  const hub = fs.readFileSync(path.join(root, 'guides/index.html'), 'utf8')
  const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8')
  const canonical = 'https://www.optimallyapp.com'
  const words = (text) => text.trim().split(/\s+/).length
  const getJSONLD = (html) =>
    [
      ...html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      ),
    ].flatMap((match) => JSON.parse(match[1]))
  const counts = []
  let sourceCount = 0
  for (const guide of GUIDES) {
    assert.match(guide.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    assert.ok(
      words(guide.answer) <= 100,
      `${guide.slug}: answer exceeds 100 words`,
    )
    const contentWords = words(
      [
        guide.answer,
        ...guide.sections.flatMap((section) => section.p),
        ...(guide.faq ?? []).flatMap((faq) => [faq.q, faq.a]),
      ].join(' '),
    )
    assert.ok(contentWords >= 350, `${guide.slug}: needs substantive content`)
    counts.push(contentWords)
    assert.ok(
      guide.sections.length >= 3 &&
        guide.faq?.length >= 2 &&
        guide.sources?.length >= 2,
      `${guide.slug}: missing article content`,
    )
    assert.equal(
      new Set(guide.sections.map((section) => section.h)).size,
      guide.sections.length,
      `${guide.slug}: duplicate section`,
    )
    assert.match(guide.updatedISO, /^\d{4}-\d{2}-\d{2}$/)
    assert.equal(guide.updatedISO, '2026-10-09')
    assert.ok(
      ['approach', 'food', 'scanning', 'comparison'].includes(guide.topic),
    )
    for (const related of guide.related ?? [])
      assert.ok(
        slugs.has(related) && related !== guide.slug,
        `${guide.slug}: broken related link ${related}`,
      )
    assert.ok(
      (guide.related ?? []).length >= 3,
      `${guide.slug}: missing related links`,
    )
    for (const source of guide.sources)
      assert.equal(new URL(source.url).protocol, 'https:')
    sourceCount += guide.sources.length
    const route = `/guides/${guide.slug}/`
    const html = fs.readFileSync(path.join(root, route, 'index.html'), 'utf8')
    assert.equal(
      (html.match(/<h1(?:\s[^>]*)?>/g) ?? []).length,
      1,
      `${guide.slug}: must have one h1`,
    )
    assert.ok(
      html.includes(`rel="canonical" href="${canonical}${route}"`),
      `${guide.slug}: wrong canonical`,
    )
    assert.ok(
      html.includes(`property="og:url" content="${canonical}${route}"`),
      `${guide.slug}: wrong share URL`,
    )
    assert.ok(
      !/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html),
      `${guide.slug}: must be indexable`,
    )
    assert.ok(
      hub.includes(`href="${base}${route}"`),
      `${guide.slug}: not linked in server-rendered library`,
    )
    assert.ok(
      sitemap.includes(`${base}${route}</loc>`),
      `${guide.slug}: absent from sitemap`,
    )
    const data = getJSONLD(html)
    const article = data.find((entry) => entry['@type'] === 'Article')
    const breadcrumb = data.find((entry) => entry['@type'] === 'BreadcrumbList')
    assert.equal(article?.headline, guide.heading)
    assert.equal(article?.dateModified, guide.updatedISO)
    assert.equal(article?.mainEntityOfPage, `${canonical}${route}`)
    assert.equal(article?.author?.name, 'Optimally')
    assert.equal(
      breadcrumb?.itemListElement.at(-1)?.item,
      `${canonical}${route}`,
    )
    for (const source of guide.sources)
      assert.ok(article.citation.includes(source.url))
    // Check local links, assets and in-page navigation against real exported files.
    for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (href.startsWith('#')) {
        assert.ok(
          html.includes(`id="${href.slice(1)}"`),
          `${guide.slug}: broken anchor ${href}`,
        )
        continue
      }
      if (!href.startsWith('/') || href.startsWith('//')) continue
      const pathname = href.split(/[?#]/)[0]
      const local =
        base && pathname.startsWith(`${base}/`)
          ? pathname.slice(base.length)
          : pathname
      const candidate = path.join(root, decodeURIComponent(local))
      assert.ok(
        fs.existsSync(candidate) ||
          fs.existsSync(path.join(candidate, 'index.html')),
        `${guide.slug}: missing local target ${href}`,
      )
    }
  }
  const collection = getJSONLD(hub).find(
    (entry) => entry['@type'] === 'CollectionPage',
  )
  assert.equal(collection?.mainEntity?.numberOfItems, GUIDES.length)
  assert.equal(collection?.mainEntity?.itemListElement.length, GUIDES.length)
  for (const route of ['privacy', 'terms', 'support', 'contact'])
    assert.ok(fs.existsSync(path.join(root, route, 'index.html')))
  console.log(
    `PASS: ${GUIDES.length} unique guides; ${Math.min(...counts)}–${Math.max(...counts)} words each; ${sourceCount} source references; all related links, metadata, structured data, sitemap entries, anchors and local assets valid${base ? ` (mirror ${base})` : ' (official root)'}.`,
  )
} finally {
  fs.rmSync(temporary, { recursive: true, force: true })
}
