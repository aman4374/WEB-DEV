"use client"
import { SessionProvider } from "next-auth/react"
import { Children } from "react"

export default function SessionWrappper({children}) {
  return (
    <SessionProvider>
    {children}
    </SessionProvider>
  )
}