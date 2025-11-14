import { BackToTopButton } from '@/components/common/BackToTopButton';
import NormalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import ContactForm from '@/components/sections/(maketing)/contact/ContactForm';
import ContactInfo from '@/components/sections/(maketing)/contact/ContactInfo';
import { useTranslations } from 'next-intl';

const ContactPage = () => {
  const tMenu = useTranslations('menu');

  return (
    <div>
      <NormalBanner title={tMenu('contact')} />

      <ContactInfo />

      <ContactForm />

      <BackToTopButton />
    </div>
  );
};

export default ContactPage;
