import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import {
  EBAY_JACOBEAN_LISTING_URL,
  EBAY_STALINGRAD_LISTING_URL,
} from '@/app/config';

import WHSandCitadel from '../../assets/showcase/WH-sand-citadel.jpg';
import WHSnowFortress from '../../assets/showcase/WH-snow-fortress.jpg';
import Napoleonic from '../../assets/showcase/napoleonic.jpg';
import OilFields from '../../assets/showcase/oil-fields.jpg';
import NorthAfrica from '../../assets/showcase/north-africa.jpg';
import CivilWar from '../../assets/showcase/civil-war.jpg';
import Jacobean from '../../assets/showcase/jacobean.jpg';
import Stalingrad from '../../assets/showcase/stalingrad.jpg';

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  blurb?: string;
  ebayUrl?: string;
  comingSoonLabel?: string;
  categoryTag?: string;
};

export function ShowcaseGallery() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideCount, setSlideCount] = useState(0);

  const images = useMemo<GalleryImage[]>(
    () => [
      {
        src: Stalingrad,
        alt: 'Stalingrad battle backdrop',
        title: 'Stalingrad',
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
        comingSoonLabel: 'Coming soon',
      },
      {
        src: OilFields,
        alt: 'Modern oil fields backdrop',
        title: 'Oil Fields',
        comingSoonLabel: 'Coming soon',
      },
      {
        src: NorthAfrica,
        alt: 'North Africa backdrop',
        title: 'North Africa',
        comingSoonLabel: 'Coming soon',
      },
      {
        src: CivilWar,
        alt: 'American Civil War backdrop',
        title: 'Civil War',
        comingSoonLabel: 'Coming soon',
      },
      {
        src: WHSandCitadel,
        alt: 'Desert citadel backdrop',
        title: 'Desert Citadel',
        categoryTag: 'Fantasy',
        comingSoonLabel: 'Coming soon',
      },
      {
        src: WHSnowFortress,
        alt: 'Snow fortress backdrop',
        title: 'Snow Fortress',
        categoryTag: 'Fantasy',
        comingSoonLabel: 'Coming soon',
      },
    ],
    [],
  );

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
        <div className="text-center py-6 md:py-8 lg:py-10 mb-4 md:mb-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl uppercase tracking-[0.28em] text-white/85 font-light">
            Introducing the SEENIK range
          </h2>
        </div>

        <Carousel
          opts={{ loop: true, align: 'start' }}
          setApi={setCarouselApi}
          aria-label="SEENIK backdrop showcase"
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {images.map((img) => (
              <CarouselItem key={img.src} className="pl-0 basis-full">
                <div className="relative w-full h-[24rem] sm:h-[28rem] md:h-[34rem] lg:h-[40rem] xl:h-[44rem]">
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center block"
                />

                {/* Cinematic caption */}
                <div className="absolute inset-x-0 bottom-0 px-6 pt-24 pb-6 md:px-12 md:pr-44 md:pt-28 md:pb-6 lg:px-20 lg:pr-48 lg:pt-24 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <div className="max-w-3xl">
                    {img.categoryTag ? (
                      <span className="mb-2 inline-block rounded border border-white/25 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/85 md:text-xs">
                        {img.categoryTag}
                      </span>
                    ) : null}
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-white uppercase tracking-[0.12em] font-light mb-3 break-words">
                      {img.title}
                    </h3>
                    {img.blurb ? (
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl mb-6 break-words">
                        {img.blurb}
                      </p>
                    ) : null}
                    {img.ebayUrl ? (
                      <a
                        href={img.ebayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors"
                      >
                        <span>View on eBay</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-white/70 border-b border-white/25 pb-1 cursor-default">
                        {img.comingSoonLabel ?? 'Coming soon'}
                      </span>
                    )}
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
                aria-label="Previous backdrop"
                className="inline-flex size-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="size-4" />
              </button>

              <div
                className="min-w-[4.5rem] text-center text-[10px] md:text-xs tracking-[0.18em] text-white/70 uppercase select-none tabular-nums"
                aria-live="polite"
                aria-atomic="true"
              >
                {currentSlide} / {slideCount || images.length}
              </div>

              <button
                type="button"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!carouselApi}
                aria-label="Next backdrop"
                className="inline-flex size-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
