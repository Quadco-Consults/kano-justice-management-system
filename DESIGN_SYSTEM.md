# Kano Justice Management System - Design System

## Overview
This design system provides guidelines for building consistent, accessible, and engaging interfaces for the Kano Justice Management System. All components follow these standards to ensure a cohesive user experience across all 12 modules.

---

## Color Palette

### Primary Colors
```css
Primary (Burgundy):     #006403  /* Main brand color - buttons, links, emphasis */
Primary Dark:           #004d02  /* Hover states, active elements */
Primary Light:          #A31D45  /* Lighter variant for backgrounds */
Primary Subtle:         rgba(139, 21, 56, 0.1)  /* Subtle backgrounds */
```

**Usage:** Primary actions, navigation highlights, branding, headers

### Secondary Colors
```css
Secondary (Orange):     #E67E22  /* Secondary actions, highlights */
Secondary Dark:         #D35400  /* Hover states */
Secondary Light:        #F39C12  /* Lighter variant */
```

**Usage:** Secondary buttons, call-to-actions, warnings, accents

### System Colors
```css
Success Green:          #2D5016  /* Success states, completed items, won cases */
Success Light:          #4CAF50  /* Lighter success variant */

Warning Orange:         #E67E22  /* Warnings, pending states */
Warning Light:          #FFA726  /* Lighter warning */

Error Red:              #DC2626  /* Errors, destructive actions, lost cases */
Error Light:            #EF4444  /* Lighter error */

Info Blue:              #3B82F6  /* Information, neutral alerts */
Info Light:             #60A5FA  /* Lighter info */
```

### Neutral Colors
```css
Gray 900:               #111827  /* Primary text */
Gray 800:               #1F2937  /* Secondary text */
Gray 700:               #374151  /* Tertiary text */
Gray 600:               #4B5563  /* Muted text */
Gray 500:               #6B7280  /* Placeholder text */
Gray 400:               #9CA3AF  /* Disabled text */
Gray 300:               #D1D5DB  /* Borders */
Gray 200:               #E5E7EB  /* Dividers */
Gray 100:               #F3F4F6  /* Backgrounds */
Gray 50:                #F9FAFB  /* Subtle backgrounds */
White:                  #FFFFFF  /* Pure white */
```

---

## Typography

### Font Family
```css
System Font Stack:
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Font Sizes & Usage
```css
text-xs:     0.75rem   (12px)  /* Small labels, badges, timestamps */
text-sm:     0.875rem  (14px)  /* Body text, table content, descriptions */
text-base:   1rem      (16px)  /* Default body text, paragraphs */
text-lg:     1.125rem  (18px)  /* Subheadings, card subtitles */
text-xl:     1.25rem   (20px)  /* Card titles, section headers */
text-2xl:    1.5rem    (24px)  /* Page titles, main headers */
text-3xl:    1.875rem  (30px)  /* Section divider headers */
text-4xl:    2.25rem   (36px)  /* Hero text, dashboard titles */
```

### Font Weights
```css
font-normal:    400   /* Body text, paragraphs */
font-medium:    500   /* Labels, buttons, nav items */
font-semibold:  600   /* Subheadings, card titles */
font-bold:      700   /* Page headings, emphasis */
```

---

## Spacing System

Use Tailwind's spacing scale (4px increments):

```css
0:    0px      /* No spacing */
1:    4px      /* Micro spacing - tight layouts */
2:    8px      /* Small gaps between related elements */
3:    12px     /* Medium gaps */
4:    16px     /* Standard spacing between elements */
5:    20px     /* Large gaps */
6:    24px     /* XL gaps - card padding */
8:    32px     /* 2XL - section spacing */
10:   40px     /* 3XL - large sections */
12:   48px     /* 4XL - major sections */
16:   64px     /* Page section dividers */
20:   80px     /* Large page sections */
```

**Common Patterns:**
- Card padding: `p-6` (24px)
- Button padding: `px-4 py-2` (16px horizontal, 8px vertical)
- Form field spacing: `space-y-4` (16px)
- Section spacing: `space-y-6` (24px)
- Page margins: `px-6 py-4` (24px horizontal, 16px vertical)

---

## Component Library

### 1. Buttons

#### Variants
- **default**: Burgundy background, white text (primary actions)
- **secondary**: Orange background, white text
- **outline**: White background, bordered
- **ghost**: Transparent, subtle hover
- **destructive**: Red background (delete, reject actions)
- **link**: Text only, underlined on hover

#### Sizes
- **sm**: `h-9 px-3` - Inline actions, tight spaces
- **default**: `h-10 px-4` - Standard buttons
- **lg**: `h-11 px-8` - Primary CTAs
- **icon**: `h-10 w-10` - Icon-only buttons

**Examples:**
```tsx
<Button variant="default">Submit Case</Button>
<Button variant="secondary">Draft Opinion</Button>
<Button variant="outline">Cancel</Button>
<Button variant="destructive">Delete Record</Button>
```

---

### 2. Cards

**Components:**
- `<Card>` - Main container
- `<CardHeader>` - Top section
- `<CardTitle>` - Heading
- `<CardDescription>` - Subtitle
- `<CardContent>` - Main content
- `<CardFooter>` - Bottom actions

**Common Patterns:**
```tsx
{/* Stat Card */}
<Card className="hover:shadow-md transition-shadow">
  <CardContent className="p-6">
    <StatCard
      title="Total Cases"
      value="1,234"
      icon={Scale}
      trend={{ value: 12, isPositive: true }}
    />
  </CardContent>
