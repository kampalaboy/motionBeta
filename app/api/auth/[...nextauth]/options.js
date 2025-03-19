import Bidder from "@/app/(models)/Bidder";
import User from "@/app/(models)/User";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

const Options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    TwitterProvider({
      clientId: process.env.X_ID,
      clientSecret: process.env.X_SECRET,
      version: "2.0",
    }),
  ],

  callbacks: {
    async signIn(account, profile) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@gmail.com");
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};

export default Options;
