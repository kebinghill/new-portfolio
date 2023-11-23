import Link from 'next/link';

const PageLinks = () => {
  return (
    <div className='px-[4px]'>
      <Link href='/bio' className='pr-[4px]'>
        Bio
      </Link>
      <Link href='/code'>Code</Link>
    </div>
  );
};

export default PageLinks;
