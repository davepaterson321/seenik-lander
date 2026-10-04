import type { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrandTopBar } from '@/app/components/BrandTopBar';
import { SiteFooter } from '@/app/components/SiteFooter';
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/app/config';
import '@/styles/index.css';

const linkClass =
  'underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white transition-colors';

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
    </a>
  );
}

function EmailLink() {
  return (
    <a href={CONTACT_MAILTO} className={linkClass}>
      {CONTACT_EMAIL}
    </a>
  );
}

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mt-14 md:mt-16">
      <h2 className="type-heading uppercase tracking-[0.15em] font-light text-white">{heading}</h2>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white dark">
      <BrandTopBar breadcrumbs={[{ label: 'Privacy policy' }]} />

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 type-body-lg text-gray-300 leading-relaxed">
        <h1 className="type-heading-xl font-light leading-snug text-white">SEENIK Privacy Policy</h1>
        <p className="mt-4 type-overline uppercase tracking-[0.3em] text-white/60">Last updated: 4 October 2026</p>

        <Section heading="Who we are">
          <p>
            SEENIK (&ldquo;we&rdquo;, &ldquo;us&rdquo;) sells printed panoramic backdrops for model and toy soldier
            collectors. We are the data controller for the personal information collected through seenik.co.uk, which
            means we decide how it is used. You can contact us at <EmailLink />.
          </p>
          <p>We handle your information in line with the UK GDPR and the Data Protection Act 2018.</p>
        </Section>

        <Section heading="What information we collect">
          <p>
            The only personal information we collect through this website is your{' '}
            <strong className="font-medium text-white">email address</strong>, which you enter in our sign-up form. We
            also keep the date and time of your sign-up, so we have a record of when you agreed to hear from us.
          </p>
          <p>
            We do not ask for your name, address, phone number or payment details on this website, and there are no
            customer accounts. If you email us directly, we receive your email address and your message, and we use them
            only to reply.
          </p>
        </Section>

        <Section heading="Why we use it and our legal basis">
          <p>
            We use your email address to send you the SEENIK newsletter: news of new backdrop releases, restocks, and
            shows we are attending. We expect to email roughly once a month.
          </p>
          <p>
            Our legal basis is your <strong className="font-medium text-white">consent</strong> (Article 6(1)(a) UK
            GDPR), which you give when you submit the sign-up form. You can withdraw it at any time, and doing so does
            not affect anything we did before. We do not use your address for anything else, and we do not email people
            who have not signed up.
          </p>
        </Section>

        <Section heading="Who we share it with">
          <p>
            We never sell or rent your email address. We use one service to handle it, which acts on our instructions as
            our data processor:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong className="font-medium text-white">MailerLite</strong> (our email marketing platform) stores your
              address and sends our newsletters. MailerLite also records whether an email is opened and which links are
              clicked, so we can see what readers find useful. Read{' '}
              <ExternalLink href="https://www.mailerlite.com/legal/privacy-policy">
                MailerLite&rsquo;s privacy policy
              </ExternalLink>
              .
            </li>
          </ul>
          <p>
            MailerLite stores your data in the European Union. If it is ever handled outside the UK or EU, it must be
            protected to an equivalent standard. We may also disclose information if the law requires it.
          </p>
        </Section>

        <Section heading="How long we keep it and how we protect it">
          <p>
            We keep your email address for as long as you stay subscribed. If you unsubscribe or ask us to delete it, we
            remove it from MailerLite.
          </p>
          <p>
            Access to our MailerLite account is limited to the people who run SEENIK. MailerLite keeps subscriber data in
            a data centre in the European Union that holds ISO 27001 security certification.
          </p>
        </Section>

        <Section heading="Your rights and how to unsubscribe">
          <p>
            You can unsubscribe at any time using the link at the bottom of every newsletter, or by emailing{' '}
            <EmailLink />.
          </p>
          <p>Under UK data protection law you also have the right to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>ask for a copy of the personal information we hold about you</li>
            <li>have inaccurate information corrected</li>
            <li>have your information deleted</li>
            <li>restrict or object to how we use it</li>
            <li>withdraw your consent at any time</li>
            <li>receive your information in a portable format</li>
          </ul>
          <p>
            Email us to use any of these rights and we will respond within one month. If you are unhappy with how we have
            handled your information, you can complain to the Information Commissioner&rsquo;s Office at{' '}
            <ExternalLink href="https://ico.org.uk">ico.org.uk</ExternalLink> or on 0303 123 1113. We would appreciate
            the chance to put things right first.
          </p>
        </Section>

        <Section heading="Cookies, our website host and eBay">
          <p>
            <strong className="font-medium text-white">Cookies.</strong> This website does not set any cookies or store
            anything else in your browser, so there is no cookie banner.
          </p>
          <p>
            <strong className="font-medium text-white">Website hosting.</strong> Our website is hosted on GitHub Pages.
            Like most hosts, GitHub may log technical information such as your IP address and browser type when you
            visit. This is used only to keep the site secure and running.
          </p>
          <p>
            <strong className="font-medium text-white">eBay.</strong> If you buy from our eBay store, eBay handles your
            account and payment under its own privacy notice. eBay passes us your name and delivery address so we can
            post your order, and we use them only to fulfil and support that order. This policy covers seenik.co.uk
            only; eBay and other sites we link to have their own policies.
          </p>
        </Section>

        <Section heading="Changes to this policy and contact">
          <p>
            If we change how we use your information, we will update this page and the date at the top. Questions about
            this policy or your information: <EmailLink />.
          </p>
        </Section>
      </article>

      <SiteFooter />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<PrivacyPage />);
