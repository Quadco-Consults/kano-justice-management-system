'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TripExpense } from '@/lib/types';

const expenseSchema = z.object({
  category: z.enum(['fuel', 'toll', 'maintenance', 'driver-allowance', 'parking', 'loading-fee', 'other']),
  description: z.string().min(3, 'Description is required'),
  amount: z.number().min(0, 'Amount must be positive'),
  receiptNumber: z.string().optional(),
  date: z.string(),
});

type ExpenseFormData = z.infer<typeof expenseSchema>;

interface TripExpenseFormProps {
  tripId: string;
  onSubmit: (data: ExpenseFormData) => void;
  onCancel: () => void;
}

export function TripExpenseForm({ tripId, onSubmit, onCancel }: TripExpenseFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm font-medium">Category</label>
        <select
          {...register('category')}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="fuel">Fuel</option>
          <option value="toll">Toll</option>
          <option value="maintenance">Maintenance</option>
          <option value="driver-allowance">Driver Allowance</option>
          <option value="parking">Parking</option>
          <option value="loading-fee">Loading Fee</option>
          <option value="other">Other</option>
        </select>
        {errors.category && (
          <p className="text-xs text-red-600 mt-1">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Description</label>
        <Input {...register('description')} placeholder="Enter expense description" />
        {errors.description && (
          <p className="text-xs text-red-600 mt-1">{errors.description.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Amount (₦)</label>
          <Input
            type="number"
            step="0.01"
            {...register('amount', { valueAsNumber: true })}
            placeholder="0.00"
          />
          {errors.amount && (
            <p className="text-xs text-red-600 mt-1">{errors.amount.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Receipt Number (Optional)</label>
          <Input {...register('receiptNumber')} placeholder="REC-001" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Date</label>
        <Input type="date" {...register('date')} />
        {errors.date && (
          <p className="text-xs text-red-600 mt-1">{errors.date.message}</p>
        )}
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Expense'}
        </Button>
      </div>
    </form>
  );
}
