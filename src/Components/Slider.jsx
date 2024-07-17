import React, { useState, useRef, useEffect } from 'react';
import '../Css/slider.css';
import sliderData from '../Data/slider';
import Cart from './Cart.jsx';
// carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useCartContext } from '../Context/CartContexts';

const SliderComponent = () => {
  const [clickedButtons, setClickedButtons] = useState({});
  const { handleCartEnter } = useCartContext();
  const { addItemToCart } = useCartContext();

  const handleToggle = (id) => {
    setClickedButtons((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getItem = (item) => {
    addItemToCart(item);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1350 },
      items: 4,
    },
    desktop1: {
      breakpoint: { max: 1350, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <section className='slider-wrapper'>
      <div className='slider-header'>
        <h1>Browse Menu</h1>
      </div>
      <Carousel responsive={responsive} className='slider-wrap' showDots={true}>
        {sliderData.map((item) => (
          <div className='slider-item' key={item.id}>
            <div className='slider-img-wrapper'>
              <img src={item.img} alt={item.name} />
            </div>
            <div className='slider-title'>
              <p className='slider-name'>{item.name}</p>
              <p className='slider-price'>{item.price}</p>
            </div>
            <p className='slider-desc'>{item.desc}</p>
            <div>
              {clickedButtons[item.id] ? (
                <button
                  className='slider-btn view-carts'
                  onClick={() => {
                    handleToggle(item.id);
                    handleCartEnter();
                  }}
                >
                  View Cart
                </button>
              ) : (
                <button
                  className='slider-btn'
                  onClick={() => {
                    handleToggle(item.id);
                    getItem(item);
                  }}
                >
                  Order Now
                </button>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default SliderComponent;
