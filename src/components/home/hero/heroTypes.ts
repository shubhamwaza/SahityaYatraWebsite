export type Locale = "mr" | "en";

export type LocalizedString = {
  mr: string;
  en: string;
};

export type LocalizedStringArray = {
  mr: string[];
  en: string[];
};

export type CtaButton = {
  label: LocalizedString;
  href: string;
};

export type ExhibitionSlideData = {
  type: "exhibition";
  id: string;
  navPill: LocalizedString;
  city: LocalizedString;
  badgeText: LocalizedString;
  liveStatus: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  venueName: LocalizedString;
  venueAddress: LocalizedString;
  dates: LocalizedString;
  days: LocalizedString;
  timings: LocalizedString;
  highlights: LocalizedStringArray;
  googleMapsUrl: string;
  ctaPrimary: CtaButton;
  ctaSecondary: CtaButton;
  theme: string;
  accentGlow: string;
  auraColor: string;
};

export type BookSpotlightSlideData = {
  type: "book";
  id: string;
  navPill: LocalizedString;
  badgeText: LocalizedString;
  accolade: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  quote: LocalizedString;
  bookMeta: LocalizedString;
  coverImage: string;
  coverAlt: string;
  ctaPrimary: CtaButton;
  ctaSecondary: CtaButton;
  theme: string;
  accentGlow: string;
  auraColor: string;
};

export type FestivalSlideData = {
  type: "festival";
  id: string;
  navPill: LocalizedString;
  festivalTag: LocalizedString;
  badgeText: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  deliveryGuarantee: LocalizedString;
  bundlePerks: LocalizedStringArray;
  covers: Array<{ image: string; alt: string; title: string }>;
  ctaPrimary: CtaButton;
  ctaSecondary: CtaButton;
  theme: string;
  accentGlow: string;
  auraColor: string;
};

export type DispatchSlideData = {
  type: "dispatch";
  id: string;
  navPill: LocalizedString;
  dispatchTag: LocalizedString;
  badgeText: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  letterQuote: LocalizedString;
  curatorNote: LocalizedString;
  highlights: LocalizedStringArray;
  ctaPrimary: CtaButton;
  ctaSecondary: CtaButton;
  theme: string;
  accentGlow: string;
  auraColor: string;
};

export type HeroSlide =
  | ExhibitionSlideData
  | BookSpotlightSlideData
  | FestivalSlideData
  | DispatchSlideData;
