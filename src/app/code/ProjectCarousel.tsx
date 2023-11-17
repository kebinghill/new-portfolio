'use client';

import { useState } from 'react';
import { Carousel, Modal } from 'flowbite-react';
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
    className='aspect-[14/12] overflow-clip'
  />,
  <Image
    src='/portfolio-code.png'
    key='portfolio'
    width={1000}
    height={1000}
    alt=''
    className='aspect-[14/12] overflow-clip'
  />,
];

const titles = ['SLCTR APP', 'PORTFOLIO APP'];

const descriptions = [];

const ProjectCarousel = () => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='text-2xl font-extralight'>{currentTitle}</div>
        <div className='w-[95vw] min-h-[200px] aspect-[14/12]  overflow-clip'>
          <Carousel
            slide={false}
            className='overflow-clip'
            onSlideChange={(idx) => {
              setCurrentTitle(titles[idx]);
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
