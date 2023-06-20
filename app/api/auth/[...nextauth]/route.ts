import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import AppleProvider from 'next-auth/providers/apple';


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        AppleProvider({
            clientId: process.env.APPLE_CLIENT_ID,
            clientSecret: process.env.APPLE_CLIENT_SECRET
        })
    ],
    pages: [
        signIn, '/signin',
    ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }