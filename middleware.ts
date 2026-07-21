import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  if (pathname === '/no' || pathname.startsWith('/no/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/no(?=\/|$)/, '') || '/';
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(request);
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(no|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};