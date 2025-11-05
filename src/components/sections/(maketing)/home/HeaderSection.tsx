import MainBannerSwiper from '../banner/MainBannerSwiper';
import BookingForm from './booking-form/BookingForm';

const bannerImages = [
  'slide-banner-1.png',
  'slide-banner-2.png',
  'slide-banner-3.png',
];
const heroSlides = bannerImages.map((filename, idx) => ({
  src: `/images/banner/${filename}`,
  alt: `Banner ${idx + 1}`,
}));

export default function HeaderSection() {
  return (
    <header
      className='relative mb-4 w-full rounded-4xl bg-secondary sm:mb-16 md:mb-24'
      style={{ minHeight: 400 }}
    >
      <MainBannerSwiper heroSlides={heroSlides} />

      <div className='relative'>
        <BookingForm />
      </div>
    </header>
  );
}
