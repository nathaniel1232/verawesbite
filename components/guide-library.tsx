'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { Guide, GuideTopic } from '@/lib/guides'
import { GUIDE_TOPICS } from '@/lib/guide-topics'

type GuideSummary = Pick<
  Guide,
  'slug' | 'title' | 'heading' | 'description' | 'question' | 'answer' | 'topic'
>

export function GuideLibrary({ guides }: { guides: GuideSummary[] }) {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState<GuideTopic | 'all'>('all')
  const filtered = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    return guides.filter((guide) => {
      if (topic !== 'all' && guide.topic !== topic) return false
      const text =
        `${guide.title} ${guide.description} ${guide.question} ${guide.answer}`.toLowerCase()
      return terms.every((term) => text.includes(term))
    })
  }, [guides, query, topic])

  return (
    <div id="library" className="guide-library">
      <div className="library-tools">
        <div>
          <span className="eyebrow">Find your next answer</span>
          <h2>Explore the guides.</h2>
        </div>
        <div className="guide-search">
          <label htmlFor="guide-search">Search guides</label>
          <input
            id="guide-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try milk, Primal, or barcode…"
          />
        </div>
      </div>
      <div
        className="guide-filters"
        role="group"
        aria-label="Filter guides by topic"
      >
        <button
          type="button"
          aria-pressed={topic === 'all'}
          onClick={() => setTopic('all')}
        >
          All guides <span>{guides.length}</span>
        </button>
        {GUIDE_TOPICS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={topic === item.id}
            onClick={() => setTopic(item.id)}
          >
            {item.label}{' '}
            <span>
              {guides.filter((guide) => guide.topic === item.id).length}
            </span>
          </button>
        ))}
      </div>
      <p className="guide-results" role="status">
        {filtered.length} {filtered.length === 1 ? 'guide' : 'guides'}
        {topic !== 'all'
          ? ` in ${GUIDE_TOPICS.find((item) => item.id === topic)?.label}`
          : ''}
        {query.trim() ? ` matching “${query.trim()}”` : ''}
      </p>
      {filtered.length ? (
        <ul className="library-grid">
          {filtered.map((guide) => (
            <li key={guide.slug}>
              <Link className="library-card" href={`/guides/${guide.slug}/`}>
                <span className="guide-card-topic">
                  {GUIDE_TOPICS.find((item) => item.id === guide.topic)?.label}
                </span>
                <h3>{guide.heading}</h3>
                <p>{guide.description}</p>
                <span className="guide-card-bottom">
                  Read the guide <span aria-hidden="true">↗</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="guide-empty">
          <h3>No guides found.</h3>
          <p>Try a food or a shorter search, or browse the full library.</p>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setQuery('')
              setTopic('all')
            }}
          >
            Show all guides
          </button>
        </div>
      )}
    </div>
  )
}
