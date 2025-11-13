'use client';

import { Button } from '@/components/ui/button';
import { Trash2Icon } from 'lucide-react';
import { RoomStoreItem, useRoomStore } from '@/stores/useRoomStore';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

// Cell component for quantity management
const QuantityCell = ({ item }: { item: RoomStoreItem }) => {
  const updateQuantity = useRoomStore((state) => state.updateQuantity);

  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='outline'
        size='sm'
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        disabled={item.quantity <= 1}
        className='h-6 w-6 rounded-full p-0'
      >
        -
      </Button>

      <span className='min-w-[2rem] text-center'>{item.quantity}</span>

      <Button
        variant='outline'
        size='sm'
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        className='h-6 w-6 rounded-full p-0'
      >
        +
      </Button>
    </div>
  );
};

// Cell component for delete action
const ActionsCell = ({ item }: { item: RoomStoreItem }) => {
  const removeItem = useRoomStore((state) => state.removeItem);

  return (
    <div className='flex justify-start'>
      <Button
        variant='ghost'
        size='sm'
        onClick={() => removeItem(item.id)}
        className='h-8 w-8 p-0 text-red-600 hover:text-red-800'
      >
        <Trash2Icon className='h-4 w-4' />
      </Button>
    </div>
  );
};

export const BookingDetailsColumns: ColumnDef<RoomStoreItem>[] = [
  {
    accessorKey: 'name',
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
    cell: ({ row }) => <div className='capitalize'>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'pricePerNight',
    header: () => <div className=''>Price Night</div>,
    cell: ({ row }) => {
      const pricePerNight = parseFloat(row.getValue('pricePerNight'));

      const formatted = formatCurrency(pricePerNight);

      return <div className='font-medium'>{formatted}</div>;
    },
  },
  {
    accessorKey: 'quantity',
    header: () => <div className=''>Quantity</div>,
    cell: ({ row }) => <QuantityCell item={row.original} />,
  },
  {
    id: 'actions',
    header: () => <div className=''>Actions</div>,
    enableHiding: false,
    cell: ({ row }) => <ActionsCell item={row.original} />,
  },
];
