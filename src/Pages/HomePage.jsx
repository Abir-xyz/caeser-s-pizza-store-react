import {
  Banner,
  Cart,
  Divider,
  Experience,
  Nav,
  Slider,
  Video,
} from '../Components/index';

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
    </>
  );
};
export default HomePage;
