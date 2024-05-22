import NextAuth, { type DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      address: string
    } & DefaultSession["user"]
  }
}


export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [GitHub],
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
