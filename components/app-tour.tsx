'use client'

import { useState } from 'react'
import Image from 'next/image'
import { asset } from '@/lib/asset'

const features = [
  {
    id: 'scan',
    number: '01',
    title: 'Understand the food in front of you.',
    text: 'Scan a product or meal, or photograph an ingredient label. Explore its food quality rating and the reasons behind it.',
    src: '/shots/apple-calibrated.jpg',
    alt: 'An apple rated 86 in Optimally, with an explanation of its modest protein and nutrient contribution',
    label: 'Understand your food',
    note: 'A score is the beginning of the explanation.',
  },
  {
    id: 'discover',
    number: '02',
    title: 'Find your everyday foods.',
    text: 'Explore nourishing staples and simple meal ideas. Build a rotation of foods you enjoy, with your preferences and exclusions in view.',
    src: '/photos/salmon-potatoes.jpg',
    alt: 'Cooked salmon, potatoes and carrots, a whole-food meal idea from Optimally',
    label: 'Make the next meal simpler',
    note: 'Familiar ingredients. Meals worth repeating.',
  },
  {
    id: 'nutrition',
    number: '03',
    title: 'Connect the bigger picture.',
    text: 'Keep a food log and explore the nutrition behind your choices, including available vitamin and mineral information. Follow the research when you want to go deeper.',
    src: '/shots/research.jpg',
    alt: 'Optimally’s research library with articles about food and ingredient evidence',
    label: 'Stay curious about nutrition',
    note: 'Understand the reasoning behind the recommendations.',
  },
]

export function AppTour() {
  const [active, setActive] = useState(0)
  const feature = features[active]
  return (
    <div className="app-tour">
      <div className="tour-options" aria-label="Explore app features">
        {features.map((f, i) => (
          <button
            key={f.id}
            type="button"
            className={i === active ? 'tour-option selected' : 'tour-option'}
            aria-pressed={i === active}
            aria-controls="tour-preview"
            onClick={() => setActive(i)}
          >
            <span className="tour-number">{f.number}</span>
            <span>
              <strong>{f.title}</strong>
              <span className="tour-description">{f.text}</span>
            </span>
            <span className="tour-toggle" aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
      </div>
      <div
        id="tour-preview"
        className={`tour-preview tour-${feature.id}`}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="tour-preview-heading">
          <Image src={asset('/veramark.png')} alt="" width={24} height={24} />
          <span>{feature.label}</span>
        </div>
        <div className="tour-image">
          <Image
            key={feature.src}
            src={asset(feature.src)}
            alt={feature.alt}
            width={600}
            height={feature.id === 'discover' ? 600 : 1304}
            sizes="(max-width: 760px) 80vw, 400px"
          />
        </div>
        <p className="tour-caption">{feature.note}</p>
      </div>
    </div>
  )
}
