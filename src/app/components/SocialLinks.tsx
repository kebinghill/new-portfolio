import Link from 'next/link';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className='flex'>
      <Link href='https://github.com/kebinghill' target='_blank'>
        <FaGithubSquare className='h-[28px] w-[28px]' />
      </Link>
      <Link href='https://linkedin.com/in/kebinghill/' target='_blank'>
        <FaLinkedin className='h-[28px] w-[28px]' />
      </Link>
    </div>
  );
};

export default SocialLinks;
