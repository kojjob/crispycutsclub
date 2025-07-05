import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-06-30.basil',
  typescript: true,
})

// Stripe price IDs for membership tiers
export const MEMBERSHIP_PRICES = {
  ESSENTIAL: process.env.STRIPE_PRICE_ESSENTIAL || '',
  PREMIUM: process.env.STRIPE_PRICE_PREMIUM || '',
  VIP: process.env.STRIPE_PRICE_VIP || '',
} as const

// Helper to get price ID by tier
export function getPriceIdByTier(tier: 'ESSENTIAL' | 'PREMIUM' | 'VIP'): string {
  const priceId = MEMBERSHIP_PRICES[tier]
  if (!priceId) {
    throw new Error(`Missing Stripe price ID for tier: ${tier}`)
  }
  return priceId
}

// Helper to format amount for display
export function formatAmount(amount: number, currency: string = 'gbp'): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
  }).format(amount / 100)
}

// Helper to calculate prorated amount
export function calculateProratedAmount(
  monthlyAmount: number,
  daysRemaining: number,
  daysInMonth: number
): number {
  return Math.round((monthlyAmount * daysRemaining) / daysInMonth)
}