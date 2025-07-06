#!/usr/bin/env node

const crypto = require('crypto');

console.log('🔐 Generating secure environment variables...\n');

// Generate NEXTAUTH_SECRET
const nextAuthSecret = crypto.randomBytes(32).toString('base64');

console.log('Copy these to your Vercel Environment Variables:\n');
console.log('========================================');
console.log(`NEXTAUTH_SECRET="${nextAuthSecret}"`);
console.log(`NEXTAUTH_URL="https://crispycutsclub-git-main-kojjobs-projects.vercel.app"`);
console.log('========================================\n');

console.log('📝 Next steps:');
console.log('1. Go to https://vercel.com/dashboard');
console.log('2. Select your project');
console.log('3. Go to Settings → Environment Variables');
console.log('4. Add the variables above');
console.log('5. Add your DATABASE_URL from Vercel Postgres');
console.log('\n✅ Done!');