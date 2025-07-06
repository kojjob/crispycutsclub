import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const createPrismaClient = () => {
  const client = new PrismaClient()
  
  // Only use Accelerate if we have an Accelerate connection string
  if (process.env.DATABASE_URL?.includes('accelerate.prisma-data.net')) {
    return client.$extends(withAccelerate())
  }
  
  return client
}

export const prisma = global.prisma || createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma