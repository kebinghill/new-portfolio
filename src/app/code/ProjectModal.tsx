'use client';

import { useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';

const ProjectModal = ({
  isModalOpen,
  setIsModalOpen,
  currentTitle,
  currentDescription,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
  currentTitle: string;
  currentDescription: string;
}) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className='relative z-50'
    >
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4 '>
        <Dialog.Panel className='mx-[5vw] h-[80vh] rounded bg-black border'>
          <Dialog.Title className='flex items-center justify-between'>
            <FaGithubSquare className='h-[32px] w-[32px]' />
            {currentTitle}
            <button
              onClick={() => setIsModalOpen(false)}
              className='w-[30px] h-[30px] rounded'
            >
              &#x2715;
            </button>
          </Dialog.Title>
          <Dialog.Description>{currentDescription}</Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
