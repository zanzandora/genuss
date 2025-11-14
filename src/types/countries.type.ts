export type Language = 'en' | 'vi';

export interface Country {
  value: Language;
  label: string;
  flag?: string;
}

export const languagesSelect: Country[] = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Vietnamese' },
];
