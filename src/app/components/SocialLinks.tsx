import type { ComponentType, SVGProps } from 'react';
import { Instagram } from 'lucide-react';
import { FacebookIcon } from '@/app/components/FacebookIcon';
import { cn } from '@/app/components/ui/utils';
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/app/config';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface SocialLinkItem {
  label: string;
  href: string;
  Icon: IconComponent;
}

/** Add future social accounts here; the footer renders whatever is in this list. */
export const SOCIAL_LINKS: SocialLinkItem[] = [
  { label: 'Facebook', href: FACEBOOK_URL, Icon: FacebookIcon },
  { label: 'Instagram', href: INSTAGRAM_URL, Icon: Instagram },
];

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn('flex flex-wrap items-center gap-1', className)}>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow SEENIK on ${label}`}
            className="inline-flex size-[50px] cursor-pointer items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Icon className="h-6 w-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}
