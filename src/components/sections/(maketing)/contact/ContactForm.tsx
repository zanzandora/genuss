import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <section className='w-full'>
      <div className='mx-auto max-w-2xl px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-h2'>Leave us your info</h2>
          <p className='text-paragraph-m text-muted-foreground'>
            and we will get back to you
          </p>
        </div>

        <form className='space-y-6'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <Select>
              <SelectTrigger
                className='w-32 rounded-none border-0 bg-muted'
                aria-label='Select Mr/Mrs'
              >
                <SelectValue placeholder='Mr/Mrs' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='mr'>Mr</SelectItem>
                <SelectItem value='mrs'>Mrs</SelectItem>
                <SelectItem value='ms'>Ms</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type='text'
              name='fullName'
              placeholder='Full Name'
              className='col-span-2 w-full rounded-none border-0 bg-muted placeholder:text-paragraph-m'
            />
          </div>

          <Input
            type='email'
            name='email'
            placeholder='Email'
            className='rounded-none border-0 bg-muted placeholder:text-paragraph-m'
          />

          <Input
            type='text'
            name='country'
            placeholder='Country'
            className='rounded-none border-0 bg-muted placeholder:text-paragraph-m'
          />

          <Textarea
            name='message'
            placeholder='Message'
            className='min-h-32 rounded-none border-0 bg-muted placeholder:text-paragraph-m'
          />

          <div>
            <Button
              type='submit'
              size={'lg'}
              className='cursor-pointer border-2 border-border bg-transparent text-xl font-bold text-primary uppercase hover:border-primary-foreground hover:bg-primary hover:text-primary-foreground'
            >
              SEND
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
