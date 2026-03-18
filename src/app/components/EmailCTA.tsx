import { useState } from 'react';
import backgroundImage from '@/assets/a2bbdec426a5ce1f0c6c9ad0cf0a77b1db430c76.png';

interface EmailCTAProps {
  onEmailSubmit: (email: string) => void;
  isSubmitting: boolean;
}

export function EmailCTA({ onEmailSubmit, isSubmitting }: EmailCTAProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onEmailSubmit(email);
      setEmail('');
    }
  };

  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 uppercase tracking-[0.15em] font-light w-full break-words">
            Launching Soon
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed w-full break-words">
            Join the list for early access, launch announcements, and exclusive previews.
          </p>
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ fontSize: '16px' }}
              className="flex-1 px-6 py-4 bg-black border border-white/20 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-10 py-4 bg-white text-black hover:bg-gray-200 transition-colors tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Join the launch list'}
            </button>
          </div>

          {/* Trust microcopy */}
          <div className="mt-6 text-center text-base text-[rgb(153,161,175)]">
            We'll never share your email with third parties.
          </div>
        </form>
      </div>
    </section>
  );
}