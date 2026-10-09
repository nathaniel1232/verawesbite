'use client'

import { useRef } from 'react'
import Link from 'next/link'

export function MobileNav() {
  const menu = useRef<HTMLDetailsElement>(null)
  const close = () => {
    if (menu.current) menu.current.open = false
  }
  return (
    <details
      className="mobile-menu"
      ref={menu}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          close()
          menu.current?.querySelector('summary')?.focus()
        }
      }}
    >
      <summary aria-label="Open navigation">
        <span aria-hidden="true">☰</span>
      </summary>
      <nav aria-label="Mobile navigation">
        <Link href="/#app" onClick={close}>
          The app
        </Link>
        <Link href="/#approach" onClick={close}>
          Our approach
        </Link>
        <Link href="/#story" onClick={close}>
          Our story
        </Link>
        <Link href="/#evidence" onClick={close}>
          The evidence
        </Link>
        <Link href="/#questions" onClick={close}>
          Questions
        </Link>
        <Link href="/support/" onClick={close}>
          Support
        </Link>
      </nav>
    </details>
  )
}
