import { ArrowRight } from 'lucide-react';

import { ImageWithFallback } from './figma/ImageWithFallback';

import WHArmageddon from '../../assets/showcase/WH-armageddon.jpg';
import CivilWar from '../../assets/showcase/civil-war.jpg';
import SouthAfrica from '../../assets/showcase/south-africa.jpg';

type ComingSoonImage = {
  src: string;
  alt: string;
  title: string;
  categoryTag?: string;
};

const comingSoonItems: ComingSoonImage[] = [
  {
    src: WHArmageddon,
    alt: 'Armageddon backdrop',
    title: 'Armageddon',
    categoryTag: 'Fantasy',
  },
  {
    src: CivilWar,
    alt: 'American Civil War backdrop',
    title: 'Civil War',
  },
  {
    src: SouthAfrica,
    alt: 'South Africa backdrop',
    title: 'South Africa',
  },
];

export function UpcomingBackdrops() {
  return (
    <section
      aria-label="Upcoming backdrops"
      className="bg-[#0B0B0B] py-10 md:py-14 px-4 md:px-8 lg:px-10"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="max-w-3xl mb-6 md:mb-8">
          <h3 className="type-heading-lg uppercase tracking-[0.2em] text-white font-light">
            Upcoming backdrops
          </h3>
          <p className="mt-3 type-body text-gray-300 leading-relaxed">
            Confirmed upcoming releases. Join the list for first availability alerts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {comingSoonItems.map((item) => (
            <article key={item.src} className="rounded-lg border border-white/10 overflow-hidden bg-black/20">
              <div className="relative h-64 md:h-72">
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center block"
                />
                <div className="absolute inset-x-0 bottom-0 px-4 pt-8 pb-4 bg-gradient-to-t from-black via-black/70 to-transparent md:px-5">
                  {item.categoryTag ? (
                    <span className="mb-2 inline-block rounded border border-white/25 bg-white/5 px-2 py-0.5 type-overline font-medium uppercase tracking-[0.2em] text-white/85">
                      {item.categoryTag}
                    </span>
                  ) : null}
                  <h4 className="type-title text-white uppercase tracking-[0.12em] font-light break-words">
                    {item.title}
                  </h4>
                  <a
                    href="#newsletter-signup"
                    onClick={(event) => {
                      event.preventDefault();
                      document.getElementById('newsletter-signup')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className="mt-2 inline-flex items-center gap-2 type-control uppercase tracking-[0.18em] text-white border-b border-white/35 pb-1 hover:border-white transition-colors"
                  >
                    <span>Get alerts</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
