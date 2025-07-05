import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth-utils'
import { UserRole } from '@prisma/client'
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  role: z.nativeEnum(UserRole),
  barberData: z.object({
    yearsOfExperience: z.number().min(0),
    specialties: z.array(z.string()),
    licenseNumber: z.string().optional(),
    portfolioUrl: z.string().optional(),
  }).optional(),
  agencyData: z.object({
    companyName: z.string().min(2),
    companyWebsite: z.string().optional(),
    numberOfModels: z.number().min(50),
    contactRole: z.string(),
    companyAddress: z.string(),
  }).optional(),
})

export async function POST(req: NextRequest) {
  try {
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