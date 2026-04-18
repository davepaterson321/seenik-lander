import { useState } from 'react';
import { toast } from 'sonner';
import { NewsletterSignup } from '@/app/components/NewsletterSignup';
import { Toaster } from '@/app/components/ui/sonner';

export function EmailCaptureSection() {
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
    <>
      <Toaster />
      <NewsletterSignup onEmailSubmit={handleEmailSubmit} isSubmitting={isSubmitting} />
    </>
  );
}
