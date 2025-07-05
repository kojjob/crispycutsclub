// Re-export Prisma types
import type { Prisma } from '@prisma/client'
import { 
  UserRole as PrismaUserRole,
  MembershipStatus as PrismaMembershipStatus,
  MembershipTier as PrismaMembershipTier,
  BookingStatus as PrismaBookingStatus,
  PaymentStatus as PrismaPaymentStatus
} from '@prisma/client'

export type User = Prisma.UserGetPayload<{}>
export type UserRole = PrismaUserRole
export type Client = Prisma.ClientGetPayload<{}>
export type Barber = Prisma.BarberGetPayload<{}>
export type Agency = Prisma.AgencyGetPayload<{}>
export type Area = Prisma.AreaGetPayload<{}>
export type Membership = Prisma.MembershipGetPayload<{}>
export type MembershipStatus = PrismaMembershipStatus
export type MembershipTier = PrismaMembershipTier
export type Booking = Prisma.BookingGetPayload<{}>
export type BookingStatus = PrismaBookingStatus
export type Payment = Prisma.PaymentGetPayload<{}>
export type PaymentStatus = PrismaPaymentStatus
export type Review = Prisma.ReviewGetPayload<{}>
export type PortfolioImage = Prisma.PortfolioImageGetPayload<{}>
export type Availability = Prisma.AvailabilityGetPayload<{}>
export type AgencyModel = Prisma.AgencyModelGetPayload<{}>
export type PaymentMethod = Prisma.PaymentMethodGetPayload<{}>

// Custom type definitions
export interface AuthUser {
  id: string
  email: string
  name?: string | null
  role: UserRole
  emailVerified?: Date | null
}

export interface SessionUser {
  id: string
  email: string
  name?: string | null
  role: UserRole
  emailVerified?: Date | null
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  errors?: Record<string, string[]>
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// Form types
export interface ClientSignupForm {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  phone?: string
  dateOfBirth?: Date
  areaId: string
  barberId: string
  paymentMethodId: string
}

export interface BarberApplicationForm {
  email: string
  password: string
  name: string
  phone: string
  bio?: string
  specialties: string[]
  yearsOfExperience: number
  licenseNumber?: string
  portfolioUrl?: string
  instagramHandle?: string
  basePrice: number
  areaId?: string
}

export interface BookingForm {
  barberId: string
  scheduledAt: Date
  notes?: string
}

// Business logic types
export interface BookingRestrictions {
  canBook: boolean
  reason?: string
  nextAvailableDate?: Date
  remainingBookings: number
  lastBookingDate?: Date
}

export interface MembershipDetails {
  id: string
  barber: {
    id: string
    businessName: string
    firstName: string
    lastName: string
    instagramHandle: string
    basePrice: number
  }
  status: MembershipStatus
  price: number
  startDate: Date
  lockedUntil?: Date
  gracePeriodEnd?: Date
  canSwitch: boolean
  switchAvailableDate?: Date
}

export interface BarberAvailability {
  barberId: string
  date: Date
  slots: TimeSlot[]
}

export interface TimeSlot {
  start: string // HH:MM format
  end: string
  isAvailable: boolean
  bookingId?: string
}

// Dashboard types
export interface ClientDashboard {
  membership?: MembershipDetails
  upcomingBookings: BookingDetails[]
  pastBookings: BookingDetails[]
  availableBarbers?: BarberCard[]
}

export interface BookingDetails {
  id: string
  scheduledAt: Date
  duration: number
  status: BookingStatus
  barber: {
    id: string
    businessName: string
    firstName: string
    lastName: string
    phone: string
  }
  notes?: string
}

export interface BarberCard {
  id: string
  businessName: string
  firstName: string
  lastName: string
  bio?: string
  instagramHandle: string
  basePrice: number
  rating?: number
  reviewCount: number
  portfolioImages: string[]
  availability: boolean
}

// Analytics types
export interface BarberAnalytics {
  revenue: {
    current: number
    previous: number
    growth: number
  }
  clients: {
    active: number
    new: number
    churn: number
  }
  bookings: {
    completed: number
    cancelled: number
    noShow: number
    completionRate: number
  }
  ratings: {
    average: number
    total: number
    distribution: Record<number, number>
  }
}

export interface PlatformAnalytics {
  users: {
    total: number
    clients: number
    barbers: number
    agencies: number
    shelters: number
  }
  revenue: {
    mrr: number
    arr: number
    growth: number
  }
  bookings: {
    total: number
    completed: number
    cancelled: number
  }
  areas: {
    total: number
    active: number
    barbersPerArea: Record<string, number>
  }
}

// Validation schemas (using Zod)
export interface ValidationError {
  field: string
  message: string
}

// Stripe types
export interface StripeSubscription {
  id: string
  customerId: string
  status: string
  currentPeriodStart: Date
  currentPeriodEnd: Date
  cancelAtPeriodEnd: boolean
}

export interface StripePaymentMethod {
  id: string
  type: string
  card?: {
    brand: string
    last4: string
    expMonth: number
    expYear: number
  }
  bacsDebit?: {
    last4: string
    sortCode: string
  }
}

// Map types
export interface AreaBoundary {
  id: string
  name: string
  coordinates: [number, number][]
  center: {
    lat: number
    lng: number
  }
}

export interface MapMarker {
  id: string
  position: {
    lat: number
    lng: number
  }
  title: string
  type: 'barber' | 'area'
}