import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className='flex'>
      <a href='https://github.com/kebinghill' target='_blank'>
        <FaGithubSquare className='h-[28px] w-[28px]' />
      </a>
      <a href='https://linkedin.com/in/kebinghill/' target='_blank'>
        <FaLinkedin className='h-[28px] w-[28px]' />
      </a>
    </div>
  );
};

export default SocialLinks;
