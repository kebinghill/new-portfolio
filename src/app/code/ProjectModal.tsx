'use client';

import { Dispatch, SetStateAction } from 'react';
import { Modal } from 'flowbite-react';
import { FaGithubSquare } from 'react-icons/fa';

const ProjectModal = ({
  openModal,
  setOpenModal,
  description,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  description: any;
}) => {
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      position={'center'}
      dismissible
    >
      <Modal.Header className='bg-black border-x border-t'>
        <a href=''>
          <FaGithubSquare className='h-[34px] w-[34px] text-white' />
        </a>
      </Modal.Header>
      <Modal.Body className='bg-black border-x border-b'>
        <div className='space-y-6 p-6 bg-black'>
          <p className='text-lg font-thin'>
            PASS STATE DESCRIPTION OF PROJECT HERE
          </p>
        </div>
      </Modal.Body>
      {/* <Modal.Footer className='border bg-black'>
        <Button color='dark' onClick={() => setOpenModal(false)}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ProjectModal;
