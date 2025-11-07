'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Enquiry submitted:', formData);
  };

  return (
    <div className='space-y-4'>
      <div className='space-y-4'>
        <div>
          <Label className='mb-2 block text-sm font-medium text-muted-foreground'>
            Name
          </Label>
          <Input
            placeholder='Your full name'
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>

        <div>
          <Label className='mb-2 block text-sm font-medium text-muted-foreground'>
            Email
          </Label>
          <Input
            type='email'
            placeholder='your@email.com'
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        <div>
          <Label className='mb-2 block text-sm font-medium text-muted-foreground'>
            Your Enquiry
          </Label>
          <Textarea
            placeholder='Tell us your enquiry...'
            value={formData.enquiry}
            onChange={(e) => handleChange('enquiry', e.target.value)}
            className='min-h-24'
          />
        </div>

        <div className='flex items-start gap-3'>
          <Checkbox id='terms' className='size-5 border-2' />
          <div className='grid gap-2'>
            <Label htmlFor='terms' className='text-sm text-muted-foreground'>
              By clicking this checkbox, you agree to the Terms of Service and
              Privacy Statement.
            </Label>
          </div>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        className='h-10 w-full bg-foreground py-2 font-semibold text-background hover:bg-foreground/90'
      >
        SEND ENQUIRY
      </Button>
    </div>
  );
}
