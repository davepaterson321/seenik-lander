import Seenik from '@/imports/Seenik';
import { SiteNav } from '@/app/components/SiteNav';
import { TopBarActions } from '@/app/components/TopBarActions';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/app/components/ui/breadcrumb';

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

interface BrandTopBarProps {
  homeHref?: string;
  /** Trail after "Home". The last entry is the current page and renders unlinked. */
  breadcrumbs?: BreadcrumbEntry[];
}

export function BrandTopBar({ homeHref = '/', breadcrumbs }: BrandTopBarProps) {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-6 pt-6 md:pt-8 gap-4">
        <a href={homeHref} className="w-32 sm:w-40 md:w-56 flex-shrink-0" aria-label="SEENIK home">
          <Seenik />
        </a>

        <SiteNav className="ml-auto mr-6" />

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <TopBarActions />
        </div>
      </div>

      {breadcrumbs?.length ? (
        <Breadcrumb className="px-6 pt-6 md:pt-8">
          <BreadcrumbList className="type-overline uppercase tracking-[0.2em] text-white/60">
            <BreadcrumbItem>
              <BreadcrumbLink href={homeHref} className="cursor-pointer hover:text-white">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((crumb, index) => {
              const isCurrent = index === breadcrumbs.length - 1;
              return (
                <span key={crumb.label} className="contents">
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isCurrent || !crumb.href ? (
                      <BreadcrumbPage className="text-white">{crumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={crumb.href} className="cursor-pointer hover:text-white">
                        {crumb.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </span>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      ) : null}
    </>
  );
}
