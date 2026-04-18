import { createRoot } from 'react-dom/client';
import { EBAY_STORE_URL } from '@/app/config';
import { BrandTopBar } from '@/app/components/BrandTopBar';
import { CollectionFooter } from '@/app/components/CollectionFooter';
import { EmailCaptureSection } from '@/app/components/EmailCaptureSection';
import { LandingSplitSection } from '@/app/components/LandingSplitSection';
import cabinetView from '@/assets/displays-landing/cabinet-view.png';
import jacobean from '@/assets/displays-landing/jacobean.jpg';
import oilFields from '@/assets/displays-landing/oil-fields.jpg';
import heroBackground from '@/assets/displays-landing/hero-background.png';
import '@/styles/index.css';

function DisplaysLandingPage() {
  return (
    <main className="min-h-screen bg-black text-white dark">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        </div>

        <div className="relative z-10">
          <BrandTopBar />
          <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-10 pt-12 pb-20 md:pt-16 md:pb-24">
            <span className="block type-overline uppercase tracking-[0.3em] text-white/60 mb-4">
              Cabinets and shelves
            </span>
            <h1 className="type-display uppercase tracking-[0.12em] font-light max-w-5xl leading-tight">
              Display backdrops for cabinets, shelves and collector rooms
            </h1>
            <p className="mt-6 type-lead text-gray-300 max-w-3xl leading-relaxed">
              SEENIK panoramic display backdrops help collectors build museum-style scenes with added depth for toy soldiers, dioramas and close-up hobby photography.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
              <a
                href={EBAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors tracking-wide"
              >
                Buy now on eBay
              </a>
              <a
                href="#newsletter-signup"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById('newsletter-signup')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white hover:bg-white/10 transition-colors tracking-wide"
              >
                Get alerts
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 md:px-8 lg:px-10 py-20 md:py-24">
        <LandingSplitSection
          overline="Display-first format"
          heading="Built for collector presentation quality"
          imageSrc={cabinetView}
          imageAlt="Collector cabinet display using a panoramic backdrop behind miniatures"
        >
          <ul>
              <li>40 x 14.5 inch panoramic format suits long cabinets, shelves and diorama bays.</li>
              <li>Designed for 1:30 and 1:32 scale toy soldier collections and similar figure lines.</li>
              <li>Cut-to-fit flexibility gives cleaner installs across mixed cabinet widths.</li>
          </ul>
        </LandingSplitSection>
      </section>

      <section className="bg-black px-4 md:px-8 lg:px-10 pb-20 md:pb-24">
        <div className="max-w-[1500px] mx-auto">
          <div className="max-w-4xl mb-10 md:mb-12">
            <span className="block type-overline uppercase tracking-[0.3em] text-white/50 mb-4">
              Photography
            </span>
            <h2 className="type-heading-xl text-white uppercase tracking-[0.1em] font-light leading-tight">
              Hobby photography ready
            </h2>
            <p className="mt-6 type-body-lg text-gray-300 leading-relaxed">
              Use SEENIK photography-friendly backdrops to create clean horizon lines and cinematic depth behind miniatures, from quick shelf shots to planned collector photography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <article className="rounded-lg border border-white/10 overflow-hidden bg-black/20">
              <img src={jacobean} alt="Jacobean backdrop used for collector display photography" className="w-full h-64 md:h-72 object-cover" />
            </article>
            <article className="rounded-lg border border-white/10 overflow-hidden bg-black/20">
              <img src={oilFields} alt="Oil Fields backdrop for dramatic military model photography setups" className="w-full h-64 md:h-72 object-cover" />
            </article>
          </div>
        </div>
      </section>

      <CollectionFooter />
      <EmailCaptureSection />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<DisplaysLandingPage />);
