import { createRoot } from 'react-dom/client';
import { EBAY_STORE_URL } from '@/app/config';
import { BrandTopBar } from '@/app/components/BrandTopBar';
import { CollectionFooter } from '@/app/components/CollectionFooter';
import { EmailCaptureSection } from '@/app/components/EmailCaptureSection';
import { LandingSplitSection } from '@/app/components/LandingSplitSection';
import sandCitadel from '@/assets/showcase/WH-sand-citadel.jpg';
import gamingDice from '@/assets/tabletop-landing/gaming-dice.jpeg';
import northAfrica from '@/assets/tabletop-landing/north-africa.jpg';
import civilWar from '@/assets/tabletop-landing/civil-war.jpg';
import heroBackground from '@/assets/tabletop-landing/hero-background.png';
import '@/styles/index.css';

function TabletopGamingLandingPage() {
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
              Tabletop gaming
            </span>
            <h1 className="type-display uppercase tracking-[0.12em] font-light max-w-5xl leading-tight">
              Tabletop gaming backdrops for immersive battle scenes
            </h1>
            <p className="mt-6 type-lead text-gray-300 max-w-3xl leading-relaxed">
              SEENIK panoramic tabletop backdrops help wargamers build richer battlefield atmosphere across fantasy, futuristic and historical campaigns.
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
          overline="Scenario depth"
          heading="Built for immersive tabletop storytelling"
          imageSrc={gamingDice}
          imageAlt="Tabletop miniatures and dice in active play with a panoramic backdrop environment"
        >
          <ul>
            <li>Designed for common 28mm and 32mm miniature gaming, including 1:56 and 1:48 style tabletop setups.</li>
            <li>Suitable for Warhammer 40,000, Age of Sigmar, The Horus Heresy, Bolt Action, Flames of War, SAGA, Kings of War, and similar systems.</li>
            <li>From grimdark sci-fi sieges to high-fantasy clashes and legendary historical campaigns, each backdrop is built to make every battlefield feel cinematic.</li>
          </ul>
        </LandingSplitSection>
      </section>

      <section className="bg-black px-4 md:px-8 lg:px-10 pb-20 md:pb-24">
        <div className="max-w-[1500px] mx-auto">
          <span className="block type-overline uppercase tracking-[0.3em] text-white/50 mb-4">
            Backdrop range
          </span>
          <h2 className="type-heading-xl text-white uppercase tracking-[0.1em] font-light leading-tight">
            Backdrop range examples
          </h2>
          <p className="mt-6 type-body-lg text-gray-300 leading-relaxed max-w-4xl">
            Suitable for all roleplaying environments - from fantasy and futuristic worlds to the most infamous battles and historical campaigns.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:mt-10">
            <article className="rounded-lg border border-white/10 overflow-hidden bg-black/20">
              <img src={sandCitadel} alt="Desert Citadel fantasy tabletop gaming backdrop" className="w-full h-64 object-cover" />
              <p className="px-4 py-3.5 type-control text-gray-300 uppercase tracking-[0.12em]">Desert Citadel</p>
            </article>
            <article className="rounded-lg border border-white/10 overflow-hidden bg-black/20">
              <img src={northAfrica} alt="North Africa themed tabletop gaming backdrop" className="w-full h-64 object-cover" />
              <p className="px-4 py-3.5 type-control text-gray-300 uppercase tracking-[0.12em]">North Africa</p>
            </article>
            <article className="rounded-lg border border-white/10 overflow-hidden bg-black/20">
              <img src={civilWar} alt="Civil War themed tabletop gaming backdrop" className="w-full h-64 object-cover" />
              <p className="px-4 py-3.5 type-control text-gray-300 uppercase tracking-[0.12em]">Civil War</p>
            </article>
          </div>
          <p className="mt-10 type-body text-white/60 leading-relaxed max-w-5xl">
            SEENIK is an independent brand and is not affiliated with or endorsed by Games Workshop, Warlord Games, Battlefront, Mantic Games, Studio Tomahawk, or any other trademark owner. All trademarks are the property of their respective owners.
          </p>
        </div>
      </section>

      <CollectionFooter />
      <EmailCaptureSection />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<TabletopGamingLandingPage />);
