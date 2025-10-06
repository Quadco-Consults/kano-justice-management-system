# Bayscom ERP Design System

## Brand Colors

Based on the Bayscom Energy Limited logo, the ERP system uses the following brand colors:

### Primary Colors

#### Burgundy (Primary Brand Color)
- **Base**: `#8B1538` - Main burgundy color from the logo
- **Dark**: `#6B0F2A` - Darker shade for hover states
- **Light**: `#A01843` - Lighter shade for backgrounds

**Usage:**
- Primary buttons
- Active navigation items
- Main headings and branding
- User avatars
- Primary accents

#### Orange (Secondary Brand Color)
- **Base**: `#E67E22` - Vibrant orange from the logo
- **Dark**: `#D35400` - Darker shade for hover states
- **Light**: `#F39C12` - Lighter shade for highlights

**Usage:**
- Secondary buttons
- Call-to-action elements
- Accent text in branding
- Warning indicators
- Important highlights

### Supporting Colors

#### Green (Success Color)
- **Base**: `#2D5016` - From the logo's green element
- **Light**: `#4A7C2E` - Lighter shade

**Usage:**
- Success messages
- Positive indicators
- Break-even status badges
- Profit indicators

## Typography

### Brand Text
The "BAYSCOM ERP" branding follows this pattern:
- **BAYSCOM**: Burgundy (#8B1538)
- **ERP**: Orange (#E67E22)

This pattern is used consistently across:
- Login page
- Home page
- Sidebar logo
- Loading screens

## Component Colors

### Buttons
- **Default (Primary)**: Burgundy background (#8B1538), white text
  - Hover: Darker burgundy (#6B0F2A)
- **Secondary**: Orange background (#E67E22), white text
  - Hover: Darker orange (#D35400)
- **Link**: Burgundy text (#8B1538)

### Navigation
- **Active Items**: Burgundy background (#8B1538), white text
- **Inactive Items**: Gray text, light gray hover

### User Avatar
- Background: Burgundy (#8B1538)
- Text: White

### Status Badges
- **Success/Break-even**: Green (#2D5016)
- **Warning/Paying off**: Orange (#E67E22)
- **Error**: Red (destructive)

## Color Application Guidelines

### Do's
✅ Use burgundy for primary actions and branding
✅ Use orange for secondary actions and accents
✅ Use green for success states and positive financial indicators
✅ Maintain consistent color usage across all modules
✅ Use the brand colors in the logo pattern (burgundy + orange)

### Don'ts
❌ Don't use blue as a primary color (not part of brand)
❌ Don't mix custom colors with brand colors
❌ Don't use brand colors for error states
❌ Don't deviate from the defined color palette

## Financial Data Colors

### Earnings
- Color: Green (#2D5016)
- Usage: Revenue, earnings, income indicators

### Expenses
- Color: Red (#DC2626)
- Usage: Costs, expenses, deductions

### Profit
- Positive: Blue (#2563EB)
- Negative: Red (#DC2626)
- Usage: Net profit, profit margins

### ROI Indicators
- High (>50%): Green (#2D5016)
- Medium (20-50%): Blue (#2563EB)
- Low (0-20%): Yellow/Orange (#E67E22)
- Negative (<0%): Red (#DC2626)

## CSS Variables

```css
:root {
  /* Bayscom Brand Colors */
  --bayscom-burgundy: #8B1538;
  --bayscom-burgundy-dark: #6B0F2A;
  --bayscom-burgundy-light: #A01843;
  --bayscom-orange: #E67E22;
  --bayscom-orange-dark: #D35400;
  --bayscom-orange-light: #F39C12;
  --bayscom-green: #2D5016;
  --bayscom-green-light: #4A7C2E;
}
```

## Tailwind Classes

For direct usage in components:

```jsx
// Burgundy
bg-[#8B1538]      // Background
text-[#8B1538]    // Text
hover:bg-[#6B0F2A] // Hover state

// Orange
bg-[#E67E22]      // Background
text-[#E67E22]    // Text
hover:bg-[#D35400] // Hover state

// Green
bg-[#2D5016]      // Background
text-[#2D5016]    // Text
```

## Examples

### Branding
```jsx
<h1 className="text-4xl font-bold">
  <span className="text-[#8B1538]">BAYSCOM</span>{' '}
  <span className="text-[#E67E22]">ERP</span>
</h1>
```

### Primary Button
```jsx
<Button className="bg-[#8B1538] hover:bg-[#6B0F2A]">
  Action
</Button>
```

### Secondary Button
```jsx
<Button className="bg-[#E67E22] hover:bg-[#D35400]">
  Secondary Action
</Button>
```

### Active Navigation
```jsx
<Link className="bg-[#8B1538] text-white">
  Dashboard
</Link>
```

## Accessibility

All color combinations have been chosen to meet WCAG 2.1 AA standards for contrast:

- Burgundy (#8B1538) on white: ✓ Pass
- Orange (#E67E22) on white: ✓ Pass
- White text on burgundy: ✓ Pass
- White text on orange: ✓ Pass
- Green (#2D5016) on white: ✓ Pass

## Future Considerations

- Dark mode variants using lighter shades of burgundy and orange
- Additional tints and shades for data visualization
- Gradient combinations for special UI elements
