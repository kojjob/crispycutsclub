import { PrismaClient } from '@/app/generated-prisma-client'
import { withAccelerate } from '@prisma/extension-accelerate'

const prismaClientSingleton = () => {
  // Always use Accelerate when available
  if (process.env.DATABASE_URL?.includes('accelerate.prisma-data.net')) {
    return new PrismaClient().$extends(withAccelerate())
  }
  
  // Fallback to regular PrismaClient for local development
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

export default prisma