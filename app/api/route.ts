import { env } from "../env.mjs";

const currencyUrl = env.CURRENCY_API;

export async function GET() {
  const res = await fetch(`${currencyUrl}`);
  const product = await res.json();

  return Response.json({ product });
}
