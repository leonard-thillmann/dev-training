import { SignIn } from "@/components/auth/sign-in";

export default function Page({ params: { lang } }: { params: { lang: any } }) {
  console.log(lang);
  return <SignIn />;
}
