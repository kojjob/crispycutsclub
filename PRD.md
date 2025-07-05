# Product Requirements Document - Crispy Cuts Club

## Executive Summary

Crispy Cuts Club is a premium membership platform that revolutionizes the barbering industry by connecting clients with exclusive barbers through a subscription-based model. The platform serves as a marketplace for premium grooming services while supporting charitable initiatives and professional modeling agencies.

### Vision
To become the premier grooming membership platform that ensures consistent, high-quality haircuts while providing barbers with stable income and clients with exclusive access to top-tier grooming services.

### Mission
Create a sustainable ecosystem where barbers thrive financially, clients receive premium services, and communities benefit through charitable programs.

## Market Analysis

### Problem Statement
1. **Clients** struggle to find consistent, quality barbers and face unpredictable pricing
2. **Barbers** deal with irregular income and client retention challenges
3. **Modeling agencies** need reliable grooming partners for their talent
4. **Homeless individuals** lack access to basic grooming services for dignity and job interviews

### Solution
A membership-based platform that:
- Guarantees clients consistent pricing and exclusive barber access
- Provides barbers with predictable monthly income
- Offers agencies a premium partnership for talent grooming
- Enables charitable grooming services for homeless shelters

## User Personas

### 1. Premium Client (Primary)
- **Demographics**: 25-45, professional, urban/suburban
- **Needs**: Consistent quality cuts, predictable pricing, convenience
- **Pain Points**: Finding reliable barbers, booking hassles, price variations
- **Goals**: Look professional, save time, build barber relationship

### 2. Professional Barber
- **Demographics**: 22-50, experienced, entrepreneurial
- **Needs**: Stable income, client retention, business growth
- **Pain Points**: Income fluctuation, marketing costs, no-shows
- **Goals**: Build loyal clientele, increase revenue, focus on craft

### 3. Modeling Agency Manager
- **Demographics**: 30-55, fashion/entertainment industry
- **Needs**: Reliable grooming for 50+ models, quality consistency
- **Pain Points**: Last-minute booking scrambles, inconsistent styles
- **Goals**: Professional model appearance, simplified billing

### 4. Shelter Administrator
- **Demographics**: 35-65, non-profit sector
- **Needs**: Dignity services for residents, job interview prep
- **Pain Points**: Limited budget, volunteer coordination
- **Goals**: Improve resident confidence and employability

## Core Features

### 1. Membership System

#### Client Membership
- **Pricing**: Starting at £44.99/month (barber-set, admin-approved)
- **Benefits**: 
  - Up to 4 haircuts monthly (1 per 7 days minimum)
  - Locked pricing for membership duration
  - Priority booking
  - Member-exclusive slots

#### Membership Rules
- **Lock-in Period**: 2 months with chosen barber
- **Grace Period**: 48 hours to switch barbers (before first appointment)
- **Post Lock-in**: Free to switch barbers within area
- **Cancellation**: Anytime after 2-month minimum

### 2. Booking System

#### Booking Rules
- Maximum 4 appointments per month
- Minimum 7 days between appointments
- 48-hour advance booking required
- Cancellation policy: 24-hour notice

#### Extra Services
- Additional cuts available through direct barber contact
- Barber sets discounted member rate
- Processed outside platform

### 3. Area Management

#### Geographic Restrictions
- Cities divided into defined areas by admin
- 2-3 barbers maximum per area
- Exclusive territories for barbers
- Clients can only book within their selected area

#### Area Selection Process
1. Client enters postcode/selects on map
2. System shows available areas
3. Display barbers in selected area
4. Client chooses preferred barber

### 4. Payment Processing

#### Payment Methods
- Direct Debit (preferred)
- Instant Bank Payment
- Card payments (with SCA)

#### Revenue Distribution
- **Standard Clients**: 90% to barber, 10% platform
- **Agency/Shelter Clients**: 75% to barber, 25% platform
- **Admin Fee**: £50/month per barber (increasing over time)

### 5. Multi-Portal System

#### Client Portal
**Features**:
- Dashboard with upcoming appointments
- Barber profile and portfolio view
- Booking calendar
- Payment history
- Membership management
- Browse other barbers (after 2 months)

#### Barber Portal
**Features**:
- Appointment calendar management
- Client roster (view-only)
- Income analytics and reports
- Availability settings
- Portfolio management
- Tips & growth strategies

#### Agency Portal
**Features**:
- Model roster management
- Bulk booking system
- Contract details
- Payment dashboard
- Usage reports

#### Admin Portal
**Features**:
- User approval queue
- Area management
- Payment reconciliation
- Analytics dashboard
- Contract management
- System configuration

## Detailed User Flows

