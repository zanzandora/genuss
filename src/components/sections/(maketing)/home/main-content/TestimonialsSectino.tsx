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

const TestimonialsSectino = () => {
  return (
    <section className='-mx-4 py-20'>
      <div className='h-full'>
        <h1 className='mb-16 text-center text-h1'>Testimonial</h1>

        <div className='h-full w-full bg-accent py-8 pb-6'>
          <Carousel className='relative mx-auto w-6xl overflow-visible'>
            {/* Left fade overlay */}
            <div className='pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-60 bg-gradient-to-r from-accent to-transparent' />
            {/* Right fade overlay */}
            <div className='pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-60 bg-gradient-to-l from-accent to-transparent' />
            <CarouselContent className='mx-16 overflow-visible bg-accent pt-18 pb-10 md:mx-16'>
              {testimonials.map((testimonial, i) => (
                <CarouselItem
                  key={`${testimonial.name.split(' ').join('')}-${i}`}
                  className='pl-2 md:basis-1/4 md:pl-4'
                >
                  <Card className='relative flex h-full flex-col items-center overflow-visible text-center'>
                    <CardHeader className='mb-12'>
                      <Avatar className='absolute -top-0 size-36 -translate-x-1/2 -translate-y-1/2'>
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className='mb-4 object-cover shadow-md'
                        />
                        <AvatarFallback>{testimonial.name}</AvatarFallback>
                      </Avatar>
                    </CardHeader>
                    <CardContent className='h-full'>
                      <p className='text-paragraph-m'>{testimonial.commends}</p>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-2'>
                      <h4 className='text-h4'>{testimonial.name}</h4>
                      <p className='text-paragraph-m text-muted-foreground'>
                        {maskEmailPretty(testimonial.email)}
                      </p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectino;
