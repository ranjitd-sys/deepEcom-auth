import {betterAuth} from "better-auth";
export const auth = betterAuth({
    emailAndPassword:{
        enabled:true
    },
    socialProviders:{
        github:{
             clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }
    },
    trustedOrigins:["http://localhost:8080"]
})
export type Session = typeof auth.$Infer.Session
