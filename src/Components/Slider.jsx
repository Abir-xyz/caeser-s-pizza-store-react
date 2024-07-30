import React, { useState, useRef, useEffect } from 'react';
import sliderData from '../Data/slider';
// carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useCartContext } from '../Context/CartContexts';
import styled from 'styled-components';

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
    <Wrapper className='section'>
      <section className='slider-wrapper'>
        <div className='slider-header'>
          <h1>Browse Menu</h1>
        </div>
        <Carousel
          responsive={responsive}
          className='slider-wrap'
          showDots={true}
        >
          {sliderData.map((item) => (
            <div className='slider-item' key={item.id}>
              <div className='slider-img-wrapper'>
                <img src={item.img} alt={item.name} />
              </div>
              <div className='slider-title'>
                <p className='slider-name'>{item.name}</p>
                <p className='slider-price'>${item.price}</p>
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
                      addItemToCart(item);
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .slider-wrapper {
    max-width: 80vw;
    margin: 1rem auto;
  }

  .slider-header h1 {
    margin-bottom: 30px;
  }

  .slider-item img {
    width: 300px;
    height: 300px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .slider-item img:hover {
    transform: scale(1.1);
  }

  .slider-name {
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 500;
    margin-right: 10px;
  }

  .slider-price {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .slider-desc {
    text-transform: capitalize;
    font-size: 1.1rem;
    padding: 30px 0;
    line-height: 1.7;
  }

  .slider-btn {
    background: none;
    border: none;
    font-size: 1.1rem;
    text-transform: capitalize;
    font-weight: 500;
    cursor: pointer;
    background-color: var(--themeClr);
    color: #fff;
    padding: 8px 12px;
    border-radius: 10rem;
    transition: all 0.3s ease-in-out;
  }

  .react-multiple-carousel__arrow {
    z-index: 0 !important;
  }

  .slider-btn:hover {
    background-color: red;
  }

  .slider-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
  }

  .slider-item {
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
    margin: 20px 10px;
  }

  .slider-img-wrapper {
    display: flex;
    justify-content: center;
  }

  .slider-icon-wrapper {
    text-align: center;
    margin: 30px 0;
  }

  .slider-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  .view-carts {
    background-color: red !important;
  }

  /* --- */

  .slider-item {
    transition: all 0.3s ease-in-out;
  }

  .slider-wrap > .react-multi-carousel-dot-list {
    padding-top: 30px !important;
  }

  @media screen and (min-width: 768px) {
    .slider-header h1 {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

export default SliderComponent;
