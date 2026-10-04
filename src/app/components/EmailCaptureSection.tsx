import { useState } from 'react';
import { toast } from 'sonner';
import { NewsletterSignup } from '@/app/components/NewsletterSignup';
import { Toaster } from '@/app/components/ui/sonner';
import { MAILERLITE_SUBSCRIBE_URL } from '@/app/config';

export function EmailCaptureSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (email: string) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(MAILERLITE_SUBSCRIBE_URL, {
        method: 'POST',
        body: new URLSearchParams({
          'fields[email]': email,
          'ml-submit': '1',
          anticsrf: 'true',
        }),
      });
      const result = await response.json();

      if (result.success) {
        toast.success('Thank you! You\'re on the list.', {
          description: 'We\'ll let you know when new backdrops drop.',
        });
      } else {
        const reason: string | undefined = result.errors?.fields?.email?.[0];
        toast.error('Please check your email address', {
          description: reason ?? 'Please try again.',
        });
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
