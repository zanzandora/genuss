import { THotelRules } from '@/types/hotelRulesKey.type';
import { useTranslations } from 'next-intl';

interface HotelRule {
  key: THotelRules;
}

interface HotelRulesProps {
  rules: HotelRule[];
}

export function HotelRules({ rules }: HotelRulesProps) {
  const t = useTranslations('hotelRules');

  return (
    <div>
      <h3 className='py-4 text-h3'>{t('title')}</h3>
      <ul className='list-inside list-disc space-y-2 text-paragraph-m'>
        {rules.map((rule, idx) => (
          <li key={idx}>{t(rule.key)}</li>
        ))}
      </ul>
    </div>
  );
}
