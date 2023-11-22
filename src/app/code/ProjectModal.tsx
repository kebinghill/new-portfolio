'use client';

import { useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';

const ProjectModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: any;
}) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className='border relative z-50'
    >
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <div className='fixed inset-0 flex w-screen items-center justify-center p-4 '>
        <Dialog.Panel className='mx-[5vw] rounded bg-black'>
          <Dialog.Title className='flex items-center'>
            <FaGithubSquare className='h-[32px] w-[32px]' />
            GITHUB REPO
          </Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsModalOpen(false)}>Deactivate</button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
