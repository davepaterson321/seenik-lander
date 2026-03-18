import { useState, useEffect } from 'react';
import Seenik from '@/imports/Seenik';
import { Mail, X } from 'lucide-react';
import heroBackground from '@/assets/f9b65bc42d8dfbb3fc7e206558bd53b8493d18f6.png';

interface HeroProps {
  onEmailSubmit: (email: string) => void;
  isSubmitting: boolean;
}

export function Hero({ onEmailSubmit, isSubmitting }: HeroProps) {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onEmailSubmit(email);
      setEmail('');
      setIsModalOpen(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          <img
            src={heroBackground}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Gradient Overlay - Fades in after delay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        ></div>
      </div>

      {/* Top Bar: Logo & Email */}
      <div className="relative z-10 flex flex-row justify-between items-center px-6 pt-6 md:pt-8 gap-4">
        {/* Logo - Top Left - Fades in after delay */}
        <div 
          className={`w-32 sm:w-40 md:w-56 lg:w-64 flex-shrink-0 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <Seenik />
        </div>

        {/* Mobile Email Icon - Top Right */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="md:hidden relative p-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors flex-shrink-0"
          aria-label="Join launch list"
        >
          <Mail className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></span>
        </button>

        {/* Desktop Email Capture - Top Right */}
        <form onSubmit={handleSubmit} className="hidden md:block w-auto flex-shrink-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ fontSize: '16px' }}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors tracking-wide whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Join the launch List'}
            </button>
          </div>
        </form>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Main Headline */}
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl text-white mb-6 uppercase tracking-[0.15em] font-light max-w-4xl w-full transition-opacity duration-1000 break-words ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          Premium backdrops for collectors
        </h1>

        {/* Sub-headline */}
        <p 
          className={`text-lg md:text-xl text-gray-400 max-w-2xl w-full leading-relaxed transition-opacity duration-1000 break-words ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          Elevate your displays and model photography with collector-grade panoramic environments
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center pb-12 gap-3">
        <span className="text-xs uppercase tracking-widest text-gray-400">Discover</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
      </div>

      {/* Mobile Email Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-neutral-900 border border-white/20 p-8 w-full max-w-md">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl text-white mb-6 uppercase tracking-wide font-light">
              Join the Launch List
            </h2>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{ fontSize: '16px' }}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-white text-black hover:bg-gray-200 transition-colors tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Join the Launch List'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}