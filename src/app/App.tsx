import { Hero } from '@/app/components/Hero';
import { ShowcaseGallery } from '@/app/components/ShowcaseGallery';
import { BackdropFormat } from '@/app/components/BackdropFormat';
import { MaterialsAndVersatility } from '@/app/components/MaterialsAndVersatility';
import { CollectionFooter } from '@/app/components/CollectionFooter';
import { SiteFooter } from '@/app/components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white dark w-full overflow-x-hidden">
      <Hero />

      <ShowcaseGallery />

      <BackdropFormat />

      <MaterialsAndVersatility />

      {/* Upcoming releases is hidden until items are close to release.
          To bring it back: import UpcomingBackdrops from '@/app/components/UpcomingBackdrops'
          and render <UpcomingBackdrops /> here. */}

      <CollectionFooter />
      <SiteFooter />
    </div>
  );
}
