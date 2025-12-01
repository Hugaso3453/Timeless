import { Auth } from "@auth/core";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "@auth/core/providers/google";
import Credentials from "@auth/core/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";
import { UserRole } from "@prisma/client";

export const authConfig = {
  basePath: "/api/auth",
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt" as const,
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      checks: ["none"], 
    }),

    Credentials({
      name: "credentials",
      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;

        if (!email || !password) {
          throw new Error("Missing credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.passwordHash) {
          throw new Error("Invalid credentials");
        }

        const valid = await compare(password, user.passwordHash);
        if (!valid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name ?? null,
          role: user.role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }: any) {
      session.user = session.user || {};
      session.user.id = token.id;
      session.user.role = token.role;

      return session;
    },
  },

  secret: process.env.AUTH_SECRET,

  trustHost: true,

  trustedHosts: ["localhost:3000"],


  pages: {
    signIn: "/login",
  },
};

export async function GET(req: Request) {
  return Auth(req, authConfig);
}

export async function POST(req: Request) {
  return Auth(req, authConfig);
}
