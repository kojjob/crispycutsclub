# Vercel Setup Guide for Crispy Cuts Club

This guide will help you fix the "Failed to create account" error by properly setting up your production environment.

## 🚨 Why You're Getting "Failed to create account"

The error occurs because:
1. No database is connected in production
2. Required environment variables are missing
3. NextAuth is not properly configured

## 📋 Required Environment Variables

Add these in Vercel Dashboard → Your Project → Settings → Environment Variables:

### 1. Database (Choose One Option)

#### Option A: Vercel Postgres (Recommended)
1. Go to Vercel Dashboard → Storage → Create Database → Postgres
2. Connect to your project
3. It will automatically add these variables:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `POSTGRES_USER`
   - `POSTGRES_HOST`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DATABASE`

4. Add this additional variable:
   ```
   DATABASE_URL = ${POSTGRES_PRISMA_URL}
   ```

#### Option B: Supabase (Free)
1. Create account at https://supabase.com
2. Create new project
3. Go to Settings → Database
4. Copy the connection string
5. Add to Vercel:
   ```
   DATABASE_URL = postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT].supabase.co:5432/postgres
   ```

### 2. NextAuth Configuration (REQUIRED)

Add these variables:

```
NEXTAUTH_SECRET = [generate with: openssl rand -base64 32]
NEXTAUTH_URL = https://your-app-name.vercel.app
```

**Important**: 
- `NEXTAUTH_URL` must be your actual production URL
- `NEXTAUTH_SECRET` must be at least 32 characters

### 3. How to Add Variables in Vercel

1. Go to: https://vercel.com/dashboard
2. Click on your project
3. Go to "Settings" tab
4. Click "Environment Variables" in sidebar
5. For each variable:
   - Enter the Key (e.g., `DATABASE_URL`)
   - Enter the Value
   - Select environments: ✓ Production ✓ Preview ✓ Development
   - Click "Save"

## 🗄️ Setting Up the Database

After adding environment variables:

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Pull Environment Variables
```bash
vercel env pull .env.production.local
```

### 3. Run Database Migrations
```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Or if using migrations
npx prisma migrate deploy
```

### 4. Verify Setup
Visit: https://your-app.vercel.app/api/health

You should see:
```json
{
  "status": "healthy",
  "database": "connected",
  "environment": "production",
  "hasAuthSecret": true,
  "hasAuthUrl": true
}
```

## 🔍 Troubleshooting

### Still getting "Failed to create account"?

1. **Check Logs**
   - Vercel Dashboard → Functions → View logs
   - Look for specific error messages

2. **Verify Environment Variables**
   - Make sure all variables are set for Production environment
   - Check for typos in variable names

3. **Database Connection**
   - Test with the health endpoint
   - Ensure migrations have run

4. **Clear Browser Data**
   - Clear cookies for your domain
   - Try incognito mode

### Common Issues:

1. **"Invalid `prisma.user.create()` invocation"**
   - Database schema not pushed
   - Run: `npx prisma db push`

2. **"NEXTAUTH_URL is not set"**
   - Add NEXTAUTH_URL with your production URL
   - Must include https://

3. **"Please provide a `secret` option"**
   - NEXTAUTH_SECRET is missing or too short
   - Generate new one: `openssl rand -base64 32`

## 📱 Quick Setup Checklist

- [ ] Create database (Vercel Postgres or Supabase)
- [ ] Add DATABASE_URL to Vercel env vars
- [ ] Add NEXTAUTH_SECRET (32+ characters)
- [ ] Add NEXTAUTH_URL (your production URL)
- [ ] Run `npx prisma db push` to create tables
- [ ] Test at /api/health endpoint
- [ ] Try signing up again

## 🆘 Need Help?

1. Check Vercel function logs for detailed errors
2. Use the health endpoint to debug
3. Ensure all environment variables are in Production environment
4. Database must be in same region as your deployment for best performance

Once these steps are complete, the signup should work properly!