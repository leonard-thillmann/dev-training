import { auth } from "@/auth";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

let headers = { "accept-language": "en,de;q=0.8" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en-US", "nl-NL", "nl"];
let defaultLocale = "en-US";

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
  matcher: ["/", "/groups-grid", "/groups-data-table"],
};
