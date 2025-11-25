import { Service, OtherService } from '@/types/service.type';

export const servicesData: Service[] = [
  {
    id: '1',
    slug: 'dinning',
    titleKey: 'dinning.title',
    subTitleKey: 'dinning.subTitle',
    details: 'dinning.details',
    descriptionKey: 'dinning.descriptions',
    imageSrc: '/images/facilities/restaurant-and-dining-service.jpg',
    images: [],
  },
  {
    id: '2',
    slug: 'event',
    titleKey: 'event.title',
    details: 'event.details',
    subTitleKey: 'event.subTitle',
    descriptionKey: 'event.descriptions',
    imageSrc: '/images/facilities/conference-and-event-service.jpg',
    images: [],
  },
  {
    id: '3',
    slug: 'recreation',
    titleKey: 'recreation.title',
    details: 'recreation.details',
    subTitleKey: 'recreation.subTitle',
    descriptionKey: 'recreation.descriptions',
    imageSrc: '/images/facilities/recreation-and-wellness-service.jpg',
    images: [],
  },
  {
    id: '4',
    slug: 'swimming',
    titleKey: 'swimming.title',
    details: 'swimming.details',
    subTitleKey: 'swimming.subTitle',
    descriptionKey: 'swimming.descriptions',
    imageSrc: '/images/facilities/swimming-pool-service.webp',
    images: [],
  },
];

export const getOtherServices = (currentSlug: string): OtherService[] => {
  const otherServices = servicesData
    .filter((service) => service.slug !== currentSlug)
    .map((service) => ({
      id: service.id,
      nameKey: service.titleKey,
      date: 'July 16, 2022',
      imageSrc: service.imageSrc,
      slug: service.slug,
    }));

  return otherServices.slice(0, 3); // Return only 3 other services
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesData.find((service) => service.slug === slug);
};
