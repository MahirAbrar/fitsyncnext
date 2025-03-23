import NextAuth, { DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
  interface User {
    token?: string;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const requestBody = {
            email: credentials?.email,
            username: credentials?.email,
            password: credentials?.password,
          };

          console.log("Full request details:", {
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: requestBody,
          });

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestBody),
            }
          );

          console.log("Response status:", res.status);
          const data = await res.json();
          console.log("Response data:", data);

          if (res.ok && data) {
            // Return user object that will be saved in the session
            return {
              id: data.user.id,
              email: data.user.email,
              token: data.token, // If your Django returns a token
            };
          }

          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add auth token to the JWT token right after sign in
      if (user) {
        token.accessToken = user.token;
        console.log("JWT Token:", token);
      }
      return token;
    },
    async session({ session, token }) {
      // Add auth token to the session
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