</Card>

{/* Information Card */}
<Card>
  <CardHeader>
    <CardTitle>Case CR/2024/001</CardTitle>
    <CardDescription>Filed on January 15, 2024</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Case details */}
  </CardContent>
  <CardFooter>
    <Button>View Details</Button>
  </CardFooter>
</Card>
```

---

### 3. Badges & Status Indicators

#### Status Badge
For general statuses across the system:
```tsx
<StatusBadge status="pending" />      {/* Yellow */}
<StatusBadge status="approved" />     {/* Green */}
<StatusBadge status="rejected" />     {/* Red */}
<StatusBadge status="completed" />    {/* Green */}
<StatusBadge status="in-progress" />  {/* Burgundy */}
```

#### Case Status Indicator
For prosecution and litigation cases:
```tsx
<CaseStatusIndicator status="filed" />
<CaseStatusIndicator status="in-trial" />
<CaseStatusIndicator status="verdict-delivered" />
<CaseStatusIndicator status="dismissed" />
```

#### Priority Indicator
For request priorities:
```tsx
<PriorityIndicator priority="urgent" />   {/* Red, pulsing */}
<PriorityIndicator priority="high" />     {/* Burgundy */}
<PriorityIndicator priority="medium" />   {/* Orange */}
<PriorityIndicator priority="low" />      {/* Gray */}
```

---

### 4. Data Table

Full-featured table with search, sort, and pagination:

```tsx
<DataTable
  data={cases}
  columns={[
    { key: 'caseNumber', label: 'Case Number', sortable: true },
    { key: 'title', label: 'Title' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => <CaseStatusIndicator status={value} />
    },
    { key: 'assignedTo', label: 'Assigned To' },
    { key: 'filedDate', label: 'Filed Date', sortable: true }
  ]}
  searchable
  searchPlaceholder="Search cases..."
  onRowClick={(case) => router.push(`/cases/${case.id}`)}
  pagination={{
    currentPage: 1,
    totalPages: 10,
    onPageChange: setPage
  }}
/>
```

---

### 5. Form Components

#### Form Field Wrapper
```tsx
<FormField
  label="Case Title"
  htmlFor="case-title"
  required
  hint="Enter a descriptive title for the case"
  error={errors.title}
>
  <Input id="case-title" {...register("title")} />
