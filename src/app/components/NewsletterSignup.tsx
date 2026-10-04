import { useState } from 'react';
import { PRIVACY_POLICY_URL } from '@/app/config';

interface NewsletterSignupProps {
  onEmailSubmit: (email: string) => void;
  isSubmitting: boolean;
}

/** Sign-up card, designed to sit in the site footer. Target of the "Notify me" and "New release alerts" buttons. */
export function NewsletterSignup({ onEmailSubmit, isSubmitting }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [trap, setTrap] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hidden field only bots fill in: drop the submission without telling them.
    if (trap) {
      setEmail('');
      return;
    }
    if (email) {
      onEmailSubmit(email);
      setEmail('');
    }
  };

  return (
    <div id="newsletter-signup" className="rounded-lg bg-[#F7F7F7] p-6 text-black md:p-8">
      <h3 className="type-heading font-light leading-tight mb-3">Join our mailing list</h3>
      <p className="type-body text-black/70 leading-relaxed mb-6">
        Get all the latest release updates and SEENIK product news.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            aria-label="Email address"
            required
            className="w-full px-4 py-3 type-field bg-[#F7F7F7] border border-black/50 text-black placeholder:text-black/60 focus:outline-none focus:border-black transition-colors"
          />
          <input
            type="text"
            name="company"
            value={trap}
            onChange={(e) => setTrap(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-6 py-3 type-control bg-black text-white hover:bg-black/80 transition-colors tracking-wide cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap"
          >
            {isSubmitting ? 'Joining...' : 'Join the list'}
          </button>
        </div>

        <p className="mt-4 type-body text-black/60 leading-relaxed">
          We&rsquo;ll email you SEENIK news about once a month. Unsubscribe at any time. See our{' '}
          <a href={PRIVACY_POLICY_URL} className="underline underline-offset-4 hover:text-black transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
