import Link from 'next/link';
import SocialLinks from './SocialLinks';
import PageLinks from './PageLinks';

const Header = () => {
  return (
    <div className='bg-cover bg-[url("/header.png")] w-[100%] min-h-[150px] flex flex-col justify-between'>
      <Link href='/'>
        <div className='flex flex-col items-center pt-[10px]'>
          <div className='text-[50px]'>KEVIN GIL</div>
          <div className='text-[15px]'>SOFTWARE ENGINEER</div>
        </div>
      </Link>
      <div className='flex justify-between items-center px-[8px]'>
        <PageLinks />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Header;