</FormField>
```

#### Input Types
```tsx
{/* Text Input */}
<Input type="text" placeholder="Enter case number" />

{/* Textarea */}
<Textarea rows={4} placeholder="Enter description" />

{/* Select */}
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select court" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="high-court">High Court</SelectItem>
    <SelectItem value="magistrate">Magistrate Court</SelectItem>
  </SelectContent>
</Select>

{/* Checkbox */}
<div className="flex items-center space-x-2">
  <Checkbox id="urgent" />
  <Label htmlFor="urgent">Mark as urgent</Label>
</div>
```

---

### 6. Modals & Dialogs

#### Standard Dialog
```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Case Details</DialogTitle>
      <DialogDescription>
        Review the case information below
      </DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

#### Confirm Dialog
```tsx
<ConfirmDialog
  open={confirmOpen}
  onOpenChange={setConfirmOpen}
  title="Delete Case"
  description="Are you sure you want to delete this case? This action cannot be undone."
  confirmText="Delete"
  variant="destructive"
  onConfirm={handleDelete}
/>
```

---

### 7. Page Layout Components

#### Page Header
```tsx
<PageHeader
  title="Public Prosecutions"
  description="Manage criminal prosecution cases"
  icon={Scale}
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Prosecutions' }
  ]}
  actions={
    <Button>
      <Plus className="w-4 h-4 mr-2" />
      New Case
    </Button>
  }
/>
```

#### Empty State
```tsx
<EmptyState
  icon={FileText}
  title="No cases found"
  description="Get started by filing your first case"
  action={{
    label: "File New Case",
    onClick: () => router.push('/cases/new')
  }}
/>
```

---

### 8. Timeline Component

For case progress tracking:
```tsx
<Timeline items={[
  {
    id: '1',
    title: 'Case Filed',
    description: 'Case filed by Prosecutor John Doe',
    date: '2024-01-15',
    status: 'completed',
    user: 'John Doe'
  },
  {
    id: '2',
    title: 'Investigation Ongoing',
    description: 'Evidence collection in progress',
    date: '2024-01-20',
    status: 'current'
  },
  {
    id: '3',
    title: 'Trial Date Scheduled',
    date: '2024-02-01',
    status: 'pending'
  }
]} />
```

---

## Layout Patterns

### Dashboard Grid
```tsx
{/* 4-column stat cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <StatCard title="Total Cases" value="1,234" icon={Scale} />
  <StatCard title="Pending" value="345" icon={Clock} />
  <StatCard title="Completed" value="789" icon={CheckCircle} />
  <StatCard title="Success Rate" value="85%" icon={TrendingUp} />
</div>

{/* 2-column layout */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
    </CardHeader>
    <CardContent>
      {/* Activity list */}
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Upcoming Hearings</CardTitle>
    </CardHeader>
    <CardContent>
      {/* Hearings list */}
    </CardContent>
  </Card>
</div>
```

### Form Layout
```tsx
<form onSubmit={handleSubmit} className="space-y-6">
  {/* 2-column grid for horizontal fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FormField label="First Name" htmlFor="firstName" required>
      <Input id="firstName" />
    </FormField>
    <FormField label="Last Name" htmlFor="lastName" required>
      <Input id="lastName" />
    </FormField>
  </div>

  {/* Full-width fields */}
  <FormField label="Case Title" htmlFor="title" required>
    <Input id="title" />
  </FormField>

  <FormField label="Description" htmlFor="description">
    <Textarea id="description" rows={4} />
  </FormField>

  {/* Actions */}
  <div className="flex justify-end gap-2">
    <Button type="button" variant="outline">Cancel</Button>
    <Button type="submit">Submit</Button>
  </div>
</form>
```

---

## Responsive Design

### Breakpoints
```css
sm:   640px   /* Landscape phones */
md:   768px   /* Tablets */
lg:   1024px  /* Laptops */
xl:   1280px  /* Desktops */
2xl:  1536px  /* Large screens */
```

