import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const checks = {
    database: false,
    environment: process.env.NODE_ENV || 'not-set',
    timestamp: new Date().toISOString(),
    configuration: {
      hasDatabase: !!process.env.DATABASE_URL,
      hasAuthSecret: !!process.env.NEXTAUTH_SECRET,
      hasAuthUrl: !!process.env.NEXTAUTH_URL,
      authUrl: process.env.NEXTAUTH_URL || 'not-set',
    },
    vercel: {
      isVercel: !!process.env.VERCEL,
      region: process.env.VERCEL_REGION || 'not-set',
      env: process.env.VERCEL_ENV || 'not-set',
    },
    missingVars: [] as string[],
  }

  // Check for missing required variables
  const requiredVars = ['DATABASE_URL', 'NEXTAUTH_SECRET', 'NEXTAUTH_URL']
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      checks.missingVars.push(varName)
    }
  }

  // Test database connection
  try {
    await prisma.$queryRaw`SELECT 1`
    checks.database = true
  } catch (error) {
    console.error('Database connection error:', error)
  }

  const isHealthy = checks.database && checks.missingVars.length === 0

  return NextResponse.json({
    status: isHealthy ? 'healthy' : 'unhealthy',
    ...checks,
    message: isHealthy 
      ? 'All systems operational' 
      : `Missing configuration: ${checks.missingVars.join(', ')}`,
  }, { 
    status: isHealthy ? 200 : 503,
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  })
}