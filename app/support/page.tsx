import type { Metadata } from 'next'
import Link from 'next/link'
import { Prose, CONTACT_EMAIL } from '@/components/site'

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Help with Optimally: subscriptions, restoring purchases, missing products, wrong data, and how to reach a human.',
}

export default function Support() {
  return (
    <Prose title="Support">
      <p>
        A real person reads every message. If something in the app is wrong,
        telling us is genuinely useful. A lot of Optimally&rsquo;s accuracy comes
        from people reporting bad data.
      </p>

      <div className="bigcontact">
        <div className="k">Email us</div>
        <div className="v">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
        <p>
          We aim to reply within a few days. Including the product&rsquo;s
          barcode and a screenshot makes almost every issue faster to fix.
        </p>
      </div>

      <h2>Subscriptions &amp; billing</h2>

      <h3 id="cancel">How do I cancel?</h3>
      <p>
        Optimally is billed by Apple, so it is cancelled in iOS Settings, not inside
        the app:
      </p>
      <ol>
        <li>
          Open the <strong>Settings</strong> app on your iPhone.
        </li>
        <li>Tap your name at the very top.</li>
        <li>
          Tap <strong>Subscriptions</strong>.
        </li>
        <li>
          Tap <strong>Optimally</strong>, then <strong>Cancel Subscription</strong>.
        </li>
      </ol>
      <p>
        You keep access until the end of the period you already paid for. If you
        cancel during a free trial, you are not charged, but do it at least 24
        hours before the trial ends, because Apple bills at the moment the trial
        expires.
      </p>

      <h3>Is there a free version?</h3>
      <p>
        No. Optimally is a paid subscription, and after the introductory questions
        you&rsquo;ll be asked to subscribe before you can scan. We&rsquo;d rather
        say that plainly here than have you find out after downloading. If a free
        trial is offered to you, its length and the price afterwards are shown
        before anything is charged, and cancelling during it costs you nothing.
      </p>
      <p>
        The reason is boring but real: subscribers are the only people Optimally
        answers to. No ads and no brand money is only credible if nobody else is
        paying the bills.
      </p>

      <h3>I paid but the app still isn&rsquo;t unlocked</h3>
      <p>
        Open the paywall in the app and tap <strong>Restore</strong>. That
        re-checks your Apple ID&rsquo;s purchases. Two things to confirm first:
        you are signed in with the <em>same</em> Apple ID you bought with, and
        the device has a working internet connection. If Restore still
        doesn&rsquo;t do it, email us with the date of purchase and we&rsquo;ll
        sort it out.
      </p>

      <h3>I want a refund</h3>
      <p>
        All Optimally purchases are processed by Apple, so refunds go through Apple
        rather than us. We have no ability to issue one. Request it at{' '}
        <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>{' '}
        with the Apple ID you purchased with. If the reason is that Optimally did
        something wrong, email us too, so we can fix it.
      </p>

      <h3>I have a creator code</h3>
      <p>
        Enter it on the subscribe screen via{' '}
        <strong>&ldquo;Have a creator code?&rdquo;</strong>, or in{' '}
        <strong>Settings &rarr; Redeem a creator code</strong> once you&rsquo;re
        in. Codes are not case-sensitive.
      </p>

      <h2>Scanning</h2>

      <h3>My product isn&rsquo;t found</h3>
      <p>
        Optimally looks products up in{' '}
        <a href="https://world.openfoodfacts.org">Open Food Facts</a>, an open
        database built by volunteers. It is very large but not complete, and
        coverage varies by country. If your product isn&rsquo;t there, the
        verdict screen has a link to add it. That takes a couple of minutes and
        means the next person who scans it gets a real score. You can also try
        the app&rsquo;s manual product search.
      </p>

      <h3>The score looks wrong</h3>
      <p>
        Two different things can cause this, and it&rsquo;s worth telling them
        apart:
      </p>
      <ul>
        <li>
          <strong>The ingredients are wrong or missing.</strong> That&rsquo;s the
          underlying database, and it&rsquo;s fixable. The verdict screen has a
          &ldquo;report a data issue&rdquo; link that emails us with the barcode
          attached.
        </li>
        <li>
          <strong>The ingredients are right but you disagree with the rating.</strong>{' '}
          That&rsquo;s our rules, and we want to hear it. Every rule in Optimally is
          published with the research behind it, in the app&rsquo;s Research tab.
          Email us the ingredient and what you think we got wrong.
        </li>
      </ul>

      <h3>The camera won&rsquo;t scan</h3>
      <p>
        Check that Optimally has camera access in{' '}
        <strong>Settings &rarr; Optimally &rarr; Camera</strong>. Barcodes read best
        in even light, with the whole code in frame and the phone held still for
        a moment. If the barcode is damaged or curved, use the app&rsquo;s manual
        search instead.
      </p>

      <h3>
        Why did the same product score differently in another app?
      </h3>
      <p>
        Because most scanners score differently on purpose. Optimally weights
        industrial seed oils, additives and degree of processing heavily, and it
        applies fixed rules rather than asking an AI, so Optimally gives the same
        product the same score every time, and shows you every ingredient that
        moved it. Whether you agree with those weightings is a fair question, and
        the research behind each one is in the app.
      </p>

      <h2>Your data</h2>

      <h3>How do I delete everything?</h3>
      <p>
        Open <strong>Settings &rarr; Reset everything</strong> in the app. That
        erases your profile, scan history, saved items and lists immediately and
        permanently. Deleting the app does the same. There is no account, so
        there&rsquo;s nothing left on a server afterwards.
      </p>

      <h3>What do you collect?</h3>
      <p>
        Very little, and never your name or email. There are no accounts. The
        full detail, service by service, is in the{' '}
        <Link href="/privacy/">Privacy Policy</Link>.
      </p>

      <h2>Everything else</h2>
      <p>
        Feature requests, bug reports, press, partnerships, or you just think we
        got something wrong.{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>email us</a>.
      </p>

      <div className="note">
        Optimally&rsquo;s scores are an information tool, not medical advice. If you
        have a medical condition, an allergy, or you&rsquo;re making a
        significant change to your diet, talk to a qualified professional. Always
        check the physical packaging for allergen information. Database records
        can be out of date, and only the label in your hand is authoritative.
      </div>
    </Prose>
  )
}
