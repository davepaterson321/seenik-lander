import { ArrowUpRight, Mail } from 'lucide-react';
import backgroundImage from '@/assets/a2bbdec426a5ce1f0c6c9ad0cf0a77b1db430c76.png';
import { CONTACT_MAILTO, EBAY_STORE_URL } from '@/app/config';

export function CollectionFooter() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 uppercase tracking-[0.15em] font-light break-words">
          Elevate your display today
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 break-words">
          Head over to eBay or reach out to the team - we're happy to help before you order.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <a
            href={EBAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors tracking-wide"
          >
            <span>Shop on eBay</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/10 transition-colors tracking-wide"
          >
            <Mail className="w-4 h-4" />
            <span>Get in touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
