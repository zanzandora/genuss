import MainBannerSwiper from '../banner/MainBannerSwiper';
import BookingRoomForm from '../../../common/BookingRoomForm';

const bannerImages = [
  'slide-banner-4.webp',
  'slide-banner-8.webp',
  'slide-banner-9.webp',
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

      <BookingRoomForm className='hidden flex-wrap px-2 lg:flex' />
    </header>
  );
}
