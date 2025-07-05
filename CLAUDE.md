# CLAUDE.md - Crispy Cuts Club Development Assistant

## Project Overview
You are assisting with the development of Crispy Cuts Club, a premium membership platform connecting clients with exclusive barbers through a subscription-based grooming service. The platform uses Next.js 14+ with TypeScript, PostgreSQL with Prisma, and Stripe for payments.

## Your Role
- Provide code solutions following Test-Driven Development (TDD) and Domain-Driven Design (DDD) principles
- Ensure strict separation of concerns between components
- Write clean, modular, and testable code
- Use TypeScript for all code implementations
- Follow the established design system and brand guidelines

## Technical Context

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: TailwindCSS (no custom CSS unless absolutely necessary)
- **UI Components**: Shadcn/ui
- **State Management**: Zustand
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Real-time**: WebSockets/Pusher
- **Testing**: Jest, React Testing Library, Playwright

### Code Style Guidelines
- Use descriptive variable names (full words, not abbreviations)
- Add comments only where logic isn't immediately clear
- Prefer composition over inheritance
- Keep components small and focused (single responsibility)
- Use custom hooks for reusable logic
- Implement proper error boundaries
- Always handle loading and error states

### Project Structure
```
app/
├── (auth)/         # Authentication flows
├── (client)/       # Client portal
├── (barber)/       # Barber portal
├── (agency)/       # Agency portal
├── (admin)/        # Admin dashboard
├── api/            # API routes
└── layout.tsx      # Root layout

components/
├── ui/             # Reusable UI components
├── forms/          # Form components
├── maps/           # Map-related components
└── analytics/      # Dashboard components

lib/                # Utilities and configurations
hooks/              # Custom React hooks
types/              # TypeScript type definitions
```

## Key Business Rules

### Membership Rules
1. Minimum price: £44.99/month (barbers can set higher)
2. Clients locked to chosen barber for 2 months
3. 48-hour grace period for new clients to switch
4. Maximum 4 haircuts per month (1 every 7 days)
5. Extra cuts must be arranged directly with barber

### User Types
1. **Clients**: Subscribe to individual barbers
2. **Barbers**: Set prices, manage appointments (90% revenue share)
3. **Agencies**: Minimum 50 models, contract-based
4. **Shelters**: Charitable program, 10 residents/shelter
5. **Admin**: Full system control

### Area Restrictions
- Only 2-3 barbers per geographical area
- Areas defined by admin
- Barbers cannot operate outside assigned area

## Design System

### Colors
```css
--color-black: #000000;
--color-white: #FFFFFF;
--color-charcoal: #1A1A1A;
--color-gold: #D4AF37;
--color-success: #0D5F3A;
--color-error: #8B0000;
```

### Typography
- Headlines: Playfair Display (serif)
- Body: Inter (sans-serif)
- Weights: 300, 400, 600, 700

### Component Patterns
```tsx
// Always use this pattern for components
interface ComponentProps {
  // Define all props with TypeScript
}

export function Component({ props }: ComponentProps) {
  // Hooks at the top
  // Event handlers
  // Render logic
  return (
    <div className="tailwind-classes-only">
      {/* Content */}
    </div>
  );
}
```

## Common Tasks

### Creating a New Feature
1. Define types in `types/` directory
2. Create database schema in Prisma
3. Write tests first (TDD)
4. Implement API routes
5. Build UI components
6. Add to appropriate portal

### API Route Pattern
```typescript
// app/api/[resource]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  // Validation schema
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = schema.parse(body);
    
    // Business logic
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
```

### Database Query Pattern
```typescript
// Always use Prisma transactions for related operations
import { prisma } from '@/lib/prisma';

export async function createMembership(data: MembershipData) {
  return await prisma.$transaction(async (tx) => {
    // Create membership
    const membership = await tx.membership.create({ data });
    
    // Update related records
    await tx.user.update({
      where: { id: data.userId },
      data: { membershipId: membership.id }
    });
    
    return membership;
  });
}
```

## Testing Requirements
- Unit tests for all utility functions
- Integration tests for API routes
- Component tests for interactive elements
- E2E tests for critical user flows
- Minimum 80% code coverage

## Security Considerations
- Always validate user input
- Use parameterized queries (Prisma handles this)
- Implement proper authentication checks
- Sanitize data before rendering
- Follow OWASP guidelines
- Never expose sensitive data in client components

## Performance Guidelines
- Use Next.js Image component for all images
- Implement lazy loading for lists
- Use React.memo for expensive components
- Optimize database queries with proper indexes
- Cache frequently accessed data
- Use ISR for static content

## Common Pitfalls to Avoid
1. Don't mix server and client components incorrectly
2. Don't fetch data in client components when possible
3. Don't use inline styles or custom CSS
4. Don't skip error handling
5. Don't bypass TypeScript with 'any'
6. Don't create giant components
7. Don't ignore accessibility

## Helpful Commands
```bash
# Development
npm run dev

# Database
npx prisma migrate dev
npx prisma generate
npx prisma studio

# Testing
npm run test
npm run test:e2e

# Type checking
npm run type-check

# Linting
npm run lint
```

## When Stuck
1. Check if similar pattern exists in codebase
2. Verify business rules in PRD
3. Ensure following established patterns
4. Consider performance implications
5. Test edge cases

Remember: Clean, testable, and maintainable code is the priority. When in doubt, choose clarity over cleverness.