import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import {
  EBAY_GULF_WAR_LISTING_URL,
  EBAY_JACOBEAN_LISTING_URL,
  EBAY_NAPOLEONIC_LISTING_URL,
  EBAY_STALINGRAD_LISTING_URL,
} from '@/app/config';

import WHSnowFortress from '../../assets/showcase/WH-snow-fortress.jpg';
import WHSandCitadel from '../../assets/showcase/WH-sand-citadel.jpg';
import Napoleonic from '../../assets/showcase/napoleonic.jpg';
import NorthAfrica from '../../assets/showcase/north-africa.jpg';
import CivilWar from '../../assets/showcase/civil-war.jpg';
import OilFields from '../../assets/showcase/oil-fields.jpg';
import Jacobean from '../../assets/showcase/jacobean.jpg';
import Stalingrad from '../../assets/showcase/stalingrad.jpg';

type BuyNowImage = {
  src: string;
  alt: string;
  title: string;
  blurb?: string;
  ebayUrl: string;
  categoryTag?: string;
};

type ComingSoonImage = {
  src: string;
  alt: string;
  title: string;
  categoryTag?: string;
};

const buyNowItems: BuyNowImage[] = [
  {
    src: Stalingrad,
    alt: 'Stalingrad battle backdrop',
    title: 'WW2 EASTERN FRONT',
    ebayUrl: EBAY_STALINGRAD_LISTING_URL,
  },
  {
    src: Jacobean,
    alt: 'Jacobean battle backdrop',
    title: 'Jacobean / ECW',
    ebayUrl: EBAY_JACOBEAN_LISTING_URL,
  },
  {
    src: Napoleonic,
    alt: 'Napoleonic backdrop',
    title: 'Napoleonic',
    ebayUrl: EBAY_NAPOLEONIC_LISTING_URL,
  },
  {
    src: OilFields,
    alt: 'Gulf War backdrop',
    title: 'GULF WAR',
    ebayUrl: EBAY_GULF_WAR_LISTING_URL,
  },
];

const comingSoonItems: ComingSoonImage[] = [
  {
    src: NorthAfrica,
    alt: 'North Africa backdrop',
    title: 'North Africa',
  },
  {
    src: CivilWar,
    alt: 'American Civil War backdrop',
    title: 'Civil War',
  },
  {
    src: WHSandCitadel,
    alt: 'Desert citadel backdrop',
    title: 'Desert Citadel',
    categoryTag: 'Fantasy',
  },
  {
    src: WHSnowFortress,
    alt: 'Snow fortress backdrop',
    title: 'Snow Fortress',
    categoryTag: 'Fantasy',
  },
];

export function ShowcaseGallery() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselIndicator = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
      setSlideCount(carouselApi.scrollSnapList().length);
    };

    updateCarouselIndicator();
    carouselApi.on('select', updateCarouselIndicator);
    carouselApi.on('reInit', updateCarouselIndicator);

    return () => {
      carouselApi.off('select', updateCarouselIndicator);
      carouselApi.off('reInit', updateCarouselIndicator);
    };
  }, [carouselApi]);

  return (
    <section
      id="showcase-gallery"
      className="py-6 md:py-8 relative overflow-hidden bg-black px-4 md:px-8 lg:px-10"
      aria-label="Backdrop showcase"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="mb-14 md:mb-16">
          <div className="mb-5 md:mb-7 text-center">
            <h3 className="type-heading-lg uppercase tracking-[0.2em] text-white font-light">
              Shop in-stock backdrops
            </h3>
            <p className="mt-3 type-body text-gray-300 tracking-wide">
              Available to purchase securely today through our eBay listings.
            </p>
          </div>

          <Carousel
            opts={{ loop: buyNowItems.length > 1, align: 'start' }}
            setApi={setCarouselApi}
            aria-label="In-stock backdrop listings"
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {buyNowItems.map((item) => (
                <CarouselItem key={item.src} className="pl-0 basis-full">
                  <div className="relative w-full h-[24rem] sm:h-[28rem] md:h-[34rem] lg:h-[40rem] xl:h-[44rem]">
                    <ImageWithFallback
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center block"
                    />

                    <div className="absolute inset-x-0 bottom-0 px-6 pt-24 pb-6 md:px-12 md:pr-44 md:pt-28 md:pb-6 lg:px-20 lg:pr-48 lg:pt-24 bg-gradient-to-t from-black via-black/70 to-transparent">
                      <div className="max-w-3xl">
                        {item.categoryTag ? (
                          <span className="mb-2 inline-block rounded border border-white/25 bg-white/5 px-2 py-0.5 type-overline font-medium uppercase tracking-[0.2em] text-white/85">
                            {item.categoryTag}
                          </span>
                        ) : null}
                        <h4 className="type-heading-prominent text-white uppercase tracking-[0.12em] font-light mb-3 break-words">
                          {item.title}
                        </h4>
                        {item.blurb ? (
                          <p className="type-body text-gray-300 leading-relaxed max-w-xl mb-6 break-words">
                            {item.blurb}
                          </p>
                        ) : null}
                        <a
                          href={item.ebayUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 type-control uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors"
                        >
                          <span>View on eBay</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-3 flex justify-center md:absolute md:bottom-6 md:right-6 md:mt-0 md:justify-end z-20">
              <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/70 px-2 py-1.5 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => carouselApi?.scrollPrev()}
                  disabled={!carouselApi}
                  aria-label="Previous in-stock backdrop"
                  className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="size-4" />
                </button>

                <div
                  className="min-w-[4.5rem] text-center type-overline tracking-[0.18em] text-white/70 uppercase select-none tabular-nums"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {currentSlide} / {slideCount || buyNowItems.length}
                </div>

                <button
                  type="button"
                  onClick={() => carouselApi?.scrollNext()}
                  disabled={!carouselApi}
                  aria-label="Next in-stock backdrop"
                  className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </Carousel>
        </div>

        <div>
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
                <div className="relative h-56 md:h-64">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center block"
                  />
                  <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gradient-to-t from-black via-black/65 to-transparent">
                    {item.categoryTag ? (
                      <span className="mb-2 inline-block rounded border border-white/25 bg-white/5 px-2 py-0.5 type-overline font-medium uppercase tracking-[0.2em] text-white/85">
                        {item.categoryTag}
                      </span>
                    ) : null}
                    <h4 className="type-title text-white uppercase tracking-[0.12em] font-light break-words">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="px-4 py-4 md:px-5 md:py-5">
                  <a
                    href="#newsletter-signup"
                    onClick={(event) => {
                      event.preventDefault();
                      document.getElementById('newsletter-signup')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                    className="inline-flex items-center gap-2 type-control uppercase tracking-[0.18em] text-white border-b border-white/35 pb-1 hover:border-white transition-colors"
                  >
                    <span>Get alerts</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
