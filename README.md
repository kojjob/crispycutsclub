# Crispy Cuts Club

A premium membership platform connecting clients with exclusive master barbers through subscription-based grooming services.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd crispycutsclub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database and API credentials
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📚 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **State Management**: Zustand
- **Testing**: Jest & React Testing Library

## 🏗️ Project Structure

```
crispycutsclub/
├── app/                 # Next.js App Router
│   ├── (auth)/         # Authentication routes
│   ├── (client)/       # Client portal
│   ├── (barber)/       # Barber portal
│   ├── (agency)/       # Agency portal
│   ├── (admin)/        # Admin dashboard
│   └── api/            # API routes
├── components/         # Reusable components
├── lib/               # Utilities and configs
├── types/             # TypeScript definitions
├── prisma/            # Database schema
└── tests/             # Test files
```

## 🎨 Design System

- **Primary Colors**: Black (#000000) & White (#FFFFFF)
- **Accent**: Gold (#D4AF37)
- **Typography**: Playfair Display (serif) & Inter (sans-serif)

## 📝 Key Features

- **Multi-tenant Architecture**: Support for Clients, Barbers, Agencies, and Shelters
- **Membership System**: £44.99+ monthly subscriptions with 2-month lock-in
- **Booking System**: Up to 4 haircuts per month with 7-day spacing
- **Area Management**: Geographic restrictions (2-3 barbers per area)
- **Payment Processing**: Direct Debit & card payments via Stripe
- **Real-time Updates**: Live booking availability

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

## 📖 Documentation

- [Product Requirements Document](./PRD.md)
- [Development Guidelines](./CLAUDE.md)

## 🚦 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📄 License

Copyright © 2024 Crispy Cuts Club. All rights reserved.