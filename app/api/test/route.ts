import { env } from "@/app/env.mjs";
import { auth } from "@/auth";

const secret = env.AUTH_SECRET

export async function GET() {
  // Nutzernamen auslesen
  // console.log("test")
  const session = await auth();


  return Response.json({ session });
}

export async function POST() {
  return Response.json("post")
}
