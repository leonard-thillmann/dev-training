import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";

const providers = [GitHub];

declare module "next-auth" {
  interface Session {
    user: {
      address: string
    } & DefaultSession["user"]
  }
}

if (process.env.NODE_ENV === "development") {
  providers.push(
    // @ts-ignore
    Credentials({
      id: "password",
      name: "Password",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      authorize: (credentials) => {
        if (credentials.password === "password") {
          return {
            email: "bob@alice.com",
            name: "Bob Alice",
            image: "https://avatars.githubusercontent.com/u/67470890?s=200&v=4",
          }
        }
      },
    })
  )
}

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: providers,
  callbacks: {
    session({ session, token }) {
      // `session.user.address` is now a valid property, and will be type-checked
      // in places like `useSession().data.user` or `auth().user`
      return {
        ...session,
        ...token,
      }
    },
  },
});
