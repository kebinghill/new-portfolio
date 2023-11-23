'use client';

import { FaGithubSquare } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

const ProjectModal = ({
  isModalOpen,
  setIsModalOpen,
  currentTitle,
  currentDescription,
  currentBuild,
  currentScreenshots,
  currentLinks,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
  currentTitle: string;
  currentDescription: string;
  currentBuild: string[];
  currentScreenshots: string[];
  currentLinks: { github: string; website: string };
}) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className='relative z-50'
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/80' aria-hidden='true' />

      <div className='fixed inset-0 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-[24px]'>
          <Dialog.Panel className='h-[100%] rounded bg-black border'>
            <Dialog.Title className='flex items-center justify-between text-xl font-light'>
              <div className='flex'>
                <a
                  href={currentLinks.github}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithubSquare className='h-[30px] w-[30px]' />
                </a>
              </div>
              {currentTitle}
              <button
                onClick={() => setIsModalOpen(false)}
                className='w-[32px] h-[32px]'
              >
                &#x2715;
              </button>
            </Dialog.Title>
            <Dialog.Description className='font-extralight text-sm text-center p-[8px] border-t'>
              {currentDescription}
            </Dialog.Description>
            <div className='border-y my-[4px]'>
              <p className='w-[100%] text-center font-extralight text-lg border-b'>
                BUILT WITH
              </p>
              <div className='flex flex-wrap justify-center py-[8px]'>
                {currentBuild.map((lib, idx) => {
                  if (idx === currentBuild.length - 1) {
                    return;
                  }
                  return (
                    <p key={lib} className='basis-1/2 text-center font-thin'>
                      {lib}
                    </p>
                  );
                })}
              </div>
            </div>
            <p className='w-[100%] text-center font-extralight text-lg border-b'>
              SCREENSHOTS
            </p>
            <div className='flex flex-col items-center'>
              {currentScreenshots.map((screenshot) => (
                <Image
                  src={screenshot}
                  key={screenshot}
                  height={200}
                  width={200}
                  alt={screenshot}
                  className='border border-black w-[100%]'
                />
              ))}
            </div>
            <a
              href={currentLinks.website}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex justify-center items-center border-t py-[4px]'>
                <p className='px-[8px]'>
                  Deployed via {currentBuild[currentBuild.length - 1]}
                </p>
                <CgWebsite className='h-[30px] w-[30px]' />
              </div>
            </a>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
