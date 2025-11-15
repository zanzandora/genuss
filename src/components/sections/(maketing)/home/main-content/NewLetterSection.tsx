import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewLetterSection = () => {
  return (
    <section className='px-6 py-20'>
      <div className='mx-auto max-w-2xl text-center'>
        <h1 className='mb-4 text-h1'>Newsletter</h1>
        <p className='mb-8 text-paragraph-m'>
          Subscribe to our newsletter to get special offers and exclusive
          updates.
        </p>

        <form className='mx-auto flex max-w-md gap-4'>
          <Input
            type='email'
            placeholder='Your email address'
            className='border-0 px-4 py-6 shadow-[0_0_30px_rgba(17,17,17,0.2)]'
          />
          <Button
            type='submit'
            className='px-8 py-6 text-paragraph-m text-primary-foreground'
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewLetterSection;
