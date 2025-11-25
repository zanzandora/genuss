export type ServiceType = 'dinning' | 'event' | 'recreation' | 'swimming';

export type ServiceTitleKey =
  | 'dinning.title'
  | 'event.title'
  | 'recreation.title'
  | 'swimming.title';

export type ServiceSubTitleKey =
  | 'dinning.subTitle'
  | 'event.subTitle'
  | 'recreation.subTitle'
  | 'swimming.subTitle';

export type ServiceDescriptionKey =
  | 'dinning.descriptions'
  | 'event.descriptions'
  | 'recreation.descriptions'
  | 'swimming.descriptions';

export type ServiceDetailsKey =
  | 'dinning.details'
  | 'event.details'
  | 'recreation.details'
  | 'swimming.details';

export interface Service {
  id: string;
  slug: ServiceType;
  titleKey: ServiceTitleKey;
  subTitleKey: ServiceSubTitleKey;
  details: ServiceDetailsKey;
  descriptionKey: ServiceDescriptionKey;
  imageSrc: string;
  images: { id: number; img: string; alt?: string }[];
}

export interface OtherService {
  id: string;
  nameKey: ServiceTitleKey;
  imageSrc: string;
  slug: ServiceType;
}
