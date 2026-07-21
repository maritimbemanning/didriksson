import type {Metadata} from 'next';

export const SITE_URL = 'https://didriksson.no';
export const DEFAULT_LOCALE = 'no';
export const SUPPORTED_LOCALES = ['no', 'en'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function getLocalizedPath(locale: string, pathname = '/') {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (locale === DEFAULT_LOCALE) {
    return normalizedPath;
  }

  return normalizedPath === '/' ? `/${locale}` : `/${locale}${normalizedPath}`;
}

export function getLocalizedUrl(locale: string, pathname = '/') {
  return `${SITE_URL}${getLocalizedPath(locale, pathname)}`;
}

export function getLocalizedAlternates(locale: string, pathname = '/'): Metadata['alternates'] {
  return {
    canonical: getLocalizedUrl(locale, pathname),
    languages: {
      no: getLocalizedUrl('no', pathname),
      en: getLocalizedUrl('en', pathname),
      'x-default': getLocalizedUrl(DEFAULT_LOCALE, pathname),
    },
  };
}
