import './App.css';
import Banner from './Components/Banner';
import Cart from './Components/Cart';
import Divider from './Components/Divider';
import Experience from './Components/Experience';
import Nav from './Components/Nav';
import Slider from './Components/Slider';
import Video from './Components/Video';
import { useState } from 'react';

const App = () => {
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
export default App;
