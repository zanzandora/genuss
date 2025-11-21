import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { testimonials } from '@/lib/data/testimonials';
import { maskEmailPretty } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { AnimatedSection } from '@/components/ui/animations/AnimatedSection';
import { AnimatedContainer } from '@/components/ui/animations/AnimatedContainer';

const TestimonialsSection = () => {
  const tTestimonials = useTranslations('home.testimonial');

  return (
    <section className='-mx-4 py-20'>
      <div className='h-full'>
        <AnimatedSection variant='fadeInDown' className='mb-16 text-center'>
          <h1 className='text-h1 uppercase'>{tTestimonials('title')}</h1>
        </AnimatedSection>

        <div className='h-full w-full bg-accent py-8 pb-6'>
          <Carousel className='relative mx-auto max-w-6xl overflow-visible'>
            {/* Left fade */}
            <div className='pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-50 bg-gradient-to-r from-accent to-transparent' />
            {/* Right fade */}
            <div className='pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-50 bg-gradient-to-l from-accent to-transparent' />

            <CarouselContent className='mx-4 overflow-visible bg-accent pt-18 pb-10 md:mx-8'>
              {testimonials.map((testimonial, i) => (
                <AnimatedContainer
                  key={`${testimonial.name}-${i}`}
                  variant='fastContainer'
                  itemVariant='scaleIn'
                  className='basis-full px-2 sm:basis-1/2 md:px-4 lg:basis-1/3 xl:basis-1/4'
                >
                  <CarouselItem>
                    <Card className='relative flex h-full flex-col items-center overflow-visible text-center'>
                      <CardHeader className='mb-14'>
                        <Avatar className='absolute -top-0 size-32 -translate-x-1/2 -translate-y-1/2'>
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className='object-cover shadow-md'
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </CardHeader>

                      <CardContent className='h-full'>
                        <p className='line-clamp-4 text-paragraph-m'>
                          {testimonial.commends}
                        </p>
                      </CardContent>

                      <CardFooter className='flex flex-col gap-1 md:gap-2'>
                        <h4 className='text-h4'>{testimonial.name}</h4>
                        <p className='text-paragraph-m text-muted-foreground'>
                          {maskEmailPretty(testimonial.email)}
                        </p>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                </AnimatedContainer>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
