import sliderData from '../Data/slider';
// carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import OrderButtons from './OrderButtons';

const SliderComponent = () => {
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
              <OrderButtons item={item} />
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

  .react-multiple-carousel__arrow {
    z-index: 0 !important;
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
    border-radius: 30px;
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
