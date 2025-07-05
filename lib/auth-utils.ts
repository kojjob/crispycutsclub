import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { UserRole } from '@prisma/client'
import { redirect } from 'next/navigation'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login')
  }
  return user
}

export async function requireRole(role: UserRole | UserRole[]) {
  const user = await requireAuth()
  const roles = Array.isArray(role) ? role : [role]
  
  if (!roles.includes(user.role)) {
    redirect('/unauthorized')
  }
  
  return user
}

export async function requireClient() {
  return requireRole(UserRole.CLIENT)
}

export async function requireBarber() {
  return requireRole(UserRole.BARBER)
}

export async function requireAgency() {
  return requireRole(UserRole.AGENCY)
}

export async function requireAdmin() {
  return requireRole(UserRole.ADMIN)
}

export function hashPassword(password: string): Promise<string> {
  const bcrypt = require('bcryptjs')
  return bcrypt.hash(password, 12)
}