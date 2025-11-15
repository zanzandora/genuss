'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import {
  ChevronRightSquareIcon,
  Menu,
  Home,
  BedDouble,
  ConciergeBell,
  Phone,
} from 'lucide-react';
import { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { SwitcherLanguage } from './SwitcherLanguage';
import { useTranslations } from 'next-intl';

const NavBar = () => {
  const tMenu = useTranslations('menu');
  const tButtons = useTranslations('common.buttons');

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: tMenu('home'), icon: Home },
    { href: '/rooms', label: tMenu('rooms'), icon: BedDouble },
    { href: '/services', label: tMenu('services'), icon: ConciergeBell },
    { href: '/contact', label: tMenu('contact'), icon: Phone },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const linkClasses = (href: string) =>
    `relative cursor-pointer bg-transparent py-2 text-xl font-bold uppercase transition-colors before:absolute before:right-0 before:bottom-[-4px] before:left-0 before:mx-auto before:h-[2px] before:w-3/4 before:translate-y-0 before:bg-primary-foreground before:opacity-0 before:transition-all before:duration-500 before:ease-out hover:bg-transparent hover:text-primary-foreground hover:before:-translate-y-2 hover:before:opacity-100 ${
      isActiveLink(href)
        ? 'text-primary-foreground before:-translate-y-2 before:opacity-100'
        : 'text-primary-foreground/70'
    }`;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className='absolute z-10 my-8 flex w-full items-center justify-between px-12 lg:px-16'>
      <nav className='flex flex-1 items-center justify-between rounded-full border border-white/15 bg-black/25 px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur-lg lg:mx-8 lg:px-8'>
        {/* Logo */}
        <Link href={'/'} className='relative h-12 w-12 lg:h-20 lg:w-20'>
          <Image
            src='/logo/genuss-logo.svg'
            alt='Genuss Hotel'
            fill
            sizes='(max-width: 768px) 112px, 120px'
            className='object-contain brightness-110 contrast-125 drop-shadow-md filter'
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='mx-4 hidden flex-1 items-center justify-around lg:flex'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Book Now Button - Desktop and Mobile */}
        <div className='flex items-center gap-x-2'>
          <Link href={'/booking'}>
            <Button
              size={'lg'}
              className='cursor-pointer border-border bg-transparent text-sm font-bold text-primary-foreground uppercase hover:border-primary-foreground hover:bg-primary hover:text-primary-foreground md:border-2 md:text-xl'
            >
              {tButtons('bookNow')}
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='ml-2 lg:hidden'>
            <Button
              variant='ghost'
              size='icon'
              className='text-primary-foreground'
            >
              <Menu className='size-6 md:w-full' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            showClose={false}
            side='right'
            className='w-1/2 border-border/15 bg-primary-foreground backdrop-blur-lg sm:w-[540px]'
          >
            <SheetHeader>
              <SheetTitle className='hidden'></SheetTitle>
              <SheetDescription className='hidden'></SheetDescription>
            </SheetHeader>

            <div className='grid flex-1 auto-rows-min gap-2 px-4 py-6'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex w-fit items-center gap-3 rounded-4xl px-4 py-4 text-sm font-bold uppercase transition-colors ${
                    isActiveLink(item.href)
                      ? 'bg-purple-200 text-primary'
                      : 'text-primary/70 hover:text-primary'
                  }`}
                  onClick={handleLinkClick}
                >
                  <item.icon className='h-5 w-5' />
                  {item.label}
                </Link>
              ))}
            </div>

            <SheetClose
              className='absolute top-4 right-4 rounded-full bg-gray-200 p-2 transition hover:bg-gray-300'
              aria-label='Close'
            >
              <div>
                <ChevronRightSquareIcon className='size-6 text-gray-700' />
                <span className='sr-only'>Close</span>
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </nav>
      <div className='mx-2'>
        <SwitcherLanguage />
      </div>
    </div>
  );
};

export default NavBar;
