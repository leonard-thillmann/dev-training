import { auth } from "@/auth";
import { env } from "../env.mjs";

const currencyUrl = env.CURRENCY_API;

export async function POST(req: any) {
  const session = await auth()

  if (!session?.user) {
    return new Response("Not logged in", { status: 401 });
  }

  const values = await req.json();
  const res = await fetch(`${currencyUrl}`)
  const data = await res.json()

  const sourceCurrencyMultiplier = await data.data[values.sourceCurr]
  const sourceCurrency = values.sourceCurr;
  const sourceAmount = parseInt(values.sourceAmount);
  const targetCurrencyMultiplier = data.data[values.targetCurr];
  const targetCurrency = values.targetCurr;

  // Calculate targetAmount by calculating the conversion rate
  const targetAmountMultiplier = targetCurrencyMultiplier / sourceCurrencyMultiplier;
  const targetAmount = sourceAmount * targetAmountMultiplier;

  const calcResult = {
    sourceAmount: sourceAmount,
    sourceCurrency: sourceCurrency,
    targetAmount: targetAmount.toFixed(2),
    targetCurrency: targetCurrency
  }

  // console.log(calcResult)

  return Response.json({calcResult});
}