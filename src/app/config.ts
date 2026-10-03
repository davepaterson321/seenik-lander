// Update these two values when the real destinations are ready.
// EBAY_STORE_URL is used by every primary "Buy now on eBay" CTA and the
// per-slide "View on eBay" links on the cinematic showcase carousel.
// CONTACT_EMAIL powers every secondary "Get in touch" mailto: link.
export const EBAY_STORE_URL = 'https://ebay.us/m/VMkMEi';
/** Jacobean backdrop listing on eBay. */
export const EBAY_JACOBEAN_LISTING_URL = 'https://www.ebay.com/itm/800030233150';
/** Stalingrad backdrop listing on eBay. */
export const EBAY_STALINGRAD_LISTING_URL = 'https://ebay.us/m/jA6xZv';
/** WW2 Fall of Berlin backdrop listing on eBay. */
export const EBAY_FALL_OF_BERLIN_LISTING_URL = 'https://www.ebay.com/itm/800513363945';
/** WW2 Pacific backdrop listing on eBay. */
export const EBAY_PACIFIC_LISTING_URL = 'https://www.ebay.com/itm/800608026415';
/** Napoleonic backdrop listing on eBay. */
export const EBAY_NAPOLEONIC_LISTING_URL = 'https://ebay.us/m/KC53Gt';
/** Gulf War backdrop listing on eBay. */
export const EBAY_GULF_WAR_LISTING_URL = 'https://www.ebay.com/itm/389968854720';
/** North Africa backdrop listing on eBay. */
export const EBAY_NORTH_AFRICA_LISTING_URL = 'https://www.ebay.com/itm/800094034721';
/** Polar Fortress backdrop listing on eBay. */
export const EBAY_POLAR_FORTRESS_LISTING_URL = 'https://www.ebay.com/itm/389968713579';
/** Desert Citadel backdrop listing on eBay. */
export const EBAY_DESERT_CITADEL_LISTING_URL = 'https://ebay.us/m/MvMozv';
/** Armageddon backdrop listing on eBay. */
export const EBAY_ARMAGEDDON_LISTING_URL = 'https://ebay.io/m/1wsF98';
/** WW1 Western Front (Somme) backdrop listing on eBay. */
export const EBAY_SOMME_LISTING_URL = 'https://www.ebay.com/itm/800522722777';
/** Eastern Europe / Crimea backdrop listing on eBay. */
export const EBAY_CRIMEA_LISTING_URL = 'https://www.ebay.com/itm/800031658636';
/** French Town backdrop listing on eBay. */
export const EBAY_FRENCH_TOWN_LISTING_URL = 'https://www.ebay.com/itm/800656880838';
export const CONTACT_EMAIL = 'hello@seenik.co.uk';

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const FACEBOOK_URL =
  'https://www.facebook.com/people/Seenik-Premium-Backdrops/61590597695045/';
export const INSTAGRAM_URL = 'https://www.instagram.com/seenikofficial';

/**
 * Primary site navigation. `desktop: false` items only appear in the mobile menu:
 * on desktop, Home is reached via the logo and the breadcrumb.
 */
export const MAIN_NAV_ITEMS = [
  { label: 'Home', href: '/', desktop: false },
  { label: 'About', href: '/about.html', desktop: true },
] as const;

/** SEO landing pages: kept out of the main nav, linked from the footer instead. */
export const FOOTER_NAV_ITEMS = [
  { label: 'Collectors’ displays', href: '/displays-backdrops.html' },
  { label: 'Tabletop gaming', href: '/tabletop-gaming-backdrops.html' },
] as const;
