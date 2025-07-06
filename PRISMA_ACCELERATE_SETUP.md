# Prisma Accelerate Setup

You're using Prisma Accelerate, which provides connection pooling for serverless environments. Here's how to complete the setup:

## What is Prisma Accelerate?

Prisma Accelerate is a global database cache that:
- Provides connection pooling for serverless
- Reduces database connection overhead
- Improves query performance
- Works perfectly with Vercel

## Your Setup

Your Accelerate connection string is already in `.env`:
```
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=..."
```

## Next Steps

### 1. Set Up Your Actual Database

Prisma Accelerate is a proxy, not a database. You need an actual PostgreSQL database:

#### Option A: Vercel Postgres (Recommended)
1. Go to Vercel Dashboard → Storage → Create Database → Postgres
2. Copy the connection string (without ?sslmode=require)
3. Go to [Prisma Data Platform](https://console.prisma.io)
4. Add your database connection string there
5. It will be linked to your Accelerate endpoint

#### Option B: Supabase/Neon/Other
1. Create a PostgreSQL database
2. Get the connection string
3. Add it to Prisma Data Platform
4. Link it to your Accelerate project

### 2. Update Vercel Environment Variables

Add these to your Vercel project:
```
DATABASE_URL = [your accelerate connection string]
NEXTAUTH_SECRET = [generate with: openssl rand -base64 32]
NEXTAUTH_URL = https://crispycutsclub.vercel.app
```

### 3. Run Database Migrations

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to your database
npx prisma db push
```

### 4. Verify Setup

Visit: https://crispycutsclub.vercel.app/api/health

You should see:
- database: true
- status: "healthy"

## Important Notes

1. **Connection String**: Keep your Accelerate connection string secure
2. **Region**: Choose a database in the same region as your Vercel deployment
3. **Caching**: Accelerate provides automatic query caching
4. **Monitoring**: Check the Prisma Data Platform for performance metrics

## Troubleshooting

### "Can't reach database server"
- Make sure you've linked an actual database in Prisma Data Platform
- Check that your database allows connections from Accelerate

### "Invalid API key"
- Verify your Accelerate connection string is correct
- Check it starts with `prisma+postgres://`

### "Schema out of sync"
- Run `npx prisma db push` to sync your schema
- Or use `npx prisma migrate deploy` for production

## Benefits of Accelerate

1. **No connection limits**: Handle thousands of concurrent requests
2. **Global edge caching**: Faster queries worldwide
3. **Auto-scaling**: Handles traffic spikes automatically
4. **Built for serverless**: Perfect for Vercel deployments

Your app is now configured to use Prisma Accelerate! Just add your actual database in the Prisma Data Platform.