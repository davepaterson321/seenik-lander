import { useState } from 'react';
import { Hero } from '@/app/components/Hero';
import { ShowcaseGallery } from '@/app/components/ShowcaseGallery';
import { BackdropFormat } from '@/app/components/BackdropFormat';
import { MaterialsAndVersatility } from '@/app/components/MaterialsAndVersatility';
import { CollectionFooter } from '@/app/components/CollectionFooter';
import { NewsletterSignup } from '@/app/components/NewsletterSignup';
import { toast } from 'sonner';
import { Toaster } from '@/app/components/ui/sonner';

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (email: string) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mqarlgjl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Thank you! You\'re on the list.', {
          description: 'We\'ll let you know when new backdrops drop.',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Please try again later.',
      });
      console.error('Email submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white dark w-full overflow-x-hidden">
      <Toaster />

      <Hero />

      <ShowcaseGallery />

      <BackdropFormat />

      <MaterialsAndVersatility />

      <CollectionFooter />
      <NewsletterSignup onEmailSubmit={handleEmailSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}
