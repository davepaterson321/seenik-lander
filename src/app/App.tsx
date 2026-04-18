import { Hero } from '@/app/components/Hero';
import { ShowcaseGallery } from '@/app/components/ShowcaseGallery';
import { BackdropFormat } from '@/app/components/BackdropFormat';
import { MaterialsAndVersatility } from '@/app/components/MaterialsAndVersatility';
import { CollectionFooter } from '@/app/components/CollectionFooter';
import { EmailCaptureSection } from '@/app/components/EmailCaptureSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white dark w-full overflow-x-hidden">
      <Hero />

      <ShowcaseGallery />

      <BackdropFormat />

      <MaterialsAndVersatility />

      <CollectionFooter />
      <EmailCaptureSection />
    </div>
  );
}
