'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, TruckTrip } from '@/lib/types';
import { Plus, Edit, Trash2, MapPin, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function TrucksPage() {
  const [activeTab, setActiveTab] = useState<'trucks' | 'trips'>('trucks');

  const [trucks] = useState<Truck[]>([
    {
      id: '1',
      registrationNumber: 'ABC-123-XY',
      vehicleType: 'tanker',
      productType: 'AGO',
      capacity: 33000,
      unit: 'liters',
      status: 'in-transit',
      currentLocation: 'Lagos - Port Harcourt Route',
      lastMaintenanceDate: '2024-09-15',
      nextMaintenanceDate: '2024-12-15',
      insuranceExpiryDate: '2025-06-30',
      acquisitionCost: 25000000,
      acquisitionDate: '2023-01-15',
      totalEarnings: 28500000,
      totalExpenses: 15200000,
      netProfit: 13300000,
      remainingDebt: 0,
      isBreakEven: true,
      breakEvenDate: '2024-08-20',
      monthlyEarnings: 1850000,
      monthlyExpenses: 980000,
      annualEarnings: 18500000,
      annualExpenses: 9800000,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
    {
      id: '2',
      registrationNumber: 'DEF-456-XY',
      vehicleType: 'tanker',
      productType: 'LPG',
      capacity: 10000,
      unit: 'kg',
      status: 'available',
      currentLocation: 'Lagos Depot',
      lastMaintenanceDate: '2024-09-01',
      nextMaintenanceDate: '2024-12-01',
      insuranceExpiryDate: '2025-03-15',
      acquisitionCost: 32000000,
      acquisitionDate: '2023-06-10',
      totalEarnings: 18200000,
      totalExpenses: 10500000,
      netProfit: 7700000,
      remainingDebt: 24300000,
      isBreakEven: false,
      monthlyEarnings: 1420000,
      monthlyExpenses: 810000,
      annualEarnings: 14200000,
      annualExpenses: 8100000,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
    {
      id: '3',
      registrationNumber: 'GHI-789-XY',
      vehicleType: 'delivery-truck',
      productType: 'multi-product',
      capacity: 5000,
      unit: 'liters',
      status: 'maintenance',
      currentLocation: 'Workshop - Lagos',
      lastMaintenanceDate: '2024-10-01',
      nextMaintenanceDate: '2025-01-01',
      insuranceExpiryDate: '2025-08-20',
      acquisitionCost: 28000000,
      acquisitionDate: '2024-02-01',
      totalEarnings: 9800000,
      totalExpenses: 6200000,
      netProfit: 3600000,
      remainingDebt: 24400000,
      isBreakEven: false,
      monthlyEarnings: 1380000,
      monthlyExpenses: 850000,
      annualEarnings: 9800000,
      annualExpenses: 6200000,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  ]);

  const [trips] = useState<TruckTrip[]>([
    {
      id: '1',
      tripNumber: 'TRP-2024-001',
      truckId: '1',
      driverId: '1',
      origin: 'Lagos Depot',
      destination: 'Port Harcourt Station',
      productType: 'AGO',
      quantity: 33000,
      unit: 'liters',
      distance: 650,
      ratePerKm: 450,
      freight: 292500,
      earnings: 350000,
      expenses: [],
      totalExpenses: 112500,
      netProfit: 237500,
      status: 'in-progress',
      departureTime: '2024-10-06T08:00:00',
      estimatedArrivalTime: '2024-10-07T20:00:00',
      createdAt: '2024-10-06',
      updatedAt: '2024-10-06',
    },
    {
      id: '2',
      tripNumber: 'TRP-2024-002',
      truckId: '2',
      driverId: '2',
      origin: 'Abuja Depot',
      destination: 'Kaduna Station',
      productType: 'LPG',
      quantity: 8000,
      unit: 'kg',
      distance: 180,
      ratePerKm: 500,
      freight: 90000,
      earnings: 120000,
      expenses: [],
      totalExpenses: 0,
      netProfit: 120000,
      status: 'scheduled',
      createdAt: '2024-10-06',
      updatedAt: '2024-10-06',
    },
  ]);

  const getStatusColor = (status: Truck['status']) => {
    switch (status) {
      case 'available':
        return 'success';
      case 'in-transit':
        return 'default';
      case 'loading':
        return 'warning';
      case 'maintenance':
        return 'destructive';
      case 'inactive':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const getTripStatusColor = (status: TruckTrip['status']) => {
    switch (status) {
      case 'scheduled':
        return 'secondary';
      case 'in-progress':
        return 'default';
      case 'completed':
        return 'success';
      case 'cancelled':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Fleet Management</h1>
            <p className="text-gray-600">Manage trucks and delivery operations</p>
          </div>
          <div className="flex gap-2">
            <Link href="/trucks/financials">
              <Button variant="outline">
                <DollarSign className="mr-2 h-4 w-4" />
                Financial Analytics
              </Button>
            </Link>
            <Button variant={activeTab === 'trucks' ? 'default' : 'outline'} onClick={() => setActiveTab('trucks')}>
              Trucks
            </Button>
            <Button variant={activeTab === 'trips' ? 'default' : 'outline'} onClick={() => setActiveTab('trips')}>
              Trips
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              {activeTab === 'trucks' ? 'Add Truck' : 'Create Trip'}
            </Button>
          </div>
        </div>

        {/* Trucks View */}
        {activeTab === 'trucks' && (
          <div className="grid gap-6 md:grid-cols-2">
            {trucks.map((truck) => (
              <Card key={truck.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle>{truck.registrationNumber}</CardTitle>
                        <Badge variant={getStatusColor(truck.status)}>
                          {truck.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {truck.vehicleType} - {truck.productType}
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Capacity</span>
                    <span className="text-sm font-medium">
                      {truck.capacity.toLocaleString()} {truck.unit}
                    </span>
                  </div>
                  {truck.currentLocation && (
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="mr-2 h-4 w-4" />
                      {truck.currentLocation}
                    </div>
                  )}
                  <div className="pt-3 border-t space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Last Maintenance</span>
                      <span className="text-gray-900">{new Date(truck.lastMaintenanceDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Next Maintenance</span>
                      <span className="font-medium text-gray-900">{new Date(truck.nextMaintenanceDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Insurance Expiry</span>
                      <span className="text-gray-900">{new Date(truck.insuranceExpiryDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Trips View */}
        {activeTab === 'trips' && (
          <div className="space-y-4">
            {trips.map((trip) => (
              <Card key={trip.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">Trip #{trip.id}</h3>
                        <Badge variant={getTripStatusColor(trip.status)}>
                          {trip.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-700">
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {trip.origin}
                        </div>
                        <span>→</span>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {trip.destination}
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span className="text-gray-600">
                          Product: <span className="font-medium text-gray-900">{trip.productType}</span>
                        </span>
                        <span className="text-gray-600">
                          Quantity: <span className="font-medium text-gray-900">{trip.quantity.toLocaleString()} {trip.unit}</span>
                        </span>
                      </div>
                      {trip.departureTime && (
                        <div className="flex items-center text-sm text-gray-700">
                          <Calendar className="mr-1 h-4 w-4" />
                          Departed: {new Date(trip.departureTime).toLocaleString()}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="outline" size="sm">Track</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
