import { auth } from "@/auth";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

let headers = { "accept-language": "en,de;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en", "de"];
let defaultLocale = "en";

export async function middleware(request: NextRequest) {
  
  const session = await auth();
  const { pathname } = request.nextUrl;
  const locale = match(languages, locales, defaultLocale);
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  // ########### AUTHENTICATION MIDDLEWARE ###########
  // Check if the path is related to authentication and should be excluded from auth protection
  const isAuthPath =
    pathname.startsWith(`/${locale}/sign-in`) ||
    pathname.startsWith(`/${locale}/api/auth/callback/github`);

  // Only run authentication check if it's not an auth-related path
  if (!isAuthPath) {
    if (!session?.user) {
      return NextResponse.redirect(new URL(`/${locale}/sign-in`, request.url));
    } 
  }

  // Redirect logged in user after sign-in
  if(session?.user){
    if(pathname === `/${locale}/sign-in`){
      return NextResponse.redirect(new URL(`/${locale}?view=list`, request.url));
    }
  }

  // ########### LOCALIZATION MIDDLEWARE ###########
  // Dont redirect if path already has locale or is for authentication
  if (!pathnameHasLocale && !isAuthPath) {
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Exclude paths related to authentication and Next.js internals
    "/((?!_next|sign-in|api).*)",
  ],
};
