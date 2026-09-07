import type { Metadata } from 'next'
import Link from 'next/link'
import { Prose, CONTACT_EMAIL } from '@/components/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'How to reach the person who makes Optimally: support, data corrections, privacy requests, press and partnerships.',
}

const TOPICS = [
  {
    h: 'Something in the app is broken',
    p: 'Include your iPhone model and iOS version if you can. A screenshot usually saves a round trip.',
  },
  {
    h: "A product's data is wrong",
    p: 'Send the barcode. The app’s verdict screen also has a "report a data issue" link that fills the barcode in for you.',
  },
  {
    h: 'You disagree with a score',
    p: 'Genuinely welcome. Tell me the ingredient and why. Every rule Optimally applies is published with the research behind it, and I’d rather be corrected than consistent-and-wrong.',
  },
  {
    h: 'Press, partnerships and creators',
    p: 'Same address. Note that no brand can pay for a better score, or for placement. That isn’t a negotiating position, it’s the product.',
  },
]

export default function Contact() {
  return (
    <Prose title="Contact">
      <p>
        Optimally is made by one person. There&rsquo;s no ticket queue and no support
        bot. Your email goes straight to me.
      </p>

      <div className="bigcontact">
        <div className="k">Email</div>
        <div className="v">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
        <p>One address for everything. I aim to reply within a few days.</p>
      </div>

      <h2>Who you&rsquo;re writing to</h2>
      <p>
        <strong>Nathaniel Fiskå</strong>, sole trader, based in Norway. I build
        Optimally, write the scoring rules, and answer the email.
      </p>

      <h2>What to write about</h2>
      <div className="rows">
        {TOPICS.map((t) => (
          <div className="row" key={t.h}>
            <h3>{t.h}</h3>
            <p>{t.p}</p>
          </div>
        ))}
        <div className="row">
          <h3>Billing, refunds or restoring a purchase</h3>
          <p>
            Check <Link href="/support/">Support</Link> first. Most of these are
            handled by Apple rather than by me, and it&rsquo;s faster. If
            it&rsquo;s still stuck, write.
          </p>
        </div>
        <div className="row">
          <h3>Privacy requests</h3>
          <p>
            Deletion or questions about data. See the{' '}
            <Link href="/privacy/">Privacy Policy</Link> for what&rsquo;s
            actually held. It&rsquo;s very little, and there are no accounts.
          </p>
        </div>
      </div>

      <h2>What I can&rsquo;t help with</h2>
      <ul>
        <li>
          <strong>Refunds.</strong> Apple processes every payment, so refunds go
          through{' '}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>
          . I have no ability to issue one.
        </li>
        <li>
          <strong>Medical or dietary advice.</strong> I&rsquo;m not qualified to
          give it, and Optimally isn&rsquo;t either. Please talk to a professional.
        </li>
        <li>
          <strong>Confirming a product is safe for an allergy.</strong> Never
          rely on Optimally or on me for that. Read the physical packaging.
        </li>
      </ul>

      <div className="note">
        Optimally&rsquo;s scores are an information tool, not medical advice. Always
        check the physical packaging for allergen information. Only the label in
        your hand is authoritative.
      </div>
    </Prose>
  )
}
