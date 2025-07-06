# Vercel Environment Variables Setup

Add these environment variables to your Vercel project:

## Required Variables

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these for Production, Preview, and Development:

```
DATABASE_URL = prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMDFKWkc1Vk1IWUhLMkFSWU1GNVo2OTVKTUoiLCJ0ZW5hbnRfaWQiOiJlY2FlZTE1Mzg3M2JkZWYzN2JlMDQxMGFlYzVjMTY5ZGNkYzc2MTQ3MjFlMGI3MmE1ZjZkYzdlODQ4ZmE3OWU4IiwiaW50ZXJuYWxfc2VjcmV0IjoiNDQ0NzczNWItYjY4YS00NTVmLThmYWEtYzkxNjZhNjM4ZmZjIn0.D4EJ2bYIsW8SlKLn7m0b0tQL42KnT46KQzMx_LOo3bA

DIRECT_URL = postgres://ecaee153873bdef37be0410aec5c169dcdc7614721e0b72a5f6dc7e848fa79e8:sk_VfzyaciqJ_TY79j_mWJ1m@db.prisma.io:5432/?sslmode=require

NEXTAUTH_SECRET = [Generate with: openssl rand -base64 32]

NEXTAUTH_URL = https://crispycutsclub.vercel.app
```

## Generate NEXTAUTH_SECRET

Run this command in your terminal:
```bash
openssl rand -base64 32
```

Copy the output and use it as your NEXTAUTH_SECRET value.

## Important Notes

1. **DATABASE_URL**: Uses Prisma Accelerate for connection pooling
2. **DIRECT_URL**: Direct connection for migrations (Vercel won't use this)
3. **NEXTAUTH_SECRET**: Must be at least 32 characters
4. **NEXTAUTH_URL**: Must be your production URL (with https://)

## After Adding Variables

1. Trigger a new deployment in Vercel
2. Check the deployment logs for any errors
3. Visit https://crispycutsclub.vercel.app/setup to verify

Your database is already set up and ready to use!