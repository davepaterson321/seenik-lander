import { useState } from 'react';
import { Hero } from '@/app/components/Hero';
import { Transformation } from '@/app/components/Transformation';
import { Product } from '@/app/components/Product';
import { ShowcaseGallery } from '@/app/components/ShowcaseGallery';
import { UseCases } from '@/app/components/UseCases';
import { EmailCTA } from '@/app/components/EmailCTA';
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
          description: 'We\'ll notify you when SEENIK launches.',
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
      
      {/* Hero Section */}
      <Hero onEmailSubmit={handleEmailSubmit} isSubmitting={isSubmitting} />
      
      {/* What We Create */}
      <Product />
      
      {/* Showcase Gallery */}
      <ShowcaseGallery />
      
      {/* Problem → Transformation */}
      <Transformation />
      
      {/* Use Cases */}
      <UseCases />
      
      {/* Email CTA */}
      <EmailCTA onEmailSubmit={handleEmailSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}