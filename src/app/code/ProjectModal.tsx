'use client';

import { useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { Dialog } from '@headlessui/react';

const ProjectModal = ({
  isModalOpen,
  setIsModalOpen,
  currentTitle,
  currentDescription,
  currentBuild,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
  currentTitle: string;
  currentDescription: string;
  currentBuild: string[];
}) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className='relative z-50'
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/80' aria-hidden='true' />

      <div className='fixed inset-0 flex w-screen items-center justify-center p-[14px]'>
        <Dialog.Panel className='h-[95vh] rounded bg-black border'>
          <Dialog.Title className='flex items-center justify-between text-xl font-light'>
            <div className='flex'>
              <FaGithubSquare className='h-[30px] w-[30px]' />
            </div>
            {currentTitle}
            <button
              onClick={() => setIsModalOpen(false)}
              className='w-[32px] h-[32px]'
            >
              &#x2715;
            </button>
          </Dialog.Title>
          <Dialog.Description className='font-extralight text-sm text-center p-[4px] border-t'>
            {currentDescription}
          </Dialog.Description>
          <div className='border-y my-[4px]'>
            <p className='w-[100%] text-center border-b'>BUILT WITH</p>
            <div className='flex flex-wrap justify-center'>
              {currentBuild.map((lib, idx) => {
                if (idx === currentBuild.length - 1) {
                  return;
                }
                return (
                  <p key={lib} className='basis-1/2 text-center'>
                    {lib}
                  </p>
                );
              })}
            </div>
          </div>
          <p className='w-[100%] text-center border-b'>SCREENSHOTS</p>
          <div className='flex justify-center items-center'>
            <p className='px-[8px]'>
              Deployed via {currentBuild[currentBuild.length - 1]}
            </p>
            <CgWebsite className='h-[30px] w-[30px]' />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
