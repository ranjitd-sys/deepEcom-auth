import { createAuthClient } from "better-auth/react"

// Better Auth client configured to talk to our Effect server
// - baseURL: Points to the Effect server (not Vite dev server)
// - credentials: "include" ensures cookies are sent cross-origin
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  fetchOptions: {
    credentials: "include"
  }
})

export const { signIn, signUp, signOut } = authClient
