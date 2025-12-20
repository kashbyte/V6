import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  session: {
    strategy: "jwt", 
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Save user to database on sign in
      try {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            google_id: profile?.sub,
            email: user.email,
            name: user.name,
            picture: user.image,
          }),
        });

        const dbUser = await response.json();
        
        // Attach database user ID to the user object
        user.id = dbUser.id.toString();
        
        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      }
    },
    async jwt({ token, user, profile }) {
      // Add user ID to token
      if (user) {
        token.id = user.id;
      }
      if (profile) {
        token.sub = profile.sub;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID to session
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };