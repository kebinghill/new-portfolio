'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton } from './EmblaCarouselButtons';
import Image from 'next/image';

import ProjectModal from './ProjectModal';

const images = ['/slctr-code.png', '/portfolio-code.png'];
const titles = ['SLCTR APP', 'PORTFOLIO APP'];
const descriptions = ['HELLO FRIEND #1', 'GOODBYE FRIEND #2'];

const EmblaCarousel = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: false,
  });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (emblaApi) {
      const currSlideIndex = emblaApi.selectedScrollSnap();
      setSelectedIndex(currSlideIndex);
      setCurrentTitle(titles[currSlideIndex]);
      setCurrentDescription(descriptions[currSlideIndex]);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
      setScrollSnaps(emblaApi.scrollSnapList());
    }
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
      <div className='text-2xl font-extralight'>{currentTitle}</div>
      <div className='overflow-hidden md:w-[700px] w-[95vw]' ref={emblaRef}>
        <div className='flex aspect-[14/12]'>
          {images.map((image) => (
            <button
              className='aspect-[14/12]'
              key={image}
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={image}
                key={image}
                width={700}
                height={700}
                alt={image}
                className='aspect-[14/12]'
              />
            </button>
          ))}
        </div>
      </div>
      <ProjectModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        currentTitle={currentTitle}
        currentDescription={currentDescription}
      />
      <div className='flex justify-center pt-[10px] list-none'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
