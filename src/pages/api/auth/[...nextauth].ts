import NextAuth from "next-auth"
import GoogleAuthProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleAuthProvider({
            clientId: process.env.GOOGLE_CLIENT_ID||'',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET||'',
        }),
    ],
}

export default NextAuth(authOptions)