'use client';

import { Dispatch, SetStateAction } from 'react';
import { Modal } from 'flowbite-react';
import { FaGithubSquare } from 'react-icons/fa';

const descriptions = ['OH STEVE', 'ONLY YOU'];

const ProjectModal = ({
  openModal,
  setOpenModal,
  currentIdx,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  currentIdx: number;
}) => {
  // const [currentDescription, setCurrentDescription] = useState(descriptions[0]);

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
          <p className='text-lg font-thin'></p>
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
