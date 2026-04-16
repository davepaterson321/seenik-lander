import { useEffect, useState } from 'react';
import Seenik from '@/imports/Seenik';
import { ArrowUpRight, Mail } from 'lucide-react';
import heroBackground from '@/assets/f9b65bc42d8dfbb3fc7e206558bd53b8493d18f6.png';
import { CONTACT_MAILTO, EBAY_STORE_URL } from '@/app/config';

interface HeroProps {
  // Optional video source for a future cinematic background swap.
  // When provided, the still image is used as the poster frame.
  videoSrc?: string;
}

export function Hero({ videoSrc }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background: video if supplied, still image otherwise */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          {videoSrc ? (
            <video
              src={videoSrc}
              poster={heroBackground}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-40"
            />
          ) : (
            <img
              src={heroBackground}
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
          )}
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        ></div>
      </div>

      {/* Top Bar: Logo + CTAs */}
      <div className="relative z-10 flex flex-row justify-between items-center px-6 pt-6 md:pt-8 gap-4">
        <div
          className={`w-32 sm:w-40 md:w-56 lg:w-64 flex-shrink-0 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <Seenik />
        </div>

        <div
          className={`flex items-center gap-2 sm:gap-3 flex-shrink-0 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors tracking-wide"
            aria-label="Get in touch by email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Contact</span>
          </a>
          <a
            href={EBAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors tracking-wide whitespace-nowrap"
          >
            <span>Shop on eBay</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl text-white mb-6 uppercase tracking-[0.15em] font-light max-w-4xl w-full transition-opacity duration-1000 break-words ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          Premium backdrops <span className="md:whitespace-nowrap">for collectors</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-400 max-w-2xl w-full leading-relaxed transition-opacity duration-1000 break-words ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          Elevate your displays with collector-grade panoramic environments.
        </p>
      </div>

      {/* Minimal scroll cue */}
      <div className="relative z-10 flex flex-col items-center pb-12 gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
