import {getRequestConfig} from 'next-intl/server';
import {DEFAULT_LOCALE, isSupportedLocale} from '@/lib/seo';
 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  const requestedLocale = await requestLocale;
  const locale = requestedLocale && isSupportedLocale(requestedLocale)
    ? requestedLocale
    : DEFAULT_LOCALE;
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});