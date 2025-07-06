'use client'

import { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Sign out and redirect to home
    signOut({ callbackUrl: '/' })
  }, [])

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-serif text-crispy-white mb-4">Signing out...</h1>
        <div className="w-8 h-8 border-2 border-crispy-gold border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  )
}