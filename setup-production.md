# Production Setup Guide for Crispy Cuts Club

## 1. Create Vercel Postgres Database

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your `crispycutsclub` project
3. Go to the "Storage" tab
4. Click "Create Database" → Select "Postgres"
5. Choose a database name (e.g., `crispycutsclub-db`)
6. Select your preferred region (closest to your users)
7. Click "Create"

## 2. Get Database Connection String

After creating the database:
1. Click on your new database
2. Go to ".env.local" tab
3. Copy the `POSTGRES_URL` value (this is your DATABASE_URL)

## 3. Set Environment Variables in Vercel

Go to Settings → Environment Variables and add:

```bash
# Database (copy from Vercel Postgres)
DATABASE_URL="your-postgres-url-here"

# NextAuth Configuration
NEXTAUTH_URL="https://crispycutsclub-git-main-kojjobs-projects.vercel.app"
NEXTAUTH_SECRET="[generate-with-command-below]"

# Optional for now (can add later)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
STRIPE_SECRET_KEY=""
```

## 4. Generate NEXTAUTH_SECRET

Run this command locally to generate a secure secret:
```bash
openssl rand -base64 32
```

Or use this Node.js command:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 5. Run Database Migrations

After setting up the database, you need to run migrations:

### Option A: Using Vercel CLI
```bash
npm i -g vercel
vercel env pull .env.production.local
npx prisma migrate deploy
```

### Option B: Direct Connection
```bash
# Set the DATABASE_URL locally
export DATABASE_URL="your-postgres-url-here"
npx prisma migrate deploy
```

## 6. Verify Setup

1. Visit: https://crispycutsclub-git-main-kojjobs-projects.vercel.app/api/health
2. You should see:
```json
{
  "status": "healthy",
  "database": "connected",
  "environment": "production",
  "hasAuthSecret": true,
  "hasAuthUrl": true,
  "authUrl": "https://crispycutsclub-git-main-kojjobs-projects.vercel.app"
}
```

## 7. Common Issues & Solutions

### Issue: "failure to create account"
- Check if migrations ran successfully
- Verify DATABASE_URL is correct
- Check Vercel Function logs

### Issue: "Invalid `prisma.user.findUnique()` invocation"
- Database schema not migrated
- Run: `npx prisma migrate deploy`

### Issue: "NEXTAUTH_URL is not set"
- Add NEXTAUTH_URL to environment variables
- Must match your production URL exactly

## 8. Testing Account Creation

Try creating a test account:
1. Go to https://crispycutsclub-git-main-kojjobs-projects.vercel.app/signup/client
2. Fill in the form
3. If successful, you'll be redirected to login

## Need Help?

If you encounter issues:
1. Check Vercel Function logs: Dashboard → Functions → View logs
2. Test database connection: /api/health endpoint
3. Verify all environment variables are set correctly