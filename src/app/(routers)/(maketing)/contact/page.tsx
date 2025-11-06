import NomalBanner from '@/components/sections/(maketing)/banner/NomalBanner';
import ContactForm from '@/components/sections/(maketing)/contact/ContactForm';
import ContactInfo from '@/components/sections/(maketing)/contact/ContactInfo';

const ContactPage = () => {
  return (
    <div>
      <NomalBanner title='contact' />

      <ContactInfo />

      <ContactForm />
    </div>
  );
};

export default ContactPage;
