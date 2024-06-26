import { useState } from 'react';

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
  // cart
  const [cartEnter, setCartEnter] = useState(false);
  const [cartExit, setCartExit] = useState(false);

  return (
    <>
      <header className='header'>
        <Nav
          cartEnter={cartEnter}
          setCartEnter={setCartEnter}
          cartExit={cartExit}
          setCartExit={setCartExit}
        />
        <Banner />
        <Video />
        <Cart
          cartEnter={cartEnter}
          setCartEnter={setCartEnter}
          cartExit={cartExit}
          setCartExit={setCartExit}
        />
      </header>
      <Divider />
      <Experience />
      <Slider />
    </>
  );
};
export default HomePage;
