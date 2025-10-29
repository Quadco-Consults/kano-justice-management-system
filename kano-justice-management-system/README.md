# Kano Justice Management System (KJMS)

A comprehensive web-based system for automating the Ministry of Justice's core functions in Kano State, Nigeria. This Next.js frontend application provides a modern, responsive interface for managing legal operations, case tracking, and stakeholder coordination.

## 🚀 Features

### ✅ Implemented
- **Modern Tech Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Authentication System**: Role-based access control with NextAuth.js
- **Interactive Dashboard**: Real-time metrics and data visualization using Recharts
- **Legal Advisory Module**: Complete request management system for legal opinions
- **Responsive Design**: Mobile-first design that works across all devices
- **Role-Based Navigation**: Dynamic sidebar based on user permissions

### 🔄 Planned Features
- Public Prosecution Workflow System
- Legal Records & Knowledge Management
- Civil Litigation & Representation Module
- Legislative Drafting & Law Reform Platform
- Regulatory & Statutory Submissions Tracker
- Stakeholder Coordination Platform
- API Integration Layer
- Advanced Analytics & Reporting

## 🏗️ System Architecture

Based on the technical proposal for the Kano State Ministry of Justice, this system implements:

- **Frontend**: React.js with Tailwind UI for responsive dashboards
- **Backend**: Django REST Framework (to be integrated)
- **Database**: PostgreSQL with encryption-at-rest
- **Hosting**: Microsoft Azure Cloud infrastructure
- **Security**: Role-based access control, SSL/TLS encryption

## 🔐 User Roles & Permissions

The system supports multiple user roles with specific permissions:

- **Admin**: Full system access
- **Attorney General**: Executive-level access to all modules
- **Deputy Attorney General**: Senior management access
- **Director**: Department-level management
- **Prosecutor**: Public prosecution workflows
- **Legal Officer**: Legal advisory and opinion services
- **Legislative Drafter**: Law reform and drafting
- **Court Liaison**: Court coordination and scheduling
- **Case Manager**: Case tracking and management
- **Clerk**: Basic data entry and document management

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kano-justice-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

   Update the environment variables in `.env.local`:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 👥 Demo Credentials

For testing purposes, use these demo credentials:

| Role | Email | Password |
|------|-------|----------|
| Attorney General | attorney.general@kano.gov.ng | password123 |
| Deputy Attorney General | deputy.ag@kano.gov.ng | password123 |
| Prosecutor | prosecutor@kano.gov.ng | password123 |
| Legal Officer | legal.officer@kano.gov.ng | password123 |

## 📱 Key Modules

### Dashboard
- Real-time metrics and KPIs
- Interactive charts and visualizations
- Recent activities feed
- Upcoming deadlines tracker
- Department performance overview

### Legal Advisory
- Request submission portal
- Case tracking and status updates
- Document management
- Legal opinion generation
- Priority-based workflow

### Authentication
- Secure login system
- Role-based access control
- Session management
- Protected routes

## 🎨 Design System

The application uses a consistent design system built with Tailwind CSS:

- **Primary Colors**: Green-based color palette (#22c55e)
- **Secondary Colors**: Gray-based neutrals
- **Typography**: Inter font family
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first approach with responsive breakpoints

## 🛠️ Development

### Project Structure
```
src/
├── app/                    # Next.js 13+ app directory
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Main dashboard
│   ├── legal-advisory/    # Legal advisory module
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── dashboard/         # Dashboard-specific components
│   ├── providers/         # Context providers
│   └── ui/               # UI components
├── lib/                  # Utility libraries
├── types/                # TypeScript type definitions
└── utils/                # Helper functions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

### Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: React hooks and context

## 🔄 Integration

This frontend is designed to integrate with:

- **Backend API**: Django REST Framework
- **Database**: PostgreSQL
- **Cloud Services**: Microsoft Azure
- **External Systems**: Court management systems, ERP systems

## 📊 Dashboard Features

The dashboard provides comprehensive insights:

- **Case Metrics**: Total, active, completed, and pending cases
- **Success Rates**: Performance tracking and trends
- **Department Performance**: Efficiency metrics by department
- **Monthly Analytics**: Case opening and closure trends
- **Statutory Submissions**: Compliance tracking
- **Court Schedule**: Upcoming hearings and proceedings

## 🔒 Security

- Role-based access control (RBAC)
- Protected routes with middleware
- Session-based authentication
- Environment variable protection
- Input validation and sanitization

## 🌐 Deployment

The application is designed for deployment on:

- **Development**: Local development environment
- **Staging**: Azure App Services
- **Production**: Azure cloud infrastructure with:
  - App Service for hosting
  - Azure SQL Database
  - Azure Key Vault for secrets
  - Azure Monitor for logging

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is developed for the Kano State Ministry of Justice as per the technical proposal dated October 23, 2025.

## 🤝 Support

For support and questions:
- Contact: Quadco Consults Limited
- Email: [Contact information from proposal]
- Technical Lead: Bello Umar Aminu (CTO)

---

**Note**: This is the frontend implementation of the Kano Justice Management System as outlined in the technical proposal. The backend API and database integration are planned for subsequent phases of development.