import Seenik from '@/imports/Seenik';
import { EmailCaptureSection } from '@/app/components/EmailCaptureSection';
import { SocialLinks } from '@/app/components/SocialLinks';
import { CONTACT_MAILTO, FOOTER_NAV_ITEMS, MAIN_NAV_ITEMS } from '@/app/config';

const linkClass =
  'inline-flex min-h-8 items-center type-body text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors cursor-pointer';

const headingClass = 'type-overline uppercase tracking-[0.3em] text-white/60 mb-4';

/** Sitewide footer, including the email sign-up. The last thing on every page. */
export function SiteFooter() {
  const pageLinks = [
    ...MAIN_NAV_ITEMS.filter((item) => item.desktop),
    ...FOOTER_NAV_ITEMS,
    { label: 'Get in touch', href: CONTACT_MAILTO },
  ];

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-16 md:py-20">
      {/* Mobile order: sign-up, links, follow us, logo. Desktop: links and logo stacked left, follow us in the middle, card right. */}
      <div className="max-w-[1500px] mx-auto grid gap-12 lg:grid-cols-[1fr_1fr_minmax(0,28rem)] lg:grid-rows-[1fr_auto] lg:gap-x-16">
        <nav aria-labelledby="footer-links-heading" className="lg:col-start-1 lg:row-start-1">
          <h2 id="footer-links-heading" className={headingClass}>
            Useful links
          </h2>
          <ul className="flex flex-col gap-2">
            {pageLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-start-2 lg:row-start-1">
          <h2 className={headingClass}>Follow us</h2>
          <SocialLinks className="-ml-[13px]" />
        </div>

        <div className="order-first lg:order-none lg:col-start-3 lg:row-start-1 lg:row-span-2">
          <EmailCaptureSection />
        </div>

        <a href="/" aria-label="SEENIK home" className="block w-32 sm:w-[9.6rem] lg:col-start-1 lg:row-start-2 lg:self-end">
          <Seenik />
        </a>
      </div>
    </footer>
  );
}
