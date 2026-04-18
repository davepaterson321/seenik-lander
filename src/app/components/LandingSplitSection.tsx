import type { ReactNode } from 'react';

interface LandingSplitSectionProps {
  overline: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  imagePosition?: 'left' | 'right';
  matchColumnHeights?: boolean;
  contentClassName?: string;
  imageFrameClassName?: string;
  imageClassName?: string;
}

export function LandingSplitSection({
  overline,
  heading,
  imageSrc,
  imageAlt,
  children,
  imagePosition = 'right',
  matchColumnHeights = true,
  contentClassName,
  imageFrameClassName,
  imageClassName,
}: LandingSplitSectionProps) {
  const contentOrderClass = imagePosition === 'left' ? 'md:order-2' : 'md:order-1';
  const imageOrderClass = imagePosition === 'left' ? 'md:order-1' : 'md:order-2';
  const gridAlignmentClass = matchColumnHeights ? 'items-stretch' : 'items-start';
  const equalHeightClass = matchColumnHeights ? 'h-full' : '';
  const imageDefaultFrameClass = matchColumnHeights
    ? 'aspect-[4/3] md:aspect-[3/4]'
    : 'aspect-[4/3]';
  const contentClasses = [
    'rounded-lg border border-white/10 p-6 sm:px-8 sm:py-10',
    contentOrderClass,
    equalHeightClass,
    contentClassName,
  ]
    .filter(Boolean)
    .join(' ');
  const imageWrapperClasses = ['overflow-hidden border border-white/10', imageOrderClass, equalHeightClass]
    .filter(Boolean)
    .join(' ');
  const imageFrameClasses = imageFrameClassName ?? imageDefaultFrameClass;
  const imageClasses = ['w-full h-full object-cover', imageClassName].filter(Boolean).join(' ');

  return (
    <div className={`max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 ${gridAlignmentClass}`}>
      <article className={contentClasses}>
        <span className="block type-overline uppercase tracking-[0.3em] text-white/50 mb-4">
          {overline}
        </span>
        <h2 className="type-heading-xl text-white uppercase tracking-[0.1em] font-light leading-tight">
          {heading}
        </h2>
        <div className="mt-6 space-y-4 type-body-lg text-gray-300 leading-relaxed">
          {children}
        </div>
      </article>

      <article className={imageWrapperClasses}>
        <div className={imageFrameClasses}>
          <img src={imageSrc} alt={imageAlt} className={imageClasses} />
        </div>
      </article>
    </div>
  );
}
