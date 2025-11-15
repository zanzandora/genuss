'use client';

import { Check, EarthIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter, usePathname } from '@/i18n/routing';
import { locales } from '@/i18n/config';
import { Language, languagesSelect } from '@/types/countries.type';
import { Button } from '@/components/ui/button';
import { useLocale } from 'next-intl';

import VN from 'country-flag-icons/react/3x2/VN';
import GB from 'country-flag-icons/react/3x2/GB';

interface LanguageSelectorProps {
  defaultLanguage?: Language;
}

const FlagIcon = ({ locale }: { locale: Language }) => {
  switch (locale) {
    case 'vi':
      return <VN className='size-full' />;
    case 'en':
      return <GB className='size-full' />;
    default:
      return <EarthIcon className='size-full' />;
  }
};

export function SwitcherLanguage({
  defaultLanguage = 'en',
}: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Detect current locale from pathname
  const currentLocale = useLocale() as Language;
  const selectedLanguage = locales.includes(currentLocale)
    ? currentLocale
    : defaultLanguage;

  const handleLanguageChange = (value: Language) => {
    router.replace(pathname, { locale: value });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          className='bg-black/25 px-2 text-primary-foreground backdrop-blur-lg hover:border-primary-foreground hover:bg-primary hover:text-primary-foreground md:px-4'
        >
          <div className='size-6'>
            <FlagIcon locale={selectedLanguage} />
          </div>
          <span className='hidden uppercase lg:block'>{selectedLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='center'
        className='min-w-max border-border/15 bg-black/25 backdrop-blur-lg'
      >
        {languagesSelect.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onClick={() => handleLanguageChange(lang.value)}
            className='group flex items-center justify-between gap-2 text-primary-foreground hover:text-primary-foreground'
          >
            <div className='flex items-center gap-2'>
              <div className='size-4'>
                <FlagIcon locale={lang.value} />
              </div>
              <span className='text-base'>{lang.label}</span>
            </div>
            {selectedLanguage === lang.value && (
              <Check className='size-4 text-primary-foreground group-hover:text-primary' />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
