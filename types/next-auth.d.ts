import { UserRole } from '@prisma/client'
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    role: UserRole
    emailVerified: Date | null
  }

  interface Session {
    user: {
      id: string
      email: string
      name: string | null
      role: UserRole
      emailVerified: Date | null
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: UserRole
    emailVerified: Date | null
  }
}