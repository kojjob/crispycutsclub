import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth-utils'
import { UserRole } from '@prisma/client'
import { z } from 'zod'
import { authRateLimit } from '@/lib/rate-limit'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Invalid email address').max(255, 'Email too long').toLowerCase(),
  phone: z.string().max(20, 'Phone number too long').optional(),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password too long')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain uppercase, lowercase, and number'),
  role: z.nativeEnum(UserRole),
  barberData: z.object({
    yearsOfExperience: z.number().min(0).max(100),
    specialties: z.array(z.string().max(50)).max(10),
    licenseNumber: z.string().max(50).optional(),
    portfolioUrl: z.string().url().max(255).optional(),
  }).optional(),
  agencyData: z.object({
    companyName: z.string().min(2).max(100),
    companyWebsite: z.string().url().max(255).optional(),
    numberOfModels: z.number().min(50).max(10000),
    contactRole: z.string().max(100),
    companyAddress: z.string().max(500),
  }).optional(),
})

export async function POST(req: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitResult = await authRateLimit(req)
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': new Date(rateLimitResult.reset).toISOString(),
          }
        }
      )
    }
    
    const body = await req.json()
    
    // Validate input
    const validatedData = registerSchema.parse(body)
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }
    
    // Hash password
    const hashedPassword = await hashPassword(validatedData.password)
    
    // Create user
    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        hashedPassword,
        role: validatedData.role,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      }
    })
    
    // Create role-specific profile based on user type
    switch (validatedData.role) {
      case UserRole.CLIENT:
        await prisma.client.create({
          data: {
            userId: user.id,
            preferredServices: [],
            membershipTier: 'ESSENTIAL',
          }
        })
        break
        
      case UserRole.BARBER:
        if (validatedData.barberData) {
          await prisma.barber.create({
            data: {
              userId: user.id,
              specialties: validatedData.barberData.specialties || [],
              yearsOfExperience: validatedData.barberData.yearsOfExperience || 0,
              licenseNumber: validatedData.barberData.licenseNumber,
              portfolioUrl: validatedData.barberData.portfolioUrl,
            isAvailable: false,
            isVerified: false,
            rating: 0,
            totalCuts: 0,
            basePrice: 44.99,
            }
          })
        }
        break
        
      case UserRole.AGENCY:
        const agencyData = validatedData.agencyData
        if (!agencyData) {
          throw new Error('Agency data is required')
        }
        await prisma.agency.create({
          data: {
            userId: user.id,
            companyName: agencyData.companyName,
            companyWebsite: agencyData.companyWebsite,
            numberOfModels: agencyData.numberOfModels,
            contactRole: agencyData.contactRole,
            companyAddress: agencyData.companyAddress,
            isVerified: false,
          }
        })
        break
    }
    
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      }
    })
    
  } catch (error: any) {
    console.error('Registration error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    )
  }
}