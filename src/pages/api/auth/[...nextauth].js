import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        FacebookProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
});