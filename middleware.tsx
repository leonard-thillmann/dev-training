import { auth } from "@/auth";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

let headers = { "accept-language": "en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en-US", "nl-NL", "nl"];
let defaultLocale = "en-US";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // ########## AUTHENTICATION MIDDLEWARE ##########
  const session = await auth();
  if (!session?.user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
