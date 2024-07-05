import ClientForm from '../Components/ClientForm';
import HomeAbt from '../Components/HomeAbt';
import {
  Banner,
  Cart,
  Divider,
  Experience,
  Nav,
  Slider,
  Video,
} from '../Components/index';
import Reviews from '../Components/Reviews';

const HomePage = () => {
  return (
    <>
      <header className='header'>
        <Nav />
        <Banner />
        <Video />
        <Cart />
      </header>
      <Divider />
      <Experience />
      <Slider />
      <HomeAbt />
      <Reviews />
      <ClientForm />
    </>
  );
};
export default HomePage;