### Mobile-First Examples
```tsx
{/* Responsive grid */}
<div className="
  grid
  grid-cols-1       /* Mobile: stack */
  md:grid-cols-2    /* Tablet: 2 columns */
  lg:grid-cols-3    /* Desktop: 3 columns */
  gap-4
">

{/* Responsive text */}
<h1 className="text-2xl md:text-3xl lg:text-4xl">

{/* Conditional display */}
<div className="hidden md:block">  {/* Show on tablet+ */}
<div className="block md:hidden">  {/* Mobile only */}
```

---

## Icons

### Icon Library: Lucide React

**Justice-Specific Icons:**
```tsx
import {
  Scale,          // Justice, cases, legal
  FileText,       // Documents, forms
  Gavel,          // Court, judgments
  Users,          // Attorneys, prosecutors
  Calendar,       // Hearings, deadlines
  AlertCircle,    // Warnings, alerts
  CheckCircle,    // Success, approved
  XCircle,        // Rejected, dismissed
  Clock,          // Pending, time-based
  TrendingUp,     // Performance, metrics
  Shield,         // Compliance, security
  Book,           // Legal records, knowledge
  Building,       // Courts, institutions
  Briefcase,      // Civil litigation
  Search,         // Investigation, search
} from 'lucide-react'
```

### Icon Sizes
```tsx
w-3 h-3    /* 12px - Badge icons */
w-4 h-4    /* 16px - Button icons, inline */
w-5 h-5    /* 20px - Standard icons */
w-6 h-6    /* 24px - Section icons */
w-8 h-8    /* 32px - Stat card icons */
w-12 h-12  /* 48px - Hero sections */
```

---

## Accessibility Guidelines

### 1. Color Contrast
Maintain WCAG 2.1 Level AA:
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

✅ All system colors meet these requirements

### 2. Focus Indicators
Always visible:
```tsx
focus:ring-2 focus:ring-[#006403] focus:ring-offset-2
```

### 3. ARIA Labels
```tsx
<button aria-label="Close dialog">
  <X className="w-4 h-4" />
</button>

<input aria-describedby="case-hint" />
<p id="case-hint">Enter the case number</p>
```

### 4. Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order should be logical
- Skip links for main content

---

## Best Practices Checklist

### Before Creating a Component
- ✅ Check if a similar component exists
- ✅ Use existing UI components from `/components/ui`
- ✅ Use shared components from `/components/shared`
- ✅ Follow the color palette (no custom colors)
- ✅ Maintain consistent spacing
- ✅ Ensure mobile-responsive

### Component Development
- ✅ Use TypeScript for type safety
- ✅ Include loading states
- ✅ Include error states
- ✅ Include empty states
- ✅ Add proper ARIA labels
- ✅ Test keyboard navigation
- ✅ Verify color contrast
- ✅ Make it responsive

### Code Organization
- ✅ Keep components focused (single responsibility)
- ✅ Extract reusable logic into hooks
- ✅ Use composition over prop drilling
- ✅ Follow naming conventions (PascalCase)
- ✅ Document complex components

---

## Component Import Pattern

```tsx
// UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Shared Components
import { StatCard } from "@/components/shared/stat-card"
import { StatusBadge } from "@/components/shared/status-badge"
import { CaseStatusIndicator } from "@/components/shared/case-status-indicator"
import { PriorityIndicator } from "@/components/shared/priority-indicator"
import { PageHeader } from "@/components/shared/page-header"
import { DataTable } from "@/components/shared/data-table"
import { Timeline } from "@/components/shared/timeline"
import { EmptyState } from "@/components/shared/empty-state"
import { LoadingSpinner } from "@/components/shared/loading-spinner"
import { ConfirmDialog } from "@/components/shared/confirm-dialog"

// Icons
import { Scale, FileText, Users, Calendar } from "lucide-react"
```

---

**Version:** 1.0
**Last Updated:** October 31, 2025
**For:** Kano Justice Management System
**Maintained By:** Development Team
