import type { Metadata } from 'next'
import Link from 'next/link'
import { Prose, CONTACT_EMAIL, APPLE_EULA } from '@/components/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms you agree to when you use the Optimally app, including subscription and billing terms.',
}

export default function Terms() {
  return (
    <Prose title="Terms of Service" effective>
      <div className="tldr">
        Short version: Optimally tells you what&rsquo;s in your food based on public
        ingredient data. It&rsquo;s an information tool, not medical advice, and
        the data isn&rsquo;t perfect. Always check the physical label,
        especially for allergies. Optimally is a paid subscription billed by Apple,
        and you cancel it in iOS Settings.
      </div>

      <h2>1. Who these terms are between</h2>
      <p>
        These terms are an agreement between you and{' '}
        <strong>Nathaniel Fiskå</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;), a
        sole trader based in Norway, operator of the Optimally iOS app and this
        website. Contact:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <p>
        By downloading or using Optimally, you agree to these terms. If you
        don&rsquo;t agree, don&rsquo;t use the app.
      </p>

      <h2>2. Apple&rsquo;s terms also apply</h2>
      <p>
        Optimally is distributed through the App Store, so Apple&rsquo;s{' '}
        <a href={APPLE_EULA}>
          Licensed Application End User License Agreement
        </a>{' '}
        also applies to your use of the app. Where these terms and Apple&rsquo;s
        standard EULA genuinely conflict, Apple&rsquo;s EULA governs your licence
        to use the software.
      </p>
      <p>
        You acknowledge that Apple is not a party to these terms, has no
        obligation to provide support for Optimally, and that any claim about the app
        itself is between you and us, not you and Apple. Apple is, however, a
        third-party beneficiary of these terms and may enforce them against you.
      </p>

      <h2>3. Your licence to use Optimally</h2>
      <p>
        We grant you a personal, non-transferable, non-exclusive licence to use
        Optimally on Apple devices you own or control, for your own non-commercial
        use. You may not sell, rent, sublicense or redistribute the app;
        reverse-engineer, decompile or otherwise attempt to extract its source
        code except where that restriction is prohibited by law; or scrape,
        bulk-extract or resell the scores and ratings it produces.
      </p>

      <h2>4. What Optimally is, and what it is not</h2>
      <p>
        Optimally reads publicly available ingredient data and applies a fixed set of
        published rules to produce a score. That&rsquo;s it. Specifically:
      </p>
      <ul>
        <li>
          <strong>Optimally is not medical, nutritional or dietary advice.</strong> It
          does not diagnose, treat, cure or prevent any condition. If you have a
          medical condition, are pregnant, or are making a significant change to
          your diet, speak to a qualified professional.
        </li>
        <li>
          <strong>Optimally is not an allergen check.</strong> Never rely on it to
          decide whether a product is safe for an allergy or intolerance.
          Database records can be incomplete, out of date, or wrong, and
          manufacturers change recipes without notice.{' '}
          <strong>Always read the physical packaging.</strong>
        </li>
        <li>
          <strong>Scores are our opinion, expressed consistently.</strong> They
          reflect a published set of rules and the research we cite for each one.
          Reasonable experts weight these factors differently, and other apps
          will score the same product differently on purpose.
        </li>
      </ul>

      <h2>5. Product data comes from third parties</h2>
      <p>
        Product information comes from{' '}
        <a href="https://world.openfoodfacts.org">Open Food Facts</a> and Open
        Beauty Facts, open databases built by volunteers and licensed under the{' '}
        <a href="https://opendatacommons.org/licenses/odbl/">
          Open Database License (ODbL)
        </a>
        . Recall information comes from openFDA, published by the U.S. Food and
        Drug Administration.
      </p>
      <p>
        We don&rsquo;t control that data and we don&rsquo;t guarantee it is
        accurate, complete or current. If a product&rsquo;s entry is wrong, the
        score built on it will be wrong too. Please tell us. See{' '}
        <Link href="/support/">Support</Link>.
      </p>

      <h2>6. Subscriptions and billing</h2>
      <ul>
        <li>
          <strong>Optimally is a paid app.</strong> After the introductory questions,
          an active subscription is required to use it. There is no free tier and
          no ad-supported version.
        </li>
        <li>
          Prices are shown in the app in your local currency before you buy, and{' '}
          <strong>all payments are processed by Apple</strong> through your Apple
          ID. We never see or handle your card details.
        </li>
        <li>
          Subscriptions <strong>renew automatically</strong> at the end of each
          period unless you cancel at least 24 hours before the period ends.
          Apple charges your Apple ID at confirmation of purchase and at each
          renewal.
        </li>
        <li>
          <strong>Free trials are offered where you are eligible.</strong>
          eligibility is determined by Apple, and someone who has already used an
          introductory offer in this subscription group will not be offered
          another. Where a trial is offered, its exact length and the price after
          it are shown before you confirm.{' '}
          <strong>Cancelling during a trial means you are not charged</strong>,
          but do it at least 24 hours before it ends, because Apple bills the
          moment it expires. Any unused portion of a trial is forfeited if you
          buy a subscription during it.
        </li>
        <li>
          <strong>Cancel in iOS Settings</strong> &rarr; your name &rarr;
          Subscriptions &rarr; Optimally. Deleting the app does not cancel a
          subscription. Step-by-step instructions are on our{' '}
          <Link href="/support/#cancel">Support page</Link>.
        </li>
        <li>
          <strong>Refunds are handled by Apple</strong>, not by us. We have no
          ability to issue one. Request one at{' '}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>
          .
        </li>
        <li>
          We may change prices or what a subscription includes. A price change
          never applies to a period you&rsquo;ve already paid for, and Apple will
          ask you to confirm before it takes effect on renewal.
        </li>
      </ul>

      <h2>7. Creator codes</h2>
      <p>
        We sometimes issue codes granting free access. Codes are for the person
        or audience they were issued to, and are not for sale or resale. We may
        invalidate a code in a future version of the app if it is published,
        shared at scale, or otherwise abused. A code has no cash value.
      </p>

      <h2>8. Acceptable use</h2>
      <p>
        Don&rsquo;t use Optimally to break the law, don&rsquo;t try to disrupt or
        overload our services or the third-party databases we rely on,
        don&rsquo;t attempt automated or bulk access to any endpoint the app
        uses, and don&rsquo;t misrepresent Optimally&rsquo;s scores as a safety
        certification, a medical assessment, or an official rating of any kind.
      </p>

      <h2>9. Our content</h2>
      <p>
        The Optimally name, logo, design, scoring rules, written ratings and
        explanatory text are ours and are protected by copyright and trade mark
        law. Data sourced from Open Food Facts remains under the ODbL and is
        attributed as such. You&rsquo;re welcome to share individual scores and
        score cards. That&rsquo;s what they&rsquo;re for.
      </p>

      <h2>10. Availability</h2>
      <p>
        We aim to keep Optimally working, but we don&rsquo;t promise uninterrupted
        service. Features that depend on external services (product lookups,
        alternatives, recall checks) can fail when those services are down, and
        the app is designed to degrade gracefully when they do. We may change,
        suspend or discontinue features, and if we discontinue a paid feature
        entirely we&rsquo;ll act reasonably about any subscription affected.
      </p>

      <h2>11. Disclaimers and liability</h2>
      <p>
        Optimally is provided &ldquo;as is&rdquo;. To the fullest extent permitted by
        law, we exclude implied warranties of merchantability, fitness for a
        particular purpose and non-infringement, and we are not liable for
        indirect or consequential loss, or for decisions you make based on a
        score.
      </p>
      <p>
        <strong>
          Nothing in these terms limits liability that cannot lawfully be limited
        </strong>{' '}
        including liability for death or personal injury caused by negligence,
        for fraud, or for any right you have as a consumer under Norwegian or EEA
        law. Where our liability can be limited, it is limited to the amount you
        paid us in the twelve months before the claim arose.
      </p>

      <h2>12. Ending this agreement</h2>
      <p>
        You can stop using Optimally and delete the app at any time. We may suspend or
        end your access if you materially breach these terms. Ending the
        agreement doesn&rsquo;t automatically refund a subscription. That goes
        through Apple.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may update these terms. We&rsquo;ll change the effective date at the
        top, and for material changes we&rsquo;ll flag it in the app. Continuing
        to use Optimally after a change means you accept the updated terms; if you
        don&rsquo;t, stop using the app and cancel any subscription.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These terms are governed by <strong>Norwegian law</strong>, and disputes
        fall to the Norwegian courts.
      </p>
      <p>
        If you&rsquo;re a consumer, this does not take away rights you have under
        the mandatory consumer law of your own country, and it does not stop you
        bringing a claim there. Consumers in Norway may also contact{' '}
        <a href="https://www.forbrukerradet.no">Forbrukerrådet</a> (the Norwegian
        Consumer Council), and consumers in the EU may use the European
        Commission&rsquo;s online dispute resolution platform.
      </p>

      <h2>15. General</h2>
      <p>
        If any part of these terms is found unenforceable, the rest continues to
        apply. Not enforcing a term isn&rsquo;t a waiver of it. These terms,
        together with our <Link href="/privacy/">Privacy Policy</Link> and
        Apple&rsquo;s standard EULA, are the whole agreement between us about
        Optimally.
      </p>

      <h2>16. Contact</h2>
      <p>
        Questions about these terms:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>, or see our{' '}
        <Link href="/contact/">Contact page</Link>.
      </p>

      <div className="note">
        Optimally&rsquo;s scores are an information tool, not medical advice. Always
        check the physical packaging for allergen information. Only the label in
        your hand is authoritative.
      </div>
    </Prose>
  )
}
