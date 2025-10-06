# Bayscom Energy ERP System - Frontend

A comprehensive ERP system built for Bayscom Energy Limited, a downstream oil and gas company managing filling stations, truck fleet operations, LPG accessories, and lubricants.

## Features

### Core Modules

1. **Dashboard**
   - Real-time analytics and KPIs
   - Revenue tracking
   - Station and fleet monitoring
   - Recent sales and active trips

2. **User Management**
   - CRUD operations for users
   - User status management (active, inactive, suspended)
   - Role and department assignment

3. **Roles & Permissions**
   - Role-based access control
   - Granular permissions by module
   - Multiple permission levels (create, read, update, delete, manage)

4. **Departments**
   - Department hierarchy
   - Employee count tracking
   - Manager assignment

5. **Filling Stations**
   - Station management
   - Tank level monitoring
   - Pump status tracking
   - Real-time product availability

6. **Fleet Management & Financial Tracking**
   - Truck inventory (AGO & LPG tankers)
   - Trip scheduling and tracking with financial details
   - Distance-based charging (₦/km)
   - Comprehensive expense tracking per trip
   - Earnings and profit calculation
   - Truck acquisition cost and ROI tracking
   - Break-even analysis and monitoring
   - Monthly and annual financial reports
   - Fleet-wide financial analytics
   - Maintenance schedules
   - Insurance tracking

7. **LPG Accessories Inventory**
   - Cylinders (6kg, 12kg, etc.)
   - Regulators, hoses, and valves
   - Stock level monitoring
   - Low stock alerts
   - Reorder management

8. **Lubricants**
   - Engine oils, gear oils, hydraulic oils, grease
   - Brand management (Mobil, Shell, Total, Castrol)
   - Profit margin tracking
   - Sales management

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **HTTP Client**: Axios
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Authentication

The system includes a mock authentication system. For demo purposes:
- Navigate to `/login`
- Enter any email and password
- You'll be logged in as an admin user

**Note**: Replace the mock authentication in `app/login/page.tsx` with your actual backend API.

## API Integration

The project includes an API client setup in `lib/api/client.ts`. To integrate with your backend:

1. Update `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
2. Implement actual API calls in each module
3. Replace mock data with API responses

## Project Structure

```
bayscom-erp/
├── app/                          # Next.js app directory
│   ├── dashboard/               # Dashboard page
│   ├── users/                   # User management
│   ├── roles/                   # Roles & permissions
│   ├── departments/             # Department management
│   ├── filling-stations/        # Station management
│   ├── trucks/                  # Fleet management
│   ├── inventory/               # LPG accessories
│   ├── lubricants/              # Lubricants management
│   └── login/                   # Authentication
├── components/
│   ├── ui/                      # Reusable UI components
│   ├── layout/                  # Layout components
│   └── [module]/                # Module-specific components
├── lib/
│   ├── api/                     # API client
│   ├── stores/                  # State management
│   ├── types/                   # TypeScript types
│   └── utils/                   # Utilities
└── public/                      # Static assets
```

## Available Routes

- `/` - Home (redirects to dashboard or login)
- `/login` - Authentication page
- `/dashboard` - Main dashboard with analytics
- `/users` - User management
- `/roles` - Roles and permissions
- `/departments` - Department management
- `/filling-stations` - Filling station operations
- `/trucks` - Fleet and trip management
- `/trucks/financials` - Fleet financial analytics & ROI tracking
- `/trucks/trips/[id]` - Individual trip details with expense tracking
- `/inventory` - LPG accessories inventory
- `/lubricants` - Lubricants management

## Future Enhancements

- Real-time notifications
- Advanced reporting and analytics
- Mobile responsive optimization
- Role-based UI restrictions
- Multi-language support
- Dark mode
- Export functionality (PDF, Excel)

## License

Proprietary - Bayscom Energy Limited
