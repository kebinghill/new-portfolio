import Image from 'next/image';
import Header from './components/Header';
import { redirect } from 'next/navigation';

const Home = () => {
  redirect('/bio');
  return (
    <div className='min-w-[100vw]'>
      <Header />
    </div>
  );
};

export default Home;
