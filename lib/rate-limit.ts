import { LRUCache } from 'lru-cache'
import { NextRequest } from 'next/server'

type Options = {
  uniqueTokenPerInterval?: number
  interval?: number
}

type RateLimitResponse = {
  success: boolean
  limit: number
  remaining: number
  reset: number
}

export default function rateLimit(options?: Options): (request: NextRequest) => Promise<RateLimitResponse> {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000, // 60 seconds default
  })

  return async (request: NextRequest): Promise<RateLimitResponse> => {
    const limit = 10 // 10 requests per interval
    const token = request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip') || 
                  'anonymous'
    
    const tokenCount = (tokenCache.get(token) as number[]) || [0]
    
    if (tokenCount[0] === 0) {
      tokenCache.set(token, [1])
    } else if (tokenCount[0] < limit) {
      tokenCache.set(token, [tokenCount[0] + 1])
    }
    
    const currentUsage = (tokenCache.get(token) as number[])[0]
    const remaining = Math.max(limit - currentUsage, 0)
    const reset = Date.now() + (options?.interval || 60000)
    
    return {
      success: currentUsage <= limit,
      limit,
      remaining,
      reset
    }
  }
}

// Specific rate limiters for different endpoints
export const authRateLimit = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 500
})

export const apiRateLimit = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 1000
})