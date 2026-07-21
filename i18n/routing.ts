import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import {DEFAULT_LOCALE, SUPPORTED_LOCALES} from '@/lib/seo';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: SUPPORTED_LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,

  // Keep the default Norwegian locale on the root URL. English remains under /en.
  localePrefix: 'as-needed'
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);