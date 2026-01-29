# Mining Opts Solutions (MOS) - Corporate Website

## Overview

This is a corporate website for Mining Opts Solutions Ltd, a technology services company operating in Ghana and West Africa. The site showcases their enterprise technology services including data centre solutions, cybersecurity, and cloud infrastructure. It features a multi-page marketing site with a contact form that submits to a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and UI animations
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (ESM modules)
- **API Pattern**: REST endpoints defined in shared route schemas
- **Build System**: Vite for frontend, esbuild for server bundling

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` - shared between frontend and backend
- **Migrations**: Drizzle Kit with `db:push` command

### Project Structure
```
client/           # React frontend application
  src/
    components/   # Reusable UI components
    pages/        # Route page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API route handlers
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared code between frontend/backend
  schema.ts       # Drizzle database schemas
  routes.ts       # API route definitions with Zod schemas
```

### Key Design Decisions

1. **Shared Schema Pattern**: Database schemas and API contracts are defined in `shared/` directory, enabling type safety across the full stack.

2. **Component Library**: Uses shadcn/ui components with custom theming via CSS variables. Components are in `client/src/components/ui/`.

3. **API Contract Pattern**: Routes are defined with Zod schemas in `shared/routes.ts`, providing runtime validation and TypeScript types.

4. **Development vs Production**: Vite dev server with HMR in development; static file serving from `dist/public` in production.

## External Dependencies

### Database
- PostgreSQL (requires `DATABASE_URL` environment variable)
- Drizzle ORM for database operations
- connect-pg-simple for session storage capability

### UI Libraries
- Radix UI primitives (dialog, dropdown, tabs, etc.)
- Lucide React for icons
- React Icons for additional icon sets
- Embla Carousel for carousels

### Key NPM Packages
- `@tanstack/react-query` - Server state management
- `framer-motion` - Animation library
- `zod` - Schema validation
- `drizzle-orm` / `drizzle-zod` - Database ORM and schema generation
- `react-hook-form` - Form state management

### Fonts
- Plus Jakarta Sans (headings)
- Inter (body text)
- Loaded via Google Fonts CDN

## Recent Changes (January 2026)

### Company Profile Update
- Updated all content to match official company profile document
- Company tagline: "Performance. Precision. Sustainability."
- Established: 2019 by multidisciplinary team of experienced engineers
- Regional footprint: Ghana, Guinea, Côte d'Ivoire, Sierra Leone, Burkina Faso, Mali

### Core Service Lines (Updated)
1. Contract Mining & Mine Operations
2. EPC Services (Engineering, Procurement & Construction)
3. Mining Technologies & Digital Systems
4. IT Supplies & Enterprise Technology
5. Oil & Gas Support Services
6. Environmental & ESG Services

### Values (Updated)
- Performance: Measurable results for throughput, uptime, efficiency
- Precision: Engineering accuracy, disciplined execution, data-driven decisions
- Sustainability: Responsible operations protecting people and environment
- Integrity: Ethical, transparent and accountable

### Technology Partners
- Cisco, Dell, HP, CrowdStrike (IT Hardware & Services)
- Ramjack, Westcon-Comstor (Distribution & Solutions)

### Contact Information
- Location: Accra, Ghana, West Africa
- Phone: +233 302 524 934
- Email: info@miningopts.com
- Careers: careers@miningopts.com

### UI/UX Compliance Updates
- Removed all custom hover/active states from Buttons
- Added flex-wrap and gap classes to flex layouts
- Added data-testid attributes to interactive elements

### Website Redesign (January 29, 2026)
- **Hero Section**: Redesigned with cleaner layout, better typography hierarchy, and professional appearance
- **Navbar**: Improved visibility with dark gradient overlay on transparent state for better contrast
- **Industries Section**: New professional image cards with generated cover images for each industry
- **Industry Cover Images**: Generated 6 professional images for Mining, Oil & Gas, EPC, Government, Environmental, and Industrial sectors

### Assets & Branding
- Company logo and partner logos integrated throughout
- Team photos displayed on About and Careers pages
- Industry cover images: industry-mining.png, industry-oil-gas.png, industry-epc.png, industry-government.png, industry-environmental.png, industry-industrial.png
- All images stored in `client/src/assets/images/` using `@assets` alias