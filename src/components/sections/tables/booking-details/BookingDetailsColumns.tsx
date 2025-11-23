'use client';

import { Button } from '@/components/ui/button';
import { RoomStoreItem, useRoomStore } from '@/stores/useRoomStore';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { useTranslations } from 'next-intl';

// Cell component for quantity management
const QuantityCell = ({ item }: { item: RoomStoreItem }) => {
  const updateQuantity = useRoomStore((state) => state.updateQuantity);

  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='outline'
        size='sm'
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        disabled={item.quantity <= 0}
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

export const BookingDetailsColumns: () => ColumnDef<RoomStoreItem>[] = () => {
  const t = useTranslations('bookingDetails.table');

  return [
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return (
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className=''
          >
            {t('rooms')}
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className='capitalize'>{row.getValue('name')}</div>
      ),
    },
    {
      accessorKey: 'pricePerNight',
      header: () => <div className=''>{t('priceNight')}</div>,
      cell: ({ row }) => {
        const pricePerNight = parseFloat(row.getValue('pricePerNight'));

        const formatted = formatCurrency(pricePerNight);

        return <div className='font-medium'>{formatted}</div>;
      },
    },
    {
      accessorKey: 'quantity',
      header: () => <div className=''>{t('quantity')}</div>,
      cell: ({ row }) => <QuantityCell item={row.original} />,
    },
  ];
};
