import { useState } from 'react';

interface NewsletterSignupProps {
  onEmailSubmit: (email: string) => void;
  isSubmitting: boolean;
}

export function NewsletterSignup({ onEmailSubmit, isSubmitting }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onEmailSubmit(email);
      setEmail('');
    }
  };

  return (
    <section className="border-t border-white/10 bg-black py-16 md:py-20 px-6">
      <div className="max-w-lg mx-auto text-center">
        <h3 className="text-xl md:text-2xl text-white font-light mb-8 leading-tight">
          All the latest news. Straight to your inbox.
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ fontSize: '16px' }}
              className="flex-1 px-5 py-3 bg-black/60 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors tracking-wide disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Submitting...' : 'Get alerts'}
            </button>
          </div>

          <p className="mt-4 text-sm text-[rgb(153,161,175)] leading-relaxed">
            Unsubscribe any time. We will never share your email.
          </p>
        </form>
      </div>
    </section>
  );
}
