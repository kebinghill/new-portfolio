// 'use client';

// import { useState, useEffect } from 'react';
// import { Carousel } from 'flowbite-react';
// import Image from 'next/image';
// import ProjectModal from './ProjectModal';

// // ORDER MATTERS FOR THESE ARRAYS

// const images = ['/slctr-code.png', '/portfolio-code.png'];

// const titles = ['SLCTR APP', 'PORTFOLIO APP'];

// const ProjectCarousel = () => {
//   const [currentTitle, setCurrentTitle] = useState(titles[0]);
//   const [openModal, setOpenModal] = useState(false);

//   // useEffect(() => {
//   //   const idx = titles.indexOf(currentTitle);
//   //   setCurrentDescription(descriptions[idx]);
//   // }, [currentTitle]);

//   return (
//     <div>
//       <div className='flex flex-col items-center border'>
//         <div className='text-2xl font-extralight'>{currentTitle}</div>
//         <div className='flex justify-center items-center md:w-[700px] w-[95vw] aspect-[14/12]'>
//           <Carousel
//             slide={false}
//             onSlideChange={(idx) => {
//               return setCurrentTitle(titles[idx]);
//             }}
//           >
//             {images.map((image) => (
//               <button key={image} onClick={() => setOpenModal(true)}>
//                 <Image
//                   src={image}
//                   key={image}
//                   width={700}
//                   height={700}
//                   alt={image}
//                   className='aspect-[14/12] flex h-full w-full items-center justify-center'
//                 />
//               </button>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//       <ProjectModal
//         openModal={openModal}
//         setOpenModal={setOpenModal}
//         currentIdx={titles.indexOf(currentTitle)}
//       ></ProjectModal>
//     </div>
//   );
// };

// export default ProjectCarousel;
