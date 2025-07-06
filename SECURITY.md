# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in Crispy Cuts Club, please report it responsibly:

1. **DO NOT** create a public GitHub issue
2. Email security@crispycutsclub.com with details
3. Include steps to reproduce the vulnerability
4. Allow 48 hours for initial response

## Security Measures Implemented

### Authentication & Authorization
- ✅ Secure password hashing with bcrypt (12 rounds)
- ✅ JWT-based session management with expiration
- ✅ CSRF protection on all forms
- ✅ Role-based access control (RBAC)
- ✅ Secure cookie configuration with httpOnly and sameSite

### Input Validation & Sanitization
- ✅ Zod schema validation on all API endpoints
- ✅ Maximum length validation on all text inputs
- ✅ Strong password requirements enforced
- ✅ SQL injection prevention via Prisma ORM
- ✅ Open redirect protection on authentication callbacks

### Security Headers
- ✅ Strict-Transport-Security (HSTS)
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Content-Security-Policy configured
- ✅ Referrer-Policy: origin-when-cross-origin
- ✅ Permissions-Policy configured

### Rate Limiting
- ✅ Authentication endpoints: 10 requests per 15 minutes
- ✅ API endpoints: 10 requests per minute
- ✅ Rate limit headers included in responses

### Environment & Configuration
- ✅ Environment variables for sensitive data
- ✅ Production/development key validation
- ✅ Debug mode disabled in production
- ✅ Secure defaults for all configurations

### Dependencies
- ✅ Regular dependency updates
- ✅ npm audit run on builds
- ✅ No use of deprecated packages

## Security Best Practices for Development

### Code Review Checklist
- [ ] No hardcoded credentials or secrets
- [ ] All user input is validated and sanitized
- [ ] Authentication checks on protected routes
- [ ] Error messages don't leak sensitive information
- [ ] Logging doesn't include sensitive data
- [ ] Database queries use parameterized statements
- [ ] File uploads are restricted and validated

### Environment Variables
- Never commit `.env` files
- Use `.env.example` as template
- Rotate secrets regularly
- Use different keys for each environment

### API Security
- Always validate request body schema
- Implement proper error handling
- Use rate limiting on all endpoints
- Return consistent error responses
- Log security events

### Client-Side Security
- Never store sensitive data in localStorage
- Validate data on both client and server
- Use HTTPS in production
- Implement proper CORS configuration

## Compliance

This application follows security best practices aligned with:
- OWASP Top 10
- PCI DSS (for payment processing)
- GDPR (for data protection)

## Security Audit Schedule

- Weekly: Dependency vulnerability scan
- Monthly: Code security review
- Quarterly: Penetration testing
- Annually: Full security audit

## Contact

Security Team: security@crispycutsclub.com
Bug Bounty Program: Coming soon