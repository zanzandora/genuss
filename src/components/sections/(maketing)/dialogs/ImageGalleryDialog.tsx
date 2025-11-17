'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { getOptimizedImageProps } from '@/lib/utils/imageOptimization';
import { X } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageGalleryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

export function ImageGalleryDialog({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}: ImageGalleryDialogProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Update current state when initialIndex changes
  useEffect(() => {
    setCurrent(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Scroll to initial index when dialog opens or index changes
    api.scrollTo(initialIndex, false);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, initialIndex]);

  const handleThumbnailClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className='overflow-hidden border-border/10 p-0 sm:max-w-2xl md:h-[95vh]'
        showCloseButton={false}
      >
        <DialogHeader className='sr-only'>
          <DialogTitle>Room Image Gallery</DialogTitle>
          <DialogDescription>
            Make changes to your room image gallery.
          </DialogDescription>
        </DialogHeader>

        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70'
        >
          <X className='h-5 w-5' />
        </button>

        <div className='flex h-full flex-col'>
          {/* Main Image Carousel */}
          <div className='flex items-center justify-center bg-primary/25 backdrop-blur-lg'>
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
              className='w-full max-w-4xl'
            >
              <CarouselContent>
                {images.map((image, idx) => (
                  <CarouselItem key={idx}>
                    <div className='relative w-full'>
                      <AspectRatio ratio={3 / 2}>
                        <Image
                          {...getOptimizedImageProps(image, idx)}
                          alt={`Room image ${idx + 1}`}
                          fill
                          className={`${getOptimizedImageProps(image, idx).className} object-contain`}
                          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw'
                          priority={idx === 0}
                        />
                      </AspectRatio>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='left-4 bg-white/80 hover:bg-white' />
              <CarouselNext className='right-4 bg-white/80 hover:bg-white' />
            </Carousel>
          </div>

          {/* Thumbnail Gallery */}
          <div className='border-t bg-white p-4'>
            <div className='mx-auto max-w-4xl'>
              <div className='grid grid-cols-6 gap-2'>
                {images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`relative aspect-[4/3] overflow-hidden rounded border-2 transition-all ${
                      current === idx
                        ? 'border-blue-500 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      {...getOptimizedImageProps(image, idx)}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className={`${getOptimizedImageProps(image, idx).className} object-cover`}
                    />
                  </button>
                ))}
              </div>

              {/* Image Counter */}
              <div className='mt-3 text-center text-sm text-gray-600'>
                {current + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
