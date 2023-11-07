const Header = () => {
  return (
    <div className='bg-cover bg-[url("/header.png")] w-[100vw] min-h-[150px] flex flex-col justify-center'>
      <div className='flex flex-col items-center border'>
        <div className='text-[50px]'>KEVIN GIL</div>
        <div className='text-[15px]'>SOFTWARE ENGINEER</div>
      </div>
      <div className='border h-[20px]'></div>
    </div>
  );
};

export default Header;
