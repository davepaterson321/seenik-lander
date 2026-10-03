import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '@/app/components/SocialLinks';
import { isCurrentPath } from '@/app/components/SiteNav';
import { cn } from '@/app/components/ui/utils';
import { EBAY_STORE_URL, MAIN_NAV_ITEMS } from '@/app/config';

const linkClass =
  'flex min-h-8 items-center type-body uppercase tracking-[0.2em] text-black/60 hover:text-black transition-colors cursor-pointer';

/** Burger menu shown below `md`. Holds the main nav and the social links. */
export function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label="Open menu"
        className="md:hidden inline-flex size-[50px] cursor-pointer items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <Menu className="h-6 w-6" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />

        <Dialog.Content
          className="fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-xs origin-top-right rounded-lg bg-[#F7F7F7] p-6 pt-14 text-black shadow-2xl duration-200 ease-out focus-visible:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">Site navigation</Dialog.Description>

          <Dialog.Close
            aria-label="Close menu"
            className="absolute right-3 top-3 inline-flex size-[44px] cursor-pointer items-center justify-center rounded-full text-black transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
          >
            <X className="h-6 w-6" />
          </Dialog.Close>

          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {MAIN_NAV_ITEMS.map((item) => {
                const isCurrent = isCurrentPath(item.href);
                return (
                  <li key={item.href}>
                    <Dialog.Close asChild>
                      <a
                        href={item.href}
                        aria-current={isCurrent ? 'page' : undefined}
                        className={cn(linkClass, isCurrent && 'text-black')}
                      >
                        {item.label}
                      </a>
                    </Dialog.Close>
                  </li>
                );
              })}
              <li>
                <a
                  href={EBAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(linkClass, 'gap-2')}
                >
                  Shop on eBay
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(linkClass, 'gap-3')}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
