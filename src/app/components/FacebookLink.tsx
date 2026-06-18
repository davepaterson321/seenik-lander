import { FACEBOOK_URL } from '@/app/config';
import { FacebookIcon } from '@/app/components/FacebookIcon';
import { cn } from '@/app/components/ui/utils';

interface FacebookLinkProps {
  className?: string;
}

export function FacebookLink({ className }: FacebookLinkProps) {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex size-[50px] items-center justify-center rounded-full text-white transition-colors',
        'hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        className,
      )}
      aria-label="Follow SEENIK on Facebook"
    >
      <FacebookIcon className="h-6 w-6" />
    </a>
  );
}
