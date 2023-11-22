'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const images = ['/slctr-code.png', '/portfolio-code.png'];
const titles = ['SLCTR APP', 'PORTFOLIO APP'];

const EmblaCarousel = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: false,
  });

  const onSelect = useCallback(() => {
    if (emblaApi) {
      const currSlideIndex = emblaApi.selectedScrollSnap();
      setCurrentTitle(titles[currSlideIndex]);
    }
  }, [emblaApi]);

  // const removeOnSelectListener = useCallback(() => {
  //   if (emblaApi) emblaApi.off('select', onSelect);
  // }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi, onSelect]);

  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
      <div className='text-2xl font-extralight'>{currentTitle}</div>
      <div className='overflow-hidden md:w-[700px] w-[95vw]' ref={emblaRef}>
        <div className='flex aspect-[14/12]'>
          {images.map((image) => (
            <Image
              src={image}
              key={image}
              width={700}
              height={700}
              alt={image}
              className='aspect-[14/12]'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
