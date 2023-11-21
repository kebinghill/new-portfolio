'use client';

import { useState } from 'react';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';

// ORDER MATTERS FOR THESE ARRAYS

const images = [
  <Image
    src='/slctr-code.png'
    key='slctr'
    width={1000}
    height={1000}
    alt='SLCTR'
    className='aspect-[14/12] flex h-full w-full items-center justify-center'
  />,
  <Image
    src='/portfolio-code.png'
    key='portfolio'
    width={1000}
    height={1000}
    alt=''
    className='aspect-[14/12] flex h-full w-full items-center justify-center'
  />,
];

const titles = ['SLCTR APP', 'PORTFOLIO APP'];

const descriptions = ['', ''];

const ProjectCarousel = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className='flex flex-col items-center border'>
        <div className='text-2xl font-extralight'>{currentTitle}</div>
        <div className='flex justify-center items-center md:w-[700px] w-[95vw] aspect-[14/12]'>
          <Carousel
            slide={false}
            onSlideChange={(idx) => {
              return setCurrentTitle(titles[idx]);
            }}
          >
            {images.map((image) => (
              <button key={image.key} onClick={() => setOpenModal(true)}>
                {image}
              </button>
            ))}
          </Carousel>
        </div>
      </div>
      <ProjectModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        description={currentDescription}
      ></ProjectModal>
    </div>
  );
};

export default ProjectCarousel;