### Client Signup & Onboarding
1. Visit homepage → Click "Clients" section
2. Select city/area (map or dropdown)
3. View available barbers in area
4. Select barber → View full profile
5. Choose membership → Create account
6. Setup payment method
7. Book first appointment
8. Receive confirmation & welcome email

### Barber Application Process
1. Click "Become a Barber"
2. Fill application form:
   - Personal details
   - Experience/qualifications
   - Instagram portfolio (required)
   - Proposed pricing
   - Preferred area
3. Submit for admin review
4. Admin reviews:
   - Portfolio quality
   - Pricing fairness
   - Area availability
5. Approval/rejection notification
6. If approved → Portal access & onboarding

### Agency Partnership Flow
1. Visit Agency Partnership page
2. Review partnership benefits
3. Submit interest form:
   - Company details
   - Number of models (min 50)
   - Contract length preference
4. Admin contact for negotiation
5. Contract signing
6. Onboarding fee payment:
   - 1 year: £2,000
   - 2 years: £1,700
   - 3 years: £1,300
   - 4 years: £1,000
7. Model list submission
8. Models receive access credentials

### Booking Flow
1. Client logs into portal
2. Views barber availability
3. Selects preferred slot
4. Confirms booking
5. Receives confirmation (email/SMS)
6. 24-hour reminder sent
7. Post-appointment review option

## Business Rules

### Pricing Rules
- Minimum membership: £44.99/month
- Barbers set own prices above minimum
- Admin approval required for all pricing
- Prices must be competitive with local market
- No mid-month price changes

### Barber Rules
- Maximum 2-3 per area
- Cannot operate outside assigned area
- Cannot refuse platform-assigned clients
- Must maintain minimum availability
- Portfolio updates quarterly required
- Cannot directly poach clients off-platform

### Platform Policies
- No discrimination in service delivery
- Professional conduct required
- Quality standards enforcement
- Review system for accountability
- Dispute resolution process

## Technical Requirements

### Performance
- Page load time < 3 seconds
- 99.9% uptime SLA
- Real-time booking updates
- Mobile-responsive design
- Offline capability for key features

### Security
- PCI DSS compliance
- GDPR compliance
- 2FA for all user types
- Encrypted data storage
- Regular security audits

### Scalability
- Support 10,000+ concurrent users
- Handle 100,000+ monthly bookings
- Multi-region deployment
- Auto-scaling infrastructure

### Integrations
- Stripe payment processing
- SMS notifications (Twilio)
- Email service (SendGrid)
- Maps API (Google/Mapbox)
- Calendar sync (Google/Apple)
- Instagram API for portfolios

## Success Metrics

### Platform KPIs
- Monthly Active Users (MAU)
- Customer Acquisition Cost (CAC)
- Customer Lifetime Value (CLV)
- Monthly Recurring Revenue (MRR)
- Churn rate < 5%

### User Satisfaction
- Client retention > 85%
- Barber retention > 90%
- NPS score > 70
- Booking completion rate > 95%
- Support ticket resolution < 24hrs

### Business Growth
- 25% MoM growth (Year 1)
- Break-even by Month 18
- 1,000 active memberships (Month 6)
- 100 partner barbers (Month 12)
- 5 agency partnerships (Year 1)

## Launch Strategy

### Phase 1: MVP (Months 1-3)
- Core booking system
- Basic client/barber portals
- Payment processing
- Single city launch (London)

### Phase 2: Expansion (Months 4-6)
- Agency partnerships
- Advanced analytics
- Mobile apps
- 5 additional cities

### Phase 3: Scale (Months 7-12)
- Shelter program launch
- International expansion
- Advanced features
- API for third-party integrations

## Risk Mitigation

### Business Risks
- **Barber churn**: Exclusive territories, fair revenue share
- **Client acquisition**: Referral program, marketing campaigns
- **Competition**: Exclusive contracts, premium positioning
- **Regulatory**: Legal compliance, proper licensing

### Technical Risks
- **Scalability**: Cloud infrastructure, load testing
- **Security**: Regular audits, bug bounty program
- **Downtime**: Redundancy, disaster recovery
- **Data loss**: Regular backups, data replication

## Appendices

### A. Wireframes
[Link to Figma/design files]

### B. Technical Architecture
[Link to architecture documentation]

### C. Legal Requirements
- Terms & Conditions (all user types)
- Privacy Policy
- Cookie Policy
- Barber Agreement
- Agency Contract Template

### D. Marketing Materials
- Brand guidelines
- Launch campaign
- Referral program details
- Social media strategy

## Approval & Sign-off

**Product Owner**: _________________  
**Technical Lead**: _________________  
**Design Lead**: _________________  
**Date**: _________________

---

*This document is a living document and will be updated as the product evolves.*