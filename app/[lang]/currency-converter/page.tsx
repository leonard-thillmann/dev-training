import { auth } from "@/auth";
import ConverterForm from "@/components/currency-converter/converter-form";

export default async function Page() {
  const session = await auth();
  return <ConverterForm session={session} />;
}
