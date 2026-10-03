import { createRoot } from 'react-dom/client';
import { BrandTopBar } from '@/app/components/BrandTopBar';
import { CollectionFooter } from '@/app/components/CollectionFooter';
import { SiteFooter } from '@/app/components/SiteFooter';
import '@/styles/index.css';

function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white dark">
      <BrandTopBar breadcrumbs={[{ label: 'About' }]} />

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <span className="block type-overline uppercase tracking-[0.3em] text-white/60 mb-4">
          About
        </span>
        <h1 className="type-heading-xl uppercase tracking-[0.12em] font-light leading-tight">
          About SEENIK
        </h1>

        <div className="mt-10 space-y-6 type-body-lg text-gray-300 leading-relaxed">
          <p>
            Placeholder intro paragraph. Replace this with the story of SEENIK and why the backdrops exist.
          </p>

          <h2 className="type-heading text-white uppercase tracking-[0.1em] font-light pt-6">
            Section heading
          </h2>
          <p>
            Placeholder body copy for the first section.
          </p>

          <h2 className="type-heading text-white uppercase tracking-[0.1em] font-light pt-6">
            Another section
          </h2>
          <p>
            Placeholder body copy for the second section.
          </p>
        </div>
      </article>

      <CollectionFooter />
      <SiteFooter />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(<AboutPage />);
