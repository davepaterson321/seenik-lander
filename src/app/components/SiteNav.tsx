import { MAIN_NAV_ITEMS } from '@/app/config';
import { cn } from '@/app/components/ui/utils';

export function isCurrentPath(href: string) {
  if (typeof window === 'undefined') return false;
  const { pathname } = window.location;
  return href === '/' ? pathname === '/' || pathname === '/index.html' : pathname === href;
}

interface SiteNavProps {
  className?: string;
}

/** Desktop inline navigation. On mobile the same links live in `MobileMenu`. */
export function SiteNav({ className }: SiteNavProps) {
  return (
    <nav aria-label="Main" className={cn('hidden md:block', className)}>
      <ul className="flex items-center gap-8">
        {MAIN_NAV_ITEMS.filter((item) => item.desktop).map((item) => {
          const isCurrent = isCurrentPath(item.href);
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={cn(
                  'type-control uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors cursor-pointer',
                  isCurrent && 'text-white',
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
