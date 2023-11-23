'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton } from './EmblaCarouselButtons';
import Image from 'next/image';

import ProjectModal from './ProjectModal';

// TODO: UPDATE FOLLOWING INTO AN ARRAY OF OBJECTS FOR EACH APP TO THEN HANDLE BY 1 USE STATE CALL
const slideImages = ['/slctr-code.png', '/portfolio-code.png'];
const titles = ['SLCTR APP', 'PORTFOLIO APP'];
const descriptions = [
  'If you would like access to the site, please contact me at 93kevingil@gmail.com with your name and email. The Spotify API limits Spotify authentication via the SLCTR app while in development mode. To checkout the repo, just click on the Github icon in the upper left corner of this modal.',
  'This is the current app you are viewing! To checkout the repo, just click on the Github icon in the upper left corner of this modal.',
];
const builds = [
  [
    'NextJS',
    'Next Auth',
    'Next Client Cookies',
    'Spotify API',
    'Typescript',
    'React',
    'React Swipeable',
    'Prisma',
    'Postgres',
    'Vercel',
  ],
  [
    'NextJS',
    'Typescript',
    'React',
    'React DOM',
    'React Icons',
    'Tailwind CSS',
    'Post CSS',
    'Headless UI',
    'Embla Carousel',
    'Vercel',
  ],
];
const appScreenshots = [
  ['/slctr-ss-1.png', '/slctr-ss-2.png'],
  ['/portfolio-ss-1.png', '/portfolio-ss-2.png'],
];
const appLinks = [
  {
    github: 'https://github.com/kebinghill/SLCTR_frontend',
    website: 'https://slctr.vercel.app/login',
  },
  {
    github: 'https://github.com/kebinghill/new-portfolio',
    website: 'https://kevingil.dev',
  },
];

const EmblaCarousel = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);
  const [currentBuild, setCurrentBuild] = useState(builds[0]);
  const [currentScreenshots, setCurrentScreenshots] = useState(
    appScreenshots[0]
  );
  const [currentLinks, setCurrentLinks] = useState(appLinks[0]);

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
      setCurrentBuild(builds[currSlideIndex]);
      setCurrentScreenshots(appScreenshots[currSlideIndex]);
      setCurrentLinks(appLinks[currSlideIndex]);
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
      <div className='text-2xl font-extralight py-[12px]'>{currentTitle}</div>
      <div className='overflow-hidden md:w-[700px] w-[95vw]' ref={emblaRef}>
        <div className='flex aspect-[14/12]'>
          {slideImages.map((image) => (
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
                priority
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
        currentBuild={currentBuild}
        currentScreenshots={currentScreenshots}
        currentLinks={currentLinks}
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
