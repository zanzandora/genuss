'use client';

import QuantityBooking from '@/components/common/QuantityBooking';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { TBookingDetails } from '@/types/bookingDetails.type';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export const BookingDetailsColumns: ColumnDef<TBookingDetails>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'roomName',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className=''
        >
          Rooms
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('roomName')}</div>
    ),
  },
  {
    accessorKey: 'priceNight',
    header: () => <div className=''>Price Night</div>,
    cell: ({ row }) => {
      const priceNight = parseFloat(row.getValue('priceNight'));

      // Format the priceNight as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(priceNight);

      return <div className='font-medium'>{formatted}</div>;
    },
  },
  {
    id: 'actions',
    header: () => <div className=''>Number of Rooms</div>,
    enableHiding: false,
    cell: () => {
      return (
        <div className='flex justify-start'>
          <QuantityBooking />
        </div>
      );
    },
  },
];
