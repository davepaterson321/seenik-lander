import type { ReactNode } from 'react';
import Seenik from '@/imports/Seenik';

interface BrandTopBarProps {
  homeHref?: string;
  rightSlot?: ReactNode;
}

export function BrandTopBar({ homeHref = '/', rightSlot }: BrandTopBarProps) {
  return (
    <div className="flex flex-row justify-between items-center px-6 pt-6 md:pt-8 gap-4">
      <a href={homeHref} className="w-32 sm:w-40 md:w-56 flex-shrink-0" aria-label="SEENIK home">
        <Seenik />
      </a>

      {rightSlot ? <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">{rightSlot}</div> : null}
    </div>
  );
}
