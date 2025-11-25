'use client';

import { useState, useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { getOptimizedImageProps } from '@/lib/utils/imageOptimization';
import { TRoom } from '@/types/room.type';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ImageGalleryDialog } from '../dialogs/ImageGalleryDialog';
import { RoomImage } from '@/lib/seo';
import { useRoomTranslations } from '@/lib/utils/roomTranslations';

interface RoomGalleryProps {
  room: TRoom;
}

export function RoomGallery({ room }: RoomGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogInitialIndex, setDialogInitialIndex] = useState(0);

  const { translateRoom } = useRoomTranslations();
  const translatedRoom = translateRoom(room);

  const plugin = useRef(Autoplay({ delay: 3000 }));

  const images =
    room.images && room.images.length > 0
      ? room.images
      : ['/images/rooms/room-1.jpg'];

  const remainingImages = Math.max(0, images.length - 4);

  const handleThumbnailClickDialog = (index: number) => {
    setDialogInitialIndex(index);
    setIsDialogOpen(true);
  };

  const handleMainImageClick = () => {
    setDialogInitialIndex(current);
    setIsDialogOpen(true);
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    const autoplayPlugin = plugin.current;

    // Set current slide on select
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Initialize autoplay
    if (autoplayPlugin) {
      api.plugins().autoplay?.play();
    }

    // Cleanup
    return () => {
      if (autoplayPlugin) {
        api.plugins().autoplay?.stop();
      }
    };
  }, [api]);

  return (
    <div className='space-y-4'>
      {/* Main Image Carousel */}
      <Carousel
        setApi={setApi}
        className='w-full'
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, idx) => (
            <CarouselItem key={idx}>
              <button
                onClick={handleMainImageClick}
                className='relative w-full overflow-hidden rounded-lg shadow-lg'
              >
                <AspectRatio ratio={16 / 10}>
                  <RoomImage
                    {...getOptimizedImageProps(image, idx)}
                    roomName={translatedRoom.name}
                    roomBed={translatedRoom.bed}
                    view={translatedRoom.view}
                    fill
                    className={`${getOptimizedImageProps(image, idx).className} cursor-pointer object-cover`}
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw'
                    priority={idx === 0}
                  />
                </AspectRatio>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-4 bg-white/80 hover:bg-white' />
        <CarouselNext className='right-4 bg-white/80 hover:bg-white' />
      </Carousel>

      {/* Thumbnail Gallery */}
      <div className='space-y-2'>
        <div className='grid grid-cols-4 gap-2'>
          {images.slice(0, 3).map((image, idx) => (
            <button
              key={idx}
              onClick={() => handleThumbnailClickDialog(idx)}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                current === idx
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <RoomImage
                {...getOptimizedImageProps(image, idx)}
                roomName={translatedRoom.name}
                roomBed={translatedRoom.bed}
                view={translatedRoom.view}
                fill
                className={`${getOptimizedImageProps(image, idx).className} object-cover`}
                sizes='(max-width: 768px) 25vw, (max-width: 1024px) 15vw, 10vw'
              />
            </button>
          ))}

          {/* More images indicator */}
          {remainingImages > 0 && (
            <button
              onClick={() => handleThumbnailClickDialog(3)}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                current >= 3
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <RoomImage
                {...getOptimizedImageProps(images[3], 3)}
                roomName={translatedRoom.name}
                roomBed={translatedRoom.bed}
                view={translatedRoom.view}
                fill
                className={`${getOptimizedImageProps(images[3], 3).className} object-cover`}
                sizes='(max-width: 768px) 25vw, (max-width: 1024px) 15vw, 10vw'
              />
              <div className='absolute inset-0 flex items-center justify-center bg-black/50 text-lg font-semibold text-white'>
                +{remainingImages}
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Image Gallery Dialog */}
      <ImageGalleryDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        images={images}
        initialIndex={dialogInitialIndex}
        room={room}
      />
    </div>
  );
}
