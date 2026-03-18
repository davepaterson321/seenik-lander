import { useMemo, useState } from 'react';

import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/app/components/ui/carousel';

import WHSandCitadel from '@/assets/showcase/WH-sand-citadel.jpg';
import Napoleonic from '@/assets/showcase/napoleonic.jpg';
import OilFields from '@/assets/showcase/oil-fields.jpg';

type GalleryImage = {
  src: string;
  alt: string;
};

export function ShowcaseGallery() {
  const images = useMemo<GalleryImage[]>(
    () => [
      { src: WHSandCitadel, alt: 'WH Sand Citadel backdrop' },
      { src: Napoleonic, alt: 'Napoleonic backdrop' },
      { src: OilFields, alt: 'Oil fields backdrop' },
    ],
    [],
  );

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  return (
    <section className="pt-0 md:pt-8 pb-32 relative overflow-hidden bg-black">
      <div className="w-full">
        {/* Desktop: 3-up grid */}
        <div className="hidden md:grid grid-cols-3 divide-x divide-white/10">
          {images.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden"
            >
              <div className="transition-transform duration-700 group-hover:scale-[1.03]">
                <div className="aspect-[1/1] lg:aspect-[4/3] 2xl:aspect-[16/9]">
                  <ImageWithFallback
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel controls */}
        <div
          className="md:hidden"
        >
          <Carousel
            opts={{ loop: false }}
            setApi={setCarouselApi}
            aria-label="Showcase image carousel"
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {images.map((img) => (
                <CarouselItem key={img.src} className="pl-0">
                  <div className="relative overflow-hidden w-full">
                    <ImageWithFallback
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto block"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="top-auto left-auto bottom-0 right-12 translate-y-0 rounded-none size-12 bg-black text-white hover:bg-black border-0 dark:bg-black dark:hover:bg-black dark:border-0 disabled:opacity-50"
              aria-label="Previous image"
            />
            <CarouselNext
              className="top-auto left-auto bottom-0 right-0 translate-y-0 rounded-none size-12 bg-black text-white hover:bg-black border-0 dark:bg-black dark:hover:bg-black dark:border-0 disabled:opacity-50"
              aria-label="Next image"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

