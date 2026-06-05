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
  EBAY_POLAR_FORTRESS_LISTING_URL,
  EBAY_DESERT_CITADEL_LISTING_URL,
} from '@/app/config';

import WHSnowFortress from '../../assets/showcase/WH-snow-fortress.jpg';
import WHSandCitadel from '../../assets/showcase/WH-sand-citadel.jpg';

type FantasyItem = {
  src: string;
  alt: string;
  title: string;
  ebayUrl: string;
};

const fantasyItems: FantasyItem[] = [
  {
    src: WHSnowFortress,
    alt: 'Polar Fortress fantasy wargame backdrop',
    title: 'Polar Fortress',
    ebayUrl: EBAY_POLAR_FORTRESS_LISTING_URL,
  },
  {
    src: WHSandCitadel,
    alt: 'Desert Citadel fantasy wargame backdrop',
    title: 'Desert Citadel',
    ebayUrl: EBAY_DESERT_CITADEL_LISTING_URL,
  },
];

export function FantasyShowcaseCarousel() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideCount, setSlideCount] = useState(0);
  // Track whether all slides fit on screen so we can hide the nav pill
  const [allVisible, setAllVisible] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;

    const update = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
      setSlideCount(carouselApi.scrollSnapList().length);
      // When there's only one scroll snap, all slides are in view
      setAllVisible(carouselApi.scrollSnapList().length <= 1);
    };

    update();
    carouselApi.on('select', update);
    carouselApi.on('reInit', update);

    return () => {
      carouselApi.off('select', update);
      carouselApi.off('reInit', update);
    };
  }, [carouselApi]);

  return (
    <div className="mb-14 md:mb-16">
      <div className="mb-5 md:mb-7 text-center">
        <h3 className="type-heading-lg uppercase tracking-[0.2em] text-white font-light">
          Fantasy &amp; wargaming
        </h3>
      </div>

      <Carousel
        opts={{ loop: false, align: 'start' }}
        setApi={setCarouselApi}
        aria-label="Fantasy in-stock backdrop listings"
        className="w-full"
      >
        <CarouselContent className="ml-0 -mr-4">
          {fantasyItems.map((item) => (
            <CarouselItem
              key={item.src}
              // Mobile: one full-width card with the second peeking in from the right
              // md+: both cards fully visible side by side
              className="pl-0 pr-4 basis-[88%] md:basis-1/2"
            >
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center block"
                />

                <div className="absolute inset-x-0 bottom-0 px-5 pt-16 pb-5 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <h4 className="type-heading text-white uppercase tracking-[0.12em] font-light mb-3 break-words">
                    {item.title}
                  </h4>
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
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation pill — hidden on desktop once all cards fit in view */}
        {!allVisible && (
          <div className="mt-3 flex justify-center z-20">
            <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/70 px-2 py-1.5 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!carouselApi}
                aria-label="Previous fantasy backdrop"
                className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="size-4" />
              </button>

              <div
                className="min-w-[4.5rem] text-center type-overline tracking-[0.18em] text-white/70 uppercase select-none tabular-nums"
                aria-live="polite"
                aria-atomic="true"
              >
                {currentSlide} / {slideCount || fantasyItems.length}
              </div>

              <button
                type="button"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!carouselApi}
                aria-label="Next fantasy backdrop"
                className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </Carousel>
    </div>
  );
}
