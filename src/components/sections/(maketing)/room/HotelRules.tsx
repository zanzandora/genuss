interface HotelRulesProps {
  rules: string[];
}

export function HotelRules({ rules }: HotelRulesProps) {
  return (
    <div>
      <h3 className='py-4 text-h3'>Quy định khách sạn</h3>
      <ul className='list-inside list-disc space-y-2 text-paragraph-m'>
        {rules.map((rule, idx) => (
          <li key={idx}>{rule}</li>
        ))}
      </ul>
    </div>
  );
}
