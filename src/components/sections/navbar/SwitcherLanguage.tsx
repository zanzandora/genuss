'use client';

import { useState } from 'react';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type Language = 'en' | 'vi' | 'ja';

interface LanguageSelectorProps {
  defaultLanguage?: Language;
  onLanguageChange?: (language: Language) => void;
}

const languages: { value: Language; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Vietnamese' },
  { value: 'ja', label: 'Japanese' },
];

export function LanguageSelector({
  defaultLanguage = 'en',
  onLanguageChange,
}: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(defaultLanguage);

  const handleLanguageChange = (value: Language) => {
    setSelectedLanguage(value);
    onLanguageChange?.(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex h-12 w-12 items-center justify-center rounded-full border-0 bg-muted p-0 hover:bg-muted/80 focus:ring-1 focus:ring-ring focus:outline-none'>
          <Languages className='h-5 w-5 text-foreground' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='center' className='min-w-max'>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onClick={() => handleLanguageChange(lang.value)}
            className={selectedLanguage === lang.value ? 'bg-accent' : ''}
          >
            <span className='text-base'>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
