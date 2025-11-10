import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='absolute z-10 my-6 w-full'>
      <nav className='mx-20 flex items-center justify-around rounded-full border border-white/15 bg-black/25 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-lg'>
        <Link href={'/'} className='relative h-18 w-18 md:h-30 md:w-30'>
          <Image
            src='/images/genuss-logo.png'
            alt='Genuss Hotel'
            fill
            sizes='(max-width: 768px) 112px, 120px'
            className='object-contain brightness-110 contrast-125 drop-shadow-md filter'
            priority
          />
        </Link>

        <Link
          href={'/'}
          className='relative cursor-pointer bg-transparent py-2 text-xl font-bold text-primary-foreground/70 uppercase transition-colors before:absolute before:right-0 before:bottom-[-4px] before:left-0 before:mx-auto before:h-[2px] before:w-3/4 before:translate-y-0 before:bg-primary-foreground before:opacity-0 before:transition-all before:duration-500 before:ease-out hover:bg-transparent hover:text-primary-foreground hover:before:-translate-y-2 hover:before:opacity-100'
        >
          home
        </Link>

        <Link
          href={'/rooms'}
          className='relative cursor-pointer bg-transparent py-2 text-xl font-bold text-primary-foreground/70 uppercase transition-colors before:absolute before:right-0 before:bottom-[-4px] before:left-0 before:mx-auto before:h-[2px] before:w-3/4 before:translate-y-0 before:bg-primary-foreground before:opacity-0 before:transition-all before:duration-500 before:ease-out hover:bg-transparent hover:text-primary-foreground hover:before:-translate-y-2 hover:before:opacity-100'
        >
          rooms
        </Link>
        <Link
          href={'/services'}
          className='relative cursor-pointer bg-transparent py-2 text-xl font-bold text-primary-foreground/70 uppercase transition-colors before:absolute before:right-0 before:bottom-[-4px] before:left-0 before:mx-auto before:h-[2px] before:w-3/4 before:translate-y-0 before:bg-primary-foreground before:opacity-0 before:transition-all before:duration-500 before:ease-out hover:bg-transparent hover:text-primary-foreground hover:before:-translate-y-2 hover:before:opacity-100'
        >
          services
        </Link>
        <Link
          href={'/contact'}
          className='relative cursor-pointer bg-transparent py-2 text-xl font-bold text-primary-foreground/70 uppercase transition-colors before:absolute before:right-0 before:bottom-[-4px] before:left-0 before:mx-auto before:h-[2px] before:w-3/4 before:translate-y-0 before:bg-primary-foreground before:opacity-0 before:transition-all before:duration-500 before:ease-out hover:bg-transparent hover:text-primary-foreground hover:before:-translate-y-2 hover:before:opacity-100'
        >
          contact
        </Link>
        <Button
          size={'lg'}
          className='cursor-pointer border-2 border-border bg-transparent text-xl font-bold text-primary-foreground uppercase hover:border-primary-foreground hover:bg-primary hover:text-primary-foreground'
        >
          <Link href={'/booking'}>Book Now</Link>
        </Button>
      </nav>
    </div>
  );
};

export default NavBar;
