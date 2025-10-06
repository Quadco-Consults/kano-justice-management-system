'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FillingStation } from '@/lib/types';
import { Plus, Edit, Trash2, MapPin, Gauge } from 'lucide-react';

export default function FillingStationsPage() {
  const [stations] = useState<FillingStation[]>([
    {
      id: '1',
      name: 'Bayscom Lagos Mainland',
      code: 'BLM-001',
      address: '45 Ikorodu Road, Yaba',
      city: 'Lagos',
      state: 'Lagos',
      managerId: '1',
      status: 'active',
      products: ['PMS', 'AGO', 'DPK'],
      tanks: [
        { id: '1', stationId: '1', productType: 'PMS', capacity: 50000, currentLevel: 38500, unit: 'liters', lastCalibrationDate: '2024-01-01', status: 'operational' },
        { id: '2', stationId: '1', productType: 'AGO', capacity: 30000, currentLevel: 22000, unit: 'liters', lastCalibrationDate: '2024-01-01', status: 'operational' },
      ],
      pumps: [
        { id: '1', stationId: '1', pumpNumber: 'P1', productType: 'PMS', status: 'operational', meterReading: 125000, lastMaintenanceDate: '2024-01-01' },
        { id: '2', stationId: '1', pumpNumber: 'P2', productType: 'AGO', status: 'operational', meterReading: 98000, lastMaintenanceDate: '2024-01-01' },
      ],
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
    {
      id: '2',
      name: 'Bayscom Port Harcourt',
      code: 'BPH-002',
      address: 'Trans Amadi Industrial Layout',
      city: 'Port Harcourt',
      state: 'Rivers',
      managerId: '2',
      status: 'active',
      products: ['PMS', 'AGO', 'LPG'],
      tanks: [
        { id: '3', stationId: '2', productType: 'PMS', capacity: 60000, currentLevel: 45000, unit: 'liters', lastCalibrationDate: '2024-01-01', status: 'operational' },
        { id: '4', stationId: '2', productType: 'LPG', capacity: 20000, currentLevel: 15000, unit: 'kg', lastCalibrationDate: '2024-01-01', status: 'operational' },
      ],
      pumps: [
        { id: '3', stationId: '2', pumpNumber: 'P1', productType: 'PMS', status: 'operational', meterReading: 185000, lastMaintenanceDate: '2024-01-01' },
      ],
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  ]);

  const getStatusColor = (status: FillingStation['status']) => {
    switch (status) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'secondary';
      case 'under-maintenance':
        return 'warning';
      default:
        return 'secondary';
    }
  };

  const getTankLevel = (currentLevel: number, capacity: number) => {
    return Math.round((currentLevel / capacity) * 100);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Filling Stations</h1>
            <p className="text-gray-600">Manage filling stations and operations</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Station
          </Button>
        </div>

        {/* Stations Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {stations.map((station) => (
            <Card key={station.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <CardTitle>{station.name}</CardTitle>
                      <Badge variant={getStatusColor(station.status)}>
                        {station.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{station.code}</p>
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                      <MapPin className="mr-1 h-3 w-3" />
                      {station.address}, {station.city}, {station.state}
                    </div>
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
              <CardContent className="space-y-4">
                {/* Products */}
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Products Available</p>
                  <div className="flex gap-2">
                    {station.products.map((product) => (
                      <Badge key={product} variant="outline">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tank Levels */}
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                    <Gauge className="mr-1 h-4 w-4" />
                    Tank Levels
                  </p>
                  <div className="space-y-2">
                    {station.tanks.map((tank) => {
                      const level = getTankLevel(tank.currentLevel, tank.capacity);
                      return (
                        <div key={tank.id}>
                          <div className="flex justify-between text-xs text-gray-700 mb-1">
                            <span>{tank.productType}</span>
                            <span className="font-medium text-gray-900">{level}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                level > 50 ? 'bg-green-600' : level > 25 ? 'bg-yellow-500' : 'bg-red-600'
                              }`}
                              style={{ width: `${level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pumps */}
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Active Pumps: {station.pumps.length}</p>
                  <div className="flex gap-2">
                    {station.pumps.map((pump) => (
                      <div key={pump.id} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {pump.pumpNumber} ({pump.productType})
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
