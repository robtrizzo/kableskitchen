'use client';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function AutoplayCarousel({ images }: Readonly<{ images: string[] }>) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full max-w-[450px]">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center"
          >
            <Image
              src={src}
              alt="carousel image"
              width={450}
              height={450}
              className="rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  );
}
