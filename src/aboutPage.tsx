import type { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrandTopBar } from '@/app/components/BrandTopBar';
import { CollectionFooter } from '@/app/components/CollectionFooter';
import { SiteFooter } from '@/app/components/SiteFooter';
import '@/styles/index.css';

const linkClass =
  'underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white transition-colors';

const SECTIONS: { heading: string; paragraphs: ReactNode[] }[] = [
  {
    heading: 'Background',
    paragraphs: [
      'Your prized military models deserve a great display.',
      'We’re used to seeing AI mockups in our friends’ social media posts - but your collection deserves an immersive backdrop that lives in the real world, so you can experience a tactile, cinematic 40 inch display whenever you enter the room, not only when you look through a 5 inch phone screen.',
      'SEENIK backdrops offer unrivalled panoramic scenes for collectors.',
    ],
  },
  {
    heading: 'Scale and suitability',
    paragraphs: [
      'SEENIK backdrops are designed for the likes of King & Country, Thomas Gunn, John Jenkins, Britains, Collectors Showcase and Del Prado figures, and Forces of Valor military vehicles, with suitability for all other 60mm to 54mm (1:30 to 1:32) models.',
      'We have a wide range of distant-horizon scenes which also suit 1:35 models, like English Civil War, Napoleonic and North Africa. Whilst it always depends on how you set up your models in your display, our most immersive backdrops like WW2 French Town and Pacific Jungle are generally best suited to 1:30 and 1:32 larger scale models.',
    ],
  },
  {
    heading: 'Our signature style',
    paragraphs: [
      'We wanted to create a backdrop style that would work for highly detailed premium models, as well as vintage plastic toy soldiers - and everything in between.',
      'The market is filled with generic photographic backgrounds made for model railways and the like - we wanted to create something that would blend far more cleanly with the artistic style of the models themselves.',
      'Our signature style feels like classic toy soldier box art. Perfectly complementing and enhancing your painted miniatures, props and terrain.',
    ],
  },
  {
    heading: 'An expanding range',
    paragraphs: [
      <>
        With a passion for Warhammer and{' '}
        <a href="/tabletop-gaming-backdrops.html" className={linkClass}>
          tabletop gaming
        </a>
        , we are also proud to offer an expanding range of backdrops that work well as a background for larger tabletop battalions and during gaming scenarios.
      </>,
    ],
  },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white dark">
      <BrandTopBar breadcrumbs={[{ label: 'About' }]} />

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24 text-center md:pt-24 md:pb-32">
        <h1 className="type-heading-xl font-light leading-snug">
          Immersive scenes inspired by classic toy soldier box art, designed to stand behind your high quality models.
        </h1>

        {SECTIONS.map((section) => (
          <section key={section.heading} className="mt-20 md:mt-28">
            <h2 className="type-heading uppercase tracking-[0.15em] font-light text-white">
              {section.heading}
            </h2>
            <div className="mt-8 space-y-6 type-body-lg text-gray-300 leading-relaxed">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </article>

      <CollectionFooter />
      <SiteFooter />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<AboutPage />);
