
import Navbar from '../components/Navbar';
import HomeInfo from '../components/HomeInfo';
import PopularMovies from '../components/PopularMovies';
import NowPlayingMovies from '../components/NowPlayingMovies';




type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <div className='w-full h-[100vh] relative'>
      <div className='relative z-10'>
        <Navbar />
      </div>
      <HomeInfo />
      <PopularMovies />
      <NowPlayingMovies />
    </div>
    
    </>
  );
}

export default Home;
