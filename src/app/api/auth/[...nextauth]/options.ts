import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../lib/prisma";
import bcrypt from "bcrypt";

export const options: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: {
            label: "Password",
            type: "password",
            placeholder: "********",
          },
        },
        async authorize(credentials) {
          const user = await prisma.user.findFirst({
            select: {
              id: true,
              password: true,
              role: true,
              username: true,
              email: true,
            },
            where: {
              OR: [
                { username: credentials.username },
                { email: credentials.username },
              ],
            },
          });
          if (user) {
            const matchPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );
            
            if (!matchPassword) throw new Error("wrong password");
            // Any object returned will be saved in `user` property of the JWT 
            const credentialsUser = user.username ?? user.email;
  
            return {
              id: user.id,
              role: user.role,
              name: credentialsUser,
            };
          } else {
            throw new Error('user not found');
          }
        },
      }),
    ],
    pages: {
      signIn: "/login",
      signOut: "/login"
    },
    session: {
      maxAge: 30 * 24 * 60 * 60,
      updateAge: 24 * 60 * 60,
    },
    callbacks: {
      async jwt({token, user}){
        if(user)  token.role = user.role;
        return token;
      },
      async session({session, token}){
        if(session.user)  session.user.role = token.role;
        return session;
      },
      
    }
  }