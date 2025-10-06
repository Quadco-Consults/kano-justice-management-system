# Fleet Financial Tracking System

## Overview

The Bayscom ERP system includes comprehensive financial tracking for the truck fleet, enabling detailed monitoring of earnings, expenses, and ROI for each vehicle and trip.

## Key Features

### 1. **Truck Financial Management**

Each truck tracks:
- **Acquisition Cost**: Total investment to purchase the truck
- **Cumulative Earnings**: Total revenue generated from all trips
- **Cumulative Expenses**: Total costs incurred across all trips
- **Net Profit**: Earnings minus expenses
- **Break-Even Tracking**: Monitors when the truck pays off its acquisition cost
- **ROI Calculation**: Return on investment percentage
- **Monthly & Annual Performance**: Period-specific financial metrics

### 2. **Trip Financial Tracking**

Each trip records:
- **Distance-Based Charging**: Calculates freight based on distance × rate per kilometer
- **Earnings**: Total revenue from the trip
- **Expenses**: Detailed categorized expenses
  - Fuel
  - Toll fees
  - Maintenance
  - Driver allowance
  - Parking fees
  - Loading fees
  - Other expenses
- **Net Profit**: Trip earnings minus expenses
- **Receipt Management**: Optional receipt numbers for audit trails

### 3. **Break-Even Analysis**

The system automatically:
- Deducts acquisition costs from earnings
- Tracks remaining debt per truck
- Identifies when a truck breaks even (becomes profitable)
- Projects break-even timeline based on current performance
- Records break-even dates for historical tracking

### 4. **Financial Analytics**

#### Fleet Overview
- Total fleet value (sum of all acquisition costs)
- Total fleet earnings and expenses
- Overall fleet profit and ROI
- Number of break-even trucks
- Monthly and annual fleet performance

#### Individual Truck Performance
- ROI percentage
- Progress to break-even (visual progress bar)
- Monthly profit trends
- Trip statistics
- Average earnings and expenses per trip

#### Earnings Reports
- Monthly breakdown of earnings, expenses, and profit
- Annual summaries with averages
- Profit trend visualization
- Best performing periods
- Export functionality for further analysis

## User Interface

### 1. **Fleet Management Page** (`/trucks`)
- Main truck listing with basic information
- Quick access to Financial Analytics
- Trip management interface

### 2. **Financial Analytics Dashboard** (`/trucks/financials`)
- Fleet financial overview cards showing:
  - Total fleet value and ROI
  - Total earnings and expenses
  - Net profit and remaining debt
  - Fleet status (total trucks, break-even count, profitable count)

- Individual truck financial cards displaying:
  - Financial summary (earnings, expenses, net profit)
  - Break-even status with progress bar
  - Monthly performance metrics
  - Trip completion statistics
  - ROI badge

- Top Performers section highlighting:
  - Highest ROI truck
  - Highest monthly profit truck
  - Most trips completed

### 3. **Trip Details Page** (`/trucks/trips/[id]`)
- Complete trip information
- Route and timing details
- Financial breakdown (earnings, expenses, profit)
- Expense management:
  - Add new expenses
  - View all expenses with categories
  - Delete expenses
  - Real-time profit calculation updates

### 4. **Earnings Reports**
- **Monthly View**: Month-by-month breakdown in table format
- **Annual View**:
  - Summary cards for earnings, expenses, and profit
  - Monthly profit trend chart
  - Performance metrics
  - Profitability analysis

## Financial Calculations

### Trip-Level
```
Freight = Distance (km) × Rate per km
Total Expenses = Sum of all expense amounts
Net Profit = Earnings - Total Expenses
```

### Truck-Level
```
Total Earnings = Sum of all trip earnings
Total Expenses = Sum of all trip expenses
Net Profit = Total Earnings - Total Expenses
Remaining Debt = Acquisition Cost - Net Profit (if positive)
Is Break Even = Remaining Debt <= 0
ROI = (Net Profit / Acquisition Cost) × 100
```

### Fleet-Level
```
Total Fleet Value = Sum of all truck acquisition costs
Total Fleet Earnings = Sum of all truck earnings
Total Fleet Profit = Sum of all truck net profits
Average ROI = Sum of all truck ROIs / Number of trucks
```

## Data Types

### Truck Financial Fields
- `acquisitionCost`: number
- `acquisitionDate`: string
- `totalEarnings`: number
- `totalExpenses`: number
- `netProfit`: number
- `remainingDebt`: number
- `isBreakEven`: boolean
- `breakEvenDate`: string (optional)
- `monthlyEarnings`: number
- `monthlyExpenses`: number
- `annualEarnings`: number
- `annualExpenses`: number

### Trip Financial Fields
- `tripNumber`: string
- `distance`: number (km)
- `ratePerKm`: number
- `freight`: number
- `earnings`: number
- `expenses`: TripExpense[]
- `totalExpenses`: number
- `netProfit`: number

### Expense Categories
- `fuel`: Diesel/fuel costs
- `toll`: Highway toll fees
- `maintenance`: Vehicle repairs and maintenance
- `driver-allowance`: Driver per diem and allowances
- `parking`: Parking fees
- `loading-fee`: Loading/unloading charges
- `other`: Miscellaneous expenses

## Key Benefits

1. **Real-Time Financial Visibility**: Track profitability of each truck and trip in real-time
2. **ROI Tracking**: Monitor return on investment for fleet expansion decisions
3. **Break-Even Analysis**: Know exactly when each truck becomes profitable
4. **Expense Management**: Detailed expense tracking with categorization
5. **Performance Comparison**: Compare trucks to identify top performers
6. **Data-Driven Decisions**: Use historical data for route planning and pricing
7. **Audit Trail**: Receipt numbers and detailed expense records
8. **Profit Optimization**: Identify cost centers and optimize operations

## Future Enhancements

- Automated expense imports from fuel cards
- Predictive analytics for maintenance costs
- Dynamic pricing recommendations based on routes
- Integration with GPS for automatic distance tracking
- Driver performance correlation with profitability
- Tax reporting and compliance features
- Budget vs. actual variance analysis
- Depreciation tracking
