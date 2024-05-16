import { SignIn } from "@/components/auth/sign-in";

export default function Page({ params: { lang } }: { params: { lang: any } }) {
  return <SignIn />;
}
