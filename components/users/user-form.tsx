'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User } from '@/lib/types';

const userSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  roleId: z.string().min(1, 'Role is required'),
  departmentId: z.string().min(1, 'Department is required'),
  status: z.enum(['active', 'inactive', 'suspended']),
});

type UserFormData = z.infer<typeof userSchema>;

interface UserFormProps {
  user?: User;
  onSubmit: (data: UserFormData) => void;
  onCancel: () => void;
}

export function UserForm({ user, onSubmit, onCancel }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: user
      ? {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          roleId: user.roleId,
          departmentId: user.departmentId,
          status: user.status,
        }
      : {
          status: 'active',
        },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">First Name</label>
          <Input {...register('firstName')} />
          {errors.firstName && (
            <p className="text-xs text-red-600 mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Last Name</label>
          <Input {...register('lastName')} />
          {errors.lastName && (
            <p className="text-xs text-red-600 mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <Input type="email" {...register('email')} />
        {errors.email && (
          <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Phone Number</label>
        <Input {...register('phoneNumber')} />
        {errors.phoneNumber && (
          <p className="text-xs text-red-600 mt-1">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Role</label>
          <select
            {...register('roleId')}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="">Select Role</option>
            {/* Add roles from API */}
          </select>
          {errors.roleId && (
            <p className="text-xs text-red-600 mt-1">{errors.roleId.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Department</label>
          <select
            {...register('departmentId')}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="">Select Department</option>
            {/* Add departments from API */}
          </select>
          {errors.departmentId && (
            <p className="text-xs text-red-600 mt-1">{errors.departmentId.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Status</label>
        <select
          {...register('status')}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="suspended">Suspended</option>
        </select>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : user ? 'Update User' : 'Create User'}
        </Button>
      </div>
    </form>
  );
}
