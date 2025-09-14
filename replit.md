# QuickCourt - Sports Booking Platform

## Overview

QuickCourt is a Gen-Z focused sports facility booking platform that solves the fragmented sports booking experience. It provides a unified platform for finding courts, making bookings, splitting payments with friends, and earning rewards. The platform serves three main user types: regular users booking courts, facility owners managing their venues, and admins overseeing the entire ecosystem.

Key features include real-time court availability, unique split payment functionality using UPI IDs, instant WhatsApp confirmations, digital wallet system, rewards program, and comprehensive dashboards for all user types.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components for consistent design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Authentication**: Context-based auth system with JWT tokens stored in localStorage

### Backend Architecture
- **Runtime**: Node.js with Express.js REST API
- **Language**: TypeScript with ES modules
- **Database Layer**: Drizzle ORM with Neon Serverless PostgreSQL
- **Authentication**: JWT-based authentication with bcrypt for password hashing
- **File Storage**: Google Cloud Storage with Replit sidecar integration
- **API Structure**: RESTful endpoints with role-based access control

### Database Design
- **Primary Database**: PostgreSQL with comprehensive schema including:
  - Separate user tables for web users and CRM users
  - Facilities and courts with many-to-many sport relationships
  - Booking system with status tracking and payment details
  - Reviews, coupons, subscriptions, and referral systems
  - Wallet transactions and reward points tracking
  - Company management for multi-tenant facility ownership

### Authentication & Authorization
- **Multi-role System**: Regular users, facility owners, and system admins
- **Separate Auth Flows**: Distinct login systems for web users vs CRM users
- **JWT Implementation**: Secure token-based authentication with middleware protection
- **Role-based Access**: Different API endpoints and dashboard access based on user roles

### Payment Integration
- **Stripe Integration**: Full payment processing with webhooks for payment confirmation
- **Split Payment System**: Custom UPI-based payment splitting among friends
- **Digital Wallet**: Internal wallet system for quick payments and refunds
- **Rewards System**: Points-based reward system integrated with payment flow

### Third-party Integrations
- **WhatsApp Messaging**: Twilio integration for booking confirmations and notifications
- **Image Management**: Cloudinary integration for facility image uploads and optimization
- **Maps Integration**: Google Maps links for venue directions
- **Analytics**: Chart.js/Recharts for dashboard analytics and business insights

### Development & Deployment
- **Environment**: Replit-optimized with development environment detection
- **SSL Handling**: Custom SSL certificate handling for development environment
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages
- **Performance**: Optimized with query caching, image optimization, and efficient data fetching

## External Dependencies

- **Database**: Neon Serverless PostgreSQL for scalable data storage
- **Payment Processing**: Stripe for secure payment handling and PCI compliance
- **Cloud Storage**: Google Cloud Storage via Replit sidecar for file management
- **Messaging Service**: Twilio for WhatsApp notifications and confirmations
- **Image Optimization**: Cloudinary for image processing and CDN delivery
- **UI Components**: Radix UI for accessible component primitives
- **Charts & Analytics**: Recharts for data visualization in dashboards
- **Maps**: Google Maps API for location services and directions