import { Mail } from 'lucide-react';
import { SocialLinks } from '@/app/components/SocialLinks';
import { MobileMenu } from '@/app/components/MobileMenu';
import { CONTACT_MAILTO } from '@/app/config';

/** Right-hand top bar controls: contact, Facebook (desktop) and the burger menu (mobile). */
export function TopBarActions() {
  return (
    <>
      <a
        href={CONTACT_MAILTO}
        className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors tracking-wide"
        aria-label="Get in touch by email"
      >
        <Mail className="w-4 h-4" />
        <span className="hidden sm:inline">Get in touch</span>
      </a>
      <SocialLinks className="hidden md:flex" />
      <MobileMenu />
    </>
  );
}
